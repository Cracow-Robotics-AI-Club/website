import { Badge } from "@/components/ui/badge"
import { Bot, Cpu, Wifi, Glasses, Lightbulb, Users } from "lucide-react"

const topics = [
  {
    icon: Bot,
    title: "Robotics",
    description: "From industrial robots to personal assistants and autonomous systems"
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and AI applications"
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Connected devices, smart sensors, and edge computing"
  },
  {
    icon: Glasses,
    title: "AR/VR Technologies",
    description: "Augmented and virtual reality applications in tech"
  },
  {
    icon: Lightbulb,
    title: "New Technologies",
    description: "Emerging tech trends and breakthrough innovations"
  },
  {
    icon: Users,
    title: "Community",
    description: "Networking with hobbyists, students, and industry professionals"
  }
]

export function About() {
  return (
    <section id="about" className="bg-[#F2D4AE] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-[#608C5E] text-white hover:bg-[#4f7a4d]">
              About Us
            </Badge>
            <h2 
              className="mb-4 text-3xl font-bold text-[#274040] md:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              What We&apos;re About
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#274040]/80">
              If you are interested in robotics, Artificial Intelligence, or new technologies like IoT and AR/VR, 
              this group is right for you! At our meetings, we raise both practical and theoretical issues. 
              So, if you decide to join our community you will be able to hear or present tutorials, 
              new algorithms presentations, or technology previews.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#608C5E]/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#608C5E]/10 transition-colors group-hover:bg-[#608C5E]">
                  <topic.icon className="h-7 w-7 text-[#608C5E] transition-colors group-hover:text-white" />
                </div>
                <h3 
                  className="mb-2 text-xl font-bold text-[#274040]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {topic.title}
                </h3>
                <p className="text-[#274040]/70">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[#274040] p-8 text-center md:p-12">
            <h3 
              className="mb-4 text-2xl font-bold text-[#F2D4AE] md:text-3xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Everyone is Welcome!
            </h3>
            <p className="mx-auto max-w-2xl text-[#F2D4AE]/80">
              No matter if you are a hobbyist, student, industrial practitioner, or academic scientist. 
              We want to meet with enthusiasts just like us! Join our community of 723+ members 
              and be part of the robotics and AI revolution in Kraków.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
