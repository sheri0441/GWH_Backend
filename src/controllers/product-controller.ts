import { Request, Response, NextFunction } from "express";
import { HttpError } from "../models/http-error.js";
import { Product } from "../interfaces/Product.js";
import { prisma } from "../prisma.js";
import { parse } from "valibot";
import { cartSchema } from "../validationSchema/cart.js";
import { do_Sorting_Pagination_Modification } from "../util/dspm.js";
import { reduceListDataToCard } from "../util/reduceListDataToCard.js";
import { log } from "console";

export const getProductList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page } = req.params;
  let { sort } = req.query;

  // Ensure sortQuery is of type string
  const sortQuery: string = (sort as string) || "recentAsc";
  // Ensure sortQuery is of type number
  const currentPageNumber: number = isNaN(parseInt(page)) ? 1 : parseInt(page);

  try {
    const productList = await prisma.product.findMany();

    const responseObject = do_Sorting_Pagination_Modification(
      productList,
      sortQuery,
      currentPageNumber
    );

    res.json(responseObject);
  } catch (error) {
    console.log(error);

    next(new HttpError("There is some is error in server.", 503));
    return;
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  let product;

  try {
    product = await prisma.product.findUnique({ where: { id: id } });
  } catch (error) {
    next(new HttpError("There is some issue in server.", 503));
    return;
  }

  if (!product) {
    next(new HttpError("Such product not found.", 404));
    return;
  }

  let similarProductList;

  try {
    similarProductList = await prisma.product.findMany({
      where: {
        category: product.category,
        NOT: {
          id: product.id,
        },
      },
    });
  } catch (error) {
    next(new HttpError("There is some issue in server.", 503));
    return;
  }

  const fetch_random_four_products = (list: Product[]) => {
    let productList = list;
    const randomProductList = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * productList.length);
      const randomProduct = productList[randomIndex];
      productList = productList.filter((pro) => pro.id !== randomProduct.id);
      randomProductList.push(randomProduct);
    }
    return randomProductList;
  };

  const random_four_products = fetch_random_four_products(similarProductList);

  const modifiedSimilarProductList = reduceListDataToCard(random_four_products);

  res.json({ main: product, similar: modifiedSimilarProductList }).status(200);
};

export const getProductListByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category, page } = req.params;
  let { sort } = req.query;

  const categoryText = category.toLocaleLowerCase();

  const categoryArray: string[] = categoryText.split(",");

  // Ensure sortQuery is of type string
  const sortQuery: string = (sort as string) || "recentAsc";
  // Ensure sortQuery is of type number
  const currentPageNumber: number = isNaN(parseInt(page)) ? 1 : parseInt(page);

  let productsInCategory: Product[] = [];

  try {
    productsInCategory = await prisma.product.findMany({
      where: {
        category: {
          in: categoryArray,
        },
      },
    });
  } catch (error) {
    next(new HttpError("There is some issue in server.", 503));
    return;
  }

  if (productsInCategory.length === 0) {
    next(new HttpError("Such product not found.", 404));
    return;
  }

  const responseObject = do_Sorting_Pagination_Modification(
    productsInCategory,
    sortQuery,
    currentPageNumber
  );

  res.json(responseObject).status(200);
};

export const getProductsBySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { search } = req.params;

  let productList;
  try {
    productList = await prisma.product.findMany({
      where: {
        title: { contains: search },
      },
      take: 5,
    });
  } catch (error) {
    next(new HttpError("There is some error in the backend.", 404));
    return;
  }

  const modifiedProductList = reduceListDataToCard(productList);

  res.json(modifiedProductList);
};

export const getProductsBySearchForPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { search, page } = req.params;
  let { sort } = req.query;

  const searchText: string = search.toLocaleLowerCase();

  // Ensure sortQuery is of type string
  const sortQuery: string = (sort as string) || "recentAsc";
  // Ensure sortQuery is of type number
  const currentPageNumber: number = isNaN(parseInt(page)) ? 1 : parseInt(page);

  let productList;

  try {
    productList = await prisma.product.findMany({
      where: {
        title: { contains: searchText },
      },
    });
  } catch (error) {
    next(new HttpError("There is some error in the backend.", 404));
    return;
  }

  const responseObject = do_Sorting_Pagination_Modification(
    productList,
    sortQuery,
    currentPageNumber
  );

  res.json(responseObject);
};

export const getFeaturedProductList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let featuredProducts: Product[] = [];

  try {
    featuredProducts = await prisma.product.findMany({
      where: {
        featured: true,
      },
      take: 4,
    });
  } catch (error) {
    next(new HttpError("Couldn't retrieve the data from database", 503));
    return;
  }

  if (featuredProducts.length === 0) {
    next(new HttpError("Featured Products are not found", 404));
    return;
  }

  const featuredProductsLIst = reduceListDataToCard(featuredProducts);

  res.json(featuredProductsLIst).status(200);
};

export const getRecentProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let product;
  try {
    product = await prisma.product.findMany({
      orderBy: [{ id: "desc" }],
      take: 1,
    });
  } catch (error) {
    next(new HttpError("Couldn't retrieve the data from database", 503));
    return;
  }

  const recentProduct = {
    title: product[0].title,
    image: product[0].image,
    price: product[0].price,
    id: product[0].id,
  };

  res.json(recentProduct);
};

export const cartProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  let validCartList;

  try {
    validCartList = parse(cartSchema, body);
  } catch (error) {
    console.log(error);
    next(new HttpError("Your data is not sturcture properly.", 404));
    return;
  }

  let cartItemsId = [];

  for (let i = 0; i < validCartList.length; i++) {
    cartItemsId.push(validCartList[i].productId);
  }

  let cartList: Product[] | undefined;

  try {
    cartList = await prisma.product.findMany({
      where: {
        id: {
          in: cartItemsId,
        },
      },
    });
  } catch (error) {
    next(new HttpError("There is some error in the backend", 422));
    return;
  }

  let newCartItemList = validCartList.map((item) => {
    const product = cartList?.find((pro) => pro.id == item.productId);
    const cartProduct = {
      title: product?.title,
      image: product?.image,
      id: product?.id,
      price: product?.price,
      quantity: item.quantity,
    };
    return cartProduct;
  });

  res.json(newCartItemList);
};
