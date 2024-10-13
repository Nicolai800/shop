"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function Category() {
  const { category } = useParams();
  return (
    <div>
      <div>{category}</div>
    </div>
  );
}
