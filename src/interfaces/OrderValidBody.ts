import { CartItem } from "./CartItem";

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
