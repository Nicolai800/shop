import React from "react";
import { artKissLogo, facebookLogo, instagramLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-300 m-[5%]">
      <div className="w-full max-w-screen-xl mx-auto p-[2%]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={artKissLogo}
              // height={150}
              // width={150}
              alt="ArtKiss Logo"
              className="w-[45%] h-[40%]"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
              Art Kiss
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 dark:text-gray-900">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                O nas
              </Link>
            </li>
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li> */}
            <p>
              <a
                href="mailto:artkissdesign@gmail.com?subject=Ask"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                artkissdesign@gmail.com
              </a>
            </p>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Kontakty
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <a
            href="https://www.facebook.com/p/Art-Kiss-Design-100066490130748/?_rdr"
            target="_blank"
          >
            <Image
              src={facebookLogo}
              alt="facebookLogo"
              className="w-16 h-16"
            ></Image>
          </a>
          <a
            href="https://www.instagram.com/_art_kiss_design/"
            target="_blank"
          >
            <Image
              src={instagramLogo}
              alt="instagramLogo"
              className="w-16 h-16"
            ></Image>
          </a>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline"></a>. All Rights Reserved.</span> */}
      </div>
    </footer>
  );
};

export default Footer;
