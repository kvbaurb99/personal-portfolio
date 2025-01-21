import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      html: `
        <h3>Nowa wiadomość z formularza kontaktowego</h3>
        <p><strong>Adres email wysyłającego:</strong> ${email}</p>
        <p><strong>Od:</strong> ${name}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email został wysłany pomyślnie" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd wysyłania maila:", error);
    return NextResponse.json(
      { message: "Wystąpił błąd podczas wysyłania maila" },
      { status: 500 }
    );
  }
}
