"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Confetti } from "@/components/confetti";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const navigate = useRouter();
  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      navigate.push("/");
    }, 2000);

    return () => clearTimeout(closeTimeout);
  }, []);
  return (
    <div className="flex py-16 flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <Confetti className="absolute left-0 top-0 z-0 size-full" />
        <Image
          src="/assets/success.svg"
          alt="404"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h2 className="text-3xl font-semibold text-foreground">
          Payment Received
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your payment has been processed successfully.
        </p>
        <Button
          asChild
          className="relative mx-auto bg-primary text-primary-foreground hover:bg-primary/90 z-50"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2 z-50" /> Return home
          </Link>
        </Button>
      </div>
    </div>
  );
}
