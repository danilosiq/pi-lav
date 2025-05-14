

import { api } from "@/lib/axios";

type LoginUserInputType = {
    loginInput:string
    password:string
}

export default async function POSTloginUser(user:LoginUserInputType){
    const {data} = await api.post('/login',{user})
    return data
}