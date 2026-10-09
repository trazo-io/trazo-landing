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

  // Static pages carry NO lastModified. `new Date()` here was the build timestamp, the same
  // always-changed claim the blog entries above were fixed for, and Google ignores a
  // lastModified it finds unreliable for the whole sitemap. Add a real date when a page has one.
  return [
    {
      url: "https://www.trazo.io",
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
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/cog-pro-migration",
      lastModified: new Date("2026-10-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/common-osp",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/for-farmers",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/for-certifiers",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.trazo.io/methodology",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.trazo.io/blog",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.trazo.io/about",
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.trazo.io/contact",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogEntries,
    {
      url: "https://www.trazo.io/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.trazo.io/terms-of-service",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.trazo.io/cookie-policy",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
