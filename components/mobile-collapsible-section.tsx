"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MobileCollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function MobileCollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false 
}: MobileCollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <>
      {/* Mobile: Collapsible */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full py-4 px-4 bg-secondary flex items-center justify-between border-b border-border">
            <span className="text-lg font-semibold text-secondary-foreground">{title}</span>
            <ChevronDown 
              className={`w-5 h-5 text-secondary-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            {children}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop: Always visible */}
      <div className="hidden md:block">
        {children}
      </div>
    </>
  )
}
