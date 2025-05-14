"use client"

import { useBlockIfIsLogged } from "@/core/hook/useBlockIfIsLogged";
import { LoginScreen } from "@/core/pages/login";

export default function Login() {
  const { isLoading } = useBlockIfIsLogged();
  return <>{!isLoading && <LoginScreen />}</>;
}
