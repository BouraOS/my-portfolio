import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  lang?: "en" | "fr";
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Bouramada Oussama - Full Stack Developer | React, Angular, Spring Boot",
  description = "Full Stack Developer based in Casablanca, Morocco. Expert in React, Angular, React Native, Java, and Spring Boot.",
  lang = "en",
  image = "https://bouraos.netlify.app/og-image.jpg",
  url = "https://bouraos.netlify.app/",
}: SEOProps) {
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bouramada Oussama",
    givenName: "Oussama",
    familyName: "Bouramada",
    url,
    image: "https://bouraos.netlify.app/images/photo-profile.webp",
    jobTitle: "Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Angular, React Native, Java, and Spring Boot.",
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    email: "osamaboura@gmail.com",
    telephone: "+212691288849",
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
      "REST API",
      "JWT Authentication",
      "MySQL",
      "CI/CD",
      "Keycloak",
      "Web Development",
      "Mobile Development",
      "UI/UX Design",
    ],
  };
  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bouramada Oussama Portfolio",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bouramada Oussama" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Canonical */}
      <link rel="canonical" href={url} />
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify([schemaPerson, schemaWebsite])}
      </script>{" "}
    </Helmet>
  );
}
