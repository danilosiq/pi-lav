import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { add } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { user } = body;

  const userByEmail = await prisma.user.findFirst({ where: { email: user.loginInput, password:user.password } });
  const userByCPF = await prisma.user.findFirst({ where: { cpf: user.loginInput, password:user.password } });

  const prismaUser = userByEmail || userByCPF;

  if (!prismaUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }



  const sessionToken = randomUUID();
  const expires = add(new Date(), { days: 30 });

  const session = await prisma.session.create({
    data: {
      sessionToken,
      userId: prismaUser.id,
      expires,
    },
  });

  const response = NextResponse.json({ user, session });

  response.cookies.set("next-auth.session-token", sessionToken, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires,
  });

  return response;
}