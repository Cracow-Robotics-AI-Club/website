import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"

export function LatestEvent() {
  return (
    <section className="bg-[#F2D4AE] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-[#A64941] text-white hover:bg-[#8a3d36]">
            Upcoming Event
          </Badge>
          <h2 
            className="text-3xl font-bold text-[#274040] md:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Don&apos;t Miss Our Next Meetup
          </h2>
        </div>

        <Card className="mx-auto max-w-5xl overflow-hidden border-none bg-white shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src="/images/event-1.jpg"
                alt="Cracow Robotics & AI Meetup"
                fill
                className="object-cover"
              />
              <div className="absolute left-4 top-4">
                <Badge className="bg-[#608C5E] text-lg font-bold text-white">
                  #13
                </Badge>
              </div>
            </div>
            
            <CardContent className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#608C5E] text-[#608C5E]">
                  AI
                </Badge>
                <Badge variant="outline" className="border-[#608C5E] text-[#608C5E]">
                  Robotics
                </Badge>
                <Badge variant="outline" className="border-[#608C5E] text-[#608C5E]">
                  Networking
                </Badge>
              </div>
              
              <h3 
                className="mb-4 text-2xl font-bold text-[#274040] md:text-3xl"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Cracow Robotics & AI Meetup #13
              </h3>
              
              <div className="mb-6 space-y-3 text-[#274040]/80">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#608C5E]" />
                  <span>Monday, March 24, 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#608C5E]" />
                  <span>6:30 PM CET</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#608C5E]" />
                  <span>Tech Hub Kraków, Przemysłowa 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#608C5E]" />
                  <span>45 attendees already registered</span>
                </div>
              </div>

              <p className="mb-6 text-[#274040]/70">
                Join us for an evening of fascinating talks on the latest advancements in AI and robotics. 
                Network with fellow enthusiasts and industry professionals.
              </p>
              
              <Button 
                size="lg"
                className="w-full bg-[#A64941] text-white hover:bg-[#8a3d36] sm:w-auto"
                asChild
              >
                <a 
                  href="https://www.meetup.com/cracow-robotics-ai-club/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Register Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
