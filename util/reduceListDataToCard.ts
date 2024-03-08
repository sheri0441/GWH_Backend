import { Product } from "../interfaces/Product";
import { ProductCart } from "../interfaces/ProductCart";

export const reduceListDataToCard = (list: Product[]): ProductCart[] => {
  return list.map((pro) => {
    const product = {
      title: pro.title,
      price: pro.price,
      image: pro.image,
      id: pro.id,
    };
    return product;
  });
};
