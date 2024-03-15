import * as v from "valibot";
export const cartSchema = v.array(v.object({
    productId: v.string([v.minLength(1, "Please provide product Id.")]),
    quantity: v.number([
        v.minValue(1, "Cart Item should have atleast quantity of 1."),
    ]),
}));
