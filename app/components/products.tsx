import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Products = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);
  
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-32">
      <div className="container">
        <div className="py-4">
          <h2 className="text-3xl font-bold">Best Selling</h2>
        </div>
        <div className="grid grid-colos-1  sm:grid-cols-2 md:grid-cols-4 mt-6">
          {products.map((product: any, index: number) => (
            <div className="bg-white pt-10 drop-shadow-md rounded-lg">
              <Image
                src={urlFor(product.images && product.images[0]).url()}
                alt={product.slug}
                width={220}
                height={100}
                className="object-cover h-32 mx-auto"
              />
              <div className="text-center py-10">
                <span className="text-2xl font-bold">{product.name}</span>
              <p className="text-xl text-gray-500 font-bold">{product.price} zl</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
