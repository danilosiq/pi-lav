import { AmountStepper } from "@/core/components/amount-stepper";
import { Button } from "@/core/components/button";
import { Column, Row } from "@/core/components/layout";
import { ClotheType } from "@/core/types/clothe-type";
import { ClotheItem } from "@/core/types/order-type";
import { List, MoveRight, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ClothesSelectedsProps {
  selectedData: ClotheType[];
  onRemoveClothe: (data: ClotheType) => void;
  onSubmit: (data: ClotheItem[]) => void;
}

export function ClothesSelectedsList({
  selectedData,
  onRemoveClothe,
  onSubmit,
}: ClothesSelectedsProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const totalGeral = selectedData.reduce((acc, data) => {
    const quantity = quantities[data.id!] || 1;
    return acc + data.price * quantity;
  }, 0);
  function handleChange(id: string, delta: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  }

  function handleSubmitAll() {
    const payload: ClotheItem[] = selectedData.map((clothe) => ({
      ...clothe,
      quantity: quantities[clothe.id!] || 1,
    }));
    onSubmit(payload);
  }
  return (
    <Column className="bg-white p-2 rounded-md sticky w-full md:min-w-[390px] top-[100px] max-h-[500px] h-full shadow-xl/20">
      <Row className="mb-3 text-secondary items-center gap-2">
        <List />
        <p className=" font-bold text-xl">Lista de Roupas</p>
      </Row>
      <Column className="flex-1 p-1 overflow-y-auto">
        <Row className="px-3 py-2 gap-4 text-gray-500 font-semibold">
          <div className="flex-[2]">Produto</div>
          <div className="flex-1 text-center">Quantidade</div>
          <div className="flex-1 text-right">Total</div>
          <div className="w-[40px]"></div>
        </Row>

        {selectedData.map((data) => {
          const quantity = quantities[data.id!] || 1;
          const total = data.price * quantity;

          return (
            <Row
              key={data.id}
              className="px-3 py-2 gap-4 items-center border-t border-gray-100"
            >
              <Row className="flex-[2] items-center gap-3">
                <Image
                  src={data.imageUrl}
                  alt={`${data.name} image`}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <Column>
                  <p className="text-primary font-bold">{data.name}</p>
                  <p className="text-sm text-gray-400">
                    Unit: R$
                    {data.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <div className="md:hidden block">
                    <AmountStepper
                      actualNumber={quantity}
                      onDecrease={() => handleChange(data.id!, -1)}
                      onIncrease={() => handleChange(data.id!, 1)}
                      limit={10}
                    />
                  </div>
                </Column>
              </Row>

              <div className="flex-1 flex justify-center max-md:hidden ">
                <AmountStepper
                  actualNumber={quantity}
                  onDecrease={() => handleChange(data.id!, -1)}
                  onIncrease={() => handleChange(data.id!, 1)}
                  limit={10}
                />
              </div>

              <p className="flex-1 text-right text-primary font-bold">
                R$
                {total.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>

              <div className="w-[40px] flex justify-end">
                <div
                  onClick={() => onRemoveClothe(data)}
                  className="border p-1 rounded-md hover:bg-red-500 cursor-pointer hover:text-white transition-all text-red-500 border-red-500"
                >
                  <Trash size={16} />
                </div>
              </div>
            </Row>
          );
        })}
      </Column>
      <div className="border-t">
        <Row className="justify-between px-3 mb-3">
          <p className="text-lg font-semibold text-gray-700">Total</p>
          <p className="text-lg font-bold text-primary">
            R$
            {totalGeral.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </Row>
      </div>
      <div className="h-[50px]">
        <Button
          onClick={handleSubmitAll}
          disabled={selectedData.length <= 0}
          colorSchema="primary"
          label="Adicionar no carrinho"
          icon={<MoveRight />}
        />
      </div>
    </Column>
  );
}
