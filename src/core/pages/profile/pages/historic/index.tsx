"use client";

import deliveryVan from "@/core/assets/images/van.png";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { useGetUser } from "@/core/hook/useGetUser";
import { Clock } from "lucide-react";
import Image from "next/image";
import { ProfileSideBar } from "../../components/profile-side-bar";
import { HistoricCard } from "./components/historic-card";

export function HistoricScreen() {
  const { isLoading } = useGetUser("GetAuth");
  return (
    <>
      <Navbar />
      {!isLoading && (
        <Container marginTop>
          <Row className=" gap-6 relative">
            <div className=" relative">
              <div className="sticky top-[100px]">
                <ProfileSideBar />
              </div>
            </div>
            <Column>
              <Row className="text-primary items-center gap-2 mb-6">
                <Clock />
                <p className="text-3xl font-lilita ">Histórico</p>
              </Row>
              <Column className="gap-3">
                <HistoricCard />
                <HistoricCard />

                <HistoricCard />

                <HistoricCard />

                <HistoricCard />
              </Column>
            </Column>
            <Column className=" flex-1 items-center max-lg:hidden">
              <Image
                src={deliveryVan}
                alt="running guy running"
                className="max-w-[300px] sticky max-h-[300px] w-full h-full object-contain top-[100px]"
              />
            </Column>
          </Row>
        </Container>
      )}

      <Footer />
    </>
  );
}
