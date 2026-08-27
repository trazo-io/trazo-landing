import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 pt-[calc(var(--header-h,140px)+1.25rem)] pb-32 text-center lg:pb-48">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
