import { CartItem } from "../interfaces/CartItem";

export const get_productList_id = (list: CartItem[]) => {
  let idArray: string[] = [];
  list.forEach((item) => {
    idArray.push(item.productId);
  });
  return idArray;
};
