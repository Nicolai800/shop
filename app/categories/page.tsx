"use client";
import React from "react";
import { useProducts } from "@/app/context/ProductContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProductCategories() {
  const { products, isLoading, error } = useProducts();
  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <div className="mx-[5%] my-[1%] bg-gray-300 p-[1%] rounded-xl">
      <div className="text-center">Kategorie</div>
      <div className="border  flex justify-between gap-3">
        {products.map((product: any, index: number) => (
          <div key={index}>
            <Link href={`/categories/${product.category.toLowerCase()}`}>
              <Image
                // loader={() => urlFor(product.images[0]).url()}
                src={urlFor(product.images[0]).url()}
                alt="category foto"
                width={200}
                height={200}
              />
              <div className="text-center">{product.category} </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
