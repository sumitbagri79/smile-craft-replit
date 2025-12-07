// Script to push code to GitHub repository
// Uses the GitHub integration from Replit

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
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
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

const REPO_OWNER = 'sumitbagri79';
const REPO_NAME = 'smile-craft-replit';

const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  'dist',
  '.replit',
  '.cache',
  '.config',
  '.upm',
  'replit.nix',
  '.local',
  'generated-icon.png',
  '.breakpoints',
  'package-lock.json'
];

function shouldIgnore(filePath: string): boolean {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (shouldIgnore(relativePath)) continue;
    
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push(relativePath);
    }
  }
  
  return files;
}

function isTextFile(filePath: string): boolean {
  const textExtensions = [
    '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.md',
    '.txt', '.yaml', '.yml', '.toml', '.sql', '.sh', '.env', '.gitignore'
  ];
  const ext = path.extname(filePath).toLowerCase();
  return textExtensions.includes(ext) || !ext;
}

async function main() {
  console.log('Connecting to GitHub...');
  const octokit = await getUncachableGitHubClient();
  
  console.log(`Pushing to ${REPO_OWNER}/${REPO_NAME}...`);
  
  const baseDir = process.cwd();
  const files = getAllFiles(baseDir);
  
  console.log(`Found ${files.length} files to upload`);
  
  let currentTreeSha: string | undefined;
  let currentCommitSha: string | undefined;
  
  try {
    const { data: ref } = await octokit.git.getRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: 'heads/main'
    });
    currentCommitSha = ref.object.sha;
    
    const { data: commit } = await octokit.git.getCommit({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      commit_sha: currentCommitSha
    });
    currentTreeSha = commit.tree.sha;
    console.log('Found existing main branch');
  } catch (e) {
    console.log('No existing main branch, will create new');
  }
  
  const treeItems: Array<{path: string; mode: '100644'; type: 'blob'; sha: string}> = [];
  
  for (const file of files) {
    const fullPath = path.join(baseDir, file);
    const content = fs.readFileSync(fullPath);
    
    let blobSha: string;
    
    if (isTextFile(file)) {
      const { data: blob } = await octokit.git.createBlob({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        content: content.toString('utf-8'),
        encoding: 'utf-8'
      });
      blobSha = blob.sha;
    } else {
      const { data: blob } = await octokit.git.createBlob({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        content: content.toString('base64'),
        encoding: 'base64'
      });
      blobSha = blob.sha;
    }
    
    treeItems.push({
      path: file,
      mode: '100644',
      type: 'blob',
      sha: blobSha
    });
    
    console.log(`Uploaded: ${file}`);
  }
  
  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    tree: treeItems,
    base_tree: currentTreeSha
  });
  
  console.log('Creating commit...');
  const { data: commit } = await octokit.git.createCommit({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    message: 'Update: Smile Craft Dental website with email integration and map updates',
    tree: tree.sha,
    parents: currentCommitSha ? [currentCommitSha] : []
  });
  
  console.log('Updating main branch...');
  try {
    await octokit.git.updateRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: 'heads/main',
      sha: commit.sha
    });
  } catch (e) {
    await octokit.git.createRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: 'refs/heads/main',
      sha: commit.sha
    });
  }
  
  console.log('');
  console.log('Successfully pushed to GitHub!');
  console.log(`Repository: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
}

main().catch(console.error);
