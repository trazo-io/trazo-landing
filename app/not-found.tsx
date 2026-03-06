import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center px-6 pt-24 pb-20">
        <div className="text-center">
          <p className="text-6xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold text-foreground">
            Page not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button className="mt-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/">
              Back to Home
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
