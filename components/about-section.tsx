import { Bot, Cpu, Wifi, Glasses, Sparkles, Users } from "lucide-react"

const topics = [
  { icon: Bot, label: "Robotics" },
  { icon: Cpu, label: "Artificial Intelligence" },
  { icon: Wifi, label: "IoT" },
  { icon: Glasses, label: "AR/VR" },
  { icon: Sparkles, label: "Emerging Tech" },
  { icon: Users, label: "Community" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            About Our Community
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            If you are interested in robotics, Artificial Intelligence, or new technologies 
            like IoT and AR/VR, this group is right for you! At our meetings, we raise both 
            practical and theoretical issues. Whether you&apos;re a hobbyist, student, industrial 
            practitioner, or academic scientist — everyone is welcome to join our community 
            of enthusiasts!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {topics.map((topic) => (
              <div
                key={topic.label}
                className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-card-foreground">{topic.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-secondary">
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">784</div>
              <div className="text-sm text-secondary-foreground/70">Members</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary">
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">14</div>
              <div className="text-sm text-secondary-foreground/70">Meetups</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary">
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">4.7</div>
              <div className="text-sm text-secondary-foreground/70">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
