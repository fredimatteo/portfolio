// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://matteofredi.it",
      lastModified: new Date(),
    },
    {
      url: "https://matteofredi.it/about",
      lastModified: new Date(),
    },
    {
      url: "https://matteofredi.it/projects",
      lastModified: new Date(),
    },
    {
      url: "https://matteofredi.it/contact",
      lastModified: new Date(),
    },
  ];
}