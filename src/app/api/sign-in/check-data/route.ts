import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
  
    if (!email) {
      return NextResponse.json({ message: "Email não informado" }, { status: 400 });
    }
  
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }
  
    return NextResponse.json(user);
  }


