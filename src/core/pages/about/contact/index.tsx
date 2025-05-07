"use client";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Navbar } from "@/core/components/navbar";
import { Headset, Mail, Phone } from "lucide-react";
import { AboutSideBar } from "../components/about-side-bar";

export function ContactScreen() {
  return (
    <>
      <Navbar />
      <Container marginTop>
        <Row className="gap-6">
          <AboutSideBar />
          <Column>
            <Row className="text-primary items-center gap-3 mb-6">
              <Headset />
              <p className="text-3xl font-lilita">Contato - SAC</p>
            </Row>
            <Row className="gap-6">
              <Column className=" p-5 bg-white rounded-md shadow-xl/20">
                <Row className="text-primary gap-3">
                  <Mail />
                  <p className="font-bold">Email</p>
                </Row>
                <p className="text-slate-600">danilodantesiqueira@gmail.com</p>
              </Column>
              <Column className=" p-5 bg-white rounded-md shadow-xl/20">
                <Row className="text-primary gap-3">
                  <Phone />
                  <p className="font-bold">Telefone</p>
                </Row>
                <p className="text-slate-600">41 98506-0659</p>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
