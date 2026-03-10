import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LatestEvent } from "@/components/latest-event"
import { About } from "@/components/about"
import { PastEvents } from "@/components/past-events"
import { Speakers } from "@/components/speakers"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LatestEvent />
      <About />
      <PastEvents />
      <Speakers />
      <Gallery />
      <Footer />
    </main>
  )
}
