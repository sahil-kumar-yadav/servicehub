"use client";

import { useState, useEffect } from "react";

// Components
import BackgroundElements from "../components/BackgroundElements";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Stats from "../components/Stats";
import TrustBadges from "../components/TrustBadges";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercentage);
      
      // Update active section
      const sections = ["home", "services", "projects", "process", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* Background Elements (Particles, Orbs, Scroll Progress) */}
      <BackgroundElements scrollProgress={scrollProgress} particles={particles} />

      {/* Navigation */}
      <Navigation 
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero mounted={mounted} scrollToSection={scrollToSection} />

      {/* Services Section */}
      <Services mounted={mounted} scrollToSection={scrollToSection} />

      {/* Team Section */}
      <Team mounted={mounted} />

      {/* Pricing Section */}
      <Pricing mounted={mounted} scrollToSection={scrollToSection} />

      {/* FAQ Section */}
      <FAQ />

      {/* Projects Section */}
      <Projects mounted={mounted} scrollToSection={scrollToSection} />

      {/* Process Section */}
      <Process mounted={mounted} />

      {/* Stats Section */}
      <Stats mounted={mounted} />

      {/* Trust Badges Section */}
      <TrustBadges mounted={mounted} />

      {/* Testimonials Section */}
      <Testimonials mounted={mounted} />

      {/* CTA Section */}
      <CTA scrollToSection={scrollToSection} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

