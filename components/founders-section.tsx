import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Globe } from "lucide-react"

const founders = [
  {
    name: "Adam Serafin",
    image: "/images/founders/adaser.jpg",
    linkedin: "https://www.linkedin.com/in/adam-serafin/",
    github: "https://github.com/Serafadam",
    website: "https://www.serafadam.com",
  },
  {
    name: "Grzegorz Bartyzel",
    image: "/images/founders/grzbae.jpg",
    linkedin: "https://www.linkedin.com/in/gbartyzel/",
    github: "https://github.com/gbartyzel",
    website: null,
  },
  {
    name: "Krzysztof Wojciechowski",
    image: "/images/founders/krzywoj.jpg",
    linkedin: "https://www.linkedin.com/in/krzy-woj/",
    github: "https://github.com/kotochleb",
    website: null,
  },
  {
    name: "Maciej Aleksandrowicz",
    image: "/images/founders/macale.jpg",
    linkedin: "https://www.linkedin.com/in/maciej-aleksandrowicz/",
    github: "https://github.com/macmacal",
    website: null,
  },
]

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-background">
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
            <Card key={founder.name} className="bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative bg-muted w-full h-64">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 text-center flex flex-col flex-1 justify-between">
                <h3 className="text-base font-semibold text-card-foreground whitespace-nowrap">
                  {founder.name}
                </h3>
                <div className="flex items-center justify-center gap-3 mt-3">
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
