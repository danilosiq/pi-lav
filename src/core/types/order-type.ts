import { BaseType } from "./base-type";
import { ClotheType } from "./clothe-type";
import { UserType } from "./user-type";

export type OrderType = BaseType & {
  userId?: String;
  clothes: ClotheItem[];
  user: UserType;
  totalPrice:number
};

export type ClotheItem = ClotheType &{
  quantity: number
}
