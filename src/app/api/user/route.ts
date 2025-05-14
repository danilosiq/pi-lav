import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export  async function GET() {
  const sessionCookie = (await cookies()).get("next-auth.session-token");

  if (!sessionCookie) {
    return new Response(
      JSON.stringify({ message: "User not found on cookies" }),
      { status: 401 }
    );
  }

  const sessionToken = sessionCookie.value;

    if (!sessionToken) {
      return NextResponse.json(
        { message: "Session token not informed" },
        { status: 400 }
      );
    }
  
    const session = await prisma.session.findFirst({
      where: { sessionToken },
      include:{user: true}
    });

    if(!session) {
      return NextResponse.json(
        { message: "Session not found" },
        { status: 404 }
      );
    }

    if(!session.user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(session.user, { status: 200 });
    
}
