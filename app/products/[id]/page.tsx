import clsx from "clsx";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contactForm";
import ProductDetails from "@/components/ProductDetails";

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
        "pt-20",
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
      <div className="order-2 flex flex-col gap-1 md:order-1 md:flex-1">
        {product.image.map((imgSrc, index) => (
          <div
            key={index}
            className="relative h-screen w-full"
          >
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
      <ProductDetails product={product} />
    </section>
  );
}
