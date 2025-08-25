
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectDetails: z.string().min(10, { message: "Please provide some details about your project." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="pt-16 grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Have a project in mind or just want to say hello? We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Our Studio</h3>
                        <p className="text-muted-foreground">123 Design Lane, Creativity City, 54321</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
<<<<<<< HEAD
                        <p className="text-muted-foreground">contact@designdile.com</p>
=======
                        <p className="text-muted-foreground">Contact@designdile</p>
>>>>>>> origin/master
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
<<<<<<< HEAD
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">03157504305</p>
=======
                        <h3 className="font-semibold">WhatsApp</h3>
                        <p className="text-muted-foreground">0315 750 43 05</p>
>>>>>>> origin/master
                    </div>
                </div>
            </div>

            <Card className="bg-card/60 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your book, genre, and what you're looking for..." className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-[600px] md:h-auto md:aspect-[3/4] rounded-lg overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04421cd6e2?q=80&w=2896&auto=format&fit=crop"
              alt="Contact us"
              width={600}
              height={800}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint="contact office"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </main>
    </div>
  );
}
