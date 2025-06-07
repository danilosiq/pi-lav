import DoubtImage from "@/core/assets/images/duvida.png";
import RunningGuyImage from "@/core/assets/images/running.png";
import { Button } from "@/core/components/button";
import { Column } from "@/core/components/layout";
import Image from "next/image";

export function WhatIsLavSection() {
  return (
    <div className="w-full justify-center gap-10 flex flex-col lg:flex-row">
      <div className="gap-4 flex flex-col md:flex-row items-center">
        <Column className="max-w-[200px] relative h-[180px]">
          <p className="text-2xl text-primary ">
            O que é a <span className="font-lilita">LAV</span>
          </p>
          <p className="text-sm">
            Venha conhecer mais sobre o que é a lav e suas politicas, descubra
            também como funciona nosso sistema!
          </p>
          <div className="absolute bottom-0 w-full">
            <Button colorSchema="primary" label="Saiba mais" />
          </div>
        </Column>
        <Image
          src={DoubtImage}
          alt="homem com duvida, ilustrado por um ponto de interrogação"
          className="w-[300px] h-[300px] object-contain"
        />
      </div>

      <div className="gap-4 flex flex-col md:flex-row items-center">
        <Column className="max-w-[200px] relative h-[180px]">
          <p className="text-2xl text-primary">
            Não possui <span className="font-bold">cadastro? </span>
          </p>
          <p className="text-sm">
            Não perca tempo e venha realizar seu cadastro, aproveite nosso
            serviço de lavanderia!
          </p>
          <div className="absolute bottom-0 w-full ">
            <Button colorSchema="primary" label="Saiba mais" />
          </div>
        </Column>
        <Image
          src={RunningGuyImage}
          alt="homem correndo"
          className="max-w-[300px] max-h-[300px] w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
