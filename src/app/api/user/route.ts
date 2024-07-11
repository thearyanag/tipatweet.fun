import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

export function POST(req: NextRequest) {
  return NextResponse.json({ message: "Hello, World!" });
}

export async function GET(req: NextRequest) {
  const session = await auth();
  let username = (session?.user as any)?.username;

  console.log(username);
  console.log(session);

  if (!username) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  let links = await prisma.links.findMany({
    where: {
      sub: username,
    },
    select: {
      url: true,
      amount: true,
    },
  });

  return NextResponse.json(links);
}
