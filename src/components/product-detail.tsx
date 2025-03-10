"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { getProduct } from "@/lib/api";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { Product } from "@/store/product";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = id ?? "";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(productId.toString());
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      navigate.push("/cart");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Skeleton className="h-10 w-32 mb-6" />
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Skeleton className="h-[400px] w-full" />
              <div>
                <Skeleton className="h-10 w-3/4 mb-4" />
                <Skeleton className="h-8 w-1/2 mb-4" />
                <Skeleton className="h-6 w-full mb-6" />
                <Skeleton className="h-12 w-full mt-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Button variant="ghost" className="mb-6" onClick={() => navigate.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
                <p className="mb-4 text-4xl font-bold text-primary">
                  ${product.price}
                </p>
              </div>

              <div className="prose mb-6 max-w-none">
                <h2 className="mb-2 text-xl font-semibold">Description</h2>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <Button
                size="lg"
                className="mt-8 w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
