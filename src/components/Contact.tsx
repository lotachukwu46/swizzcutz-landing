"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Directly",
    content: "+234 905 550 4893",
    subtitle: "Quick response guaranteed",
    action: () => (window.location.href = "tel:+2348012345678"),
    variant: "primary" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    content: "Instant confirmation",
    subtitle: "Chat & book appointments",
    action: () =>
      window.open(
        "https://wa.me/2349055504893?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20an%20appointment.",
        "_blank"
      ),
    variant: "primary" as const,
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "Jos City & Surroundings",
    subtitle: "Free travel within city",
    action: null,
    variant: "secondary" as const,
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "9 AM - 8 PM Daily",
    subtitle: "Flexible scheduling available",
    action: null,
    variant: "secondary" as const,
  },
];

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2349055504893?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20an%20appointment.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+2349055504893";
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 -left-4 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 -right-4 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
          >
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-medium tracking-wider">
              GET IN TOUCH
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Premium home service barbering delivered to your location in Jos
            City. Book your appointment today!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`p-4 sm:p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 h-full group ${
                    item.action ? "cursor-pointer hover:shadow-lg" : ""
                  } ${
                    item.variant === "primary"
                      ? "hover:bg-primary/5"
                      : "hover:bg-card/80"
                  }`}
                  onClick={item.action || undefined}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`mb-3 sm:mb-4 p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                        item.variant === "primary"
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-muted/50 group-hover:bg-muted/80"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${
                          item.variant === "primary"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>

                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-foreground font-medium text-sm sm:text-base mb-1">
                      {item.content}
                    </p>

                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {item.subtitle}
                    </p>

                    {/* Click indicator for actionable items */}
                    {item.action && (
                      <div className="mt-3 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to {item.title.includes("Call") ? "call" : "chat"}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 sm:p-8 lg:p-12 text-center bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl">
            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                Rated 4.9/5 by 500+ clients
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Ready for a Premium Cut?
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
              Book your home service now and experience professional barbering
              without leaving your house. Same-day appointments available!
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group w-full sm:w-auto cursor-pointer"
              >
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Book on WhatsApp
              </Button>

              <Button
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300 group w-full sm:w-auto cursor-pointer"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Call Now
              </Button>
            </div>

            {/* Quick Info */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>30min Response</span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Free Travel</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
