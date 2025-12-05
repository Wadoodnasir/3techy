import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, consultation } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Get email configuration from environment variables or use defaults
    // For testing without domain verification, use your verified email address
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const intendedRecipient = process.env.RESEND_TO_EMAIL || 'contact@3techy.com';
    const toEmail = process.env.RESEND_TO_EMAIL || 'habibgcu10@gmail.com';
    const isTestEmail = toEmail === 'habibgcu10@gmail.com' && !process.env.RESEND_TO_EMAIL;

    // Prepare email content
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #ffaa16;">New Quote Request</h2>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${consultation ? '<p><strong>Free Consultation:</strong> Claimed ($250 value)</p>' : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            ${isTestEmail ? `<div style="background-color: #fff3cd; padding: 10px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; font-size: 12px; color: #856404;">
                <strong>Note:</strong> This is a test email. The intended recipient was: ${intendedRecipient}
              </p>
            </div>` : ''}
            <p style="font-size: 12px; color: #666;">
              This email was sent from the 3Techy contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Quote Request

Name: ${name}
Email: ${email}
${consultation ? 'Free Consultation: Claimed ($250 value)\n' : ''}

Message:
${message}

---
This email was sent from the 3Techy contact form.
    `.trim();

    // Send email via Resend API
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: consultation
        ? `New Quote Request - Free Consultation Claimed`
        : `New Quote Request from ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      
      // Provide helpful error message for domain verification issues
      if (error.statusCode === 403 && error.message?.includes('verify a domain')) {
        return NextResponse.json(
          { 
            error: 'Domain verification required. Please verify your domain at resend.com/domains to send emails to other recipients. For now, emails are being sent to your verified email address.',
            details: error.message
          },
          { status: 403 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later or contact support at contact@3techy.com.',
          details: error.message || 'Unknown error'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
