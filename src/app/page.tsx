'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InitialPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}


