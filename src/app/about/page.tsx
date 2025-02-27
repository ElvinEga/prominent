"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import Contact from "@/components/contact";
import SubHero from "@/components/subhero";

export default function About() {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <Navbar />
      {/* ========== END HEADER ========== */}
      {/* Hero */}
      <SubHero title="About Prominent Australia" bgImage="/images/hero2.jpeg" />
      {/* Contact Us */}
      <Contact
        title="Request for the samples and panels"
        subtitle="Send us inquiry and our friendly team will reply you shortly."
      />
      {/* End Contact Us */}
      <Footer />
      <CookieConsent variant="small" />
    </div>
  );
}
