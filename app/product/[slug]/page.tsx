"use client";
import React from "react";
import { ProductDetails } from "@/app/components";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const page = async () => {
  const { slug } = useParams();
  const products = await client.fetch(groq`*[_type=="product"]`);
  const currentProduct = products.find(
    (currentProduct: any) => currentProduct.slug.current == slug
  );

  return <ProductDetails currentProduct={currentProduct} />;
};

export default page;
