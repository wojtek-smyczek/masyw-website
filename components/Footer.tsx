import Link from "next/link";
import { contact } from "@/data/contact";

export default function Footer() {
  const footerSections = [
    {
      title: "CONTACT",
      links: [
        { label: contact.phone, href: "/contact" },
        { label: contact.mail, href: "/contact" },
      ],
    },
    {
      title: "INFO",
      links: [{ label: "ABOUT", href: "/about" }],
    },
    {
      title: "SOCIALS",
      links: [
        { label: "INSTAGRAM", href: "https://instagram.com" },
        { label: "FACEBOOK", href: "https://facebook.com" },
      ],
    },
  ];

  const bigText = "MASYW-MASYW-MASYW-MASYW-";

  return (
    <footer className="w-full bg-white overflow-hidden pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
        {footerSections.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="product-masyw text-black font-bold ">
              {item.title}
            </h3>
            <ul className="flex flex-col ">
              {item.links.map((link, i) => (
                <li className="product-masyw cursor-pointer" key={i}>
                  {link.href ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    link.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full">
        <div className="animate-scroll whitespace-nowrap overflow-hidden">
          <span className="text-7xl font-black text-black uppercase">
            {bigText}
          </span>
          <span className="text-7xl font-black uppercase text-black">
            {bigText}
          </span>
          <span className="text-7xl font-black uppercase text-black">
            {bigText}
          </span>
        </div>
      </div>
    </footer>
  );
}
