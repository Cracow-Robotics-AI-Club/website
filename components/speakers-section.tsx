import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const speakers = [
  {
    name: "Mat Sadowski",
    role: "Robotics Consultant",
    company: "Weekly Robotics",
    image: "/images/speaker-1.jpg",
    topics: ["ROS", "Mobile Robots", "Open Source"],
    bio: "Founder of Weekly Robotics newsletter, championing open-source robotics projects since 2018.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Anna Kowalczyk",
    role: "AI Research Lead",
    company: "Husarion",
    image: "/images/speaker-2.jpg",
    topics: ["Autonomous Navigation", "SLAM", "Deep Learning"],
    bio: "Leading AI research at Husarion, specializing in autonomous mobile robot navigation systems.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Tomasz Nowak",
    role: "Senior Software Engineer",
    company: "hub:raum",
    image: "/images/speaker-3.jpg",
    topics: ["5G", "Edge Computing", "IoT"],
    bio: "Building next-generation connectivity solutions for robotics and IoT applications.",
    linkedin: "#",
    twitter: "#",
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Featured Speakers
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Learn from industry experts and researchers pushing the boundaries of robotics and AI
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="bg-card border-border overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-secondary-foreground">{speaker.name}</h3>
                  <p className="text-sm text-secondary-foreground/80">{speaker.role}</p>
                  <p className="text-sm text-primary font-medium">{speaker.company}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4">{speaker.bio}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {speaker.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={speaker.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${speaker.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={speaker.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${speaker.name}'s Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
