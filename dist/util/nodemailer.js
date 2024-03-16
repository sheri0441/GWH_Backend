"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.NODEMAILER_SMTP,
    port: 587,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
async function sendMail({ to, subject, text, html, }) {
    await transporter.sendMail({
        from: process.env.PERSONAL_EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });
}
exports.sendMail = sendMail;
//# sourceMappingURL=nodemailer.js.map