import { Column } from "@/core/components/layout";
import { Shirt } from "lucide-react";

export function AvailableClothesType() {
  const clothesList = [
    {
      label: "Camisetas",
      icon: <Shirt />,
    },
    {
      label: "Calças",
      icon: <Shirt />,
    },
    {
      label: "Meias (pares)",
      icon: <Shirt />,
    },
    {
      label: "Calcinhas",
      icon: <Shirt />,
    },
    {
      label: "Sutiã",
      icon: <Shirt />,
    },
    {
      label: "Camisetas",
      icon: <Shirt />,
    },
    {
      label: "Jaquetas de couro",
      icon: <Shirt />,
    },
    {
      label: "Casacos (moletom)",
      icon: <Shirt />,
    },
    {
      label: "Jaqueta Jeans",
      icon: <Shirt />,
    },
    {
      label: "Calça Jeans",
      icon: <Shirt />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mx-auto">
      <Column className="text-primary items-center">
        <p className="text-4xl font-lilita  text-center">Peças disponiveis</p>
      </Column>

      <div className="gap-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
        {clothesList.map((clothe, index) => (
          <Column key={index} className="border-2 rounded-md border-primary p-1 items-center justify-center flex">
            {clothe.icon}
            <p>{clothe.label}</p>
          </Column>
        ))}
      </div>
    </div>
  );
}
