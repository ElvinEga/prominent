import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Ensure this is installed
import { prisma } from "@/lib/prisma"; // Make sure prisma is imported

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // ✅ Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ Hash password safely
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // ✅ Create user in database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword, // Store hashed password
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
