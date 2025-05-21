import { api } from "@/lib/axios"






export default async function GETuserByEmail(email:string){
    const {data} = await api.get('/user/get-user-by-email',{params:{email}})
    return data
}