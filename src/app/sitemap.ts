import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseUrl = "https://www.drdoglasgobbi.com.br";

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/images/image-doglas.png`,
        `${baseUrl}/images/captacao.webp`,
        `${baseUrl}/images/medico1.jpeg`,
        `${baseUrl}/images/medico3.jpeg`,
      ],
    },
  ];
}
