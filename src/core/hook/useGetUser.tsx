import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GETuser from "../actions/get-user";

export function useGetUser(mode: "GetData" | "GetAuth") {
  const router = useRouter();

  const query = useQuery({
    queryKey: ["useUser"],
    queryFn: GETuser,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (query.status === "error" && mode === "GetAuth") {
      router.push("/login");
    }
  }, [query.status, mode, router]);

  return {
    isLoading: query.isLoading,
    data: query.data,
  };
}