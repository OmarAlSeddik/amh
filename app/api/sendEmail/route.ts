import nodemailer from "nodemailer";

export async function POST(request: any) {
  const { firstName, lastName, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "omaralseddik@gmail.com",
    subject: `AMH Contact Form: message from ${firstName} ${lastName}`,
    text: `Email: ${email}\nName: ${firstName} ${lastName}\nPhone: ${phone}\n----------------------------------------\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
