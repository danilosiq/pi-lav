import { BaseType } from "./base-type";

export type UserType = BaseType & {
  name: string;
  email: string;
  phone: string;
  gender: "masculino" | "feminino" | "outro";
};
