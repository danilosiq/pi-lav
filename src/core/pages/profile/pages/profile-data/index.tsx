"use client";

import runningGuy from "@/core/assets/images/running.png";
import { Container } from "@/core/components/container";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import Image from "next/image";
import { ProfileSideBar } from "../../components/profile-side-bar";
import { ProfileDataSection } from "./components/profile-data-section";

export function ProfileScreen() {
  return (
    <>
      <Navbar />
      <Container marginTop>
        <Row className=" gap-6 relative">
            <ProfileSideBar />
        
          <ProfileDataSection />
          <Column className=" flex-1 items-center max-lg:hidden">
            <Image
              src={runningGuy}
              alt="running guy running"
              className="max-w-[300px] sticky max-h-[300px] object-contain w-full h-full  top-[100px]"
            />
          </Column>
        </Row>
      </Container>
    </>
  );
}
