import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { BlogFilter } from "@/components/blog-filter";
import { posts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organic Recordkeeping Guides | Trazo",
  description:
    "Renewal deadlines, Organic System Plan updates, inspection prep and NOP recordkeeping — written for certified organic growers.",
  openGraph: {
    title: "Organic Recordkeeping Guides",
    description:
      "Renewal deadlines, Organic System Plan updates, inspection prep and NOP recordkeeping — for certified organic growers.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Trazo Blog: Organic Recordkeeping Guides",
  description:
    "Guides on organic certification recordkeeping, renewal season deadlines, Organic System Plan updates and inspection preparation for certified US farms.",
  url: "https://www.trazo.io/blog",
  isPartOf: {
    "@type": "WebSite",
    name: "Trazo",
    url: "https://www.trazo.io",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.trazo.io/blog/${post.slug}`,
      name: post.title,
    })),
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Blogs & insights
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Organic Recordkeeping Guides
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              What your certifier asks for, when it is due, and how to have it
              ready — written for certified organic growers.
            </p>
          </div>
        </section>

        <BlogFilter posts={posts} />

        {/* Newsletter CTA */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="rounded-2xl border border-border bg-secondary/30 px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Stay Up to Date
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Renewal deadlines, recordkeeping guides and NOP rule changes, in
              your inbox monthly.
            </p>
            <NewsletterForm variant="block" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
