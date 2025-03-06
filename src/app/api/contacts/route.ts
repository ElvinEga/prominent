import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" }, // Show latest first
    });
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, details } = await req.json();

    if (!firstName || !lastName || !phone || !email || !details) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: { firstName, lastName, email, phone, details },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}
