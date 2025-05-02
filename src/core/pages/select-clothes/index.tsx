"use client";
import { Container } from "@/core/components/container";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { mockClothes } from "@/core/mock/clothes-mock";
import { ClotheType } from "@/core/types/clothe-type";
import { WashingMachine } from "lucide-react";
import { useState } from "react";
import { ClothesSelectedsList } from "./components/clothes-list";
import { ClotheCard } from "./components/product-card";

export function SelectClothesScreen() {
  const [selectedClothesList, setSelectedClothesList] = useState<ClotheType[]>(
    []
  );

  function handleRemoveClothe(data: ClotheType) {
    setSelectedClothesList(
      selectedClothesList.filter((clothe) => clothe.id != data.id)
    );
  }

  function handleSelectClothe(data: ClotheType) {
    if (selectedClothesList.includes(data)) {
      return null;
    } else {
      setSelectedClothesList([...selectedClothesList, data]);
    }
  }
  return (
    <>
      <Navbar />
      <Container marginTop>
        <Row className="gap-10">
          <Column>
            <Column className="mb-6">
              <Row className="text-primary gap-3 items-center ">
                <WashingMachine />
                <p className="text-3xl font-lilita">Selecionar roupas</p>
              </Row>
              <p className="text-slate-900 mb-4 max-w-[700px]">
                Escolha abaixo as peças de roupa que deseja incluir.
                Recomendamos atenção ao tipo de tecido, pois ele pode
                influenciar no modo de lavagem e no cuidado ideal para cada
                peça.
              </p>
            </Column>
            <div className="grid grid-cols-4 gap-4 max-w-[700px]">
              {mockClothes.map((clothe) => (
                <ClotheCard
                  key={clothe.id}
                  clotheData={clothe}
                  onSelectClothe={(data) => handleSelectClothe(data)}
                />
              ))}
            </div>
          </Column>
          <div className="flex-1 relative">
            <ClothesSelectedsList
              onRemoveClothe={(data) => handleRemoveClothe(data)}
              selectedData={selectedClothesList}
            />
          </div>
        </Row>
      </Container>
    </>
  );
}
