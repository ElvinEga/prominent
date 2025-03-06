"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { X, CreditCard, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function Checkout() {
  const { items } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // const [amount, setAmount] = useState("500.00");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
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
                <h2 className="text-xl font-semibold">
                  Select Payment Provider
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <span className="font-semibold text-4xl">
                    {formatPrice(total)}
                  </span>

                  <div className="space-y-2">
                    <Label>Payment methods:</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="stripe" id="stripe" />
                          <Label htmlFor="stripe">Stripe</Label>
                        </div>
                        <div className="text-sm font-medium">Stripe</div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="text-sm font-medium">PayPal</div>
                      </div>

                      <div className="flex items-center justify-between rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="google" id="google" />
                          <Label htmlFor="google">Google Pay</Label>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          GPay
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Debit/Credit Card</Label>
                        </div>
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Select>
                            <SelectTrigger id="expiryDate">
                              <SelectValue placeholder="MM / YY" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="01/24">01/24</SelectItem>
                              <SelectItem value="02/24">02/24</SelectItem>
                              <SelectItem value="03/24">03/24</SelectItem>
                              {/* Add more months and years as needed */}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input id="cardholderName" placeholder="John Doe" />
                      </div>
                    </div>
                  )}

                  {(paymentMethod === "paypal" ||
                    paymentMethod === "stripe" ||
                    paymentMethod === "paystack") && (
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm text-muted-foreground">
                        You will be redirected to{" "}
                        {paymentMethod === "paypal"
                          ? "PayPal"
                          : paymentMethod === "stripe"
                          ? "Stripe"
                          : "Paystack"}{" "}
                        to complete your payment securely.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
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
                  <CreditCard className="hidden  h-64 w-full text-primary md:flex" />

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

                  <Button className="w-full" disabled={!agreed}>
                    Proceed
                  </Button>

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

      {/* Contact Us */}
      {/* End Contact Us */}
      <Footer />
      <CookieConsent variant="small" />
    </div>
  );
}
