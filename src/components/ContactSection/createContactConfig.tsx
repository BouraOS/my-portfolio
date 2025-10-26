import { Mail, Phone, MapPin } from "lucide-react";
const createContactConfig = (t: (t: string) => string) => [
  {
    icon: Mail,
    title: t("contact.email.title"),
    value: "osamaboura@gmail.com",
    subtitle: t("contact.email.subtitle"),
    href: "mailto:osamaboura@gmail.com",
  },
  {
    icon: Phone,
    title: t("contact.phone.title"),
    value: "+212 691-288849",
    subtitle: t("contact.phone.subtitle"),
    href: "tel:+212691288849",
  },
  {
    icon: MapPin,
    title: t("contact.location.title"),
    value: "Casablanca, Morocco",
    subtitle: t("contact.location.subtitle"),
  },
];

export default createContactConfig;
