import { Code, Search, Smartphone, Database, Palette } from "lucide-react";
const createServiceConfig = (t: (t: string) => string) => [
  {
    id: "web-development",
    icon: Code,
    title: t("services.serviceList.webDevelopment.title"),
    description: t("services.serviceList.webDevelopment.description"),
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: t("services.serviceList.seoOptimization.title"),
    description: t("services.serviceList.seoOptimization.description"),
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: t("services.serviceList.mobileDevelopment.title"),
    description: t("services.serviceList.mobileDevelopment.description"),
  },
  {
    id: "backend-development",
    icon: Database,
    title: t("services.serviceList.backendDevelopment.title"),
    description: t("services.serviceList.backendDevelopment.description"),
  },
  {
    id: "uiux-design",
    icon: Palette,
    title: t("services.serviceList.uiuxDesign.title"),
    description: t("services.serviceList.uiuxDesign.description"),
  },
];

export default createServiceConfig;
