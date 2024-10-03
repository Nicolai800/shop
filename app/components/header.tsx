"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";

const Header = () => {
  // const variants = {
  //   hidden: { x: 0, y: 70, opacity: 0.25 },
  //   visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
    
  // };
  return (
    <Slider/>
    // <div className="header-section">
    //   <div className="header-container">
    //     <div className="object-cover">
    //       <Image src={headerImg} height={100} width={1400} alt="header image" />
    //     </div>
    //     <div className="absolute md:mt-[300px] mt-[150px]">
    //       <motion.div initial="hidden" animate="visible" variants={variants}>
    //         <Image
    //           src={secondHeaderImg}
    //           height={100}
    //           width={700}
    //           alt="second geader image"
    //         />
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
