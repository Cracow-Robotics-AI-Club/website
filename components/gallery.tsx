"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/event-1.jpg",
    alt: "Speaker presenting on AI at Cracow Robotics Meetup",
    caption: "Meetup #12 - AI Presentation"
  },
  {
    src: "/images/event-2.jpg",
    alt: "Hands-on robotics workshop",
    caption: "Meetup #10 - Robotics Workshop"
  },
  {
    src: "/images/event-3.jpg",
    alt: "Networking session at the meetup",
    caption: "Meetup #11 - Networking Session"
  },
  {
    src: "/images/event-4.jpg",
    alt: "Robot demonstration",
    caption: "Meetup #9 - Robot Demo"
  },
  {
    src: "/images/hero-robotics.jpg",
    alt: "Community gathering at the tech venue",
    caption: "Community Event"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="bg-[#33352F] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-[#A64941] text-white hover:bg-[#8a3d36]">
            Photo Gallery
          </Badge>
          <h2 
            className="mb-4 text-3xl font-bold text-[#F2D4AE] md:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Moments from Our Meetups
          </h2>
          <p className="mx-auto max-w-2xl text-[#F2D4AE]/70">
            Take a look at some highlights from our past events. From engaging presentations 
            to hands-on workshops and networking sessions.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#274040]/0 transition-colors group-hover:bg-[#274040]/50" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#274040] to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm font-medium text-[#F2D4AE]">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-lg text-white">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
