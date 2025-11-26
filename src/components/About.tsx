"use client";

import { motion } from "framer-motion";
import { Award, Clock, MapPin, Scissors, Star, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 -left-4 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 -right-4 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Scissors className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-medium tracking-wider">
              ABOUT SWIZZ CUTZ
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Professional Mobile Barbering{" "}
            <span className="text-primary block sm:inline">
              with a Personal Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Swizz Cutz brings premium grooming directly to your doorstep in Jos.
            From clean fades to sharp line-ups, we deliver precision, style, and
            convenience for every client.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <img
                src="/swissb.jpg"
                alt="Swizz Barber at work"
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4]"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold">3+</div>
                <div className="text-xs sm:text-sm font-medium">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center gap-4 sm:gap-6 order-1 lg:order-2"
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Swizz Cutz has been serving Jos with top-notch mobile barber
                services for over 3 years. Our mission is to make professional
                grooming convenient and personalized, right in the comfort of
                your home.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We understand that your time is valuable. That's why we bring
                the barbershop experience to you, complete with premium tools,
                professional products, and the same attention to detail you'd
                expect from a luxury salon.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              {[
                { icon: MapPin, text: "Serves All Jos City" },
                { icon: Clock, text: "Flexible Scheduling" },
                { icon: Award, text: "Certified Professional" },
                { icon: Users, text: "All Ages Welcome" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground"
                >
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-6"
            >
              {[
                { icon: Users, number: "500+", label: "Clients" },
                { icon: Star, number: "4.9", label: "Rating" },
                { icon: Scissors, number: "30+", label: "Styles" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
                >
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                View Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-center"
              >
                Book Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
