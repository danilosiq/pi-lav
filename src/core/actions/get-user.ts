import { api } from "@/lib/axios"






export default async function GETuser(){
    const {data} = await api.get('/user')
    return data
}