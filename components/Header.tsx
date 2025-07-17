"use client"

import { Button } from "@/components/ui/button"
import {
  Zap,
  Menu,
} from "lucide-react"

const Header = () => {
  return (
    <header className="container mx-auto sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">StreamLine</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => {
              // Smooth scroll to features section
              const testimonialsSection = document.getElementById("features");
              if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>
              Features
            </button>
            <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => {
              // Smooth scroll to testimonials section
              const testimonialsSection = document.getElementById("testimonials");
              if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>
              Testimonials
            </button>
            <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => {
              // Smooth scroll to pricing section
              const testimonialsSection = document.getElementById("pricing");
              if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>
              Pricing
            </button>
            <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => {
              // Smooth scroll to contact section
              const testimonialsSection = document.getElementById("contact");
              if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Start Free Trial</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
  )
}

export default Header