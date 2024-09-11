"use client";

import Link from "next/link";

import React, { Suspense } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { SERVER } from "@/constants/constants";

function Checkout() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  return (
    <div className="flex flex-col items-center pt-3 min-h-screen">
      <div
        className="
        underline
        text-blue-600
        hover:text-blue-800
        visited:text-purple-600"
      >
        <Link href="/">Home</Link>
      </div>

      {success === "true" && <h2 className="text-6xl font-bold">Success</h2>}

      {canceled === "true" && <h2 className="text-6xl font-bold">Cancelled</h2>}

      {success === null && canceled === null && (
        <div>
          <h1 className="text-6xl font-bold">Checkout</h1>

          <div className="py-5 flex flex-col">
            <Image
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
              width={200}
              height={200}
            />
            <div className="description">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>

            <form action={`${SERVER}/create-checkout-session`} method="POST">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPageWrapper() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}
