"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-white p-3 z-500">
      {/* Desktop Links */}

      {/* LOGO */}
      <div className="relative z-50 text-2xl md:text-3xl uppercase tracking-tight hover:scale-105 transition-all duration-200 cursor-pointer">
        MASYW
      </div>

      {/* LINKI */}
      <div className="hidden md:flex gap-8">
        <Link href="/products" className="link-masyw-desktop">
          Products.
        </Link>
        <Link href="/contact" className="link-masyw-desktop">
          Contact.
        </Link>
        <Link href="/info" className="link-masyw-desktop">
          Info.
        </Link>
      </div>

      {/* MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="link-masyw relative z-50 md:hidden"
      >
        {isOpen ? "SHUT ME UP" : "MENU"}
      </button>

      {/* ROZWIJANE MENU */}
      {isOpen && (
        <div className=" gap-10 absolute top-0  w-full h-screen flex flex-col justify-center bg-masyw-dark">
          <Link
            href="/products"
            className="link-masyw"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="link-masyw"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/info"
            className="link-masyw"
            onClick={() => setIsOpen(false)}
          >
            Info
          </Link>
        </div>
      )}
    </nav>
  );
}
