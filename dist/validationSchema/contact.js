import * as v from "valibot";
export const contactSchema = v.object({
    name: v.string([
        v.minLength(3, "Name must be at least 3 characters"),
        v.maxLength(20, "Name must be under 20 letters."),
    ]),
    email: v.string([
        v.minLength(1, "Email required"),
        v.email("Please enter a valid email address"),
    ]),
    message: v.string([v.minLength(10, "Please send proper message.")]),
});
