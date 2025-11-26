"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Home,
  Scissors,
  Image,
  Mail,
  User,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FloatingDock = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Smooth scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current < lastScrollY.current || current < 100);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2348012345678?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20a%20home%20service.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+2348012345678";
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsExpanded(false);
  };

  const dockItems = [
    { icon: Home, label: "Home", action: () => scrollToSection("hero") },
    { icon: User, label: "About", action: () => scrollToSection("about") },
    {
      icon: Scissors,
      label: "Services",
      action: () => scrollToSection("services"),
    },
    { icon: Image, label: "Gallery", action: () => scrollToSection("gallery") },
    { icon: Mail, label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <>
      {/* Floating Buttons */}
      <motion.div
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 20,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* WhatsApp */}
        <motion.button
          onClick={handleWhatsApp}
          className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-600 shadow-lg hover:shadow-xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Book on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          <motion.div
            className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white border-2 border-green-600"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Tooltip */}
          <div className="absolute -left-full sm:-left-[120%] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
            Book on WhatsApp
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45"></div>
          </div>
        </motion.button>

        {/* Call */}
        <motion.button
          onClick={handleCall}
          className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary shadow-lg hover:shadow-xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Call Now"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
          <div className="absolute -left-full sm:-left-[120%] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
            Call Now
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45"></div>
          </div>
        </motion.button>

        {/* Menu */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-card border-2 border-border shadow-lg hover:shadow-xl flex items-center justify-center hover:border-primary/50 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Menu"
          animate={{ rotate: isExpanded ? [0, 360, 0] : 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Expanded Dock */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            {/* Dock */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t-2 border-primary/20 shadow-2xl rounded-t-2xl sm:rounded-t-3xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="container mx-auto px-4 py-4 sm:py-6">
                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Navigation
                  </span>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>

                {/* Grid Navigation */}
                <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-md mx-auto">
                  {dockItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.label}
                        onClick={item.action}
                        className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl hover:bg-primary/10 active:bg-primary/20 transition-all duration-200"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: idx * 0.08,
                          type: "spring",
                          stiffness: 300,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Close hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-4 sm:mt-6"
                >
                  <span className="text-xs text-muted-foreground">
                    Tap anywhere to close
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingDock;
