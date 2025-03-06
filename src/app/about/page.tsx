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
      <div>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 lg:mt-24 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
            {/* End Col */}
            <div>
              <img
                className="rounded-xl"
                src="/images/feature2.webp"
                alt="Features Image"
              />
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-5xl text-gray-800 leading-tight">
                    Powder Coating Company in Queensland, Australia
                  </h2>
                  <p className="text-gray-500 leading-7">
                    Prominent Australia is a fast-growing powder coating
                    supplier and distributor. We gain elegance and durability to
                    automobile, agriculture, oil &amp; gas, home appliances,
                    fabrication, mining and much more industries. Our
                    performance parameters are focussing on 100% quality, cost
                    saving and delivery.The company specialises in epoxy, epoxy
                    polyester, pure polyester, polyurethane, nylon, and heat
                    resistance powder up to 650°C.Our allied product that
                    adheres to international quality standards ISO 9001:2015,
                    ISO 14001:2015, ISO 45001:2018 and IATF 16949:2016 certiﬁed
                    company, which gives premium coating shades and achieved the
                    highest customers’ satisfaction.
                  </p>
                </div>
                {/* End Title */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Follow us via</span>
                  <a href="#" className="text-red-500 hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-red-500 hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-red-500 hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width={4} height={12} x={2} y={9} />
                      <circle cx={4} cy={4} r={2} />
                    </svg>
                  </a>
                  <a href="#" className="text-red-500 hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
        {/* Icon Blocks */}
        <div className="bg-gray-100">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-24">
              <h2 className="text-2xl font-bold md:text-5xl md:leading-tight">
                What We Offer
              </h2>
            </div>
            {/* End Title */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
              {/* Icon Block */}
              <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    className="shrink-0 size-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={10} height={14} x={3} y={8} rx={2} />
                    <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                    <path d="M8 18h.01" />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Epoxy Powder
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Suitable where maximum corrosion and chemical resistance is
                    required.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="border border-gray-300 p-6 rounded-lg flex flex-col h-80 items-center justify-center text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    className="shrink-0 size-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx={17} cy={17} r={3} />
                    <circle cx={7} cy={7} r={3} />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Epoxy Polyester
                  </h3>
                  <p className="mt-1 text-gray-600">
                    A hybrid powder is a mixture of epoxy and polyester resins,
                    which forms a hard film with good resistance.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    className="shrink-0 size-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Pure Polyester Powder
                  </h3>
                  <p className="mt-1 text-gray-600">
                    It has excellent UV resistance and suitable for exterior
                    coating.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
        {/* End Icon Blocks */}
      </div>

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
