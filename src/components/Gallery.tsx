"use client";
import { motion } from "framer-motion";
import { ExternalLink, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/gallery-1.jpeg", alt: "Premium fade transformation" },
  { src: "/gallery-2.jpeg", alt: "Clean beard grooming and line-up" },
  { src: "/gallery-5.jpeg", alt: "Creative haircut with design" },
  { src: "/gallery-4.jpeg", alt: "Professional taper fade" },
];

const Gallery = () => {
  const handleImageClick = (index: number) => {
    console.log("Opening image:", index);
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <ZoomIn className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wider">
              OUR GALLERY
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Recent <span className="text-primary">Cuts</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See the precision and artistry in every cut. These results speak for
            themselves.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
              onClick={() => handleImageClick(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-0.5 bg-primary mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                  <p className="text-foreground font-semibold text-sm sm:text-base mb-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-xs sm:text-sm transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>View details</span>
                  </div>
                </div>
              </div>

              {/* Hover Border & Shine */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl sm:rounded-2xl transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "4.9/5", label: "Rating" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
              Join hundreds of satisfied clients in Jos who trust us with their
              style.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Appointment
              <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
