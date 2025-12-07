// Resend integration for sending emails
import { Resend } from 'resend';

function getCredentials() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@smilecraftedison.com';

  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable not set');
  }

  return { apiKey, fromEmail };
}

export function getResendClient() {
  const { apiKey, fromEmail } = getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
}, recipientEmail: string) {
  try {
    const { client, fromEmail } = getResendClient();
    
    const result = await client.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: `New Contact Form Submission: ${data.subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    return result;
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
    throw error;
  }
}

export async function sendAppointmentNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  message?: string | null;
  isVirtual?: boolean | null;
}, recipientEmail: string) {
  try {
    const { client, fromEmail } = getResendClient();
    
    const result = await client.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: `New Appointment Request: ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Reason:</strong> ${data.reason}</p>
        <p><strong>Appointment Type:</strong> ${data.isVirtual ? 'Virtual' : 'In-Person'}</p>
        ${data.message ? `<hr /><p><strong>Additional Notes:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
      `
    });
    
    return result;
  } catch (error) {
    console.error('Failed to send appointment notification email:', error);
    throw error;
  }
}
