import React from "react";
import { artKissLogo } from "@/public";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-300 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={artKissLogo}
              height={150}
              width={150}
              alt="ArtKiss Logo"
              className="w-auto h-auto"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
              Art Kiss
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 dark:text-gray-900">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About Us
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li> */}
            <p><a href="mailto:artkissdesign@gmail.com?subject=Ask" target="_blank" className="hover:underline me-4 md:me-6">gmail</a></p>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline"></a>. All Rights Reserved.</span> */}
      </div>
    </footer>
  );
};

export default Footer;
