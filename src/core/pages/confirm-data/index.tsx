"use client";
import POSTconfirmData from "@/core/actions/post-confirm-data";
import washMachineDoubtImage from "@/core/assets/images/duvida.png";
import { Button } from "@/core/components/button";
import { Container } from "@/core/components/container";
import { Footer } from "@/core/components/footer";
import { Column, Row } from "@/core/components/layout";
import { Skeleton } from "@/core/components/skeleton";
import { TextInput } from "@/core/components/text-input";
import { useCheckData } from "@/core/hook/useCheckData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CPFTextInput } from "../sign-in/components/cpf-text-input-";

const ConfirmDataSchema = z.object({
  name: z.string().min(3, "é necessario colocar um nome!"),
  gender: z.string().min(1, "Selecione um genero"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  phone: z.string().min(8, "coloque um numero celular"),
  email: z.string().min(8, "coloque um numero celular"),
});

type ConfirmDataType = z.infer<typeof ConfirmDataSchema>;

export function ConfirmDataScreen() {
  const session = useSession();
  const router = useRouter();
  useCheckData(session.data?.user?.email ?? undefined);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<ConfirmDataType>({
    resolver: zodResolver(ConfirmDataSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleConfirmData(data: ConfirmDataType) {
    // console.log(data);
    console.log(session);
    mutate(data);
  }
  useEffect(() => {
    if (session.data?.user?.name) {
      reset({
        name: session.data.user.name,
        email: session.data.user.email!,
      });
    }
    console.log(session.data?.user?.email);
    
  }, [session.data?.user?.name, reset]);

  const { mutate } = useMutation({
    mutationKey: ["confirm-data"],
    mutationFn: POSTconfirmData,
    onSuccess: () => router.push("/"),
  });
  return (
    <>
      <Container marginTop>
        <Row className="items-center gap-10 m-auto">
          <Column className="gap-2">
            <Column>
              <p className="font-lilita text-4xl text-primary">
                Precisamos saber mais sobre voce!
              </p>
              <p>
                Para ter o acesso completo e seu login feito, preencha revise e
                preencha esses dados!
              </p>
            </Column>

            <form
              action=""
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(handleConfirmData)}
            >
              <label htmlFor="">
                Nome completo:
                {!session.data ? (
                  <Skeleton width={"full"} height={48} shape="rectangle" />
                ) : (
                  <TextInput placeholder={"nome"} {...register("name")} />
                )}
              </label>
              <Row className="justify-between gap-4">
                <label htmlFor="">
                  Telefone:
                  {!session.data ? (
                    <Skeleton width={"full"} height={48} shape="rectangle" />
                  ) : (
                    <TextInput
                      placeholder="DDD + 00000-0000"
                      {...register("phone")}
                    />
                  )}
                </label>
                <label htmlFor="" className="w-full">
                  Genero:
                  {!session.data ? (
                    <Skeleton width={"full"} height={48} shape="rectangle" />
                  ) : (
                    <select
                      {...register("gender")}
                      defaultValue=""
                      className="w-full px-5 h-[48px] border border-gray-400 rounded-sm text-sm  focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="" disabled className="text-gray-300">
                        Selecione o gênero
                      </option>
                      <option value="masculino" className="text-primary">
                        Masculino
                      </option>
                      <option value="feminino" className="text-primary">
                        Feminino
                      </option>
                      <option value="outro" className="text-primary">
                        Outro
                      </option>
                    </select>
                  )}
                </label>
              </Row>
              <label htmlFor="">
                CPF:
                {!session.data ? (
                  <Skeleton width={"full"} height={48} shape="rectangle" />
                ) : (
                  <Controller
                    name="cpf"
                    control={control}
                    render={({ field }) => <CPFTextInput {...field} />}
                  />
                )}
              </label>
              <Column>
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
                {errors.gender && (
                  <p className="text-danger">{errors.gender.message}</p>
                )}

                {errors.phone && (
                  <p className="text-danger">{errors.phone.message}</p>
                )}

                {errors.cpf && (
                  <p className="text-danger">{errors.cpf.message}</p>
                )}

                <Button
                  disabled={!session.data}
                  colorSchema="primary"
                  label="Confirmar"
                  type="submit"
                />
              </Column>
            </form>
          </Column>
          <Image
            src={washMachineDoubtImage}
            alt="illustration about guy with doubt about machine"
            className="w-[300px] h-[300px] object-contain"
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
