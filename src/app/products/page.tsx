"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import Contact from "@/components/contact";
import SubHero from "@/components/subhero";
import ProductList from "@/components/product-list";

export default function Products() {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <Navbar />
      {/* ========== END HEADER ========== */}
      {/* Hero */}
      <SubHero title="PROMINENT COLOR RANGE" bgImage="/images/hero3.jpg" />
      <ProductList />
      {/* Contact Us */}
      <Contact title="Send An Inquiry" subtitle="" />
      {/* End Contact Us */}
      <Footer />
      <CookieConsent variant="small" />
    </div>
  );
}
