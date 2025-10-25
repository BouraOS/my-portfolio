import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <address className="flex items-center space-x-8 portfolio-text-muted not-italic">
      <a
        href="tel:+212691288849"
        className="flex items-center space-x-2 hover:text-[hsl(var(--portfolio-orange))] transition-colors"
        aria-label="Phone number"
      >
        <Phone size={16} aria-hidden="true" />
        <span>+212 691-288849</span>
      </a>
      <a
        href="mailto:osamaboura@gmail.com"
        className="flex items-center space-x-2 hover:text-[hsl(var(--portfolio-orange))] transition-colors"
        aria-label="Email address"
      >
        <Mail size={16} aria-hidden="true" />
        <span>osamaboura@gmail.com</span>
      </a>
    </address>
  );
};
export default ContactInfo;
