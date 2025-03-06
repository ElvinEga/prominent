"use server";

import { prisma } from "@/lib/prisma";

export async function submitContact(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    details: formData.get("details") as string,
  };

  await prisma.contact.create({ data });
}

export async function getContacts() {
  return await prisma.contact.findMany();
}
