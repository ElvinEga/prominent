"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  // Fetch products from API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected an array but got:", data);
          setProducts([]); // Ensure it's always an array
        }
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]); // Prevents undefined issues
      });
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Create a new product
  const handleCreate = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        ...newProduct,
        price: parseFloat(newProduct.price),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const createdProduct = await res.json();
      setProducts([...products, createdProduct]);
      setNewProduct({ name: "", description: "", price: "", imageUrl: "" });
    }
  };

  // Delete a product
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (res.ok) setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container w-full mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      {/* Create Product Form */}
      <div className="mb-6 grid gap-6 grid-cols-1">
        <Input
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          required
        />
        <Input
          name="price"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
        <Input
          name="imageUrl"
          placeholder="Image URL"
          value={newProduct.imageUrl}
          onChange={handleChange}
          required
        />
        <Button onClick={handleCreate}>Add Product</Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={product.imageUrl}
                alt={product.imageUrl}
                width={200}
                height={200}
                objectFit="cover"
                className="w-full h-72 object-cover mb-2"
              />
              <p>{product.description}</p>
              <p className="text-lg font-semibold mb-4">${product.price}</p>
              <Button
                variant="destructive"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
