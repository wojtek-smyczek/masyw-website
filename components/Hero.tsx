"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const scrollingText =
    "MASYW — Solid. Heavy. Timeless. — We create monolithic forms that ground space. — The monumental weight of nature. — ";

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative flex h-screen w-full justify-center overflow-hidden">
      {/* ZDJECIE TLA */}
      {/* <Image
        src="/hero1.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      /> */}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/video/1.mp4"
          type="video/mp4"
        />
      </video>

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
