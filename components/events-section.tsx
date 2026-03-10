import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const pastEvents = [
  {
    id: 13,
    title: "Cracow Robotics & AI Meetup #13",
    date: "Monday, February 2, 2026",
    venue: "hub:raum Kraków, Przemysłowa 12",
    attendees: 30,
    description: "Talks by Szymon Rusiecki on 'The DARPA Triage Challenge and the Ethics of Algorithmic Decisions' and Marcin Gałczyński on 'Development of fitguardian - mechatronic mannequin'.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 12,
    title: "Cracow Robotics & AI Meetup x N-iX #12",
    date: "Monday, November 24, 2025",
    venue: "N-iX Poland, Zabłocie 43A/1st floor, Kraków",
    attendees: 33,
    description: "Special edition meetup co-hosted with N-iX Poland featuring industry talks on robotics and AI applications.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 11,
    title: "Cracow Robotics & AI Meetup #11",
    date: "Monday, July 7, 2025",
    venue: "hub:raum Kraków, Przemysłowa 12",
    attendees: 28,
    description: "Talks on using pyroboplan library for trajectory planning on robotic arms, and integrating AI agents with ROS 2. Stream supported by Cracow Linux Users Group.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 10,
    title: "Cracow Robotics & AI Meetup #10",
    date: "February 2025",
    venue: "hub:raum Kraków",
    attendees: 35,
    description: "Milestone 10th meetup celebrating our growing community with talks on latest robotics developments.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 9,
    title: "Cracow Robotics & AI Meetup #9",
    date: "Saturday, October 19, 2024",
    venue: "Kraków",
    attendees: 30,
    description: "Discussions on autonomous systems, mobile robotics, and the latest developments in ROS ecosystem.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 8,
    title: "Cracow Robotics & AI Meetup #8",
    date: "Monday, March 25, 2024",
    venue: "Techie's Space, Na Zjeździe 11, Kraków",
    attendees: 26,
    description: "Konrad Bujak on '10 business ideas around Generative AI' and Krzysztof Wojciechowski on 'Using ROS without installing ROS - Setting up development environments'.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 7,
    title: "Cracow Robotics & AI Meetup #7",
    date: "Monday, December 18, 2023",
    venue: "Techie's Space, Na Zjeździe 11, Kraków",
    attendees: 25,
    description: "Tomasz Chłeminiak on 'Developing Test Bench for a Space Rover: Case Study' and Bartłomiej Bonar on 'Path planning methods for every occasion'.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 6,
    title: "Cracow Robotics & AI Meetup #6",
    date: "2023",
    venue: "Kraków",
    attendees: 22,
    description: "Exploring ROS ecosystem, robotics applications, and networking with the local tech community.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 5,
    title: "Cracow Robotics & AI Meetup #5",
    date: "2023",
    venue: "Kraków",
    attendees: 20,
    description: "Continuing the tradition of bringing together robotics enthusiasts with talks on ROS and AI applications.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 4,
    title: "Cracow Robotics & AI Meetup #4",
    date: "Monday, May 22, 2023",
    venue: "Kraków",
    attendees: 18,
    description: "Talks about LIDARs and work done by Robotec.ai. Event was also streamed on YouTube for remote attendees.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
  },
  {
    id: 3,
    title: "Cracow Robotics & AI Meetup #3",
    date: "Monday, March 6, 2023",
    venue: "Kraków",
    attendees: 15,
    description: "Third CRAIC meeting - a stepping stone to grow the robotics community in Poland, bridging industry, academia, hobbyists and investors.",
    url: "https://www.meetup.com/cracow-robotics-ai-club/events/",
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
          Explore our history of {pastEvents.length} successful meetups bringing together robotics and AI enthusiasts since 2023
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
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
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
