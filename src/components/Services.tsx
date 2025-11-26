"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Adults Haircut",
    description:
      "Sharp fades, clean cuts, and precision grooming brought directly to your home.",
    price: "₦3,000",
    duration: "30–45 min",
    popular: true,
  },
  {
    icon: Users,
    title: "Children's Haircut",
    description:
      "Gentle, patient grooming for kids. Comfortable, convenient, and stress-free.",
    price: "₦2,000",
    duration: "20–30 min",
  },
  {
    icon: Sparkles,
    title: "Hair Treatment",
    description:
      "Nourishing care to strengthen your hair and elevate your overall look.",
    price: "₦2,000",
    duration: "15–20 min",
  },
  {
    icon: Award,
    title: "Black Hair Dye (Full)",
    description: "Complete coloring service for a bold, fresh, modern style.",
    price: "₦1,500",
    duration: "25–35 min",
  },
  {
    icon: Sparkles,
    title: "Black Hair Dye (Low)",
    description:
      "Touch-ups and subtle color enhancement for low cuts and maintenance.",
    price: "₦1,000",
    duration: "15–25 min",
  },
  {
    icon: Award,
    title: "Waves",
    description:
      "Clean, defined waves styled professionally for an eye-catching finish.",
    price: "₦1,000",
    duration: "20–30 min",
    popular: true,
  },
];

const Services = () => {
  const handleBook = (serviceName: string) => {
    window.open(
      `https://wa.me/2349055504893?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20${encodeURIComponent(
        serviceName
      )}.`,
      "_blank"
    );
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs tracking-[0.25em] font-semibold block mb-3">
            SERVICES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Clean & Premium <span className="text-primary">Grooming</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Top-tier barbering brought straight to your doorstep. Simple, fast,
            and professional.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-6 bg-card border-border/40 hover:border-primary/40 transition-all rounded-2xl">
                  {/* TAG */}
                  {service.popular && (
                    <div className="text-xs font-bold text-primary mb-3">
                      ★ Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-primary">
                        {service.price}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => handleBook(service.title)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                    >
                      Book
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card p-6 border border-border/40 rounded-2xl max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Available across Jos City</span>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Ready for your next clean cut?
            </h3>

            <Button
              size="lg"
              onClick={() => handleBook("Consultation")}
              className="mt-3 bg-primary text-primary-foreground rounded-xl px-6 py-3 hover:bg-primary/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
