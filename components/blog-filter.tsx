"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

const categories = [
  "All",
  "Industry Insights",
  "Technology",
  "Transparency",
  "Guides",
];

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category Filter */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              cat === active
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && (
        <section className="mx-auto mt-14 max-w-7xl px-6">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:pr-12">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Read Article <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      {rest.length > 0 && (
        <section className="mx-auto mt-14 max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-3 flex-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                        Read More <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="mx-auto mt-14 max-w-7xl px-6 text-center">
          <p className="text-muted-foreground">
            No articles in this category yet.
          </p>
        </div>
      )}
    </>
  );
}
