import { MessageSquare } from "lucide-react";
import ContactInfoList from "./ContactInfoList";
import AvailabilityCard from "./AvailabilityCard";

const StatsCard = ({ t }) => (
  <article className="portfolio-card p-6">
    <header className="flex items-center space-x-3 mb-4">
      <MessageSquare
        size={20}
        className="text-[hsl(var(--portfolio-orange))]"
        aria-hidden="true"
      />
      <h4 className="font-medium portfolio-text">
        {t("contact.connectTitle")}
      </h4>
    </header>
    <div className="grid grid-cols-2 gap-4 text-center">
      <div>
        <div
          className="text-2xl font-bold text-[hsl(var(--portfolio-orange))]"
          aria-label="24 hours"
        >
          24h
        </div>
        <div className="text-xs portfolio-text-muted">
          {t("contact.stats.responseTime")}
        </div>
      </div>
      <div>
        <div
          className="text-2xl font-bold text-[hsl(var(--portfolio-orange))]"
          aria-label="100 percent"
        >
          100%
        </div>
        <div className="text-xs portfolio-text-muted">
          {t("contact.stats.projectSuccess")}
        </div>
      </div>
    </div>
  </article>
);

const ContactSidebar = ({ contactInfo, t }) => (
  <aside className="space-y-8">
    <ContactInfoList contactInfo={contactInfo} t={t} />
    <AvailabilityCard t={t} />
    <StatsCard t={t} />
  </aside>
);

export default ContactSidebar;
