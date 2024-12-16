import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://partner-biznes.ru",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://partner-biznes.ru/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://partner-biznes.ru/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://partner-biznes.ru/contacts",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // {
    //   url: "https://partner-biznes.ru/doc/privacy-policy",
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 1,
    // },
  ];
}
