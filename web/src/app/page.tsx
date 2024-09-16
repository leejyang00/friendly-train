"use client";

import Link from "next/link";
import React from "react";

function Home() {
  return (
    <main className="flex flex-col items-center pt-3 min-h-screen">
      <h1 className="text-6xl font-bold">Welcome to Home Page</h1>
      <p className="mt-2 text-xl font-medium">
        08 Sept 2024 - Directory to the multiple pages for payments using
        Stripe for test
      </p>

      <div>
        <ul>
          <li
            className="underline text-blue-600  hover:text-blue-800 visited:text-purple-600"
            style={{ cursor: "pointer" }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="underline text-blue-600  hover:text-blue-800 visited:text-purple-600"
            style={{ cursor: "pointer" }}
          >
            <Link href="/dashboard">Dashboard - SSR</Link>
          </li>
          <li
            className="underline text-blue-600  hover:text-blue-800 visited:text-purple-600"
            style={{ cursor: "pointer" }}
          >
            <Link href="/checkout">Checkout</Link>
          </li>
          <li
            className="underline text-blue-600  hover:text-blue-800 visited:text-purple-600"
            style={{ cursor: "pointer" }}
          >
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
