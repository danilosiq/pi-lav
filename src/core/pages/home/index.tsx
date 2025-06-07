"use client";
import { ConfirmUserDataWarning } from "@/core/components/confirm-user-data-warning";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { useCheckData } from "@/core/hook/useCheckData";
import { useGetUser } from "@/core/hook/useGetUser";
import { HomeScreenCarousel } from "./components/homeScreenCarousel";
import { AvailableClothesType } from "./sections/available-clothes-type";
import { WhatIsLavSection } from "./sections/what-is-lav-section";

export function HomeScreen() {
  const { data } = useGetUser("GetAuth");
  const { isMissingData } = useCheckData(data?.email!);

  return (
    <>
      <Navbar />
      <Container marginTop>
        {isMissingData && <ConfirmUserDataWarning />}
        <HomeScreenCarousel />
        <Column className="mt-[80px] pt-10 gap-[80px] border-t-2 border-slate-400">
          <WhatIsLavSection />
          <AvailableClothesType/>
        </Column>
      </Container>
      <Footer />
    </>
  );
}
