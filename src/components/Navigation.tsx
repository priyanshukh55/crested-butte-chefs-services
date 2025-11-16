"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/menus", label: "Menus" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              Crested Butte Chefs
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="tel:970-251-5289"
              className="flex items-center space-x-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>(970) 251-5289</span>
            </a>
            <Button asChild>
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:970-251-5289"
                className="flex items-center space-x-2 text-sm font-medium text-foreground/80"
              >
                <Phone className="h-4 w-4" />
                <span>(970) 251-5289</span>
              </a>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
