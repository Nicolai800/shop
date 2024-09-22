"use client";
import { ProductDetails } from "@/app/components";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

const page = () => {
  const { slug } = useParams();
  const [currentProduct, setCurrentProduct] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(groq`*[_type=="product"]`);
        const foundProduct = products.find(
          (product: any) => product.slug.current == slug
        );
        setCurrentProduct(foundProduct);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug]);

  if (loading) return <div>Loading...</div>;

  return <ProductDetails currentProduct={currentProduct} />;
};

export default page;
