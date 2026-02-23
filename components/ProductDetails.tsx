"use client";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "./contactForm";
import { Product } from "@/types/product";

export default function ProductDetails({ product }: { product: Product }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative order-1 flex w-full flex-col pb-10 pl-3 md:sticky md:top-0 md:order-2 md:h-screen md:flex-1">
      <div className="relative flex flex-col justify-center md:top-0 md:h-screen">
        {/* NAWIGACJA */}
        <div className="top-3 flex flex-row gap-10">
          <span>MASYW / COLLECTION 01</span>
          <Link
            href="/#products"
            className="z-50 cursor-pointer"
          >
            [X]
          </Link>
        </div>
        {/* OPIS i TYTUL */}

        <h2 className="text-7xl">{product.title}</h2>
        <p className="pb-5 font-light uppercase">{product.description}</p>

        {/* SPECYFIKACJA */}
        <div>
          {/* TABELA */}
          <div className="grid grid-cols-2">
            <span className="text-gray-500">MATERIAL</span>
            <span className="">{product?.materials || "N/A"}</span>

            <span className="text-gray-500">DIMENSIONS</span>
            <span className="">{product?.dimensions || "N/A"}</span>

            <span className="text-gray-500">DELIVERY</span>
            <span className="">{product?.delivery || "N/A"}</span>

            <span className="text-gray-500">PRICE</span>
            <span className="">{product?.price || "N/A"}</span>
          </div>

          {/* PRZYCISK */}
          {!showForm && (
            <button onClick={() => setShowForm(true)}>
              {product.price === "COMING SOON" ? "OUT OF STOCK" : "REACH OUT"}
            </button>
          )}
          {/* FORMULARZ */}
          <div className="pt-10">{showForm && <ContactForm />}</div>
        </div>
      </div>
    </div>
  );
}
