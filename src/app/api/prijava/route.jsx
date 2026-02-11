import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

//const KLIJENT_EMAIL_1 = 'nemanja@nemanja.website';
const KLIJENT_EMAIL_2 = 'aldin.dropic1@gmail.com';

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      ime,
      zanimanje,
      telefon
    } = body;

    if (!ime || !zanimanje || !telefon) {
      return NextResponse.json(
        { error: 'Nedostaju obavezna polja' },
        { status: 400 }
      );
    }

    // Debug: Provjeri environment varijable
    const host = process.env.ZOHO_SMTP_HOST;
    const port = process.env.ZOHO_SMTP_PORT;
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;

    console.log('SMTP Config Debug:');
    console.log('HOST:', host);
    console.log('PORT:', port);
    console.log('USER:', user);
    console.log('PASS exists:', !!pass);

    if (!host || !port || !user || !pass) {
      console.error('Missing SMTP config:', { host: !!host, port: !!port, user: !!user, pass: !!pass });
      return NextResponse.json(
        { error: 'SMTP konfiguracija nije ispravna - provjerite .env.local' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: host,
      port: Number(port),
      secure: false,
      auth: {
        user: user,
        pass: pass
      }
    });

    // HTML poruka za vas (admini)
    const adminHtmlPoruka = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            .container { background: linear-gradient(135deg, #050347 0%, #764ba2 100%); padding: 20px; }
            .card { background: white; border-radius: 10px; padding: 40px; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 22px; font-weight: bold; padding: 15px; border-radius: 8px; margin-bottom: 25px; text-align: center; }
            .field { margin: 18px 0; }
            .label { color: #2d3748; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
            .value { color: #4a5568; font-size: 16px; background: #f7fafc; padding: 10px 12px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #718096; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
            .action-btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 20px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">🎯 Novi Potencijalni Sponzor</div>
              
              <div class="field">
                <div class="label">Ime i Prezime</div>
                <div class="value">${ime}</div>
              </div>
              
              <div class="field">
                <div class="label">Zanimanje</div>
                <div class="value">${zanimanje}</div>
              </div>
              
              <div class="field">
                <div class="label">Broj Telefona</div>
                <div class="value"><a href="tel:${telefon}" style="color: #667eea; text-decoration: none; font-weight: 600;">${telefon}</a></div>
              </div>
              
              <div class="footer">
                <p>Neko je zainteresovan da bude sponzor vašeg projekta!</p>
                <p style="font-size: 11px; margin-top: 10px;">Ova poruka je automatski generisana.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const adminTekst = `NOVI POTENCIJALNI SPONZOR

Ime i Prezime: ${ime}
Zanimanje: ${zanimanje}
Broj Telefona: ${telefon}`;

    // Pošalji notifikaciju
    const emailPromises = [
      transporter.sendMail({
        from: process.env.ZOHO_SMTP_USER,
        to: KLIJENT_EMAIL_2,
        subject: `🎯 Novi potencijalni sponzor - ${ime}`,
        text: adminTekst,
        html: adminHtmlPoruka
      })
    ];

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'Prijava uspešno poslata' });
  } catch (error) {
    console.error('MAIL ERROR:', error);

    return NextResponse.json(
      { error: 'Greška pri slanju prijave' },
      { status: 500 }
    );
  }
}
