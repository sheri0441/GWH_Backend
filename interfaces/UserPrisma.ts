import { JsonValue } from "@prisma/client/runtime/library";

export interface UserPrisma {
  id: string;
  name: string;
  image: string;
  auth: string;
  cart: JsonValue;
  registedOn: Date;
}
