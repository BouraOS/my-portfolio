import { Clock } from "lucide-react";

const AvailabilityCard = ({ t }) => (
  <article className="portfolio-card p-6">
    <header className="flex items-center space-x-3 mb-4">
      <Clock
        size={20}
        className="text-[hsl(var(--portfolio-orange))]"
        aria-hidden="true"
      />
      <h4 className="font-medium portfolio-text">
        {t("contact.availability.title")}
      </h4>
    </header>
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between">
        <dt className="portfolio-text-muted">
          {t("contact.availability.weekdays")}
        </dt>
        <dd className="portfolio-text">
          {t("contact.availability.weekdaysHours")}
        </dd>
      </div>
      <div className="flex justify-between">
        <dt className="portfolio-text-muted">
          {t("contact.availability.weekend")}
        </dt>
        <dd className="portfolio-text">
          {t("contact.availability.weekendHours")}
        </dd>
      </div>
      <div className="flex justify-between">
        <dt className="portfolio-text-muted">
          {t("contact.availability.response")}
        </dt>
        <dd className="text-[hsl(var(--portfolio-orange))] font-medium">
          {t("contact.availability.responseTime")}
        </dd>
      </div>
    </dl>
  </article>
);

export default AvailabilityCard;
