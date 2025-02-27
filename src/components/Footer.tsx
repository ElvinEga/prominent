"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link
            className="flex-none font-semibold text-xl text-red-600 focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <Image
              className="w-48"
              src="/images/nlogo.webp"
              width={200}
              height={100}
              alt="Prominent Australia"
            />
          </Link>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            © 2025 Prominent Australia.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 uppercase">
            Our Specialization
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Heat Resistance Powder Upto 650° C
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Custom color manufacturer
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Epoxy Powder
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Epoxy Polyester Powder
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Polyurethane Powder
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Pure Polyester Powder
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 uppercase">
            Know Us
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Powder Shades
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 uppercase">
            Reach Us
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                1300 182 099 / +61455985394
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                support@prominentaustralia.com.au
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-gray-800"
                href="#"
              >
                1024 Ann Street, Fortitude Valley Queensland 4006
              </Link>
            </p>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </footer>
  );
};

export default Footer;
