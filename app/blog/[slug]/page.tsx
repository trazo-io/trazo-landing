import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { posts } from "@/lib/blog-data"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    // "| Trazo", not "| Trazo Blog" — these post titles already run 60-95 chars, so
    // the suffix is the first thing SERP truncation eats; five wasted characters on
    // a word that adds nothing is five characters of headline lost.
    title: post.seoTitle ?? `${post.title} | Trazo`,
    description: post.metaDescription ?? post.excerpt,
    // Required explicitly. Next inherits the ROOT `openGraph` object wholesale when a
    // page does not declare one — it does NOT fold this page's `title`/`description`
    // into it. Without this block every post shared as the homepage card, which is
    // exactly what breaks when a certifier pastes a post into a newsletter.
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublishedISO,
      images: [{ url: post.image, alt: post.title }],
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  const currentIdx = posts.findIndex((p) => p.slug === slug)
  const relatedPosts = posts.filter((_, i) => i !== currentIdx).slice(0, 3)

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.trazo.io${post.image}`,
    // ISO 8601, not the display string — schema.org types these as Date.
    datePublished: post.datePublishedISO,
    dateModified: post.datePublishedISO,
    author: {
      '@type': 'Person',
      name: 'Oscar Munoz',
      jobTitle: 'Founder & CEO',
      url: 'https://www.linkedin.com/in/oscarmunoz',
      worksFor: {
        '@type': 'Organization',
        name: 'Trazo',
        url: 'https://www.trazo.io',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trazo',
      url: 'https://www.trazo.io',
      logo: { '@type': 'ImageObject', url: 'https://www.trazo.io/images/logo-mark-512.png', width: 512, height: 512 },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.trazo.io/blog/${post.slug}`,
    },
    url: `https://www.trazo.io/blog/${post.slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Trazo Blog',
      url: 'https://www.trazo.io/blog',
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Navbar />
      <main className="pb-20">
        {/* Hero */}
        <div className="relative">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="relative md:absolute md:inset-x-0 md:bottom-0 md:translate-y-1/2">
            <div className="mx-auto max-w-3xl px-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-12">
                <Link
                  href="/blog"
                  className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft size={14} />
                  Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
                  {post.title}
                </h1>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl px-6 md:mt-64">
          <div className="prose-custom">
            <article dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-10">
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              Ready to build transparency into your farm?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Start documenting your farming practices and earn consumer trust with Trazo.
            </p>
            <a
              href="https://app.trazo.io/auth/signup"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start free
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Share */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} />
              All Articles
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Share:
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.trazo.io/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="Share on Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.trazo.io/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="Share on LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mx-auto mt-20 max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">{related.category}</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="mt-3 flex-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {related.title}
                    </h3>
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
      </main>
      <Footer />
    </div>
  )
}
