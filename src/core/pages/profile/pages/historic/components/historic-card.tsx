import { Button } from "@/core/components/button";
import { Column, Row } from "@/core/components/layout";
import { LucideGlasses, ShoppingBag } from "lucide-react";

export function HistoricCard() {
  return (
    <Column className="bg-white min-w-[500px] border border-primary p-2 rounded-md">
      <Row className="border-b  items-center gap-3 mb-1 pb-1">
        <ShoppingBag className="text-primary" />
        <Column>
          <p className="font-bold text-lg text-primary">
            R. Camille Flammarion 30
          </p>
          <p className="text-slate-500 text-sm">Sobrado 35</p>
        </Column>
      </Row>
      <Column className="border-b mb-1 pb-1">
        <p className="text-sm">Itens</p>
        <p>• Camiseta (3x)</p>
        <p>• Calca jeans (3x)</p>

        <p>• Casaco moletom (3x)</p>
        <p>...</p>
      </Column>
      <Row className="py-3 justify-between">
        <p className="text-slate-500">dia: 30/10/2020</p>
        <p className="text-[18px] font-lilita">R$30,90</p>
      </Row>
      <div>
        <Button
          colorSchema="primary"
          label="Ver mais"
          icon={<LucideGlasses />}
        />
      </div>
    </Column>
  );
}
