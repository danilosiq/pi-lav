import { api } from "@/lib/axios";

type ConfirmDataInputType = {
    name: string;
    gender: string;
    cpf: string;
    phone: string;
    email:string
}

export default async function POSTconfirmData(user:ConfirmDataInputType){
    const {data} = await api.post('/sign-in/confirm-data',{user})
    return data
}