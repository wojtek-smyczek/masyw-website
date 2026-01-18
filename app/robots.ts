import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/", // To mówi: "Zabranim wszystkim robotom wchodzić na każdą podstronę"
    },
  };
}
