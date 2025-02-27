"use client";
import { useCartStore } from "@/store/cart";
import {
  CheckCircle,
  RefreshCcw,
  FileText,
  BotIcon as Robot,
  CopyCheckIcon,
  UserCheck,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CartIndicator } from "./cart-indicator";

const products = [
  {
    name: "Grammar Checker",
    description: "Perfect your writing with grammar checking tool.",
    icon: CheckCircle,
    href: "/grammar-checker",
  },
  {
    name: "Paraphraser",
    description: "Rewrite and enhance your content effortlessly.",
    icon: RefreshCcw,
    href: "/paraphraser",
  },
  {
    name: "Summarizer",
    description: "Condense long texts into concise summaries quickly.",
    icon: FileText,
    href: "/summarizer",
  },
  {
    name: "AI Humanizer",
    description: "Make AI-generated content more human-like and natural.",
    icon: Robot,
    href: "/humanizer",
  },
  {
    name: "AI Detector",
    description: "Detect AI-generated content quickly and accurately.",
    icon: UserCheck,
    href: "/humanizer",
  },
  {
    name: "Clone Writing Style",
    description: "Adopt the writing style of your favorite authors.",
    icon: CopyCheckIcon,
    href: "/clone-writing-style",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const itemCount = useCartStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion-item");
    accordions.forEach((item) => {
      const label = item.querySelector(".accordion-header");
      label?.addEventListener("click", () => {
        accordions.forEach((accordionItem) => {
          accordionItem.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header?.classList.toggle("scrolling", window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <header className="bg-white border-b border-gray-200 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo w/ Collapse Button */}
          <div className="flex items-center justify-between">
            <Link
              className="flex-none font-semibold text-xl text-red-600 focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Prominent Australia"
            >
              <Image
                className="w-48"
                width={192}
                height={48}
                src="/images/newlogo.webp"
                alt="Prominent Australia"
              />
            </Link>
            {/* Collapse Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-header-classic-collapse"
                aria-expanded="false"
                aria-controls="hs-header-classic"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-classic"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
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
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
            {/* End Collapse Button */}
          </div>
          {/* End Logo w/ Collapse Button */}
          {/* Collapse */}
          <div
            id="hs-header-classic"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-header-classic-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="space-x-4 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                <Link href="/" className="text-gray-700 hover:text-red-500">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-red-500"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-red-500"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-500"
                >
                  Contact Us
                </Link>
                <button className="bg-red-500 inline-flex items-center gap-x-2 text-white px-6 py-2 rounded-md hover:bg-red-600">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-x-2"
                  >
                    Order Now
                  </Link>
                </button>
                <Link href="/cart">
                  <CartIndicator count={itemCount} />
                </Link>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
