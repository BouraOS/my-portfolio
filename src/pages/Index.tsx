import { useState, useEffect, lazy } from "react";
import SEO from "@/SEO";

const PortfolioSidebar = lazy(() => import("@/components/PortfolioSidebar"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <>
      <SEO />
      <div className="portfolio-container">
        {/* Sidebar Navigation */}
        <PortfolioSidebar
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />

        {/* Main Content */}
        <div className="sm:px-4 lg:px-16 md:ml-20">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Index;
