import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Home, User, Code, Mail, BriefcaseBusiness } from "lucide-react";
export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export const skills = [
  "Angular",
  "Reactjs",
  "React Native",
  "Java",
  "Spring Boot",
  "JWT",
  "API REST",
  "MySQL",
  "CI/CD",
];
export const navigationItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "services", icon: Code, label: "Services" },
  { id: "experience", icon: BriefcaseBusiness, label: "Experience" },
  { id: "contact", icon: Mail, label: "Contact" },
];
