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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const itemCount = useCartStore((state) => state.items.length);
  const [userName, setUserName] = useState<string | null>(null);

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

  async function fetchUser() {
    try {
      const res = await fetch("/api/user", { credentials: "include" });

      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await res.json();
      if (data.email) {
        setUserName(data.email);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function handleLogout() {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setUserName(null); // Clear username on logout
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  }
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
                onClick={() => {
                  const navbar = document.getElementById("navbar");
                  if (navbar) {
                    navbar.classList.toggle("hidden");
                  }
                }}
              >
                <MenuIcon size={24} />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
            {/* End Collapse Button */}
          </div>
          {/* End Logo w/ Collapse Button */}
          {/* Collapse */}
          <div
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

                {userName ? (
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 inline-flex items-center gap-x-2 text-white px-6 py-2 rounded-md hover:bg-red-600"
                  >
                    Logout
                  </button>
                ) : (
                  <button className="bg-red-500 inline-flex items-center gap-x-2 text-white px-6 py-2 rounded-md hover:bg-red-600">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-x-2"
                    >
                      Login
                    </Link>
                  </button>
                )}
                <Link href="/cart">
                  <CartIndicator count={itemCount} />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="hidden w-full justify-between max-lg:bg-white max-lg:mt-1 max-lg:px-4 max-lg:py-4 max-lg:h-auto max-lg:overflow-auto  transition-all duration-500 delay-200"
            id="navbar"
          >
            <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4  flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row ">
              <li>
                <Link
                  href="/"
                  className="text-foreground text-lg font-normal hover:text-red-500 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground text-lg font-normal hover:text-red-500 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-foreground text-lg font-normal hover:text-red-500 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground text-lg font-normal hover:text-red-500 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-foreground w-full text-lg font-normal hover:text-red-500 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base"
                >
                  <CartIndicator count={itemCount} />
                </Link>
              </li>
            </ul>
            <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
              <Link
                href="/login"
                className="bg-red-500 text-white rounded-full cursor-pointer font-normal text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-red-700"
              >
                Login
              </Link>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
