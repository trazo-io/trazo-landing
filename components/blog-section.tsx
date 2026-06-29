import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { posts } from "@/lib/blog-data"

const homepageSlugs = [
  "consumers-dont-trust-food-labels",
  "perverse-incentive-problem",
  "organic-record-keeping-guide",
  "qr-codes-farm-to-consumer-trust",
]
const displayPosts = homepageSlugs
  .map((slug) => posts.find((p) => p.slug === slug))
  .filter(Boolean) as typeof posts

export function BlogSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Resources & Insights
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Learn How Transparency Builds
              <br className="hidden md:block" /> Buyer Confidence
            </h2>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-border text-foreground hover:bg-secondary"
            asChild
          >
            <Link href="/blog">
              Explore All Blogs
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 flex-1 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all group-hover:gap-2">
                      Read More <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
