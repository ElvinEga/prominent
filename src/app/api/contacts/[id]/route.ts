import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: params.id },
    });

    if (!contact)
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });

    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching contact" },
      { status: 500 }
    );
  }
}
