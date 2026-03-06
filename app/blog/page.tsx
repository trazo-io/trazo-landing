import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { BlogFilter } from "@/components/blog-filter"
import { posts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Blogs & insights
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Agricultural Transparency Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Guides, insights, and best practices for agricultural transparency and premium market positioning.
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
              Get the latest insights on agricultural transparency delivered to your inbox monthly.
            </p>
            <NewsletterForm variant="block" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
