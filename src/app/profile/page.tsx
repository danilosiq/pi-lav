"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    router.push("/profile/profile-data");
  }, [router]);

  return null;
}
