import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import GETuserByEmail from "../actions/get-check-data";

export function useCheckData(email?: string) {
  const [isMissingData, setIsMissingData] = useState(false);

  const query = useQuery({
    queryKey: ["check-data", email],
    queryFn: () => GETuserByEmail(email!),
    enabled: !!email,
    
  });

  useEffect(() => {
    if (!query.data) return;

    const { cpf, gender, phone } = query.data;
    if (!cpf || !gender || !phone) {
      setIsMissingData(true);
    } else {
      setIsMissingData(false);
    }
  }, [query.data]);

  return { isMissingData };
}