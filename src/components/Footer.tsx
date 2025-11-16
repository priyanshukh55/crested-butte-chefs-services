import Link from "next/link"
import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Crested Butte Chefs</h3>
            <p className="text-sm text-muted-foreground">
              Artisan catering and private chef services in the heart of the Rocky Mountains. 
              Local ingredients, exceptional experiences.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="tel:970-251-5289"
                className="flex items-center space-x-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>(970) 251-5289</span>
              </a>
              <a
                href="mailto:info@crestedbutechefs.com"
                className="flex items-center space-x-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>info@crestedbutechefs.com</span>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Location & Hours</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>320 Elk Ave<br />Crested Butte, CO 81224</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Market Hours:</p>
                  <p>Mon-Sat: 8am - 6pm</p>
                  <p>Sun: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/services"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/menus"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                Sample Menus
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                About Us
              </Link>
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Crested Butte Chefs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
