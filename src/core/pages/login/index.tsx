"use client";
import GoogleIcon from "@/core/assets/icons/google-icon.svg";
import LoginImage from "@/core/assets/images/senha.png";
import { Button } from "@/core/components/button";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { TextInput } from "@/core/components/text-input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LoginScreen() {
  const router = useRouter();
  return (
    <>
      <Container>
        <Row className="gap-20 justify-center items-center h-[500px]">
          <Column>
            <p
              className="text-secondary font-black cursor-pointer hover:shadow-md/20 transition-all hover:bg-white p-1 rounded-md w-[70px]"
              onClick={() => router.back()}
            >
              Voltar
            </p>
            <p className="font-lilita text-5xl text-primary ">LAV.</p>
            <p className="text-xs text-primary">
              Roupa suja <span className="font-lilita text-primary">NÃO</span>{" "}
              se lava em casa.
            </p>
            <form action="">
              <Column className="gap-4 mt-10">
                <Column className="gap-2">
                  <p className="text-xl font-lilita text-secondary">Entrar</p>
                  <label className="text-primary text-sm">
                    Email ou CPF:
                    <TextInput type="text" placeholder="Email ou CPF" />
                  </label>
                </Column>
                <label className="text-primary text-sm">
                  Senha:
                  <TextInput type="password" placeholder="Senha" />
                </label>
                <Column>
                  <Button colorSchema="primary" label="Entrar" />
                  <div
                    onClick={() => signIn("google")}
                    className="flex items-center my-1 justify-center gap-6 border border-slate-400 text-slate-500 hover:text-primary hover:border-primary cursor-pointer p-1 rounded-md"
                  >
                    Entrar com o Goggle{" "}
                    <Image
                      src={GoogleIcon}
                      alt="google icon"
                      className="w-[30px] h-[30px]"
                    />{" "}
                  </div>
                  <p className="text-primary text-sm mt-2">
                    Não tem uma conta?{" "}
                    <span
                      onClick={() => router.push("/sign-in")}
                      className="font-lilita hover:text-secondary  text-primary cursor-pointer"
                    >
                      Clique aqui e crie uma agora!
                    </span>
                  </p>
                </Column>
              </Column>
            </form>
          </Column>
          <div className="max-md:hidden">
            <Image
              src={LoginImage}
              alt="Login"
              className="w-[300px] h-[300px]  object-contain"
            />
          </div>
        </Row>
        <div className="md:hidden">
          <Image
            src={LoginImage}
            alt="Login"
            className="w-[200px] m-auto h-[200px]  object-contain"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
