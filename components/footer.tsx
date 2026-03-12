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
                style={{ width: 'auto', height: 'auto', maxWidth: '180px' }}
              />
            </Link>
            <p className="mb-6 max-w-md text-sm text-[#F2D4AE]/70">
              A community for robotics, AI, and technology enthusiasts in Kraków, Poland. 
              Join us for engaging meetups, presentations, and networking opportunities.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.meetup.com/cracow-robotics-ai-club/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#33352F] text-[#F2D4AE] transition-colors hover:bg-[#608C5E]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.98 10.04c-.36 0-.73.12-1.04.38l-.03.03c-.56.49-.63 1.35-.14 1.91l.03.03c.35.37.83.55 1.31.5.19-.02.37-.07.55-.16l.22.44c-.32.19-.68.31-1.06.35-.73.07-1.46-.2-1.99-.75l-.03-.03c-.75-.85-.66-2.16.19-2.91l.03-.03c.47-.4 1.06-.58 1.64-.51.41.05.8.2 1.14.44l-.26.41c-.17-.12-.36-.21-.56-.26v.16zm9.52 4.54c-.27.47-.79.69-1.3.52-.53-.18-.81-.75-.63-1.29.07-.2.19-.38.35-.51l.03-.03c.21-.15.45-.23.7-.23.14 0 .27.02.4.07.53.18.8.75.62 1.28-.04.08-.1.15-.17.19zM20 14.27c-.24.73-.74 1.35-1.4 1.72-.64.36-1.39.49-2.11.36-.36-.06-.71-.19-1.02-.37l-.34.64.57.22c.5.19.84.68.84 1.22 0 .24-.07.47-.19.68-.35.62-1.12.83-1.74.48l-.03-.01-.65-.37c-.18.29-.42.54-.7.74-.51.36-1.13.52-1.75.45-.61-.07-1.17-.35-1.58-.79l-.03-.03c-.76-.87-.67-2.19.19-2.95l.02-.02c.09-.08.19-.15.29-.21l-.22-.44c-.62.31-1.31.44-2 .37-.69-.07-1.34-.34-1.87-.77l-.03-.03c-1.05-1.01-1.08-2.69-.07-3.74l.03-.03c.52-.52 1.21-.82 1.94-.84.53-.01 1.05.14 1.5.43l.1-.14-.1-.05c-.5-.26-.79-.8-.74-1.37.05-.53.41-.98.93-1.14.51-.15 1.07.03 1.4.46l.02.03c.15.2.25.44.28.68l.01.07c.16-.04.33-.07.5-.09.59-.05 1.18.11 1.67.45l.03.02c.98.73 1.18 2.12.46 3.1-.19.26-.44.48-.72.64l.19.38c.07-.03.14-.06.21-.08.73-.24 1.53.04 1.95.68.24.37.33.82.24 1.25-.04.18-.11.35-.2.5l.43.25c.25-.43.61-.79 1.04-1.04.43-.25.93-.38 1.43-.36.5.02.99.18 1.39.47l.03.02c.81.6 1.08 1.68.66 2.57z"/>
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
                  href="mailto:cracow.robotics.ai@gmail.com" 
                  className="text-sm text-[#F2D4AE]/70 transition-colors hover:text-[#608C5E]"
                >
                  cracow.robotics.ai@gmail.com
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
