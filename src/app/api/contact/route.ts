import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isSpamContent, isHoneypotFilled, isSubmittedTooQuickly } from '@/lib/botProtection';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: 5 requests per hour per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(identifier);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return true;
  }

  if (limit.count >= 5) return false;

  limit.count++;
  return true;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim().substring(0, 5000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const campaignType = formData.get('campaignType') as string;
    const message = formData.get('message') as string;
    const _hp = formData.get('_hp') as string;
    const _timing = Number(formData.get('_timing'));
    const files = formData.getAll('files') as File[];

    // Bot protection: honeypot
    if (isHoneypotFilled(_hp)) {
      console.log('Bot detected: honeypot filled');
      return NextResponse.json({ success: true });
    }

    // Bot protection: timing
    if (isSubmittedTooQuickly(isNaN(_timing) ? undefined : _timing)) {
      console.log('Bot detected: submitted too quickly', _timing, 'ms');
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !campaignType || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Bot protection: spam content
    const spamCheck = isSpamContent(name, message);
    if (spamCheck.isSpam) {
      console.log('Spam detected:', spamCheck.reason);
      return NextResponse.json({ success: true });
    }

    const sanitized = {
      name: sanitize(name),
      email: sanitize(email),
      phone: phone ? sanitize(phone) : '',
      campaignType: sanitize(campaignType),
      message: sanitize(message),
    };

    // Build email attachments from uploaded files
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({ filename: file.name, content: buffer });
      }
    }

    const campaignLabel: Record<string, string> = {
      business: 'Business / Brand Campaign',
      event: 'Event Marketing',
      'grand-opening': 'Grand Opening',
      proposal: 'Proposal / Wedding',
      'gender-reveal': 'Gender Reveal',
      celebration: 'Special Celebration',
      other: 'Other',
    };

    const campaignDisplay = campaignLabel[sanitized.campaignType] ?? sanitized.campaignType;
    const receivedAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      dateStyle: 'long',
      timeStyle: 'short',
    });

    // ── Staff notification ────────────────────────────────────────────────────
    // Plain text is what gets quoted when staff reply — keep it clean so the
    // customer only sees a tidy summary if it ever appears in a reply thread.
    const staffText = [
      `NEW QUOTE REQUEST — ${receivedAt}`,
      ``,
      `Name:           ${sanitized.name}`,
      `Email:          ${sanitized.email}`,
      sanitized.phone ? `Phone:          ${sanitized.phone}` : null,
      `Campaign Type:  ${campaignDisplay}`,
      ``,
      `Message:`,
      sanitized.message,
      attachments.length > 0 ? `\nAttachments: ${attachments.map(a => a.filename).join(', ')}` : null,
      ``,
      `Submitted via skybanners.ca`,
    ].filter(line => line !== null).join('\n');

    const staffHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1F2937;background:#ffffff;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#e24740;">New Quote Request</p>
          <p style="margin:0 0 20px;font-size:12px;color:#6B7280;">${receivedAt} &nbsp;·&nbsp; skybanners.ca</p>
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:520px;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#6B7280;width:130px;vertical-align:top;">Name</td><td style="padding:6px 0;"><strong>${sanitized.name}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#6B7280;vertical-align:top;">Email</td><td style="padding:6px 0;"><a href="mailto:${sanitized.email}" style="color:#2F6DC4;text-decoration:none;">${sanitized.email}</a></td></tr>
            ${sanitized.phone ? `<tr><td style="padding:6px 0;color:#6B7280;vertical-align:top;">Phone</td><td style="padding:6px 0;"><a href="tel:${sanitized.phone}" style="color:#2F6DC4;text-decoration:none;">${sanitized.phone}</a></td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#6B7280;vertical-align:top;">Campaign Type</td><td style="padding:6px 0;">${campaignDisplay}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:20px 0;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
          <p style="margin:0;line-height:1.7;white-space:pre-wrap;">${sanitized.message}</p>
          ${attachments.length > 0 ? `<p style="margin:16px 0 0;font-size:12px;color:#6B7280;">Attachments: ${attachments.map(a => a.filename).join(', ')}</p>` : ''}
        </body>
      </html>
    `;

    await resend.emails.send({
      from: `Sky Banners <${process.env.RESEND_FROM_EMAIL ?? 'noreply@skybanners.ca'}>`,
      to: process.env.CONTACT_EMAIL ?? 'info@skybanners.ca',
      replyTo: sanitized.email,
      subject: `New Quote Request: ${campaignDisplay} — ${sanitized.name}`,
      html: staffHtml,
      text: staffText,
      ...(attachments.length > 0 && { attachments }),
    });

    // ── Customer confirmation email ────────────────────────────────────────────
    const confirmHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <style>
            body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#f0f2f5;}
            .wrap{background:#f0f2f5;padding:40px 20px;}
            .card{max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);}
            .hdr{background:#0D1117;padding:36px 32px;text-align:center;border-bottom:4px solid #e24740;}
            .hdr h1{margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:1px;}
            .hdr p{margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.55);}
            .body{padding:36px 32px;}
            .body h2{text-align:center;color:#0D1117;font-size:22px;margin:0 0 22px;font-weight:600;}
            .body p{font-size:15px;line-height:1.8;color:#4a5568;margin:0 0 14px;}
            .summary{background:#F8F9FB;border-left:4px solid #2F6DC4;border-radius:4px;padding:22px;margin:22px 0;}
            .summary h3{margin:0 0 12px;color:#0D1117;font-size:16px;}
            .summary p{margin:6px 0;color:#4a5568;font-size:14px;}
            .info{background:#F8F9FB;border-radius:6px;padding:22px;margin:22px 0;}
            .info p{margin:6px 0;color:#4a5568;font-size:14px;}
            .info a{color:#2F6DC4;text-decoration:none;font-weight:600;}
            .cta{text-align:center;margin:32px 0;}
            .cta a{display:inline-block;background:#e24740;color:#ffffff;padding:14px 40px;text-decoration:none;border-radius:6px;font-weight:600;font-size:16px;}
            .ftr{background:#0D1117;color:#9ca3af;padding:28px 32px;text-align:center;}
            .ftr p{margin:5px 0;font-size:13px;}
            .ftr a{color:#5B8FD4;text-decoration:none;}
            .ftr .disc{font-size:11px;color:#6b7280;margin-top:16px;line-height:1.5;}
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="card">
              <div class="hdr">
                <img src="https://skybanners.ca/logos/sky-banners-logo-v2.png" alt="Sky Banners" width="220" style="display:block;margin:0 auto 12px;height:auto;">
                <p>Aerial Advertising · Southern Ontario</p>
              </div>
              <div class="body">
                <h2>Quote Request Received!</h2>
                <p>Hi <strong>${sanitized.name}</strong>,</p>
                <p>Thanks for reaching out to Sky Banners. We've received your quote request and our team will review the details and get back to you within 24 hours.</p>
                <div class="summary">
                  <h3>Your Request Summary</h3>
                  <p><strong>Campaign Type:</strong> ${campaignDisplay}</p>
                  <p><strong>Your Message:</strong></p>
                  <p style="background:#ffffff;padding:12px;border-radius:4px;margin-top:8px;">${sanitized.message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="info">
                  <p><strong style="color:#0D1117;">What Happens Next?</strong></p>
                  <p>We'll prepare a customized quote and reach out to discuss your campaign details.</p>
                  <p>Need to follow up? Call us at <a href="tel:+12263669680">226-366-9680</a> or email <a href="mailto:info@skybanners.ca">info@skybanners.ca</a></p>
                </div>
                <div class="cta">
                  <a href="https://skybanners.ca">Visit skybanners.ca</a>
                </div>
              </div>
              <div class="ftr">
                <img src="https://skybanners.ca/logos/sky-banners-logo-v2.png" alt="Sky Banners" width="160" style="display:block;margin:0 auto 12px;height:auto;opacity:0.85;">
                <p style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">SKY BANNERS</p>
                <p>226-366-9680 &nbsp;·&nbsp; <a href="mailto:info@skybanners.ca">info@skybanners.ca</a></p>
                <p>Southern Ontario Aerial Advertising</p>
                <p class="disc">This is an automated confirmation. Please do not reply directly to this message.<br>© ${new Date().getFullYear()} Sky Banners. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      await resend.emails.send({
        from: `Sky Banners <${process.env.RESEND_FROM_EMAIL ?? 'noreply@skybanners.ca'}>`,
        to: sanitized.email,
        subject: 'Quote Request Received — Sky Banners',
        html: confirmHtml,
      });
    } catch (confirmError) {
      console.error('Error sending confirmation email:', confirmError);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
