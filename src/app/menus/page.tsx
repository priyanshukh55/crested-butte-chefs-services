"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function MenusPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sample Menus</h1>
            <p className="text-xl text-muted-foreground">
              Seasonal menus crafted with fresh, local ingredients from Colorado farmers and producers. 
              All menus are fully customizable to your preferences and dietary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Menus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="spring" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="spring">Spring</TabsTrigger>
              <TabsTrigger value="summer">Summer</TabsTrigger>
              <TabsTrigger value="fall">Fall</TabsTrigger>
              <TabsTrigger value="winter">Winter</TabsTrigger>
            </TabsList>

            {/* Spring Menu */}
            <TabsContent value="spring" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Spring Menu</h2>
                <p className="text-muted-foreground">Fresh greens, herbs, and the first vegetables of the season</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Appetizers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Asparagus & Prosciutto Crostini</h4>
                        <Badge variant="secondary">GF*</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Local asparagus, aged prosciutto, lemon ricotta</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Spring Pea Soup</h4>
                        <Badge variant="secondary">V</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Sweet peas, mint, crème fraîche</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Baby Greens Salad</h4>
                      <p className="text-sm text-muted-foreground">Mixed greens, radish, herb vinaigrette</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Main Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Herb-Crusted Lamb Rack</h4>
                      <p className="text-sm text-muted-foreground">Colorado lamb, spring vegetables, mint jus</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Pan-Seared Trout</h4>
                        <Badge variant="secondary">GF</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Rocky Mountain trout, spring onions, lemon butter</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Wild Mushroom Risotto</h4>
                        <Badge variant="secondary">V</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Local mushrooms, peas, parmesan, truffle oil</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Roasted Spring Vegetables</h4>
                      <p className="text-sm text-muted-foreground">Carrots, baby turnips, snap peas</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Herb Roasted Potatoes</h4>
                      <p className="text-sm text-muted-foreground">Fingerlings, fresh rosemary, garlic</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Quinoa Pilaf</h4>
                      <p className="text-sm text-muted-foreground">Colorado quinoa, herbs, dried fruit</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Desserts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Lemon Tart</h4>
                      <p className="text-sm text-muted-foreground">Meyer lemon curd, shortbread crust, berries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Rhubarb Crumble</h4>
                      <p className="text-sm text-muted-foreground">Local rhubarb, oat streusel, vanilla ice cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chocolate Mousse</h4>
                      <p className="text-sm text-muted-foreground">Dark chocolate, whipped cream, fresh mint</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Summer Menu */}
            <TabsContent value="summer" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Summer Menu</h2>
                <p className="text-muted-foreground">Peak season produce, grilled favorites, and fresh flavors</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Appetizers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Heirloom Tomato Caprese</h4>
                        <Badge variant="secondary">V, GF</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Local tomatoes, fresh mozzarella, basil, balsamic</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Grilled Peach & Burrata</h4>
                        <Badge variant="secondary">V</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Palisade peaches, arugula, prosciutto, honey</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chilled Gazpacho</h4>
                      <p className="text-sm text-muted-foreground">Summer vegetables, herbs, cucumber</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Main Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Grilled Colorado Beef Tenderloin</h4>
                      <p className="text-sm text-muted-foreground">Grass-fed beef, herb butter, seasonal vegetables</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Cedar Plank Salmon</h4>
                        <Badge variant="secondary">GF</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Wild salmon, dill sauce, grilled lemon</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Grilled Vegetable Stack</h4>
                        <Badge variant="secondary">VG, GF</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Zucchini, eggplant, peppers, pesto, polenta</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Summer Corn Salad</h4>
                      <p className="text-sm text-muted-foreground">Sweet corn, cherry tomatoes, basil, lime</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Grilled Summer Squash</h4>
                      <p className="text-sm text-muted-foreground">Zucchini, yellow squash, herbs, olive oil</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Potato Salad</h4>
                      <p className="text-sm text-muted-foreground">Fingerlings, herbs, grainy mustard, aioli</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Desserts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Berry Pavlova</h4>
                      <p className="text-sm text-muted-foreground">Meringue, whipped cream, fresh berries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Peach Cobbler</h4>
                      <p className="text-sm text-muted-foreground">Palisade peaches, biscuit topping, ice cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Key Lime Pie</h4>
                      <p className="text-sm text-muted-foreground">Graham crust, lime curd, whipped cream</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Fall Menu */}
            <TabsContent value="fall" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Fall Menu</h2>
                <p className="text-muted-foreground">Hearty harvest flavors and warming dishes</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Appetizers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Butternut Squash Soup</h4>
                      <p className="text-sm text-muted-foreground">Roasted squash, sage, pepitas, cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Beet & Goat Cheese Salad</h4>
                      <p className="text-sm text-muted-foreground">Roasted beets, chèvre, candied walnuts, greens</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Wild Mushroom Tart</h4>
                      <p className="text-sm text-muted-foreground">Local mushrooms, caramelized onion, gruyere</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Main Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Braised Short Ribs</h4>
                      <p className="text-sm text-muted-foreground">Colorado beef, red wine reduction, root vegetables</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Roasted Chicken</h4>
                      <p className="text-sm text-muted-foreground">Herb-roasted half chicken, pan gravy, stuffing</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Harvest Vegetable Gratin</h4>
                        <Badge variant="secondary">V</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Root vegetables, cream, herbs, breadcrumbs</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Maple-Roasted Brussels Sprouts</h4>
                      <p className="text-sm text-muted-foreground">Brussels sprouts, bacon, maple glaze</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garlic Mashed Potatoes</h4>
                      <p className="text-sm text-muted-foreground">Yukon gold, butter, roasted garlic, cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Wild Rice Pilaf</h4>
                      <p className="text-sm text-muted-foreground">Wild rice, cranberries, pecans, herbs</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Desserts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Apple Galette</h4>
                      <p className="text-sm text-muted-foreground">Local apples, cinnamon, caramel, vanilla ice cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Pumpkin Cheesecake</h4>
                      <p className="text-sm text-muted-foreground">Spiced pumpkin, gingersnap crust, whipped cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Pear Tart Tatin</h4>
                      <p className="text-sm text-muted-foreground">Caramelized pears, puff pastry, crème fraîche</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Winter Menu */}
            <TabsContent value="winter" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Winter Menu</h2>
                <p className="text-muted-foreground">Comforting classics and elegant winter celebrations</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Appetizers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">French Onion Soup</h4>
                      <p className="text-sm text-muted-foreground">Caramelized onions, beef broth, gruyere, crostini</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Seared Scallops</h4>
                      <p className="text-sm text-muted-foreground">Diver scallops, cauliflower purée, truffle oil</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Winter Kale Salad</h4>
                      <p className="text-sm text-muted-foreground">Tuscan kale, pomegranate, parmesan, lemon</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Main Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Prime Rib Roast</h4>
                      <p className="text-sm text-muted-foreground">Herb-crusted beef, au jus, horseradish cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Duck Confit</h4>
                      <p className="text-sm text-muted-foreground">Crispy duck leg, cherry gastrique, root vegetables</p>
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">Mushroom Wellington</h4>
                        <Badge variant="secondary">V</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Wild mushrooms, chestnuts, puff pastry, port sauce</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Roasted Root Vegetables</h4>
                      <p className="text-sm text-muted-foreground">Carrots, parsnips, turnips, honey glaze</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Truffle Mac & Cheese</h4>
                      <p className="text-sm text-muted-foreground">Gruyere, parmesan, truffle oil, breadcrumbs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Creamed Spinach</h4>
                      <p className="text-sm text-muted-foreground">Fresh spinach, cream, nutmeg, parmesan</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Desserts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Chocolate Lava Cake</h4>
                      <p className="text-sm text-muted-foreground">Molten center, raspberry coulis, ice cream</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Crème Brûlée</h4>
                      <p className="text-sm text-muted-foreground">Vanilla custard, caramelized sugar, berries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Warm Apple Crisp</h4>
                      <p className="text-sm text-muted-foreground">Spiced apples, oat topping, vanilla ice cream</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Dietary Key */}
          <div className="max-w-5xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-3">Dietary Key</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">V</Badge>
                <span className="text-muted-foreground">Vegetarian</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">VG</Badge>
                <span className="text-muted-foreground">Vegan</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">GF</Badge>
                <span className="text-muted-foreground">Gluten-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">GF*</Badge>
                <span className="text-muted-foreground">Gluten-Free Option Available</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              All menus can be customized to accommodate dietary restrictions and preferences. 
              Please inform us of any allergies or special requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
