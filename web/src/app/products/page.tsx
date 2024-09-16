import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ProductPage } from "@shared/products/schemas";

async function Products() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store",
  });

  const data: ProductPage[] = await res.json();

  return (
    <div className="flex flex-col items-center pt-3 min-h-screen px-5">
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
        <h1 className="text-6xl font-bold py-3">Products</h1>

        <div className="grid grid-cols-3 gap-5">

          {data.map((item, index) => (
            <div key={index}>
              <Image
                src={item.images[0]}
                alt="The cover of Stubborn Attachments"
                width={200}
                height={200}
              />
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-gray-500 text-sm">{item.productName}</p>
                <p className="text-xs">${item.price / 100}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
