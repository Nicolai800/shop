"use client";
import React, { useEffect, useState } from "react";
import {
  firstSliderImage,
  secondSliderImage,
  thirdSliderImage,
  fourthSliderImage,
} from "@/public";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Slider = () => {
  const sliders = [
    firstSliderImage,
    secondSliderImage,
    thirdSliderImage,
    fourthSliderImage,
  ];

  let [current, setCurrent] = useState<number>(0);
  
  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full m-auto">
      <div className="overflow-hidden relative rounded-xl m-[5%] md:mx-[25%]">
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliders.map((el: any, index: number) => {
            return (
              <Image
                src={el}
                alt="Slider Image"
                // width={1000}
                // height={800}
                key={index}
                className="object-fill"
              />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-[5%] text-white text-2xl">
          <button>
            <BsFillArrowLeftCircleFill onClick={previousSlide} />
          </button>
          <button>
            <BsFillArrowRightCircleFill onClick={nextSlide} />
          </button>
        </div>
        <div className="absolute bottom-0 py-[5%] flex justify-center gap-[5%] w-full">
          {sliders.map((el: any, index: number) => {
            return (
              <div
                className={`rounded-full border border-gray-400 w-3 h-3 cursor-pointer ${index == current ? "bg-white" : "bg-gray-300"}`}
                key={index}
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
