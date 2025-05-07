"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import phoneGirlImage from "@/core/assets/images/celular.png";
import dirtyClothesImgage from "@/core/assets/images/fedido.png";
import cleanTshirtGirl from "@/core/assets/images/muie-rosa.png";
import Van from "@/core/assets/images/van.png";
import { Button } from "@/core/components/button";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { Book } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function TutorialScreen() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <Container marginTop>
        <div className="w-[80px]">
          <Button
            colorSchema="ghost"
            label="Voltar"
            onClick={() => router.push("/about")}
          />
        </div>
        <Row className="text-primary items-center gap-3">
          <Book />
          <p className="text-3xl font-lilita">Como funciona a LAV</p>
        </Row>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-[800px] m-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <Column className="items-center">
                <Image
                  src={dirtyClothesImgage}
                  alt="guy with dirty clothes"
                  className="w-[250px] h-[250px] object-contain"
                />
                <p className="font-lilita text-2xl text-primary">
                  1 - Roupas sujas
                </p>
                <p className="max-w-[530px] w-full text-center">
                  Antes de começar, certifique-se de reunir todas as suas roupas
                  sujas. Depois, coloque-as com cuidado em uma caixa de papelão.
                  Para facilitar a identificação, lembre-se de escrever seu nome
                  completo e CPF na parte externa da caixa. Esse passo é
                  importante para garantir que todo o processo ocorra de forma
                  segura e organizada.
                </p>
              </Column>
            </CarouselItem>
            <CarouselItem>
              <Column className="items-center">
                <Image
                  src={phoneGirlImage}
                  alt="guy with dirty clothes"
                  className="w-[250px] h-[250px] object-contain"
                />
                <p className="font-lilita text-2xl text-primary">
                  2 - Entre na <span className="font-lilita">LAV.</span>
                </p>
                <p className="max-w-[530px] w-full text-center">
                  Acesse a plataforma da LAV e faça seu cadastro, caso ainda não
                  tenha uma conta. Em seguida, escolha cuidadosamente as roupas
                  que deseja enviar para a lavagem. Antes de finalizar, revise
                  sua seleção para garantir que está tudo certo e quando estiver
                  pronto, é só acionar o serviço da LAV para cuidarmos do resto!
                </p>
              </Column>
            </CarouselItem>

            <CarouselItem>
              <Column className="items-center">
                <Image
                  src={Van}
                  alt="guy with dirty clothes"
                  className="w-[250px] h-[250px] object-contain"
                />
                <p className="font-lilita text-2xl text-primary">
                  3 - Retirada das roupas
                </p>
                <p className="max-w-[530px] w-full text-center">
                  Nossa equipe passará para retirar a sua caixa com as roupas
                  sujas devidamente identificada com seu nome na parte externa e
                  levará até um dos postos de lavagem da LAV, onde todo o
                  cuidado com suas peças será iniciado.
                </p>
              </Column>
            </CarouselItem>

            <CarouselItem>
              <Column className="items-center">
                <Image
                  src={Van}
                  alt="guy with dirty clothes"
                  className="w-[250px] h-[250px] object-contain  scale-x-[-1]"
                />
                <p className="font-lilita text-2xl text-primary">
                  4 - Entrega das peças
                </p>
                <p className="max-w-[530px] w-full text-center">
                  Assim que estiverem limpas e cheirosas, nossa equipe leva suas
                  roupas de volta com todo cuidado até o local escolhido por
                  você!
                </p>
              </Column>
            </CarouselItem>

            <CarouselItem>
              <Column className="items-center">
                <Image
                  src={cleanTshirtGirl}
                  alt="guy with dirty clothes"
                  className="w-[250px] h-[250px] object-contain "
                />
                <p className="font-lilita text-2xl text-primary">5 - pronto!</p>
                <p className="max-w-[530px] w-full text-center">
                  Agora é só aproveitar suas roupas limpas, cheirosas e prontas
                  para brilhar até a próxima jornada de volta ao cesto de roupas
                  sujas!
                </p>
              </Column>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
      <Footer />
    </>
  );
}
