import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Next Event
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            Cracow Robotics & AI Meetup #15
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            {"Join us for our 15th CRAIC meetup! Register on Luma to secure your spot."}
          </p>
        </div>

        {/* Luma Event Embed */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-2xl border border-border">
            <iframe
              src="https://luma.com/embed/event/evt-TJursm5r59Zj9as/simple"
              width="100%"
              height="650"
              frameBorder="0"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
              className="w-full"
            />
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="bg-[#608C5E] hover:bg-[#4a7248] text-white">
                <a href="mailto:cracow.robotics@gmail.com">
                  Become a Speaker
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
