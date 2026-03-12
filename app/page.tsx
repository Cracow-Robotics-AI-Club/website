import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { FoundersSection } from "@/components/founders-section"
import { GallerySection } from "@/components/gallery-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <FoundersSection />
        <GallerySection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  )
}
