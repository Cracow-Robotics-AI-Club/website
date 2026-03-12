import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic2, Trophy } from "lucide-react"

const speakers = [
  { name: "Maciej Aleksandrowicz", talks: 2, topics: ["Behavioral Trees", "ICRA Conference Highlights"] },
  { name: "Adam Krawczyk", talks: 2, topics: ["O3DE ROS2 Simulations", "AI Agents with ROS 2"] },
  { name: "Szymon Bednorz", talks: 2, topics: ["Planetary Rover Kalman", "Lunar Robotics"] },
  { name: "Marcin Gałczyński", talks: 1, topics: ["Mechatronic Mannequin Development"] },
  { name: "Krzysztof Wojciechowski", talks: 1, topics: ["ROS Development Environments"] },
  { name: "Adam Serafin", talks: 1, topics: ["Introduction to Robotics"] },
  { name: "Grzegorz Bartyzel", talks: 1, topics: ["Reinforcement Learning on Real Robots"] },
  { name: "Szymon Rusiecki", talks: 1, topics: ["DARPA Triage Challenge & Ethics"] },
  { name: "Katarzyna Kijania", talks: 1, topics: ["Indoor-Outdoor Localization"] },
  { name: "Andrzej Bedychaj", talks: 1, topics: ["Biological and Artificial Intelligence"] },
  { name: "Maciej Skwara", talks: 1, topics: ["Robotic Manipulator Path Planning"] },
  { name: "Guillaume Beuzeboc", talks: 1, topics: ["Robotic Deployment with Ubuntu"] },
  { name: "Jan Brzyk", talks: 1, topics: ["Lunar Robotics"] },
  { name: "Jakub Jurzak", talks: 1, topics: ["Drone Technology"] },
  { name: "Grigorij Dudnik", talks: 1, topics: ["LLMs on Single Board Computers"] },
  { name: "Konrad Bujak", talks: 1, topics: ["Generative AI Business Ideas"] },
  { name: "Tomasz Chłeminiak", talks: 1, topics: ["Space Rover Test Bench"] },
  { name: "Bartłomiej Bonar", talks: 1, topics: ["Path Planning Methods"] },
  { name: "Jacek Smoluch", talks: 1, topics: ["AI in Industrial Robots"] },
  { name: "Filipe Cerveira Pinto", talks: 1, topics: ["ROS 2 Lifecycle Management"] },
  { name: "Maciej Stępień", talks: 1, topics: ["Low-cost Autonomous Robots"] },
  { name: "Tomasz Wrona", talks: 1, topics: ["Stable Diffusion"] },
  { name: "Hubert Zwiercan", talks: 1, topics: ["LIDAR Technology"] },
  { name: "Piotr Rybicki", talks: 1, topics: ["GPU LiDAR Simulation"] },
  { name: "Hubert Szolc", talks: 1, topics: ["Dynamic Vision Sensors"] },
  { name: "Paweł Graczak", talks: 1, topics: ["Human-Robot Interaction"] },
  { name: "Nina Bażela", talks: 1, topics: ["Human-Robot Interaction"] },
  { name: "Marcin Kordas", talks: 1, topics: ["Cloud Computing for Robot Control"] },
  { name: "Miłosz Łagan", talks: 1, topics: ["Planetary Rover Kalman"] },
  { name: "Dariusz Biega", talks: 1, topics: ["Astorino Robot Arm"] },
  { name: "Marek Niewiadomski", talks: 1, topics: ["Astorino Robot Arm"] },
]

// Sort by number of talks (descending)
const sortedSpeakers = [...speakers].sort((a, b) => b.talks - a.talks)

export function HallOfFameSection() {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-[#608C5E]">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Hall of Fame
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the amazing speakers who have shared their knowledge and expertise at CRAIC meetups.
            {" "}<span className="font-semibold text-[#608C5E]">{speakers.length} speakers</span> have given talks across our events.
          </p>
        </div>

        {/* Top Speakers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-[#608C5E]/20">
              <Mic2 className="w-4 h-4 text-[#608C5E]" />
            </div>
            Top Contributors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSpeakers.filter(s => s.talks >= 2).map((speaker) => (
              <div 
                key={speaker.name} 
                className="bg-[#274040] rounded-xl p-6 text-center hover:bg-[#1f3333] transition-colors"
              >
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#608C5E] text-white text-sm font-medium mb-3">
                  {speaker.talks} talks
                </div>
                <h4 className="text-xl font-bold text-[#F2D4AE] mb-3">
                  {speaker.name}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {speaker.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs text-[#F2D4AE]/70"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Speakers Grid */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-muted">
              <Mic2 className="w-4 h-4 text-muted-foreground" />
            </div>
            All Speakers ({sortedSpeakers.filter(s => s.talks === 1).length})
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedSpeakers.filter(s => s.talks === 1).map((speaker) => (
              <div 
                key={speaker.name} 
                className="bg-[#274040] rounded-xl p-4 text-center hover:bg-[#1f3333] transition-colors"
              >
                <h4 className="font-semibold text-[#F2D4AE] mb-2 text-sm">
                  {speaker.name}
                </h4>
                <span className="text-xs text-[#F2D4AE]/60">
                  {speaker.topics[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
