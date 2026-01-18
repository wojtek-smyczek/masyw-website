"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathName === "/") {
      e.preventDefault();
      const el = document.getElementById("products");

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-white p-3 z-500">
      {/* Desktop Links */}
      <Link
        className="relative z-50 text-2xl md:text-2xl uppercase tracking-tight hover:scale-105 transition-all duration-200 cursor-pointer"
        href="/"
      >
        MASYW
      </Link>

      {/* LINKI */}
      <div className="hidden md:flex gap-8">
        <Link
          href="/#products"
          onClick={handleScroll}
          className="link-masyw-desktop"
        >
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
