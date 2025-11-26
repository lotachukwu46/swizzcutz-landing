"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone, Scissors, Star } from "lucide-react";

const Hero = () => {
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
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft gradient orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 -left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 -right-10 w-56 h-56 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"
        />

        {/* Minimal geometric elements (only desktop) */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="absolute top-28 left-10 w-4 h-4 border border-primary rounded-md rotate-45" />
          <div className="absolute top-52 right-20 w-6 h-6 border-2 border-primary rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE — TEXT */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Scissors className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium tracking-widest">
                PREMIUM MOBILE BARBER
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                <span className="text-foreground block">Elevate Your</span>
                <span className="text-primary block">Personal Style</span>
              </h1>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <p className="text-sm sm:text-lg">Serving Jos & Surroundings</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Luxury grooming delivered to your doorstep. Professional cuts,
              sharp fades, premium styling — without leaving your house.
            </motion.p>

            {/* Stats + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">500+</span>{" "}
                  Clients
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book on WhatsApp
                </Button>

                <Button
                  onClick={handleCall}
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-5 rounded-xl transition-all cursor-pointer"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now
                </Button>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0">
                {[
                  ["Same Day Booking", "bg-green-500"],
                  ["Free Consultation", "bg-blue-500"],
                  ["Premium Products", "bg-purple-500"],
                  ["Flexible Hours", "bg-orange-500"],
                ].map(([label, color], i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${color}`} />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-bg.jpeg"
                className="w-full h-full object-cover"
                alt="Barber hero"
              />

              {/* Light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating rating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 bg-background border border-border rounded-xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold">4.9</span>
              </div>
            </motion.div>

            {/* Floating response badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-3 -left-3 bg-primary text-primary-foreground rounded-xl px-3 py-2 shadow-md"
            >
              <p className="text-xs font-semibold">30min Response</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
