"use client";
import { createContext, useEffect, useState, useContext } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface ProductContextType {
  products: any[];
  isLoading: boolean;
  error: any;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(groq`*[_type=="product"]`);
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};