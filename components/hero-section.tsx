import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Next Event
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            Cracow Robotics & AI Meetup #14
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Join us for another exciting meetup featuring talks on autonomous systems, 
            ROS 2 developments, and the latest in AI-powered robotics.
          </p>
        </div>

        {/* Featured Event Card */}
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-2xl border border-border">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  Upcoming
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  41 Attendees
                </Badge>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>March 15, 2026 · Saturday</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>6:30 PM CET</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>hub:raum Kraków, Przemysłowa 12</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Sponsored by Weekly Robotics, Husarion & hub:raum</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://www.meetup.com/cracow-robotics-ai-club/" target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:cracow.robotics@gmail.com">
                    Become a Speaker
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
