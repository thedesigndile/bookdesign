
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    title: "Basic",
    description: "For authors who need a professional, clean interior layout.",
    price: 299,
    features: [
      "eBook & Paperback Formatting",
      "Standard Chapter Styles",
      "Clickable Table of Contents",
      "Up to 60,000 Words",
      "2 Rounds of Revisions",
    ],
    isRecommended: false,
  },
  {
    title: "Professional",
    description: "The complete package for a stunning cover and interior.",
    price: 699,
    features: [
      "Everything in Basic, plus:",
      "Custom eBook & Print Cover Design",
      "Advanced Interior Layout",
      "Unlimited Words",
      "Up to 5 Stock Images",
      "3D Book Mockups",
      "3 Rounds of Revisions",
    ],
    isRecommended: true,
  },
  {
    title: "Premium",
    description: "For authors who want a bespoke, illustrated masterpiece.",
    price: 1499,
    features: [
      "Everything in Professional, plus:",
      "Custom Illustrations (up to 5)",
      "Hardcover Jacket Design",
      "Marketing Material Kit",
      "Unlimited Revisions",
      "Priority Support",
    ],
    isRecommended: false,
  },
];

export default function PackagesPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="pt-8 text-center mb-12">
          <h1 className="font-bebas-neue text-5xl font-bold tracking-wider sm:text-6xl md:text-7xl">
            BOOK DESIGN PACKAGES
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
            Choose the perfect package to bring your book to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={cn(
                "flex flex-col rounded-lg shadow-lg transition-all duration-300 border-border/50 hover:shadow-2xl hover:-translate-y-2",
                pkg.isRecommended ? "border-primary/50 shadow-primary/20" : "hover:border-primary/50 hover:shadow-primary/20"
              )}
            >
              <CardHeader className="p-6 relative">
                {pkg.isRecommended && (
                  <Badge variant="default" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <Star className="mr-1.5 h-3 w-3" /> Recommended
                  </Badge>
                )}
                <CardTitle className="font-bebas-neue text-4xl tracking-wider text-center">{pkg.title}</CardTitle>
                <CardDescription className="text-center min-h-[40px]">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold font-bebas-neue tracking-wider">${pkg.price}</span>
                  <span className="text-muted-foreground">/ one-time</span>
                </div>
                <ul className="space-y-3 text-sm flex-grow mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full mt-auto",
                    pkg.isRecommended ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  )}
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
