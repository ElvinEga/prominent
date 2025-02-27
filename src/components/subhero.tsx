"use client";

import Image from "next/image";
import React from "react";
interface HeroProps {
  title: string;
  bgImage: string;
}
const SubHero = ({ title = "Send An Inquiry", bgImage = "" }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Gradients */}
      <div aria-hidden="true" className="flex w-full h-full absolute inset-0">
        <Image
          className="w-full object-cover"
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="Prominent Australia"
        />
      </div>
      {/* End Gradients */}
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-24">
          <div className="max-w-7xl text-center mx-auto">
            {/* Title */}
            <div className="mt-24 max-w-7xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-7xl lg:text-6xl">
                {title}
              </h1>
            </div>
            {/* End Title */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
