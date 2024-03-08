import { Product } from "../interfaces/Product";

export const getListSorted = (
  productList: Product[],
  sortBy: string
): Product[] => {
  if (sortBy === "a-zAsc") {
    return productList.sort((a: { title: string }, b: { title: string }) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortBy === "a-zDsc") {
    return productList.sort((a: { title: string }, b: { title: string }) =>
      b.title.localeCompare(a.title)
    );
  } else if (sortBy === "recentDsc") {
    return productList.sort(
      (a: { creationAt: Date }, b: { creationAt: Date }) =>
        b.creationAt.getTime() - a.creationAt.getTime()
    );
  } else {
    return productList.sort(
      (a: { creationAt: Date }, b: { creationAt: Date }) =>
        a.creationAt.getTime() - b.creationAt.getTime()
    );
  }
};
