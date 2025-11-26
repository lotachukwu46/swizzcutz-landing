"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Image,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      "https://wa.me/2349055504893?text=Hello%20Swizz%20Cuts!%20I'd%20like%20to%20book%20a%20home%20service.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+2349055504893";
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
        className="fixed right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3"
        style={{ bottom: isExpanded ? "120px" : "24px" }} // SHIFT UP WHEN EXPANDED
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
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t-2 border-primary/20 shadow-2xl rounded-t-2xl sm:rounded-t-3xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="container mx-auto px-4 py-4 sm:py-6">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Navigation
                  </span>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>

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
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

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
