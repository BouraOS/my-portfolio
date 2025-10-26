// Footer
const Footer = ({ t }) => (
  <footer className="mt-20 pt-8 border-t border-[hsl(var(--portfolio-border))] text-center">
    <p className="portfolio-text-muted">
      © {new Date().getFullYear()} Bouramada Oussama. {t("contact.footer")}
    </p>
  </footer>
);

export default Footer;
