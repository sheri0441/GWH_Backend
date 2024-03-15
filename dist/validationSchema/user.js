import * as v from "valibot";
export const userSchema = v.object({
    name: v.string([v.minLength(1, "Name required.")]),
    email: v.string([
        v.minLength(1, "Email required."),
        v.email("Invalid Email Address"),
    ]),
    image: v.optional(v.string([
        v.minLength(1, "user image required."),
        v.url("image should be a url."),
    ])),
});
