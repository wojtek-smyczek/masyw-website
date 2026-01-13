import Image from "next/image";

export default function Hero() {
  const scrollingText =
    "MASYW — Solid. Heavy. Timeless. — We create monolithic forms that ground space. — The monumental weight of nature. — ";

  return (
    <section className="flex justify-center h-screen w-full relative">
      {/* ZDJECIE TLA */}
      <Image src="/hero1.jpg" alt="" fill className="object-cover" priority />

      {/* BLOK TEKSTU */}
      <div className="absolute top-20 w-full">
        {/* KONTENER ANIMACJI */}
        <div className="animate-scroll">
          <span className="sliding-text-desktop">{scrollingText}</span>

          <span className="sliding-text-desktop">{scrollingText}</span>

          <span className="sliding-text-desktop">{scrollingText}</span>
        </div>
      </div>
    </section>
  );
}
