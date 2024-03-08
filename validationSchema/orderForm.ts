import * as v from "valibot";

export const orderForm = v.object({
  name: v.string([v.minLength(3, "Name must be at least 3 characters long")]),
  email: v.string([
    v.minLength(1, "Please provide your e-mail address"),
    v.email("Please enter a valid e-mail address"),
  ]),
  city: v.string([v.minLength(1, "City is required")]),
  area: v.string([v.minLength(1, "Please add you area")]),
  address: v.string([v.minLength(1, "Please provide your address")]),
  shipping: v.string([v.minLength(1, "Please select a shipping method")]),
  payment: v.string([v.minLength(1, "Please add your paymentMethod")]),
  onlineMethod: v.optional(v.string(), "The person will pay in cash."),
  instructions: v.optional(v.string(), "No special instructions for us."),
  productList: v.array(
    v.object({
      productId: v.string([v.minLength(1, "Please add  the product id")]),
      quantity: v.number([
        v.minValue(1, "Please add your product quantity to 1 minimum."),
      ]),
    })
  ),
  zip: v.string([
    v.minLength(1, "Please add zip code."),
    v.regex(/^\d{5}(-\d{4})?$/, "Please add valid zipcode"),
  ]),
});
