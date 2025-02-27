"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import Contact from "@/components/contact";
import CartList from "@/components/cart";

export default function Cart() {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <Navbar />
      {/* ========== END HEADER ========== */}
      {/* Hero */}
      <CartList />
      {/* Contact Us */}
      {/* End Contact Us */}
      <Footer />
      <CookieConsent variant="small" />
    </div>
  );
}
