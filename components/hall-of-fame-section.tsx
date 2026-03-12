import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic2, Trophy } from "lucide-react"

const speakers = [
  {
    name: "Maciej Aleksandrowicz",
    talks: 2,
    topics: ["Behavioral Trees", "ICRA Conference Highlights"],
    role: "PhD Student at AGH UST, Robotics Software Engineer",
  },
  {
    name: "Adam Krawczyk",
    talks: 2,
    topics: ["O3DE ROS2 Simulations", "AI Agents with ROS 2"],
    role: "Co-founder of Wisevision, Robotics Engineer",
  },
  {
    name: "Marcin Gałczyński",
    talks: 2,
    topics: ["Mechatronic Mannequin Development"],
    role: "Team Lead at Int4 AG",
  },
  {
    name: "Krzysztof Wojciechowski",
    talks: 1,
    topics: ["ROS Development Environments"],
    role: "Research Engineer at CNRS LAAS, CRAIC Co-organizer",
  },
  {
    name: "Adam Serafin",
    talks: 1,
    topics: ["Introduction to Robotics"],
    role: "Robotics Software Engineer at Luxonis",
  },
  {
    name: "Grzegorz Bartyzel",
    talks: 1,
    topics: ["Reinforcement Learning on Real Robots"],
    role: "AI Staff Engineer at Stellantis",
  },
  {
    name: "Szymon Rusiecki",
    talks: 1,
    topics: ["DARPA Triage Challenge & Ethics"],
    role: "Team Chiron at Carnegie Mellon University",
  },
  {
    name: "Katarzyna Kijania",
    talks: 1,
    topics: ["Indoor-Outdoor Localization"],
    role: "ROS Developer, PhD Student at PIMOT",
  },
  {
    name: "Andrzej Bedychaj",
    talks: 1,
    topics: ["Biological and Artificial Intelligence"],
    role: "AI Researcher",
  },
  {
    name: "Maciej Skwara",
    talks: 1,
    topics: ["Robotic Manipulator Path Planning"],
    role: "AI Researcher at Airob",
  },
  {
    name: "Guillaume Beuzeboc",
    talks: 1,
    topics: ["Robotic Deployment with Ubuntu"],
    role: "Robotics Engineer at Canonical",
  },
  {
    name: "Jan Brzyk",
    talks: 1,
    topics: ["Lunar Robotics"],
    role: "Co-founder & CGO at CleverHive Space",
  },
  {
    name: "Szymon Bednorz",
    talks: 2,
    topics: ["Planetary Rover Kalman", "Lunar Robotics"],
    role: "Co-founder & CTO at CleverHive Space",
  },
  {
    name: "Jakub Jurzak",
    talks: 1,
    topics: ["Drone Technology"],
    role: "R&D at Nirby and Airo Start-Ups",
  },
  {
    name: "Grigorij Dudnik",
    talks: 1,
    topics: ["LLMs on Single Board Computers"],
    role: "CTO at takzyli.pl, Clean Coder Author",
  },
  {
    name: "Konrad Bujak",
    talks: 1,
    topics: ["Generative AI Business Ideas"],
    role: "Generative AI Engineer & Product Manager",
  },
  {
    name: "Tomasz Chłeminiak",
    talks: 1,
    topics: ["Space Rover Test Bench"],
    role: "Software Engineer at BorgWarner",
  },
  {
    name: "Bartłomiej Bonar",
    talks: 1,
    topics: ["Path Planning Methods"],
    role: "PhD Student at AGH UST",
  },
  {
    name: "Jacek Smoluch",
    talks: 1,
    topics: ["AI in Industrial Robots"],
    role: "Product Leader at Mitsubishi Electric",
  },
  {
    name: "Filipe Cerveira Pinto",
    talks: 1,
    topics: ["ROS 2 Lifecycle Management"],
    role: "Robotics Engineer",
  },
  {
    name: "Maciej Stępień",
    talks: 1,
    topics: ["Low-cost Autonomous Robots"],
    role: "Robotics Software Engineer at Husarion",
  },
  {
    name: "Tomasz Wrona",
    talks: 1,
    topics: ["Stable Diffusion"],
    role: "ML Research Engineer at Let's Enhance",
  },
  {
    name: "Hubert Zwiercan",
    talks: 1,
    topics: ["LIDAR Technology"],
    role: "Operations Director at Husarion, CEO at ROSISLAND",
  },
  {
    name: "Piotr Rybicki",
    talks: 1,
    topics: ["GPU LiDAR Simulation"],
    role: "Senior Software Developer at Robotec.ai",
  },
  {
    name: "Hubert Szolc",
    talks: 1,
    topics: ["Dynamic Vision Sensors"],
    role: "PhD Student at AGH UST",
  },
  {
    name: "Paweł Graczak",
    talks: 1,
    topics: ["Human-Robot Interaction"],
    role: "Student of Social Informatics at AGH UST",
  },
  {
    name: "Nina Bażela",
    talks: 1,
    topics: ["Human-Robot Interaction"],
    role: "Marketing Manager at Husarion",
  },
  {
    name: "Marcin Kordas",
    talks: 1,
    topics: ["Cloud Computing for Robot Control"],
    role: "Founder at DeveloperZord",
  },
  {
    name: "Miłosz Łagan",
    talks: 1,
    topics: ["Planetary Rover Kalman"],
    role: "AGH Space Systems",
  },
  {
    name: "Dariusz Biega",
    talks: 1,
    topics: ["Astorino Robot Arm"],
    role: "Astor",
  },
  {
    name: "Marek Niewiadomski",
    talks: 1,
    topics: ["Astorino Robot Arm"],
    role: "Astor",
  },
]

// Sort by number of talks (descending)
const sortedSpeakers = [...speakers].sort((a, b) => b.talks - a.talks)

export function HallOfFameSection() {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-muted/30 grain-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-[#A64941]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground stencil-text">
              Hall of Fame
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the amazing speakers who have shared their knowledge and expertise at CRAIC meetups.
            {" "}<span className="font-semibold">{speakers.length} speakers</span> have given talks across our events.
          </p>
        </div>

        {/* Top Speakers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Mic2 className="w-5 h-5 text-primary" />
            Top Contributors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSpeakers.filter(s => s.talks >= 2).map((speaker) => (
              <Card 
                key={speaker.name} 
                className="bg-card border-2 border-[#A64941]/30 aged-paper corner-rust relative overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-card-foreground">
                      {speaker.name}
                    </h4>
                    <Badge className="bg-[#A64941] text-white border-0">
                      {speaker.talks} talks
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {speaker.role}
                  </p>
                  <div className="flex flex-wrap gap-1">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Speakers Grid */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Mic2 className="w-5 h-5 text-muted-foreground" />
            All Speakers ({sortedSpeakers.filter(s => s.talks === 1).length})
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedSpeakers.filter(s => s.talks === 1).map((speaker) => (
              <Card 
                key={speaker.name} 
                className="bg-card border border-border aged-paper relative overflow-hidden"
              >
                <CardContent className="p-4">
                  <h4 className="font-medium text-card-foreground mb-1 text-sm">
                    {speaker.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                    {speaker.role}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs border-muted-foreground/30"
                  >
                    {speaker.topics[0]}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
