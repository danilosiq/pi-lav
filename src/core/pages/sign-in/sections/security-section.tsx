import { Button } from "@/core/components/button";
import { Column } from "@/core/components/layout";
import { Stepper } from "@/core/components/stepper";
import { TextInput } from "@/core/components/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SecurityDataSchema = z.object({
  password: z.string().min(1, "Senha é obrigatória"),
  confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos de uso",
  }),
});

type SecuritySchemaType = z.infer<typeof SecurityDataSchema>;

interface SecuritySectionProps {
  onNextStep: (sectionName: number) => void;
  sectionData: (sectionData: SecuritySchemaType) => void;
}

export function SecuritySection({ onNextStep,sectionData }: SecuritySectionProps) {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SecuritySchemaType>({
    resolver: zodResolver(SecurityDataSchema),
  });

  function handleNextStep(data: SecuritySchemaType) {
    console.log(data);
    onNextStep(4);
    sectionData(data)
  }

  useEffect(() => {
    if (password !== confirmPassword && password.length > 0 && confirmPassword.length > 0) {
      setMessage("As senhas não coincidem");
    } else {
      setMessage("");
    }
  }, [password, confirmPassword]);

  return (
    <form action="" className="max-w-[360px]" onSubmit={handleSubmit(handleNextStep)}>
      <Column className="gap-4 mt-10">
        <Column className="">
          <p className="text-xl font-lilita text-secondary">Segurança</p>
          <p className="text-primary mb-3">
            Precisamos que voce crie uma senha para sua conta! mantenha ela em
            segredo!
          </p>
          <Stepper steps={3} currentStep={3} />
        </Column>

        <label className="text-primary text-sm">
          Senha:
          <TextInput
            type="password"
            placeholder="senha"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="text-primary text-sm">
          Confirme sua senha:
          <TextInput
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label htmlFor="" className="gap-3 flex items-center">
          <input type="checkbox" className="cursor-pointer" {...register("terms")} />
          <span className="text-sm">
            Eu concordo com os <strong>Termos de uso</strong>
          </span>
        </label>

        <Column>
          {errors.terms && (
            <p className="text-red-500 text-sm">
              {errors.terms.message}
            </p>
          )}
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
          <p className="text-red-500">{message}</p>

          <Button
            colorSchema="primary"
            label="Finalizar cadastro"
            disabled={!!message}
          />
          <p className="text-primary text-sm mt-2">
            Ja tem uma conta?{" "}
            <span className="font-lilita hover:text-secondary text-primary cursor-pointer">
              Clique aqui e entre uma agora!
            </span>
          </p>
        </Column>
      </Column>
    </form>
  );
}