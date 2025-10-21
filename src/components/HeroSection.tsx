import { Download, Phone, Mail, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with contact info */}
        <div className="flex justify-between items-start mb-16">
          <div className="flex items-center space-x-8 portfolio-text-muted">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+212 691-288849</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>osamaboura@gmail.com</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm border border-[hsl(var(--portfolio-orange))] text-[hsl(var(--portfolio-orange))] rounded hover:portfolio-orange portfolio-orange-hover transition-colors duration-200">
              EN
            </button>
            <button className="px-3 py-1 text-sm portfolio-text-muted hover:portfolio-text transition-colors duration-200">
              FR
            </button>
          </div>
        </div>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold portfolio-text mb-4">
                Bouramada Oussama
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-[hsl(var(--portfolio-orange))] mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-lg portfolio-text-muted leading-relaxed max-w-lg">
                Développeur Full Stack passionné, j’interviens sur des projets web et mobiles 
                en alliant une forte expertise frontend (Angular, React, React Native)
                à une maîtrise du backend Java avec Spring Boot. 
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                <Download size={18} />
                <span>Download CV</span>
              </button>
              
              <button className="border border-[hsl(var(--portfolio-border))] portfolio-text px-8 py-3 rounded-lg font-medium hover:border-[hsl(var(--portfolio-orange))] hover:text-[hsl(var(--portfolio-orange))] transition-all duration-200">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[hsl(var(--portfolio-border))]">
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--portfolio-orange))]">2+</div>
                <div className="text-sm portfolio-text-muted">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--portfolio-orange))]">30+</div>
                <div className="text-sm portfolio-text-muted">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--portfolio-orange))]">10+</div>
                <div className="text-sm portfolio-text-muted">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[28rem] portfolio-card rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--portfolio-orange))] to-[hsl(var(--portfolio-orange-hover))] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/photo-profile.jpeg" alt="Profile" width={128} height={128} className="object-cover w-full h-full" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 portfolio-orange rounded-full flex items-center justify-center">
                <Globe size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[hsl(var(--portfolio-card))] border border-[hsl(var(--portfolio-border))] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;