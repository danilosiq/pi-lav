import { BaseType } from "./base-type";
import { ClotheType } from "./clothe-type";
import { UserType } from "./user-type";

export type OrderType = BaseType & {
  userId?: String;
  quantity: number;
  clothes: ClotheType[];
  user: UserType;
};
