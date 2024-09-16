import Link from "next/link";
import React from "react";

async function Products() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store",
  });

  const data = await res.json();
  

  console.log(data, "data");

  return (
    <div className="flex flex-col items-center pt-3 min-h-screen">
      <div>
        <div
          className="
        underline
        text-blue-600
        hover:text-blue-800
        visited:text-purple-600"
        >
          <Link href="/">Home</Link>
        </div>
        <h1 className="text-6xl font-bold">Products</h1>
      </div>
    </div>
  );
}

export default Products;
