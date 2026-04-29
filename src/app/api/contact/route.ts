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

    const body = await request.json();
    const { name, email, phone, campaignType, message, fileUrls, _hp, _timing } = body;

    // Bot protection: honeypot
    if (isHoneypotFilled(_hp)) {
      console.log('Bot detected: honeypot filled');
      return NextResponse.json({ success: true });
    }

    // Bot protection: timing
    if (isSubmittedTooQuickly(typeof _timing === 'number' ? _timing : undefined)) {
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
      fileUrls: Array.isArray(fileUrls)
        ? (fileUrls as string[]).filter((u) => typeof u === 'string')
        : [],
    };

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

    // ── Staff notification email ───────────────────────────────────────────────
    const staffHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f0f2f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5;padding:20px 0;">
            <tr><td align="center">
              <table width="640" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.12);">

                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#0055DD 0%,#0044BB 100%);padding:28px 32px;border-bottom:4px solid #E81C1C;">
                    <h2 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">New Quote Request</h2>
                    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">Received: ${receivedAt}</p>
                    <span style="display:inline-block;background-color:#E81C1C;color:#ffffff;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-top:10px;">New Lead</span>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:32px;">

                    <!-- Customer info -->
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f7f9ff;border-left:4px solid #0055DD;border-radius:4px;margin-bottom:24px;">
                      <tr><td>
                        <h3 style="margin:0 0 14px;color:#0D1117;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Customer Information</h3>
                        <table width="100%" cellpadding="5" cellspacing="0">
                          <tr>
                            <td style="font-weight:600;color:#4a5568;font-size:13px;width:130px;">Name:</td>
                            <td style="color:#0D1117;font-size:14px;"><strong>${sanitized.name}</strong></td>
                          </tr>
                          <tr>
                            <td style="font-weight:600;color:#4a5568;font-size:13px;">Email:</td>
                            <td style="font-size:14px;"><a href="mailto:${sanitized.email}" style="color:#0055DD;text-decoration:none;font-weight:500;">${sanitized.email}</a></td>
                          </tr>
                          ${sanitized.phone ? `
                          <tr>
                            <td style="font-weight:600;color:#4a5568;font-size:13px;">Phone:</td>
                            <td style="font-size:14px;"><a href="tel:${sanitized.phone}" style="color:#0055DD;text-decoration:none;font-weight:500;">${sanitized.phone}</a></td>
                          </tr>` : ''}
                          <tr>
                            <td style="font-weight:600;color:#4a5568;font-size:13px;">Campaign Type:</td>
                            <td style="color:#0D1117;font-size:14px;"><strong>${campaignDisplay}</strong></td>
                          </tr>
                        </table>
                      </td></tr>
                    </table>

                    <!-- Message -->
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f7f9ff;border:1px solid #e2e8f0;border-left:4px solid #E81C1C;border-radius:4px;margin-bottom:24px;">
                      <tr><td>
                        <h3 style="margin:0 0 10px;color:#0D1117;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Campaign Details</h3>
                        <div style="color:#2d3748;line-height:1.7;font-size:14px;background:#ffffff;padding:14px;border-radius:4px;">${sanitized.message.replace(/\n/g, '<br>')}</div>
                      </td></tr>
                    </table>

                    ${sanitized.fileUrls.length > 0 ? `
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f7f9ff;border-left:4px solid #0055DD;border-radius:4px;margin-bottom:24px;">
                      <tr><td>
                        <h3 style="margin:0 0 10px;color:#0D1117;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Attached Files (${sanitized.fileUrls.length})</h3>
                        <ul style="margin:0;padding-left:18px;color:#2d3748;font-size:14px;">
                          ${sanitized.fileUrls.map((url) => `<li style="margin-bottom:4px;"><a href="${url}" style="color:#0055DD;word-break:break-all;">${url.split('/').pop()}</a></li>`).join('')}
                        </ul>
                      </td></tr>
                    </table>` : ''}

                    <!-- Action buttons -->
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f7f9ff;border-radius:6px;margin-bottom:8px;">
                      <tr><td align="center">
                        <table cellpadding="0" cellspacing="0"><tr>
                          <td style="padding:0 6px;">
                            <a href="mailto:${sanitized.email}" style="display:inline-block;padding:12px 22px;background:#0055DD;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px;">Reply to Customer</a>
                          </td>
                          ${sanitized.phone ? `
                          <td style="padding:0 6px;">
                            <a href="tel:${sanitized.phone}" style="display:inline-block;padding:12px 22px;background:#E81C1C;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px;">Call Customer</a>
                          </td>` : ''}
                        </tr></table>
                      </td></tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f7f9ff;padding:18px 32px;border-top:1px solid #e2e8f0;">
                    <p style="margin:4px 0;font-size:12px;color:#718096;"><strong>Action Required:</strong> Respond to this inquiry within 24 hours.</p>
                    <p style="margin:4px 0;font-size:12px;color:#718096;">Submitted via the quote form on <strong>skybanners.ca</strong></p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: `Sky Banners <${process.env.RESEND_FROM_EMAIL ?? 'noreply@skybanners.ca'}>`,
      to: process.env.CONTACT_EMAIL ?? 'info@skybanners.ca',
      replyTo: sanitized.email,
      subject: `New Quote Request: ${campaignDisplay} — ${sanitized.name}`,
      html: staffHtml,
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
            .hdr{background:#0D1117;padding:36px 32px;text-align:center;border-bottom:4px solid #E81C1C;}
            .hdr h1{margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:1px;}
            .hdr p{margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.55);}
            .body{padding:36px 32px;}
            .body h2{text-align:center;color:#0D1117;font-size:22px;margin:0 0 22px;font-weight:600;}
            .body p{font-size:15px;line-height:1.8;color:#4a5568;margin:0 0 14px;}
            .summary{background:#f7f9ff;border-left:4px solid #0055DD;border-radius:4px;padding:22px;margin:22px 0;}
            .summary h3{margin:0 0 12px;color:#0D1117;font-size:16px;}
            .summary p{margin:6px 0;color:#4a5568;font-size:14px;}
            .info{background:#f7f9ff;border-radius:6px;padding:22px;margin:22px 0;}
            .info p{margin:6px 0;color:#4a5568;font-size:14px;}
            .info a{color:#0055DD;text-decoration:none;font-weight:600;}
            .cta{text-align:center;margin:32px 0;}
            .cta a{display:inline-block;background:#E81C1C;color:#ffffff;padding:14px 40px;text-decoration:none;border-radius:6px;font-weight:600;font-size:16px;}
            .ftr{background:#0D1117;color:#9ca3af;padding:28px 32px;text-align:center;}
            .ftr p{margin:5px 0;font-size:13px;}
            .ftr a{color:#3388FF;text-decoration:none;}
            .ftr .disc{font-size:11px;color:#6b7280;margin-top:16px;line-height:1.5;}
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="card">
              <div class="hdr">
                <h1>SKY BANNERS</h1>
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
                  <p>Need to follow up? Call us at <a href="tel:+18777592266">1-877-SKY-BANNER</a> or email <a href="mailto:info@skybanners.ca">info@skybanners.ca</a></p>
                </div>
                <div class="cta">
                  <a href="https://skybanners.ca">Visit skybanners.ca</a>
                </div>
              </div>
              <div class="ftr">
                <p style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">SKY BANNERS</p>
                <p>1-877-SKY-BANNER &nbsp;·&nbsp; <a href="mailto:info@skybanners.ca">info@skybanners.ca</a></p>
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
      // Don't fail the request if confirmation email errors — staff email already sent
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
