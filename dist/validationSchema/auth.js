import * as v from "valibot";
export const authIdSchema = v.string([
    v.minLength(1, "Please provide product Id."),
]);
