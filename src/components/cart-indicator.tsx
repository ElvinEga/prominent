"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartIndicatorProps {
  count: number;
}

export function CartIndicator({ count }: CartIndicatorProps) {
  return (
    <Button variant="ghost" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {/* {count > 0 && ( */}
      <span className="absolute -right-0 -top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
        {count}
      </span>
      {/* )} */}
    </Button>
  );
}
