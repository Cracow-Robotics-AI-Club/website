import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const pastEvents = [
  {
    id: 13,
    title: "Cracow Robotics & AI Meetup #13",
    date: "02.02.2026",
    venue: "hub:raum Kraków, Przemysłowa 12",
    description: "DARPA Triage Challenge ethics and mechatronic mannequin development.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/313069242/",
  },
  {
    id: 12,
    title: "Cracow Robotics & AI Meetup x N-iX #12",
    date: "24.11.2025",
    venue: "N-iX, Zabłocie 43A/1st floor",
    description: "Entropy in AI and biological intelligence, RL on real robots.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/312034245/",
  },
  {
    id: 11,
    title: "Cracow Robotics & AI Meetup #11",
    date: "07.07.2025",
    venue: "hub:raum Kraków, Przemysłowa 12",
    description: "Path planning with pyroboplan and AI agents in ROS 2.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/308595867/",
  },
  {
    id: 10,
    title: "Cracow Robotics & AI Meetup #10",
    date: "03.03.2025",
    venue: "GPC Global Technology Center, Lubicz 23/a",
    description: "Robotic deployment with Ubuntu and sending robots to the Moon.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/306255703/",
  },
  {
    id: 9,
    title: "Cracow Robotics & AI Meetup #9",
    date: "04.11.2024",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Drone technology trends and LLM-brained robots on Raspberry Pi.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/304101202/",
  },
  {
    id: 8,
    title: "Cracow Robotics & AI Meetup #8",
    date: "25.03.2024",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Generative AI business ideas and ROS development environments.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/299752656/",
  },
  {
    id: 7,
    title: "Cracow Robotics & AI Meetup #7",
    date: "18.12.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Space rover test bench development and path planning methods.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/297237461/",
  },
  {
    id: 6,
    title: "Cracow Robotics & AI Meetup #6",
    date: "23.10.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "AI in industrial robots and ROS 2 lifecycle management.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/295826149/",
  },
  {
    id: 5,
    title: "Cracow Robotics & AI Meetup #5",
    date: "10.07.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Low-cost autonomous robots, Stable Diffusion, and ICRA highlights.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/294224247/",
  },
  {
    id: 4,
    title: "Cracow Robotics & AI Meetup #4",
    date: "22.05.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "LIDAR precision and O3DE simulations with ROS 2.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/292848103/",
  },
  {
    id: 3,
    title: "Cracow Robotics & AI Meetup #3",
    date: "06.03.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Dynamic Vision Sensors and human-robot interaction trust studies.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/290878476/",
  },
  {
    id: 2,
    title: "Cracow Robotics & AI Meetup #2",
    date: "09.01.2023",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "Behavioral Trees for robot strategies and cloud computing for control.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/289966177/",
  },
  {
    id: 1,
    title: "Cracow Robotics & AI Meetup #1",
    date: "21.11.2022",
    venue: "Techies Kraków, Na Zjeździe 11",
    description: "First meetup: intro to robotics, Kalman rover, and Astorino robot arm.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/289598292/",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-muted/30 distressed-bg scratched">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Past Events
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our history of {pastEvents.length} successful meetups bringing together robotics and AI enthusiasts since November 2022
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
              <Card className="bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all h-full aged-paper paint-chip worn-edges">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      #{event.id}
                    </Badge>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="truncate">{event.venue}</span>
                    </div>
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
