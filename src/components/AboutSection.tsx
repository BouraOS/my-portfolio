import { Github, Linkedin, Twitter, Instagram, Calendar, MapPin, Smartphone, AtSign, MessageCircle, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const personalDetails = [
    { label: 'Name', value: 'Bouramada Oussama', icon: AtSign },
    { label: 'Birthday', value: 'February 19, 1997', icon: Calendar },
    { label: 'Age', value: '28 Years', icon: Calendar },
    { label: 'Address', value: 'Casablanca, Morocco', icon: MapPin },
    { label: 'Email', value: 'osamaboura@gmail.com', icon: AtSign },
    { label: 'Phone', value: '+212 691-288849', icon: Smartphone },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header">Biography</h2>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Profile Image and Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-full portfolio-card overflow-hidden relative border-4 border-[hsl(var(--portfolio-orange))]">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--portfolio-orange))] to-[hsl(var(--portfolio-orange-hover))] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/photo-profile.jpeg" alt="Profile" width={128} height={128} className="object-cover w-full h-full rounded-full" />
                </div>
              </div>
              
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-[hsl(var(--portfolio-bg))] animate-pulse"></div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 portfolio-card rounded-lg flex items-center justify-center portfolio-text-muted hover:portfolio-text hover:border-[hsl(var(--portfolio-orange))] border border-transparent transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Personal Details */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {personalDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      'portfolio-card border border-[hsl(var(--portfolio-border))]'
                    }`}>
                      <Icon size={16} className='portfolio-text-muted' />
                    </div>
                    <div>
                      <div className="text-sm portfolio-text-muted">{detail.label}</div>
                      <div className="font-medium portfolio-text">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Biography Text */}
            <div className="space-y-6 portfolio-text-muted leading-relaxed">
              <p>
                Développeur Full Stack passionné, j’interviens sur des projets web et mobiles en alliant
                une forte expertise frontend (Angular, React, React Native) à une maîtrise du backend Java avec Spring Boot.
              </p>
              
              <p>
                Je conçois des architectures robustes, maintenables et sécurisées, tout en assurant une expérience utilisateur fluide et intuitive.
              </p>
              
              <p>
                J’ai travaillé sur des projets complexes intégrant des systèmes d’authentification avancés
                (Keycloak, JWT), des API REST sécurisées, des formulaires dynamiques, et une logique métier solide côté backend.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Angular', 'Reactjs', 'React Native', 'Java', 'Spring Boot', 'JWT', 'API REST', 'MySQL', 'CI/CD'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm portfolio-card rounded-full border border-[hsl(var(--portfolio-border))] portfolio-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;