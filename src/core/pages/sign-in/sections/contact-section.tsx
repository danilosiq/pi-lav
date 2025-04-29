import { Button } from "@/core/components/button";
import { Column } from "@/core/components/layout";
import { Stepper } from "@/core/components/stepper";
import { TextInput } from "@/core/components/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CPFTextInput } from "../components/cpf-text-input-";

const ContactDataSchema = z.object({
  email: z.string().email("Email invalido").min(1, "Email é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
});

type ContactSchemaType = z.infer<typeof ContactDataSchema>;

interface ContactSectionProps {
  onNextStep: (sectionName: number) => void;
    sectionData: (sectionData: ContactSchemaType) => void;
}

export function ContactSection({ onNextStep,sectionData }: ContactSectionProps) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactDataSchema),
  });
  function handleNextStep(data: ContactSchemaType) {
    console.log(data);
    onNextStep(3);
    sectionData(data)
  }
  return (
    <form action="" className="max-w-[360px]" onSubmit={handleSubmit(handleNextStep)}>
      <Column className="gap-4 mt-10">
        <Column className="">
          <p className="text-xl font-lilita text-secondary">Contato</p>
          <p className="text-primary mb-3">
            Precisamos saber como entrar em contato com voce! E como voce vai
            entrar na LAV!
          </p>
          <Stepper steps={3} currentStep={2} />
        </Column>
        <label className="text-primary text-sm">
          Email:
          <TextInput type="text" placeholder="Email" {...register("email")} />
        </label>

        <label className="text-primary text-sm">
          CPF:
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => <CPFTextInput {...field} />}
          />
        </label>

        <label className="text-primary text-sm">
          Telefone:
          <TextInput
            type="text"
            placeholder="DDD + telefone"
            {...register("phone")}
          />
        </label>
        <Column>
          {errors.cpf && (
            <p className="text-red-500 text-sm">{errors.cpf.message}</p>
          )}
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
          <Button
            colorSchema="primary"
            label="Proximo"
          />
          <p className="text-primary text-sm mt-2">
            Ja tem uma conta?{" "}
            <span className="font-lilita hover:text-secondary  text-primary cursor-pointer">
              Clique aqui e entre uma agora!
            </span>
          </p>
        </Column>
      </Column>
    </form>
  );
}
