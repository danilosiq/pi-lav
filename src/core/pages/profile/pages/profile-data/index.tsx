"use client";

import runningGuy from "@/core/assets/images/running.png";
import { ConfirmUserDataWarning } from "@/core/components/confirm-user-data-warning";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { useCheckData } from "@/core/hook/useCheckData";
import { useGetUser } from "@/core/hook/useGetUser";
import Image from "next/image";
import { ProfileSideBar } from "../../components/profile-side-bar";
import { ProfileDataSection } from "./components/profile-data-section";

export function ProfileScreen() {
  const { data } = useGetUser("GetAuth");
  const { isMissingData } = useCheckData(data?.email!);

  return (
    <>
      <Navbar />
      <Container marginTop>
        {isMissingData && <ConfirmUserDataWarning />}
        <Row className=" gap-6 relative">
          <ProfileSideBar />

          <ProfileDataSection data={data} />
          <Column className=" flex-1 items-center max-lg:hidden">
            <Image
              src={runningGuy}
              alt="running guy running"
              className="max-w-[300px] sticky max-h-[300px] object-contain w-full h-full  top-[100px]"
            />
          </Column>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
