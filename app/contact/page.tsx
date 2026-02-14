import { contact } from "@/data/contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col bg-black pt-20 md:flex-row md:pt-0">
      {/* LEWA */}
      <div className="order-2 flex flex-col gap-1 md:order-1 md:flex-1">
        {contact.image.map((imgSrc, index) => (
          <div
            key={index}
            className="relative h-screen w-full"
          >
            <Image
              alt={contact.title}
              src={imgSrc}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* PRAWA */}
      <div className="relative order-1 flex w-full flex-col pb-10 pl-3 md:sticky md:top-0 md:order-2 md:h-screen md:flex-1">
        <div className="top-3 flex flex-col justify-center md:h-screen">
          {/* TYTUL */}
          <h2 className="text-7xl">CONTACT</h2>

          {/* TABELA */}
          <div className="grid grid-cols-2">
            <span className="text-gray-500">MAIL</span>
            <span className="">{contact.mail}</span>

            <span className="text-gray-500">PHONE</span>
            <span className="">{contact.phone}</span>

            <span className="text-gray-500">IG</span>
            <span className="">{contact.instagram}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
