import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Debugging: Log the received data
    console.log("Received product data:", body);

    // Validate required fields
    if (!body.name || !body.price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description || "",
        price: Number(body.price),
        imageUrl: body.imageUrl || "",
      },
    });

    console.log("Product created successfully:", product);

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to create product", details: error.message },
      { status: 500 }
    );
  }
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { name, description, price, imageUrl } = body;

    const updatedProduct = await prisma.product.update({
      where: { id: params.id },
      data: { name, description, price, imageUrl },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
