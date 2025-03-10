"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import { Product } from "@/store/product";
import { getProducts } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-24 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 sm:text-4xl">
              Choose Your Prominent Color
            </h1>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="py-24 mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 grid-cols-1">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-64 w-full" />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-24 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 sm:text-4xl">
            Choose Your Prominent Color
          </h1>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="py-24 mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 grid-cols-1">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
