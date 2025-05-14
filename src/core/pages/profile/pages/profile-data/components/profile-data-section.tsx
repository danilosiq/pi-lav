import { Column, Row } from "@/core/components/layout";
import { Skeleton } from "@/core/components/skeleton";
import { UserType } from "@/core/types/user-type";
import { User } from "lucide-react";

interface ProfileDataSectionProps {
  data?: UserType;
}

export function ProfileDataSection({ data }: ProfileDataSectionProps) {
  return (
    <Column>
      <Row className="text-primary items-center gap-2 mb-6">
        <User />
        <p className="text-3xl font-lilita ">Perfil</p>
      </Row>
      <div className="grid grid-cols-2 gap-3">
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Nome completo:</p>
          {data ? (
            <p className="text-slate-500">{data.name}</p>
          ) : (
            <Skeleton shape="rectangle" height={30} width={200} />
          )}
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Data nascimento:</p>
          <p className="text-slate-500"></p>
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">CPF:</p>
          {data ? (
            <p className="text-slate-500">{data.cpf}</p>
          ) : (
            <Skeleton shape="rectangle" height={30} width={200} />
          )}
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">E-mail:</p>
          {data ? (
            <p className="text-slate-500">{data.email}</p>
          ) : (
            <Skeleton shape="rectangle" height={30} width={200} />
          )}
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Comecou a usar em:</p>
          {data ? (
            <p className="text-slate-500">
              {data.createdAt
                ? new Date(data.createdAt).toLocaleDateString("pt-BR")
                : ""}
            </p>
          ) : (
            <Skeleton shape="rectangle" height={30} width={200} />
          )}
        </Column>
        <Column className="border-primary border-l-2 p-1  ">
          <p className="text-lg font-bold">Numero total de pedidoss</p>
          <p className="text-slate-500">10 pedidos</p>
        </Column>
      </div>
    </Column>
  );
}
