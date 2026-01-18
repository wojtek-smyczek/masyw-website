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
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
      <div className="flex flex-col gap-1">
        {/* LEWA KOLUMN */}
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
      <div className="relative pl-3 ">
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          {/* NAWIGACJA */}
          <div className="sticky top-3  flex flex-row gap-10 justify-self-end-safe">
            <span>MASYW / COLLECTION 01</span>
            <Link href="/products" className="">
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
