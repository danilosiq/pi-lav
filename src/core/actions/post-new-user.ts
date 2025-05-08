import { api } from "@/lib/axios";
import { RegisterUserInputType } from "../types/register-user-input-type";



export default async function POSTnewUser(user:RegisterUserInputType){
    const {data} = await api.post('/sign-in',{user})
    return data
}