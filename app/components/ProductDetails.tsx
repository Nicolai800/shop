"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = ({ currentProduct }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full md:py-16">
      <div className="current-product-details-container">
        <div>
          <div className="h-[450px] flex items-center mb-[25px]">
            <Image
              loader={() => urlFor(currentProduct.images[index]).url()}
              src={urlFor(currentProduct.images[index]).url()}
              alt={currentProduct.images[index]}
              width={350}
              height={350}
              className="object-cover mx-auto"
            />
          </div>

          <div className="flex gap-1 justify-center">
            {currentProduct.images?.map((item: any, imgIndex: number) => (
              <Image
                loader={() => urlFor(currentProduct.images[imgIndex]).url()}
                src={urlFor(currentProduct.images[imgIndex]).url()}
                alt={currentProduct.images[0]}
                width={220}
                height={100}
                className="object-cover mx-auto h-32 border rounded-xl hover:cursor-pointer"
                onClick={() => setIndex(imgIndex)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">{currentProduct.name}</div>
            <div className="text-xl font-medium">{currentProduct.price} zl</div>
          </div>
          <div className="flex gap-2 items-center">
            <h3>Quantity</h3>
            <p className="quantity-desc flex items-center">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">1</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button className="btn add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
