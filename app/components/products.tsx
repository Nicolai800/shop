import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Card from "./Card"

const Products = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  // console.log(products);

  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-32">
      <div className="container">
        <div className="py-4">
          <h2 className="text-3xl font-bold">Best Selling</h2>
        </div>
        <div className="grid grid-colos-1  sm:grid-cols-2 md:grid-cols-4 mt-6 gap-2">
          {products.map((product: any, index: number) => (
            <Card product={product} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
