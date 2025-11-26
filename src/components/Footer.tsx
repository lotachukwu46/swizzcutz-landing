"use client";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Star,
} from "lucide-react";

const serviceAreas = [
  "Bukuru",
  "Rayfield",
  "Lamingo",
  "Rantya",
  "Hwolshe",
  "Jos North",
  "Jos South",
  "Gangare",
];

const Footer = () => {
  const handleCall = () => (window.location.href = "tel:+2349055504893");
  const handleWhatsApp = () =>
    window.open(
      "https://wa.me/2349055504893?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20an%20appointment.",
      "_blank"
    );

  return (
    <footer className="bg-background border-t border-border/50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="text-foreground">Swizz</span>{" "}
                <span className="text-primary">Cuts</span>
              </h3>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
              Premium mobile barbering services in Jos City. Professional cuts,
              grooming, and styling delivered directly to your doorstep.
            </p>

            {/* Trust */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                4.9/5 Rating • 500+ Clients
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <button
                onClick={handleCall}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg w-full sm:w-auto cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg w-full sm:w-auto cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Service Areas
            </h4>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3">
              {serviceAreas.map((area, index) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {area}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="font-semibold text-lg mb-4 sm:mb-6">Contact Info</h4>

            <button
              onClick={handleCall}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group w-full text-left cursor-pointer"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">+234 905 550 4893</div>
                <div className="text-xs text-muted-foreground">
                  Call directly
                </div>
              </div>
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 text-muted-foreground hover:text-green-600 transition-all duration-300 group w-full text-left cursor-pointer"
            >
              <div className="p-2 bg-green-600/10 rounded-lg group-hover:bg-green-600/20 transition-colors duration-300">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">WhatsApp</div>
                <div className="text-xs text-muted-foreground">
                  Instant booking
                </div>
              </div>
            </button>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 bg-muted rounded-lg">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">9 AM - 8 PM</div>
                <div className="text-xs text-muted-foreground">Daily</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border/50 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} Swizz Cuts. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span>Premium Mobile Barbering Services</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Jos City, Nigeria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
