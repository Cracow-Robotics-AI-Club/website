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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/napis-KYcIGBJTSZB6NuDNX9BM5yZcCD7Z0D.png"
                alt="CRAIC - Cracow Robotics & AI Club"
                width={154}
                height={48}
                className="h-[48px] w-auto"
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
                <span className="text-sm font-bold">M</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold text-[#F2D4AE]">Quick Links</h4>
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
            <h4 className="mb-4 font-bold text-[#F2D4AE]">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-[#F2D4AE]/70">Kraków, Poland</li>
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
    </footer>
  )
}
