import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserType } from "../types/user-type";



export function useCheckData(email?: string) {
    const router = useRouter();
  
    useEffect(() => {
      if (!email) return;
  
      async function getData() {
        try {
          const response = await api.get<UserType>("/sign-in/check-data", {
            params: { email },
          });
          
          const user = response.data;
          console.log(user);
          
          if (!user.cpf || !user.gender || !user.phone) {
            router.push('/confirm-data')            
          } else {
            router.push('/home')            
          }
        } catch (err) {
          console.error("Erro ao buscar usuário:", err);
       
        }
      }
  
      getData();
    }, [email, router]);
  }