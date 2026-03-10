import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const speakers = [
  {
    name: "Dr. Marek Kowalski",
    role: "AI Research Lead",
    company: "AGH University of Science",
    image: "/images/speaker-1.jpg",
    topics: ["Machine Learning", "Neural Networks", "Computer Vision"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Anna Nowak",
    role: "Robotics Engineer",
    company: "N-iX Poland",
    image: "/images/speaker-2.jpg",
    topics: ["Robot Kinematics", "Autonomous Systems", "ROS"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Prof. Jan Wiśniewski",
    role: "Director of Innovation",
    company: "Kraków Tech Hub",
    image: "/images/speaker-3.jpg",
    topics: ["IoT", "Industry 4.0", "Edge Computing"],
    linkedin: "#",
    twitter: "#"
  }
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-[#F2D4AE] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-[#274040] text-[#F2D4AE] hover:bg-[#1f3333]">
            Featured Speakers
          </Badge>
          <h2 
            className="mb-4 text-3xl font-bold text-[#274040] md:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Learn from the Experts
          </h2>
          <p className="mx-auto max-w-2xl text-[#274040]/70">
            Our meetups feature talks from industry leaders, researchers, and practitioners 
            who share their knowledge and experiences in robotics and AI.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-none bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#274040]/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <a 
                    href={speaker.linkedin}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#274040] transition-colors hover:bg-[#608C5E] hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={speaker.twitter}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#274040] transition-colors hover:bg-[#608C5E] hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 
                  className="mb-1 text-xl font-bold text-[#274040]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {speaker.name}
                </h3>
                <p className="mb-1 text-sm font-medium text-[#608C5E]">
                  {speaker.role}
                </p>
                <p className="mb-4 text-sm text-[#274040]/60">
                  {speaker.company}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {speaker.topics.map((topic, topicIndex) => (
                    <Badge 
                      key={topicIndex} 
                      variant="outline" 
                      className="border-[#274040]/20 text-xs text-[#274040]/70"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#274040]/70">
            Interested in speaking at our meetup? 
            <a 
              href="mailto:cracow.robotics.ai@gmail.com" 
              className="ml-1 font-medium text-[#A64941] underline underline-offset-2 hover:text-[#8a3d36]"
            >
              Get in touch with us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
