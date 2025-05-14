import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GETuseBlockIfIsLogged from "../actions/post-useBlockIfIsLogged";

export function useBlockIfIsLogged() {
  const router = useRouter();

  const query = useQuery({
    queryKey: ["useBlockIfIsLogged"],
    queryFn: GETuseBlockIfIsLogged,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    
  });

  useEffect(() => {


    if (query.status === "success") {
      router.push("/home");
      console.log(query.status);
      
    } else if (query.status === "error") {
      return;
    }
  }, [query]);
  return { isLoading:query.isLoading };
}
