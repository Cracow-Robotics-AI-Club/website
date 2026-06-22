

const speakers = [
  { name: "Maciej Aleksandrowicz", talks: 2, topics: ["Behavioral Trees", "ICRA Conference Highlights"] },
  { name: "Adam Krawczyk", talks: 2, topics: ["O3DE ROS2 Simulations", "AI Agents with ROS 2"] },
  { name: "Szymon Bednorz", talks: 2, topics: ["Planetary Rover Kalman", "Lunar Robotics"] },
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
  { name: "Maciej Sadowski", talks: 1, topics: ["From Simulation to Reality"] },
  { name: "Krzysztof Tylka-Suleja", talks: 1, topics: ["What LLMs Cannot Know Before Acting"] } 
]

// Sort alphabetically by surname (last word in name)
const sortedSpeakers = [...speakers].sort((a, b) => {
  const surnameA = a.name.split(' ').pop() || ''
  const surnameB = b.name.split(' ').pop() || ''
  return surnameA.localeCompare(surnameB)
})

export function HallOfFameSection() {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Speakers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-[#608C5E]">{speakers.length} speakers</span> have shared their knowledge and expertise at CRAIC meetups.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {sortedSpeakers.map((speaker) => (
            <div
              key={speaker.name}
              className="relative bg-gradient-to-b from-[#3a5a5a] to-[#1f3333] rounded-lg px-6 py-4 flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)] border border-[#4a6a6a]/30 hover:shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              {/* Side rivets */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#d4a574] via-[#b8956a] to-[#8b6914] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.5)] border border-[#6b4423]/30">
                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#e8c496] to-[#a67c52] opacity-60" />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#d4a574] via-[#b8956a] to-[#8b6914] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.5)] border border-[#6b4423]/30">
                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#e8c496] to-[#a67c52] opacity-60" />
              </div>
              <div className="absolute inset-[3px] rounded-md border border-[#4a6a6a]/20 pointer-events-none" />
              <h4 className="font-semibold text-[#F2D4AE] mb-2 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                {speaker.name}
              </h4>
              <div className="flex flex-col items-center gap-1">
                {speaker.topics.map((topic) => (
                  <span key={topic} className="text-xs text-[#F2D4AE]/60 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
