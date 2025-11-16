"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              From intimate gatherings to grand celebrations, we offer flexible catering solutions 
              tailored to your vision and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Event Catering */}
      <section id="event-catering" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
                alt="Event catering"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Event Catering</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Perfect for weddings, milestone celebrations, and special events. We handle everything 
                from menu planning to service, ensuring your event is memorable and stress-free.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Custom menu design based on your preferences</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Professional service staff and setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Accommodations for dietary restrictions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Farm-to-table ingredients from local sources</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Service Formats</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Drop-Off</CardTitle>
                  <div className="text-3xl font-bold text-primary">From $25<span className="text-base font-normal text-muted-foreground">/person</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Food delivered hot and ready</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Disposable serving ware included</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Perfect for casual gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>15 person minimum</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                  <CardTitle className="text-2xl">Buffet Service</CardTitle>
                  <div className="text-3xl font-bold text-primary">From $45<span className="text-base font-normal text-muted-foreground">/person</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Full buffet setup and styling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Service staff for 3 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>China and glassware available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cleanup included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Plated Service</CardTitle>
                  <div className="text-3xl font-bold text-primary">From $75<span className="text-base font-normal text-muted-foreground">/person</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Multi-course plated dinner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Full service staff</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Premium tableware</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ideal for formal events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Private Chef */}
      <section id="private-chef" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Private Chef Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience restaurant-quality cuisine in the comfort of your home or vacation rental. 
                Our private chefs create personalized menus and cook right in your kitchen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Customized multi-course menus</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Chef prepares and serves in your home</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Full kitchen cleanup included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Perfect for intimate gatherings (2-12 guests)</span>
                </li>
              </ul>
              <div className="bg-card p-6 rounded-lg mb-6">
                <div className="text-3xl font-bold text-primary mb-2">$150<span className="text-base font-normal text-muted-foreground">/person</span></div>
                <p className="text-sm text-muted-foreground">4-course dinner | 2 guest minimum</p>
              </div>
              <Button asChild size="lg">
                <Link href="#contact">Book a Private Chef</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070"
                alt="Private chef service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                alt="Corporate catering"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Corporate Catering</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Impress clients and energize your team with professional catering for meetings, 
                conferences, and company events.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Breakfast, lunch, and dinner options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Box lunches and break service</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Recurring orders and contracts available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>On-time delivery guaranteed</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="#contact">Discuss Corporate Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your catering needs and create a custom menu for your special occasion.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:970-251-5289">Call (970) 251-5289</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white backdrop-blur">
                <a href="mailto:info@crestedbutechefs.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
