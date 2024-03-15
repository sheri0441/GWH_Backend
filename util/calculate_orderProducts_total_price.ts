import { OrderProduct } from "../interfaces/OrderProduct";

export const calculate_orderProducts_total_price = (list: OrderProduct[]) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].price * list[i].quantity;
  }
  return sum;
};
