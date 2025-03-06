"use server";

import { prisma } from "@/lib/prisma";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.product.create({
    data: { name, description, price, imageUrl },
  });
}

export async function getProducts() {
  return await prisma.product.findMany();
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
}
