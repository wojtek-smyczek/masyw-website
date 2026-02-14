export interface Contact {
  title: string;
  id: string;
  image: string[];
  mail: string;
  instagram: string;
  phone: string;
}

export const contact: Contact = {
  title: "",
  phone: "48999111888",
  id: "contact-info",
  image: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
  mail: "hello@masyw-objects.com",
  instagram: "@masyw_objects",
};
