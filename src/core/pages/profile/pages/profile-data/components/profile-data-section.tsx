import { Column, Row } from "@/core/components/layout";
import { User } from "lucide-react";

export function ProfileDataSection() {
  return (
    <Column>
      <Row className="text-primary items-center gap-2 mb-6">
        <User />
        <p className="text-3xl font-lilita ">Perfil</p>
      </Row>
      <div className="grid grid-cols-2 gap-3">
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Nome completo:</p>
          <p className="text-slate-500">Danilo Dante Siqueira</p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Data nascimento:</p>
          <p className="text-slate-500">25/08/2004</p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">CPF:</p>
          <p className="text-slate-500">087.362.149-22</p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">E-mail:</p>
          <p className="text-slate-500">danilodantesiqueira@gmail.com</p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Comecou a usar em:</p>
          <p className="text-slate-500">20/01/2025</p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Numero total de pedidoss</p>
          <p className="text-slate-500">10 pedidos</p>
        </Column>
      </div>
    </Column>
  );
}
