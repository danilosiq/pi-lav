import { BaseType } from "./base-type";

export type UserType = BaseType & {
  name: string;
  email: string;
  cpf:string;
  phone: string;
  gender: "masculino" | "feminino" | "outro";
};
