import { useState, useEffect, lazy, Suspense } from "react";
import SEO from "@/SEO";
import HeroSection from "@/components/HeroSection";

const PortfolioSidebar = lazy(() => import("@/components/PortfolioSidebar"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Détection intelligente via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <SEO />
      <div className="portfolio-container">
        <Suspense fallback={<div className="loader">Chargement...</div>}>
          <PortfolioSidebar
            activeSection={activeSection}
            onSectionChange={scrollToSection}
          />

          <main
            className="sm:px-4 lg:px-16 md:ml-20"
            role="main"
            id="main-content"
          >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </Suspense>
      </div>
    </>
  );
};

export default Index;
