import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const pastEvents = [
  {
    id: 13,
    title: "Cracow Robotics & AI Meetup #13",
    date: "February 2, 2026",
    venue: "T-Mobile/Hubraum, Przemysłowa 12",
    attendees: 23,
    topics: ["ROS 2", "Mobile Robots", "Computer Vision"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/305609653/",
  },
  {
    id: 12,
    title: "Cracow Robotics & AI Meetup x N-iX #12",
    date: "November 24, 2025",
    venue: "N-iX Poland, Zabłocie 43A",
    attendees: 33,
    topics: ["AI in Industry", "Autonomous Systems", "Edge Computing"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/304314168/",
  },
  {
    id: 11,
    title: "Cracow Robotics & AI Meetup #11",
    date: "September 15, 2025",
    venue: "hub:raum Kraków",
    attendees: 28,
    topics: ["Drone Technology", "SLAM", "Sensor Fusion"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/303198456/",
  },
  {
    id: 10,
    title: "Cracow Robotics & AI Meetup #10",
    date: "June 20, 2025",
    venue: "hub:raum Kraków",
    attendees: 35,
    topics: ["Machine Learning", "Robot Navigation", "5G Robotics"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/301987234/",
  },
  {
    id: 9,
    title: "Cracow Robotics & AI Meetup #9",
    date: "April 10, 2025",
    venue: "T-Mobile/Hubraum",
    attendees: 30,
    topics: ["Humanoid Robots", "Reinforcement Learning", "Simulation"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/300876123/",
  },
  {
    id: 8,
    title: "Cracow Robotics & AI Meetup #8",
    date: "February 5, 2025",
    venue: "hub:raum Kraków",
    attendees: 26,
    topics: ["IoT Protocols", "Smart Sensors", "ROS Basics"],
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/299765012/",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Past Events
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our history of successful meetups bringing together robotics and AI enthusiasts
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <Link
              key={event.id}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      #{event.id}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.attendees}
                      </span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {event.topics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-0"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
