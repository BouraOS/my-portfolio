import { Monitor, Code, Search, Smartphone, Database, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Creating beautiful, user-friendly interfaces that capture your brand essence and provide exceptional user experiences across all devices.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building robust, scalable web applications using modern technologies and best practices to bring your digital vision to life.',
    },
    {
      icon: Search,
      title: 'SEO Marketing',
      description: 'Optimizing your website for search engines to increase visibility, drive organic traffic, and improve your online presence.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing responsive mobile applications that work seamlessly across iOS and Android platforms for maximum reach.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating powerful server-side solutions with secure APIs, database design, and cloud infrastructure management.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences that delight users while achieving your business objectives.',
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header text-center">What I Do?</h2>
          <p className="text-lg portfolio-text-muted max-w-2xl mx-auto">
            I offer comprehensive web and mobile development services to help bring your digital ideas to life. 
            From concept to deployment, I ensure quality and excellence in every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="portfolio-card p-8 hover:scale-105 transition-all duration-300 hover:border-[hsl(var(--portfolio-orange))] group cursor-pointer"
              >
                <div className="portfolio-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[hsl(var(--portfolio-bg))]" />
                </div>
                
                <h3 className="text-xl font-semibold portfolio-text mb-4 group-hover:text-[hsl(var(--portfolio-orange))] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="portfolio-text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="w-0 h-0.5 bg-[hsl(var(--portfolio-orange))] mt-6 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg portfolio-text-muted mb-6">
            Ready to start your next project?
          </p>
          <button className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;