import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { user } = body;

  
  const userExistByCPF = await prisma.user.findFirst({
    where: { email: user.cpf },
  });

  if (userExistByCPF) {
    return NextResponse.json({ error: "CPF alredy used" }, { status: 409 });
  }

  const userExistByPhone = await prisma.user.findFirst({
    where: { email: user.phone },
  });

  if (userExistByPhone) {
    return NextResponse.json({ error: "Phone alredy used" }, { status: 409 });
  }

  const prismaUser = await prisma.user.update({
    where: { email: user.email },
    data:{
        cpf:user.cpf,
        name:user.name,
        gender:user.gender,
        phone:user.phone
    }
  });


  return NextResponse.json({prismaUser})



}
