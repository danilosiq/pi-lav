"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/core/components/button";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Navbar } from "@/core/components/navbar";
import { Skeleton } from "@/core/components/skeleton";
import { Stepper } from "@/core/components/stepper";
import { TextArea } from "@/core/components/text-area";
import { TextInput } from "@/core/components/text-input";
import { Search } from "lucide-react";

export function HomeScreen() {
  return (
    <>
      <Navbar />
      <Container marginTop>
        home
        <Stepper steps={5} currentStep={2} /> 
        <Button colorSchema="success" label="Click me" />
        <Button colorSchema="primary" label="Click me" />
        <Button colorSchema="secondary" label="Click me" />
        <Button colorSchema="danger" label="Click me" />
        <TextInput placeholder="Enter text" icon={<Search />} />
        <TextArea />
        <p className="font-lilita">oi</p>
        <Skeleton shape="rectangle" width={100} height={100} />
        <Dialog>
          <DialogTrigger asChild>
            <p>trigger</p>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Titulo</DialogTitle>
            <DialogDescription>descricao</DialogDescription>
            <p>conteudo</p>
          </DialogContent>
        </Dialog>
        <Drawer>
          <DrawerTrigger asChild>
            <p>wadjwjdaw</p>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>å</DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <DrawerContent>
              <p className="h-[400px]">conteudo</p>
            </DrawerContent>
          </DrawerContent>
        </Drawer>
      </Container>
      <Footer />
    </>
  );
}
