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
    <nav className="fixed top-0 left-0 z-500 flex w-full items-center justify-between p-3 text-white">
      {/* Desktop Links */}
      <Link
        className="relative z-50 cursor-pointer text-2xl tracking-tight transition-all duration-200 hover:scale-105 md:text-2xl"
        href="/"
      >
        masyw
      </Link>

      {/* LINKI */}
      <div className="hidden gap-8 md:flex">
        <Link
          href="/#products"
          onClick={handleScroll}
          className="link-masyw-desktop"
        >
          Objects.
        </Link>
        <Link
          href="/contact"
          className="link-masyw-desktop"
        >
          Contact.
        </Link>
        <Link
          href="/about"
          className="link-masyw-desktop"
        >
          About.
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
        <div className="bg-masyw-dark absolute top-0 left-0 flex h-screen w-full flex-col justify-center">
          <Link
            href="/#products"
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
