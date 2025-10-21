import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Royal Air Maroc',
      location: 'Casablanca, Morocco',
      period: '2024 - Present',
      type: 'Full Time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly web applications.',
      achievements: [
        'Built 5+ successful mobile and web applications',
        'Implemented automated testing protocols',
        'Reduced bug reports by 100%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'IT Road Consulting',
      location: 'Agadir, Morocco',
      period: '2023 - 2024',
      type: 'Full Time',
      description: 'Started my professional journey by working on various client websites and learning industry best practices. Gained experience in HTML, CSS, JavaScript, and basic backend technologies.',
      achievements: [
        'Completed 10+ website projects',
        'Achieved 100% client satisfaction rate'
      ]
    }
  ];

  const skills = [
    { name: 'Angular', percentage: 95 },
    { name: 'Reactjs', percentage: 90 },
    { name: 'React Native', percentage: 88 },
    { name: 'Java', percentage: 85 },
    { name: 'Spring Boot', percentage: 80 },
    { name: 'JWT', percentage: 85 },
    { name: 'API REST', percentage: 85 },
    { name: 'MySQL', percentage: 80 },
    { name: 'CI/CD', percentage: 90 },
    { name: 'Keycloak', percentage: 70 },
    { name: 'UI/UX Design', percentage: 60 }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h2 className="section-header">Professional Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-[hsl(var(--portfolio-border))]"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="portfolio-orange w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <BriefcaseBusiness size={20} className="text-[hsl(var(--portfolio-bg))]" />
                    </div>
                    
                    {/* Content */}
                    <div className="portfolio-card p-6 flex-1 hover:border-[hsl(var(--portfolio-orange))] transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold portfolio-text mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg text-[hsl(var(--portfolio-orange))] mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        
                        <span className="portfolio-orange px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm portfolio-text-muted">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="portfolio-text-muted mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium portfolio-text">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm portfolio-text-muted">
                              <div className="w-1.5 h-1.5 bg-[hsl(var(--portfolio-orange))] rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold portfolio-text mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="portfolio-text font-medium">{skill.name}</span>
                      <span className="text-[hsl(var(--portfolio-orange))]">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold portfolio-text mb-6">Education</h3>
              <div className="space-y-6">
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold portfolio-text">Bachelor of Computer Science</h4>
                  <p className="text-[hsl(var(--portfolio-orange))] mb-1">Stanford University</p>
                  <p className="text-sm portfolio-text-muted">2014 - 2018</p>
                </div>
                
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold portfolio-text">Full-Stack Web Development</h4>
                  <p className="text-[hsl(var(--portfolio-orange))] mb-1">FreeCodeCamp</p>
                  <p className="text-sm portfolio-text-muted">2018</p>
                </div>
                
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold portfolio-text">AWS Solutions Architect</h4>
                  <p className="text-[hsl(var(--portfolio-orange))] mb-1">Amazon Web Services</p>
                  <p className="text-sm portfolio-text-muted">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;