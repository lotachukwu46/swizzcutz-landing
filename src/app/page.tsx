import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingDock />
    </div>
  );
};

export default Index;
