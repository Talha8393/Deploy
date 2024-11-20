"use server"
import nodemailer from "nodemailer";

export default async function handleSubmit(formdata) {
  const username = formdata.get("username");
  const email = formdata.get("email");
  const url = formdata.get("url");
  const textarea = formdata.get("textarea");

  console.log(username, email, url, textarea);
  const subject = `New Form Submission by ${username}`;
  const message = `
    <h1>Form Submission Details</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>URL:</strong> ${url}</p>
    <p><strong>Message:</strong> ${textarea}</p>
  `;
  try {
    await sendMail(email, subject, message);
    console.log("Email Sent Successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "talhamughal8393@gmail.com",
    pass: "ahrr ofoc fjvq gkap", 
  },
});

async function sendMail(to, subject, message) {
  return transporter.sendMail({
    from: "talhamughal8393@gmail.com",
    to: to,
    subject: subject,
    html: message,
  });
}

