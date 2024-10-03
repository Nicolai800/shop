'use client'
import React, { useState } from "react";
import {
  firstSliderImg,
  secondSliderImg,
  thirdSliderImg,
  fourthdSliderImg,
  fithtSliderImg,
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
    fourthdSliderImg,
    fithtSliderImg,
  ];

  let [current, setCurrent]=useState<number>(0);
  let previosSlide = ()=>{
    current === 0 ? setCurrent(sliders.length -1) : setCurrent(current-1)
  }
  let nextSlide = ()=>{
    current === sliders.length -1 ? setCurrent(0) : setCurrent(current+1)
  }
  return (
    <div className="w-[20%] m-auto pt-11 ">
      <div className="overflow-hidden relative rounded-xl">
        <div className={`flex transition ease-out duration-40`}
        style={
          {transform: `translateX(-${current*100}%)`}
        }
        >
          {sliders.map((el: any) => {
            return (
              <Image src={el} alt="Slider Image" width={500} height={300} />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-white text-2xl">
          <button >
            <BsFillArrowLeftCircleFill  onClick={previosSlide}/>
          </button>
          <button>
            <BsFillArrowRightCircleFill onClick={nextSlide}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
