"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              A passion for exceptional food, local ingredients, and creating unforgettable experiences 
              in the heart of the Rocky Mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Crested Butte Chefs began with a simple idea: bring restaurant-quality cuisine to every celebration, 
                gathering, and special moment. What started as a small catering operation has grown into a full-service 
                culinary experience, complete with private chef services, a gourmet market, and a commitment to 
                showcasing the incredible ingredients available in our Colorado backyard.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that great food brings people together. Whether it's a wedding reception, a corporate retreat, 
                or an intimate dinner party, we approach each event with the same dedication to quality, creativity, 
                and genuine hospitality that has become our hallmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented culinary team brings decades of combined experience from fine dining 
              restaurants, resorts, and catering companies across the country.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Dana */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000"
                  alt="Dana - Executive Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dana</h3>
                <p className="text-sm text-primary mb-3">Executive Chef & Owner</p>
                <p className="text-sm text-muted-foreground">
                  With 20+ years in fine dining, Dana brings creativity and precision to every menu. 
                  Trained in French technique with a passion for Colorado ingredients.
                </p>
              </CardContent>
            </Card>

            {/* Ben */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000"
                  alt="Ben - Sous Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ben</h3>
                <p className="text-sm text-primary mb-3">Sous Chef</p>
                <p className="text-sm text-muted-foreground">
                  A Colorado native, Ben specializes in farm-to-table cuisine and brings a deep knowledge 
                  of local producers and seasonal ingredients to our kitchen.
                </p>
              </CardContent>
            </Card>

            {/* Nina */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000"
                  alt="Nina - Pastry Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Nina</h3>
                <p className="text-sm text-primary mb-3">Pastry Chef</p>
                <p className="text-sm text-muted-foreground">
                  Nina's artful desserts are the perfect finale to any meal. Trained in European pastry 
                  arts, she creates both classic and contemporary sweet treats.
                </p>
              </CardContent>
            </Card>

            {/* Edana */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
                  alt="Edana - Event Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Edana</h3>
                <p className="text-sm text-primary mb-3">Event Manager</p>
                <p className="text-sm text-muted-foreground">
                  Edana ensures every event runs smoothly from planning to execution. Her attention 
                  to detail and warm hospitality make clients feel taken care of.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market & Shop */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070"
                alt="Crested Butte Chefs Market"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Market</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our gourmet market on Elk Avenue offers the same high-quality ingredients and prepared foods 
                that we use in our catering. Stop by for fresh pastries, grab-and-go meals, artisan cheeses, 
                charcuterie, and specialty items sourced from Colorado producers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">320 Elk Avenue, Crested Butte, CO 81224</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Market Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday: 8am - 6pm</p>
                    <p className="text-muted-foreground">Sunday: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What You'll Find</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fresh-baked pastries and breads</li>
                    <li>• Prepared meals and salads</li>
                    <li>• Artisan cheeses and charcuterie</li>
                    <li>• Local produce and specialty items</li>
                    <li>• Gift baskets and party platters</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Sourcing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Commitment to Local</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're proud to partner with Colorado farmers, ranchers, and artisan producers who share 
              our commitment to quality and sustainability. From grass-fed beef to organic vegetables, 
              heirloom grains to farmstead cheeses, we showcase the incredible bounty of our region.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Fresh Produce</h4>
                  <p className="text-sm text-muted-foreground">
                    Organic vegetables and fruits from local farms and the Crested Butte Farmers Market
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Premium Meats</h4>
                  <p className="text-sm text-muted-foreground">
                    Grass-fed beef, lamb, and pork from Colorado ranches committed to ethical practices
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Artisan Products</h4>
                  <p className="text-sm text-muted-foreground">
                    Cheeses, breads, preserves, and specialty items from Colorado artisans
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
