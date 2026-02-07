import clsx from "clsx";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductElements({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  //   albo const {id} = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }
  return (
    <section
      className={clsx(
        "pt-10",
        "md:pt-0",
        "flex",
        "flex-col",
        "md:flex-row",
        "min-h-screen",
        "bg-black",
        "text-white",
      )}
    >
      {/* LEWA KOLUMN */}
      <div className="order-2 md:order-1 md:flex-1 flex flex-col gap-1">
        {product.image.map((imgSrc, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={imgSrc}
              alt={product.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* PRAWA KOLUMNA */}
      <div className=" order-1 md:order-2 md:flex-1 md:sticky md:h-screen md:top-0 flex flex-col relative pl-3 w-full">
        <div className="relative md:top-0 md:h-screen flex flex-col justify-center">
          {/* NAWIGACJA */}
          <div className=" top-3  flex flex-row gap-10 justify-self-end-safe">
            <span>MASYW / COLLECTION 01</span>
            <Link href="/#products" className="z-50 cursor-pointer">
              [X]
            </Link>
          </div>
          {/* OPIS i TYTUL */}
          <div className="">
            <h2 className="text-7xl">{product.title}</h2>
            <p className="font-light uppercase pb-5 ">{product.description}</p>
          </div>
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
            <button className="">
              {product.price === "COMING SOON" ? "OUT OF STOCK" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
