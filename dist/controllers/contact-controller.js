"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactHandler = void 0;
const nodemailer_js_1 = require("../util/nodemailer.js");
const valibot_1 = require("valibot");
const contact_js_1 = require("../validationSchema/contact.js");
const http_error_js_1 = require("../models/http-error.js");
const prisma_js_1 = require("../prisma/prisma.js");
const responseMessage_1 = require("../email_template/responseMessage");
const contactHandler = async (req, res, next) => {
    const body = req.body;
    let validBody;
    try {
        validBody = (0, valibot_1.parse)(contact_js_1.contactSchema, body);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some validation error.", 422));
        return;
    }
    try {
        await prisma_js_1.prisma.contact.create({
            data: {
                name: body.name,
                email: body.email,
                message: body.message,
            },
        });
    }
    catch (error) {
        console.log(error);
        next(new http_error_js_1.HttpError("There is internal issue.", 422));
        return;
    }
    const mailText = `In case, you are unable to see HTML mail. Here is text.
  Thanks ${body.name}, for reaching out to us.
  This website is demo site, but if you want to work with me , feel free to reach out at Sheharyarali689@gmail.com.
  `;
    const mailHTML = (0, responseMessage_1.responseMessage)(body.name);
    (0, nodemailer_js_1.sendMail)({
        to: body.email,
        subject: "no-reply",
        text: mailText,
        html: mailHTML,
    }).catch((err) => console.log(err));
    res.json({ message: "Thank you for reaching out to us." }).status(200);
};
exports.contactHandler = contactHandler;
//# sourceMappingURL=contact-controller.js.map