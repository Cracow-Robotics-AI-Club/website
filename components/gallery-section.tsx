"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const galleryImages = [
  {
    src: "/images/events/20231218_191230.jpg",
    alt: "CRAIC Meetup presentation",
    caption: "Meetup #7 - December 2023",
  },
  {
    src: "/images/events/20240325_191130.jpg",
    alt: "CRAIC Meetup presentation",
    caption: "Meetup #8 - March 2024",
  },
  {
    src: "/images/events/P1012361.JPG",
    alt: "CRAIC community gathering",
    caption: "Community networking session",
  },
  {
    src: "/images/events/P1013629.JPG",
    alt: "Robotics demonstration",
    caption: "Robotics demo at CRAIC",
  },
  {
    src: "/images/events/P1013644.JPG",
    alt: "CRAIC meetup attendees",
    caption: "Our amazing community",
  },
  {
    src: "/images/events/P1051221.JPG",
    alt: "Technical presentation",
    caption: "Technical deep dive session",
  },
  {
    src: "/images/events/P1051254.JPG",
    alt: "CRAIC event",
    caption: "Knowledge sharing at CRAIC",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

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
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors flex items-end p-4">
                <span className="text-secondary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </span>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
            <VisuallyHidden>
              <DialogTitle>{selectedImage?.caption}</DialogTitle>
            </VisuallyHidden>
            {selectedImage && (
              <div className="relative">
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-card-foreground font-medium">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
