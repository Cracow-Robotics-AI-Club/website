"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#274040] shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Cracow Robotics & AI Club Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#F2D4AE]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Cracow Robotics
            </span>
            <span className="text-sm text-[#608C5E]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              & AI Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]">
            About
          </Link>
          <Link href="#events" className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]">
            Events
          </Link>
          <Link href="#speakers" className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]">
            Speakers
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]">
            Gallery
          </Link>
          <Button 
            className="bg-[#A64941] text-white hover:bg-[#8a3d36]"
            asChild
          >
            <a href="https://www.meetup.com/cracow-robotics-ai-club/" target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-[#F2D4AE] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-4 bg-[#274040] px-4 pb-6 md:hidden">
          <Link 
            href="#about" 
            className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#events" 
            className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            href="#speakers" 
            className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Speakers
          </Link>
          <Link 
            href="#gallery" 
            className="text-sm font-medium text-[#F2D4AE] transition-colors hover:text-[#608C5E]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Button 
            className="mt-2 w-full bg-[#A64941] text-white hover:bg-[#8a3d36]"
            asChild
          >
            <a href="https://www.meetup.com/cracow-robotics-ai-club/" target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
