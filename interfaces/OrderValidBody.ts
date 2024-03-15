import { CartItem } from "./CartItem.ts";

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
