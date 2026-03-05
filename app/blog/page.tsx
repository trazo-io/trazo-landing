import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { posts } from "@/lib/blog-data"

const categories = ["All", "Technology", "Agriculture", "Best Practices", "Industry Insights"]

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Blogs & Insights
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Agricultural Transparency Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Guides, insights, and best practices for agricultural transparency and premium market positioning.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
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

        {/* Blog Grid */}
        <section className="mx-auto mt-14 max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
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
                      <span className="font-semibold text-primary">{post.category}</span>
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

        {/* Newsletter CTA */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="rounded-2xl border border-border bg-secondary/30 px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Stay Up to Date
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Get the latest insights on agricultural transparency delivered to your inbox monthly.
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
