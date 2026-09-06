import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog posts carry their REAL publication date. Every entry previously reported
  // `new Date()`, i.e. the build timestamp, so all 20 URLs claimed to change on every
  // deploy — a signal crawlers discount entirely, which threw away the one honest
  // freshness hint the renewal-season posts actually have.
  const blogEntries = posts.map((post) => ({
    url: `https://www.trazo.io/blog/${post.slug}`,
    lastModified: new Date(post.datePublishedISO),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: "https://www.trazo.io",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      // the four-minute walkthrough: the URL every LinkedIn first comment and email reply carries
      url: "https://www.trazo.io/demo",
      lastModified: new Date("2026-09-06"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/cog-pro-migration",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/common-osp",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/for-farmers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/for-certifiers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/methodology",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.trazo.io/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.trazo.io/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.trazo.io/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogEntries,
    {
      url: "https://www.trazo.io/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.trazo.io/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.trazo.io/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
