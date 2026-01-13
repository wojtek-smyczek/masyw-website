import Image from "next/image";

export default function Hero() {
  // 1. Przygotujmy sobie tekst w zmiennej, żeby go łatwo duplikować
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
          {/* KOPIA 1 */}
          <span className="sliding-text-desktop">{scrollingText}</span>

          {/* KOPIA 2 (Dla płynnej pętli) */}
          <span className="sliding-text-desktop">{scrollingText}</span>

          {/* KOPIA 3 (Na szerokie ekrany 4K, dla bezpieczeństwa) */}
          <span className="sliding-text-desktop">{scrollingText}</span>
        </div>
      </div>
    </section>
  );
}
