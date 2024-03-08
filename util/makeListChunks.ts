import { Product } from "../interfaces/Product";

export const makeListChunks = (list: Product[], size: number): Product[][] => {
  var chunkArray = [];
  for (let i = 0; i < list.length; i += size) {
    const chunk: Product[] = list.slice(i, i + size);
    chunkArray.push(chunk);
  }
  return chunkArray;
};
