import * as v from "valibot";

export const emailSchema = v.string([
  v.minLength(1, "Not able to get email."),
  v.email("Please provide valid email."),
]);
