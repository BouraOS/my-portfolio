const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    className="w-12 h-12 portfolio-card rounded-lg flex items-center justify-center portfolio-text-muted hover:portfolio-text hover:border-[hsl(var(--portfolio-orange))] border border-transparent transition-all duration-200 hover:scale-110"
    aria-label={`Visit ${label} profile`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={20} aria-hidden="true" />
  </a>
);

const SocialLinks = ({ links }) => (
  <nav aria-label="Social media links">
    <ul className="flex space-x-4" role="list">
      {links.map((social) => (
        <li key={social.label}>
          <SocialLink {...social} />
        </li>
      ))}
    </ul>
  </nav>
);
export default SocialLinks;
