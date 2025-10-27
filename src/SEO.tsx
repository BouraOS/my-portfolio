import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  lang?: "en" | "fr";
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Bouramada Oussama - Full Stack Developer",
  description = "Full Stack Developer based in Casablanca, Morocco. Specializing in React, Angular, React Native, Java, and Spring Boot.",
  lang = "en",
  image = "https://bouraos.netlify.app/og-image.jpg",
  url = "https://bouraos.netlify.app/",
}: SEOProps) {
  const isFrench = lang === "fr";
  const author = "Bouramada Oussama";
  const email = "osamaboura@gmail.com";
  const phone = "+212691288849";

  return (
    <Helmet>
      {/* ===== Language & Title ===== */}
      <html lang={lang} className="dark" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={isFrench ? "French" : "English"} />

      {/* ===== Open Graph / LinkedIn ===== */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={isFrench ? "fr_FR" : "en_US"} />
      <meta property="og:site_name" content="Bouramada Oussama Portfolio" />

      {/* ===== Twitter Card ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ===== Canonical ===== */}
      <link rel="canonical" href={url} />

      {/* ===== Favicon ===== */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* ===== Theme Color ===== */}
      <meta name="theme-color" content="#FF8C00" />

      {/* ===== Alternate Languages ===== */}
      <link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />
      <link rel="alternate" hrefLang="fr" href={`${url}?lang=fr`} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* ===== Performance ===== */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* ===== Structured Data ===== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: author,
          givenName: "Oussama",
          familyName: "Bouramada",
          url,
          image: "https://bouraos.netlify.app/images/photo-profile.webp",
          jobTitle: "Full Stack Developer",
          description:
            "Experienced Full Stack Developer specializing in React, Angular, React Native, Java, and Spring Boot.",
          worksFor: { "@type": "Organization", name: "Freelance Developer" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Casablanca",
            addressRegion: "Casablanca-Settat",
            addressCountry: "MA",
          },
          email,
          telephone: phone,
          sameAs: [
            "https://www.linkedin.com/in/oussama-bouramada-371b612a3/",
            "https://github.com/BouraOS",
          ],
          knowsAbout: [
            "React",
            "Angular",
            "React Native",
            "TypeScript",
            "JavaScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "REST API",
            "JWT Authentication",
            "CI/CD",
            "Keycloak",
            "Web Development",
            "Mobile Development",
            "UI/UX Design",
          ],
        })}
      </script>
    </Helmet>
  );
}
