import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SMTP,
    port: 587,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
export async function sendMail({ to, subject, text, html, }) {
    await transporter.sendMail({
        from: process.env.PERSONAL_EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });
}
