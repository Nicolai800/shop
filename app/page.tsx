import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Header } from "./components";

export default async function Home() {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);

  return (
    <>
    <Header/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
