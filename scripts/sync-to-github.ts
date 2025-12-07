// Script to sync code to GitHub using Octokit API
import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Files/folders to ignore
const ignorePatterns = [
  'node_modules', '.git', '.cache', '.replit', 'replit.nix', '.upm',
  '.config', 'dist', '.local', 'scripts/', '.breakpoints', '.env',
  'package-lock.json'
];

function shouldIgnore(filePath: string): boolean {
  return ignorePatterns.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (shouldIgnore(fullPath)) return;
    
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      // Skip binary files like images for now, only upload text files
      const ext = path.extname(file).toLowerCase();
      const textExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.md', '.txt', '.sql'];
      if (textExtensions.includes(ext) || file === '.gitignore') {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  
  return arrayOfFiles;
}

async function main() {
  const owner = 'sumitbagri79';
  const repo = 'smile-craft-replit';
  
  console.log('Getting GitHub client...');
  const octokit = await getUncachableGitHubClient();
  
  console.log('Collecting files...');
  const files = getAllFiles('.');
  console.log(`Found ${files.length} files to upload`);
  
  // Upload files one by one using the Contents API (works for empty repos)
  for (const filePath of files) {
    const relativePath = filePath.replace('./', '');
    const content = fs.readFileSync(filePath, 'utf-8');
    const base64Content = Buffer.from(content).toString('base64');
    
    try {
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: relativePath,
        message: `Add ${relativePath}`,
        content: base64Content,
        branch: 'main'
      });
      console.log(`✓ Uploaded: ${relativePath}`);
    } catch (error: any) {
      if (error.status === 422 && error.message?.includes('sha')) {
        // File already exists, need to get its SHA first
        try {
          const { data } = await octokit.repos.getContent({ owner, repo, path: relativePath });
          const sha = (data as any).sha;
          await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: relativePath,
            message: `Update ${relativePath}`,
            content: base64Content,
            sha,
            branch: 'main'
          });
          console.log(`✓ Updated: ${relativePath}`);
        } catch (e) {
          console.error(`✗ Failed: ${relativePath}`);
        }
      } else if (error.status === 404) {
        // Branch doesn't exist yet, this is the first file
        console.log('Creating main branch with first file...');
        try {
          await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: relativePath,
            message: `Initial commit: Add ${relativePath}`,
            content: base64Content
          });
          console.log(`✓ Uploaded: ${relativePath}`);
        } catch (e) {
          console.error(`✗ Failed: ${relativePath}`, e);
        }
      } else {
        console.error(`✗ Failed: ${relativePath}`, error.message);
      }
    }
  }
  
  console.log('\n✅ Code synced to GitHub!');
  console.log(`Repository: https://github.com/${owner}/${repo}`);
}

main().catch(console.error);
