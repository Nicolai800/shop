import { headerImg, secondHeaderImg } from "@/public";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[450px] flex items-center">
      <div className="h-full  md:max-w-[1024px] max-w-[600px] flex justify-center items-center m-auto relative">
        <div className="object-cover">
          <Image src={headerImg} height={100} width={1400} alt="header image" />
        </div>
        <div className="absolute mt-[300px]">
          <Image
            src={secondHeaderImg}
            height={100}
            width={700}
            alt="second geader image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
