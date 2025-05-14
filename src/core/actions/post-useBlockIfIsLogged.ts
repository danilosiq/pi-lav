import { api } from "@/lib/axios"



export default async function GETuseBlockIfIsLogged(){
    const {data} = await api.get('/login/block-if-logged')

    return data
}