import { Mail, Phone, MapPin } from "lucide-react";
const createContactConfig = (t: (t: string) => string) => [
  {
    icon: Mail,
    title: t("contact.email.title"),
    value: "osamaboura@gmail.com",
    subtitle: t("contact.email.subtitle"),
    href: `mailto:${t("biography.info.email.value")}`,
  },
  {
    icon: Phone,
    title: t("contact.phone.title"),
    value: t("biography.info.phone.value"),
    subtitle: t("contact.phone.subtitle"),
    href: `tel:${t("biography.info.phone.value")}`,
  },
  {
    icon: MapPin,
    title: t("contact.location.title"),
    value: t("biography.info.address.value"),
    subtitle: t("contact.location.subtitle"),
  },
];

export default createContactConfig;
