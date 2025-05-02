import { Button } from "@/core/components/button";
import { Column, Row } from "@/core/components/layout";
import { ClotheType } from "@/core/types/clothe-type";
import Image from "next/image";

interface ClotheCardProps {
  clotheData: ClotheType;
  onSelectClothe: (data: ClotheType) => void;
}

export function ClotheCard({
  clotheData,
  onSelectClothe,
}: ClotheCardProps) {
  return (
    <Column className="bg-white rounded-md p-1 h-[285px] relative">
      <Image
        src={clotheData.imageUrl}
        alt={`${clotheData.name}_image`}
        className="h-[70px] w-full object-contain"
      />
      <Column className="my-3 flex-1">
        <p className="text-lg font-bold text-primary">{clotheData.name}</p>
        <p className="text-sm">{clotheData.description}</p>
      </Column>
      <Row className="justify-end py-1">
        <p className="text-primary text-lg font-lilita">
          R$
          {clotheData.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </Row>
      <div className="h-[50px]">
        <Button
          colorSchema="ghost"
          label="Selecionar"
          onClick={() => onSelectClothe(clotheData)}
        />
      </div>
    </Column>
  );
}
