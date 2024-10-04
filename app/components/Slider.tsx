"use client";
import React, { useState } from "react";
import {
  firstSliderImg,
  secondSliderImg,
  thirdSliderImg,
  fourthdSliderImg,
} from "@/public";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Slider = () => {
  let sliders = [
    firstSliderImg,
    secondSliderImg,
    thirdSliderImg,
    fourthdSliderImg
  ];

  let [current, setCurrent] = useState<number>(0);
  const previosSlide = () => {
    current === 0 ? setCurrent(sliders.length - 1) : setCurrent(current - 1);
  };
  const nextSlide = () => {
    current === sliders.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  return (
    <div className="w-full m-auto pt-11">
      <div className="overflow-hidden relative rounded-xl mx-[5%] md:mx-[17%]">
        <div
          className="flex transition ease-out duration-40"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliders.map((el: any, index: number) => {
            return (
              <Image
                src={el}
                alt="Slider Image"
                width={1280}
                height={960}
                key={index}
              />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-[5%] text-white text-2xl  ">
          <button>
            <BsFillArrowLeftCircleFill onClick={previosSlide}/>
          </button>
          <button>
            <BsFillArrowRightCircleFill onClick={nextSlide} />
          </button>
        </div>
        <div className="absolute bottom-0 py-[5%] flex justify-center gap-[5%] w-full">
          {sliders.map((el: any, index: number) => {
            return (
              <div
                className={`rounded-full border border-gray-400 w-3 h-3 cursor-pointer ${index == current ?  "bg-white": "bg-gray-300"}`}
                key={index}
                onClick={()=>setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
