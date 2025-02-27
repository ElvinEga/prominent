"use client";

import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Gradients */}
      <div aria-hidden="true" className="flex w-full h-full absolute inset-0">
        <Image
          className="w-full object-cover"
          layout="fill"
          objectFit="cover"
          src={"/images/hero1.jpg"}
          alt="Prominent Australia"
        />
      </div>
      {/* End Gradients */}
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-24">
          <div className="max-w-7xl text-center mx-auto">
            <div className="flex flex-col">
              <h1 className="inline-block text-4xl font-medium text-red-600">
                PROMINENT
              </h1>
              <h1 className="inline-block text-4xl font-medium text-red-600">
                AUSTRALIA
              </h1>
              <p className="inline-block text-lg font-medium text-yellow-600">
                Best Powder Coating Supplier
              </p>
            </div>
            {/* Title */}
            <div className="mt-24 max-w-7xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                You Choose The Color and We Create The Coating For You
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-4xl mx-auto">
              <p className="text-lg text-gray-800">
                Unleash Your Creativity with Custom Coatings Choose Any Color,
                and We&apos;ll Bring Your Vision to Life! Our expert team is
                ready to craft the perfect coating solution tailored to your
                unique style and needs. Quality, durability, and precision in
                every shade you desire.
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="py-3 px-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Buy Now
                <svg
                  className="shrink-0 size-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* End Buttons */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="bg-red-600 h-2 w-2 rounded-full" />
              <button className="bg-gray-400 h-2 w-2 rounded-full" />
              <button className="bg-gray-400 h-2 w-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
