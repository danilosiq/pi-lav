import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req:NextRequest) {
    
    const body = await req.json();
    const {user} = body

    const userExistByEmail = await prisma.user.findFirst({
        where:{email:user.email}
    })

    if(userExistByEmail){
        return NextResponse.json({ error: "Email alredy used" }, { status: 409 })
    }

    const userExistByCPF = await prisma.user.findFirst({
        where:{email:user.cpf}
    })

    if(userExistByCPF){
        return NextResponse.json({ error: "CPF alredy used" }, { status: 409 })
    }

    

    const newUser = await prisma.user.create({
        data:{
            cpf:user.cpf,
            email:user.email,
            gender:user.gender,
            name:user.name,
            phone:user.phone
        }
    })

    
    return NextResponse.json({newUser})
}