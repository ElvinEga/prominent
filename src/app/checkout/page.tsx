"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { X, CreditCard, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import dynamic from "next/dynamic";

const PaystackCheckout = dynamic(
  () => import("@/components/paystack-checkout"),
  { ssr: false }
);
export default function Checkout() {
  const { items } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [email, setEmail] = useState("customer@example.com");
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      {/* ========== HEADER ========== */}
      <Navbar />
      {/* ========== END HEADER ========== */}
      {/* Hero */}
      <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-24 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary sm:text-4xl">
              Checkout
            </h1>
          </div>
        </div>
        <section className="body-font">
          <div className="py-24 mx-auto">
            <div className="p-6">
              <div className="mb-6 flex items-start justify-between">
                <h2 className="text-xl font-semibold">Make Payment</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <span className="font-semibold text-4xl">
                    {formatPrice(total)}
                  </span>
                  <div className="space-y-6">
                    <div className="mb-4 space-y-2">
                      <Label>Email:</Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-start pt-2 space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreed}
                        onCheckedChange={(checked) =>
                          setAgreed(checked as boolean)
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Yes, I understand and agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms and Conditions
                          </a>
                          , including the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Refund Policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>

                    <PaystackCheckout email={email} amount={total} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-4 rounded-lg bg-muted p-4">
                    <ShieldCheck className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-semibold">Make a secure payment</h3>
                      <p className="text-sm text-muted-foreground">
                        We use advanced 256 bit encryption to protect your
                        information and securely process all transactions.
                      </p>
                    </div>
                  </div>
                  <CreditCard className="hidden  h-48 w-full text-primary md:flex" />

                  <div className="space-y-2">
                    <div className="text-center text-sm text-muted-foreground">
                      We accept:
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "Visa",
                        "Mastercard",
                        "Amex",
                        "PayPal",
                        "Stripe",
                        "Paystack",
                      ].map((method) => (
                        <div
                          key={method}
                          className="flex h-8 w-16 items-center justify-center rounded bg-muted text-xs text-muted-foreground"
                        >
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
