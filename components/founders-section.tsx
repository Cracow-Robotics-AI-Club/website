import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Globe } from "lucide-react"

const founders = [
  {
    name: "Adam Serafin",
    bio: "Robotics software engineer with years of experience in ROS programming, working on mobility, sensor fusion and control.",
    image: "/images/speaker-1.jpg",
    linkedin: "https://www.linkedin.com/in/adam-serafin/",
    github: "https://github.com/aserafin",
    website: null,
  },
  {
    name: "Grzegorz Bartyzel",
    bio: "PhD student focusing on robotic software engineering and reinforcement learning applications.",
    image: "/images/speaker-2.jpg",
    linkedin: "https://www.linkedin.com/in/gbartyzel/",
    github: "https://github.com/gbartyzel",
    website: null,
  },
  {
    name: "Krzysztof Wojciechowski",
    bio: "Experienced in ROS development environments with background at LAAS-CNRS, MSc from AGH University of Krakow.",
    image: "/images/speaker-3.jpg",
    linkedin: "https://www.linkedin.com/in/krzy-woj/",
    github: "https://github.com/krzywoj",
    website: null,
  },
  {
    name: "Maciej Aleksandrowicz",
    bio: "PhD student and robotics software engineer at AGH University of Krakow, focusing on robotics research.",
    image: "/images/speaker-1.jpg",
    linkedin: "https://www.linkedin.com/in/maciej-aleksandrowicz/",
    github: null,
    website: null,
  },
]

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-background sun-faded grain-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            The passionate robotics enthusiasts who started Cracow Robotics & AI Club to build a vibrant community in Poland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder) => (
            <Card key={founder.name} className="bg-card border-2 border-[#274040]/20 overflow-hidden aged-paper corner-rust relative">
              <div className="aspect-square relative bg-muted w-full">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {founder.bio}
                </p>
                <div className="flex items-center gap-3">
                  {founder.linkedin && (
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {founder.github && (
                    <Link
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${founder.name} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {founder.website && (
                    <Link
                      href={founder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${founder.name}'s website`}
                    >
                      <Globe className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
