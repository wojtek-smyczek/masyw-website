export interface Product {
  id: string;
  title: string;
  price: string;
  image: string[];
  description: string;
  materials: string;
  dimensions: string;
  delivery: string;
}

export const products: Product[] = [
  {
    id: "screen-holder",
    title: "MONITOR HOLDER",
    price: "100 EUR",
    image: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
    materials: "STAINLESS STEEL",
    dimensions: "100 x 100 x 100 CM",
    delivery: "6 WEEK",
    description:
      "Elevate your workspace with the MASYW monitor stand, a masterclass in industrial minimalism. Crafted from high-grade stainless steel, this robust holder doesn't just support your screen; it transforms your desk into a station of focus. Its raw, brushed finish captures light beautifully, while the solid construction ensures stability without compromising on style. Perfect for creative professionals who demand both functionality and uncompromising aesthetics in their daily workflow.",
  },
  {
    id: "pot",
    title: "POT",
    price: "120 EUR",
    image: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
    materials: "STAINLESS STEEL",
    dimensions: "100 x 100 x 100 CM",
    delivery: "6 WEEK",
    description:
      "Bring a touch of brutalist elegance to your greenery with the MASYW pot. Designed to create a striking contrast between organic life and cold, precision-engineered stainless steel, this vessel is more than just a planter—it is a piece of sculpture. The non-corrosive material makes it ideal for both indoor and outdoor settings, reflecting its surroundings to create a seamless integration with your space. Durable, heavy, and undeniably modern.",
  },
  {
    id: "stand",
    title: "STAND",
    price: "299 EUR",
    image: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
    materials: "STAINLESS STEEL",
    dimensions: "100 x 100 x 100 CM",
    delivery: "6 WEEK",
    description:
      "The MASYW stand is the ultimate statement piece for the contemporary interior. Imposing yet refined, this cubic structure serves as a versatile plinth for art, a minimalist side table, or a standalone architectural element. The stainless steel surface is treated to resist wear while maintaining a lustrous industrial sheen. It embodies the philosophy that furniture should last a lifetime, offering a timeless, heavy-duty solution for those who appreciate the beauty of raw materials.",
  },
];
