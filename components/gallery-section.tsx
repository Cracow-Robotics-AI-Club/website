import Image from "next/image"

const galleryImages = [
  {
    src: "/images/events/P1012361.JPG",
    alt: "CRAIC community gathering",
  },
  {
    src: "/images/events/P1013629.JPG",
    alt: "Robotics demonstration",
  },
  {
    src: "/images/events/P1051221.JPG",
    alt: "Technical presentation",
  },
  {
    src: "/images/events/P1051254.JPG",
    alt: "CRAIC event",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Event Gallery
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Glimpses from our past meetups and community gatherings
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square min-h-[150px] rounded-xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
