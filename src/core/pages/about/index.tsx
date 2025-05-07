"use client";
import doubtGuy from "@/core/assets/images/duvida.png";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import { AboutSideBar } from "./components/about-side-bar";

export function AboutScreen() {
  return (
    <>
      <Navbar />
      <Container marginTop>
        <Row className="gap-6">
          <AboutSideBar />
          <Column>
            <Row className="text-primary items-center gap-3">
              <HelpCircle />
              <p className="text-3xl font-lilita">Ajuda - Sobre</p>
            </Row>

            <Column className="max-w-[600px] w-full gap-2">
              <p className="indent-8 text-justify">
                A LAV é um serviço de lavagem de roupas que possui
                funcionalidade de pronta e entrega, oferecido por meio de um app
                móvel principalmente, mas também oferece um site WEB, ambos
                podendo realizar o pedido. É obrigatório um login para utilizar
                o serviço, porém caso não tenha, ele poderá realizar e terá que
                fornecer alguns dados e concordar com os termos de uso. Feito
                isso ele pode utilizar a LAV e ao querer usar, ele entrará na
                aba de seleção de roupas e logo depois a de pagamento.
              </p>

              <p className="indent-8 text-justify">
                Ao fazer seguir esses passos, o setor de retirada e entrega ia
                pegar as roupas na casa da pessoa, levá-las até as estações de
                lavanderia, passar o setor de lavagem, responsável por lavar as
                roupas e dar para o setor de entrega levar até o cliente.
              </p>

              <Column>
                <p className="indent-8 text-justify">
                  Caso a pessoa acabe selecionando roupas divergentes das que
                  ela solicitou, existiram dois casos.
                </p>
                <Row className="gap-3">
                  <Column className="border border-primary rounded-md p-1 gap-2">
                    <p className="text-lg">Roupas faltando:</p>
                    <p className="indent-8 text-justify">
                      Quando o cliente seleciona roupas demais, eventualmente
                      pagando mais caro, podemos oferecer um cupom para a
                      próxima solicitação, ou devolução do dinheiro
                    </p>
                  </Column>
                  <Column className="border border-primary rounded-md p-1 gap-2">
                    <p className="text-lg">Roupas de sobra:</p>
                    <p className="indent-8 text-justify">
                      Quando o cliente seleciona poucas roupas e ele nos entrega
                      mais do que selecionou, apenas sera lavadas as que ele
                      solicitou, as restantes que sobrou vão ser devolvidas sem
                      lavagem
                    </p>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>

          <div className=" flex-1 flex justify-center items-center">
            <Image
              src={doubtGuy}
              alt="blue jacket guy pointing to top"
              className="w-[300px] h-[300px]"
            />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
