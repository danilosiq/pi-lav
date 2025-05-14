import { Button } from "@/core/components/button";
import { Column } from "@/core/components/layout";
import { Stepper } from "@/core/components/stepper";
import { TextInput } from "@/core/components/text-input";
import { BirthdayTextinput } from "@/core/pages/sign-in/components/birthday-text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const PersonalDataSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  gender: z.string().min(1, "Selecione um genero valido"),
  birthday: z.string().min(1, "Data de nascimento é obrigatória"),
});

type DataSchemaType = z.infer<typeof PersonalDataSchema>;

interface PersonalDataSectionProps {
  onNextStep: (sectionName: number) => void;
  sectionData: (sectionData: DataSchemaType) => void;
}

export function PersonalDataSection({
  onNextStep,
  sectionData,
}: PersonalDataSectionProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<DataSchemaType>({
    resolver: zodResolver(PersonalDataSchema),
  });

  function handleNextStep(data: DataSchemaType) {
    console.log(data);
    onNextStep(2);
    sectionData(data);
  }
  return (
    <form
      action=""
      className="max-w-[360px]"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <Column className="gap-4 mt-10">
        <Column className="">
          <p className="text-xl font-lilita text-secondary">Dados pessoais</p>
          <p className="text-primary mb-3">
            Preencha os dados para sabermos mais sobre voce
          </p>
          <Stepper steps={3} currentStep={1} />
        </Column>
        <label className="text-primary text-sm">
          Nome completo:
          <TextInput
            {...register("name")}
            type="text"
            placeholder="Nome completo"
          />
        </label>
        <label className="text-primary text-sm">
          Genero:
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
        </label>
        <label className="text-primary text-sm">
          Data de nascimento:
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => <BirthdayTextinput {...field} />}
          />
        </label>
        <Column>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
          {errors.birthday && (
            <p className="text-red-500 text-sm">{errors.birthday.message}</p>
          )}
          <Button colorSchema="primary" label="Proximo" type="submit" />
          <p className="text-primary text-sm mt-2">
            Ja tem uma conta?{" "}
            <span
              onClick={() => router.push("/login")}
              className="font-lilita hover:text-secondary  text-primary cursor-pointer"
            >
              Clique aqui e entre uma agora!
            </span>
          </p>
        </Column>
      </Column>
    </form>
  );
}
