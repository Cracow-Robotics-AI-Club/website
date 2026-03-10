import { ExternalLink } from "lucide-react"

const sponsors = [
  {
    name: "hub:raum Kraków",
    description: "Tech innovation hub focused on 5G, AI, IoT with makers' space and AR/VR room",
    url: "https://www.hubraum.com/",
  },
  {
    name: "Husarion",
    description: "Manufacturer of mobile robot platforms and autonomous driving solutions",
    url: "https://husarion.com/",
  },
  {
    name: "Weekly Robotics",
    description: "Newsletter championing open-source projects and robotics content since 2018",
    url: "https://weeklyrobotics.com/",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-center">
          Our Sponsors
        </h2>
        <p className="text-secondary-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Made possible by these amazing organizations supporting the robotics community
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/50 hover:bg-secondary-foreground/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-secondary-foreground group-hover:text-primary transition-colors">
                  {sponsor.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-secondary-foreground/50 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-secondary-foreground/70">
                {sponsor.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
