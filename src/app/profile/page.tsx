"use client"

import { useGetUser } from "@/core/hook/useGetUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter();
  const { isLoading } = useGetUser("GetAuth");


  useEffect(() => {
    router.push("/profile/profile-data");
  }, [router]);

  return null;
}
