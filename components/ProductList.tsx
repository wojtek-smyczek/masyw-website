import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProductList() {
  const textOnTop =
    "MASYW  create monolithic forms that do not merely occupy space they ground it. Solid. Heavy. Timeless. MASYW brings the monumental weight of nature into your interior, offering an immovable foundation in a world of constant flux. ";

  return (
    <section
      id="products"
      className="border-test min-h-screen w-full bg-white"
    >
      {/* PRODUCTS */}
      <div className="grid grid-cols-1 gap-1 bg-white md:grid-cols-3">
        {/* IMG + OPIS */}
        {products.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="group flex cursor-pointer flex-col gap-1"
          >
            {/* IMG */}
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={item.image[0]}
                alt={item.title}
                fill
                className={`object-cover ${
                  item.price === "COMING SOON" ? "blur-2xl" : ""
                }`}
              />
            </div>
            {/* Teksty */}
            <div className="flex flex-col justify-between border-black">
              {/* 3. WSTRZYKUJEMY TEKST Z TABLICY */}
              <span className="product-masyw">{item.title}</span>
              <span className="product-masyw">{item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
