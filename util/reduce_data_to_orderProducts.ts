import { CartItem } from "../interfaces/CartItem.ts";
import { OrderProduct } from "../interfaces/OrderProduct.ts";
import { Product } from "../interfaces/Product.ts";

export const reduce_data_to_orderProducts = (
  dataList: Product[],
  receivedList: CartItem[]
) => {
  let result: OrderProduct[] = [];
  for (const prod of dataList) {
    for (let j = 0; j < receivedList.length; j++) {
      if (prod.id === receivedList[j].productId) {
        result.push({
          title: prod.title,
          image: prod.image,
          quantity: receivedList[j].quantity,
          price: prod.price,
          category: prod.category,
        });
      }
    }
  }
  return result;
};
