import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, CheckCircle } from "lucide-react"

const pastEvents = [
  {
    id: 12,
    title: "Cracow Robotics & AI Meetup x N-iX #12",
    date: "November 24, 2025",
    location: "N-iX Poland, Zabłocie 43A",
    attendees: 33,
    topics: ["AI in Industry", "Computer Vision", "Panel Discussion"]
  },
  {
    id: 11,
    title: "Cracow Robotics & AI Meetup #11",
    date: "July 7, 2025",
    location: "T-Mobile/Hubraum, Przemysłowa 12",
    attendees: 61,
    topics: ["LLM Applications", "Robotic Process Automation", "Demo Session"]
  },
  {
    id: 10,
    title: "Cracow Robotics & AI Meetup #10",
    date: "March 3, 2025",
    location: "GPC Global Technology Center, Lubicz 23/a",
    attendees: 59,
    topics: ["Edge AI", "IoT Sensors", "Hands-on Workshop"]
  },
  {
    id: 9,
    title: "Cracow Robotics & AI Meetup #9",
    date: "November 4, 2024",
    location: "Techie's, Na Zjeździe 11",
    attendees: 48,
    topics: ["Autonomous Systems", "AI Ethics", "Networking"]
  },
  {
    id: 8,
    title: "Cracow Robotics & AI Meetup #8",
    date: "June 15, 2024",
    location: "Google Campus, Powstańców 17",
    attendees: 52,
    topics: ["Machine Learning", "Robot Kinematics", "Q&A Session"]
  },
  {
    id: 7,
    title: "Cracow Robotics & AI Meetup #7",
    date: "February 20, 2024",
    location: "Hubraum Kraków",
    attendees: 44,
    topics: ["Neural Networks", "Embedded Systems", "Live Demo"]
  }
]

export function PastEvents() {
  return (
    <section id="events" className="bg-[#274040] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-[#608C5E] text-white hover:bg-[#4f7a4d]">
            Past Events
          </Badge>
          <h2 
            className="mb-4 text-3xl font-bold text-[#F2D4AE] md:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Our Meetup History
          </h2>
          <p className="mx-auto max-w-2xl text-[#F2D4AE]/70">
            Explore our past events and the topics we&apos;ve covered. Each meetup brings new insights 
            and opportunities to connect with the community.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <Card 
              key={event.id} 
              className="group overflow-hidden border-none bg-[#33352F] transition-all hover:shadow-xl hover:shadow-[#608C5E]/20"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Badge className="bg-[#608C5E]/20 text-[#608C5E]">
                    #{event.id}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-[#608C5E]">
                    <CheckCircle className="h-4 w-4" />
                    <span>Completed</span>
                  </div>
                </div>

                <h3 
                  className="mb-4 text-lg font-bold text-[#F2D4AE] transition-colors group-hover:text-[#608C5E]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {event.title}
                </h3>

                <div className="mb-4 space-y-2 text-sm text-[#F2D4AE]/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#608C5E]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#608C5E]" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#608C5E]" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.topics.map((topic, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-[#F2D4AE]/30 text-xs text-[#F2D4AE]/70"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
