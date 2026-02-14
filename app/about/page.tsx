import { about } from "@/data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex h-full flex-col bg-black md:flex-row">
      {/* LEWA */}
      <div className="order-2 flex flex-col gap-1 md:order-1 md:flex-1">
        {about.image.map((imgSrc) => (
          <div
            key={imgSrc}
            className="relative h-screen w-full"
          >
            <Image
              alt=""
              src={imgSrc}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* PRAWA */}
      <div className="relative order-1 flex w-full pb-10 pl-3 md:sticky md:top-0 md:order-2 md:h-screen md:flex-1 md:pt-0">
        <div className="top-3 flex min-h-screen flex-col justify-center">
          <h2 className="text-7xl">STORY</h2>

          {/* TABELA */}
          <div className="grid grid-cols-1">
            <span className="">{about.description}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
