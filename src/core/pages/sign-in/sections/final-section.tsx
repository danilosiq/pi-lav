import { Button } from "@/core/components/button";
import { Column } from "@/core/components/layout";
import { useRouter } from "next/navigation";

export function FinalSection() {
  const router = useRouter();
  return (
    <Column>
      <Column className="">
        <p className="text-2xl font-lilita text-secondary">Pronto!</p>
        <p className="text-primary mb-3">Agora voce pode fazer login na LAV.</p>
        <p className="font-lilita text-primary text-xl">
          seja bem vindo!
        </p>
        <Button
          colorSchema="ghost"
          label="Fazer login"
          onClick={() => router.push("/login")}
        />
      </Column>
    </Column>
  );
}
