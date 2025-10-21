import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'osamaboura@gmail.com',
      subtitle: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+212 691-288849',
      subtitle: 'Available for work in Morocco'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Casablanca, Morocco',
      subtitle: 'Available for work in Morocco'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-header">Get In Touch</h2>
          <p className="text-lg portfolio-text-muted max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold portfolio-text mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="portfolio-orange w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[hsl(var(--portfolio-bg))]" />
                      </div>
                      <div>
                        <h4 className="font-medium portfolio-text">{info.title}</h4>
                        <p className="text-[hsl(var(--portfolio-orange))] font-medium">{info.value}</p>
                        <p className="text-sm portfolio-text-muted">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="portfolio-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={20} className="text-[hsl(var(--portfolio-orange))]" />
                <h4 className="font-medium portfolio-text">Availability</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="portfolio-text-muted">Monday - Friday</span>
                  <span className="portfolio-text">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="portfolio-text-muted">Weekend</span>
                  <span className="portfolio-text">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="portfolio-text-muted">Response time</span>
                  <span className="text-[hsl(var(--portfolio-orange))]">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="portfolio-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare size={20} className="text-[hsl(var(--portfolio-orange))]" />
                <h4 className="font-medium portfolio-text">Let's Connect</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--portfolio-orange))]">24h</div>
                  <div className="text-xs portfolio-text-muted">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--portfolio-orange))]">100%</div>
                  <div className="text-xs portfolio-text-muted">Project Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="portfolio-card p-8">
              <h3 className="text-xl font-semibold portfolio-text mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium portfolio-text mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[hsl(var(--portfolio-bg))] border border-[hsl(var(--portfolio-border))] rounded-lg portfolio-text focus:outline-none focus:border-[hsl(var(--portfolio-orange))] transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium portfolio-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[hsl(var(--portfolio-bg))] border border-[hsl(var(--portfolio-border))] rounded-lg portfolio-text focus:outline-none focus:border-[hsl(var(--portfolio-orange))] transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium portfolio-text mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[hsl(var(--portfolio-bg))] border border-[hsl(var(--portfolio-border))] rounded-lg portfolio-text focus:outline-none focus:border-[hsl(var(--portfolio-orange))] transition-colors duration-200"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium portfolio-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[hsl(var(--portfolio-bg))] border border-[hsl(var(--portfolio-border))] rounded-lg portfolio-text focus:outline-none focus:border-[hsl(var(--portfolio-orange))] transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:scale-105"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[hsl(var(--portfolio-border))] text-center">
          <p className="portfolio-text-muted">
            © 2024 Bouramada Oussama. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;