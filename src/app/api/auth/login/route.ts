import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createToken, setAuthCookie } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = createToken({ id: user.id, email: user.email });
  setAuthCookie(token);

  return NextResponse.json({ message: "Login successful" });
}
