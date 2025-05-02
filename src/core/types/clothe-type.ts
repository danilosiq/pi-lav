import { StaticImageData } from "next/image";
import { BaseType } from "./base-type";

export type ClotheType = BaseType & {
  name: string;
  price: number;
  imageUrl: string | StaticImageData;
  description: string;
};
