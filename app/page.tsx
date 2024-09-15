import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Header, Products } from "./components";

export default async function Home() {
  
  return (
    <>
    <Header/>
    <Products/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
