import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#274040] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_512x512%281%29-E4DHuZAN5AVhr2intXWWZ1jFBPY0Pz.png"
                alt="Cracow Robotics & AI Club Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/napis_upscale%281%29-IlsjYEemXTrtC9koYwSSKPGJ2vgB3H.png"
                alt="CRAIC - Cracow Robotics & AI Club"
                width={180}
                height={56}
                unoptimized
              />
            </Link>
            <p className="mb-6 max-w-md text-sm text-[#F2D4AE]/70">
              A community for robotics, AI, and technology enthusiasts in Kraków, Poland.
              Join us for engaging meetups, presentations, and networking opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Cracow-Robotics-AI-Club/100089974299266/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/cracow-robotics-ai-club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.meetup.com/cracow-robotics-ai-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z" />
                </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="mb-4 font-bold text-[#F2D4AE]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#events" className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]">
                Past Events
              </Link>
            </li>
            <li>
              <Link href="#speakers" className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]">
                Speakers
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]">
                Photo Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="mb-4 font-bold text-[#F2D4AE]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Contact
          </h4>
          <ul className="space-y-2">
            <li className="text-sm text-[#F2D4AE]/70">
              Kraków, Poland
            </li>
            <li>
              <a
                href="mailto:cracow.robotics@gmail.com"
                className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]"
              >
                cracow.robotics@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/cracow-robotics-ai-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]"
              >
                meetup.com/cracow-robotics-ai-club
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-[#F2D4AE]/10 pt-8 text-center">
        <p className="text-sm text-[#F2D4AE]/50">
          © {new Date().getFullYear()} Cracow Robotics & AI Club. All rights reserved.
        </p>
      </div>
    </div>
    </footer >
  )
}
