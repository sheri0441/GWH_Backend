import { CartItem } from "./CartItem";
import { OrderProduct } from "./OrderProduct";
import { Product } from "./Product";

export interface OrderValidBody {
  name: string;
  email: string;
  city: string;
  area: string;
  address: string;
  shipping: string;
  payment: string;
  onlineMethod?: string;
  instructions?: string;
  productList: CartItem[];
  zip: string;
}
