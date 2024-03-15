import { sendMail } from "../util/nodemailer";
import { parse } from "valibot";
import { contactSchema } from "../validationSchema/contact";
import { HttpError } from "../models/http-error";
import { prisma } from "../prisma/prisma";
import { responseMessage } from "../email_template/responseMessage";
export const contactHandler = async (req, res, next) => {
    const body = req.body;
    let validBody;
    try {
        validBody = parse(contactSchema, body);
    }
    catch (error) {
        next(new HttpError("There is some validation error.", 422));
        return;
    }
    try {
        await prisma.contact.create({
            data: {
                name: body.name,
                email: body.email,
                message: body.message,
            },
        });
    }
    catch (error) {
        console.log(error);
        next(new HttpError("There is internal issue.", 422));
        return;
    }
    const mailText = `In case, you are unable to see HTML mail. Here is text.
  Thanks ${body.name}, for reaching out to us.
  This website is demo site, but if you want to work with me , feel free to reach out at Sheharyarali689@gmail.com.
  `;
    const mailHTML = responseMessage(body.name);
    sendMail({
        to: body.email,
        subject: "no-reply",
        text: mailText,
        html: mailHTML,
    }).catch((err) => console.log(err));
    res.json({ message: "Thank you for reaching out to us." }).status(200);
};
