"use client";

import React from "react";
interface ContactProps {
  title: string;
  subtitle: string;
}
const Contact = ({
  title = "Send An Inquiry",
  subtitle = "We'd love to talk about how we can help you.",
}: ContactProps) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-1 text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="mt-12 w-full mx-auto">
        {/* Card */}
        <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-8 text-xl font-semibold text-gray-800">
            Fill in the form
          </h2>
          <form>
            <div className="grid gap-4 lg:gap-6">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-firstname-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="hs-firstname-contacts-1"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block w-full border-red-500 border rounded-lg text-sm focus:border-red-600 focus:ring-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-lastname-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="hs-lastname-contacts-1"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full border-red-500 border rounded-lg text-sm focus:border-red-600 focus:ring-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-email-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-red-500 border rounded-lg text-sm focus:border-red-600 focus:ring-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-phone-number-1"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border-red-500 border rounded-lg text-sm focus:border-red-600 focus:ring-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label
                  htmlFor="hs-about-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Details
                </label>
                <textarea
                  id="hs-about-contacts-1"
                  name="hs-about-contacts-1"
                  rows={4}
                  className="py-3 px-4 block w-full border-red-500 border rounded-lg text-sm focus:border-red-600 focus:ring-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="w-64 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send inquiry
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
};

export default Contact;
