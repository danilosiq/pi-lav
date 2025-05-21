import { UserCog } from "lucide-react";
import { Button } from "./button";
import { Column, Row } from "./layout";

export function ConfirmUserDataWarning() {
  return (
    <Row className="w-full p-1 border-2 border-danger bg-red-100 rounded-lg gap-4 items-center justify-between">
      <Row className="gap-4 items-center">
        <UserCog className="text-danger" />

        <Column>
          <p className="text-danger font-lilita text-xl">Cadastro</p>
          <p className="text-sm text-red-800">
            Ei! Verificamos aqui e vimos que seu cadastro esta incompleto,
            complete ele para poder usar nosso serviço!
          </p>
        </Column>
      </Row>
      <div>
        <Button colorSchema="danger" label="Completar cadastro" />
      </div>
    </Row>
  );
}
