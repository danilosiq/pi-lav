"use client";
import { useCheckData } from "@/core/hook/useCheckData";
import { useSession } from "next-auth/react";

export default function ConfirmData() {
  const session = useSession();
  useCheckData(session.data?.user?.email ?? undefined);
  return;
}
