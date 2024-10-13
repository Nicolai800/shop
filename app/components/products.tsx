"use client"
import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Card from "./Card";
import { useProducts } from "../context/ProductContext";

const Products = () => {
  // const products = await client.fetch(groq`*[_type=="product"]`,);
  // console.log(products);
  const { products, isLoading, error } = useProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="w-full py-12">
      <div className="container">
        <div className="py-4">
          <h2 className="text-3xl font-bold">Oferty</h2>
        </div>
        <div className="grid grid-colos-1  sm:grid-cols-2 md:grid-cols-4 mt-6 gap-3">
          {products.map((product: any, index: number) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
