import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#274040]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-robotics.jpg"
          alt="Robotics meetup event"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#274040]/70 via-[#274040]/50 to-[#274040]" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-[#608C5E] text-white hover:bg-[#4f7a4d]">
            Kraków, Poland
          </Badge>
          
          <h1 
            className="mb-6 text-balance text-4xl font-bold tracking-tight text-[#F2D4AE] md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Cracow Robotics & AI Club
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[#F2D4AE]/80 md:text-xl">
            Join our community of robotics and AI enthusiasts! Whether you&apos;re a hobbyist, student, 
            industrial practitioner, or academic scientist - everyone is welcome.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-[#F2D4AE]/70">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#608C5E]" />
              <span>723 Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#608C5E]" />
              <span>12 Events</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#608C5E]" />
              <span>4.7 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#608C5E]" />
              <span>Kraków</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="bg-[#A64941] px-8 text-lg text-white hover:bg-[#8a3d36]"
              asChild
            >
              <a href="https://www.meetup.com/cracow-robotics-ai-club/" target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#608C5E] bg-transparent px-8 text-lg text-[#608C5E] hover:bg-[#608C5E] hover:text-white"
              asChild
            >
              <a href="#events">
                View Events
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#F2D4AE"
          />
        </svg>
      </div>
    </section>
  )
}
