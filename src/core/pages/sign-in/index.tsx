"use client";
import POSTnewUser from "@/core/actions/post-new-user";
import SignInImage from "@/core/assets/images/casaco-azul.png";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { RegisterUserInputType } from "@/core/types/register-user-input-type";
import { useMutation } from "@tanstack/react-query";
import { Home } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactSection } from "./sections/contact-section";
import { FinalSection } from "./sections/final-section";
import { PersonalDataSection } from "./sections/personal-data-section";
import {
  SecuritySchemaType,
  SecuritySection,
} from "./sections/security-section";

export function SignInScreen() {
  const router = useRouter();
  const [session, setSession] = useState<number>(1);
  const [user, setUser] = useState<RegisterUserInputType>({
    birthday: "",
    email: "",
    gender: "",
    name: "",
    cpf: "",
    password: "",
    phone: "",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["newUser"],
    mutationFn: POSTnewUser,
  });
  function handleCreateUser(data: SecuritySchemaType) {
    const updatedUser = {
      ...user,
      password: data.password,
    };

    setUser(updatedUser);
    mutate(updatedUser);
    console.log(updatedUser);
  }

  useEffect(() => {
    if (isSuccess) {
      setSession(4);
    }
  }, [isSuccess]);
  return (
    <>
      <Container>
        <Row className="gap-20 mt-[10px] justify-center items-center ">
          <div className="max-md:hidden">
            <Image
              src={SignInImage}
              alt="Login"
              className="w-[300px] h-[300px]  object-contain"
            />
          </div>
          <Column>
            <Row className="text-secondary gap-3 font-black cursor-pointer hover:shadow-md/20 transition-all hover:bg-white p-1 rounded-md w-[90px]">
              <Home />
              <p onClick={() => router.back()}>Inicio</p>
            </Row>

            <p className="font-lilita text-5xl text-primary ">LAV.</p>
            <p className="text-xs text-primary">
              Roupa suja <span className="font-lilita text-primary">NÃO</span>{" "}
              se lava em casa.
            </p>

            {session === 1 && (
              <PersonalDataSection
                onNextStep={setSession}
                sectionData={(data) =>
                  setUser((prev) => ({
                    ...prev,
                    birthday: data.birthday,
                    gender: data.gender,
                    name: data.name,
                  }))
                }
              />
            )}

            {session === 2 && (
              <ContactSection
                onNextStep={setSession}
                sectionData={(data) =>
                  setUser((prev) => ({
                    ...prev,
                    email: data.email,
                    cpf: data.cpf,
                    phone: data.phone,
                  }))
                }
              />
            )}

            {session === 3 && (
              <SecuritySection sectionData={(data) => handleCreateUser(data)} />
            )}

            {session === 4 && <FinalSection />}
          </Column>
        </Row>

        <div className="md:hidden">
          <Image
            src={SignInImage}
            alt="Login"
            className="w-[200px] m-auto h-[200px]  object-contain"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
