"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChefHat, Users, Calendar, Award, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070"
            alt="Gourmet catering spread"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Exceptional Culinary Experiences in the Rockies
            </h1>
            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              From intimate private dinners to grand celebrations, we bring restaurant-quality cuisine to your special moments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg">
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 text-lg backdrop-blur">
                <Link href="/menus">Sample Menus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Our Kitchen</h2>
            <p className="text-lg text-muted-foreground">
              Crested Butte Chefs is more than catering—it's a passion for exceptional food, 
              local ingredients, and unforgettable experiences. Led by our talented team, 
              we craft menus that celebrate Colorado's bounty and elevate every occasion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ChefHat className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Chefs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional culinary team with decades of combined experience
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customized menus tailored to your event and dietary needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Flexible Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Drop-off, buffet service, or full private chef experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Local Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fresh, seasonal ingredients from Colorado farmers and producers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're planning an intimate dinner or a grand celebration, 
              we have the perfect catering solution for your event.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Catering */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
                  alt="Wedding catering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Event Catering</CardTitle>
                <CardDescription>
                  Weddings, corporate events, and celebrations of all sizes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/services#event-catering" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Private Chef */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070"
                  alt="Private chef service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Private Chef</CardTitle>
                <CardDescription>
                  Intimate dining experiences in your home or vacation rental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/services#private-chef" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Catering */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                  alt="Corporate catering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Corporate Catering</CardTitle>
                <CardDescription>
                  Professional catering for meetings, retreats, and company events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/services#corporate" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for seasonal menu updates, special offers, and culinary inspiration.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground flex-1"
                required
              />
              <Button type="submit" variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}