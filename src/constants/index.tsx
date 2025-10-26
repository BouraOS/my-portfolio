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

export const skillsRate = [
  { name: "Angular", percentage: 95 },
  { name: "Reactjs", percentage: 90 },
  { name: "React Native", percentage: 88 },
  { name: "Java", percentage: 85 },
  { name: "Spring Boot", percentage: 80 },
  { name: "JWT", percentage: 85 },
  { name: "API REST", percentage: 85 },
  { name: "MySQL", percentage: 80 },
  { name: "CI/CD", percentage: 90 },
  { name: "Keycloak", percentage: 70 },
  { name: "UI/UX Design", percentage: 60 },
];
