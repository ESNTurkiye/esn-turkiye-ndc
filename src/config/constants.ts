export const SURVEY_URL = "https://esnsurvey.limesurvey.net/174291?lang=en/";

export const SEO = {
  title: "Barriers of Mobility | Visa Issues for Non-EU Students - ESN Türkiye",
  description:
    "Comprehensive research on visa barriers faced by non-EU students in Erasmus+ and mobility programs. 92% require long-term visas, 35% face unreasonably long processes. Data-driven policy recommendations for student mobility rights.",
  keywords: [
    "visa barriers",
    "non-EU students",
    "Erasmus visa problems",
    "student mobility barriers",
    "visa challenges Europe",
    "Erasmus+ visa process",
    "international student visas",
    "mobility rights",
    "visa rejection reasons",
    "student visa survey",
    "ESN Türkiye research",
    "European student mobility",
  ],
  ogImage: "https://esnturkiye.github.io/esn-assets/images/og-image.png",
  url: "https://barriersofmobility.esnturkey.org/",
  twitterHandle: "@esnturkiye",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: "Barriers of Mobility - Visa Issues for Non-EU Students",
    description:
      "A comprehensive research project analyzing visa problems faced by students from Türkiye and non-EU countries participating in Erasmus+, ESC, and other mobility programs.",
    url: "https://barriersofmobility.esnturkey.org/",
    keywords: [
      "visa barriers",
      "international students",
      "Erasmus",
      "mobility rights",
      "visa challenges",
      "student mobility",
      "Erasmus visa problems",
      "student mobility barriers",
      "policy advocacy",
    ],
    sponsor: {
      "@type": "Organization",
      name: "ESN Türkiye",
      alternateName: "Erasmus Student Network Türkiye",
      url: "https://esnturkiye.org",
      sameAs: [
        "https://x.com/esnturkiye",
        "https://www.linkedin.com/company/erasmusstudentnetwork-turkey",
        "https://www.instagram.com/esnturkiye/",
        "https://www.facebook.com/esntr",
      ],
    },
    funder: {
      "@type": "Organization",
      name: "National Development Committee",
      parentOrganization: {
        "@type": "Organization",
        name: "ESN Türkiye",
      },
    },
    author: {
      "@type": "Person",
      name: "Merve Ceylan",
      jobTitle: "President of ESN Türkiye",
    },
    datePublished: "2025-04-05",
    inLanguage: "en",
    about: {
      "@type": "Thing",
      name: "Student Visa Barriers",
      description:
        "Research on visa challenges faced by non-EU students in European mobility programs",
    },
  },
} as const;

export const ANALYTICS = {
  measurementId: "G-ZH05MP1SGQ",
} as const;

export const SOCIAL_MEDIA = {
  twitter: "https://x.com/esnturkiye",
  linkedin:
    "https://www.linkedin.com/company/erasmusstudentnetwork-turkey/posts/?feedView=all",
  instagram: "https://www.instagram.com/esnturkiye/",
  facebook: "https://www.facebook.com/esntr/?locale=tr_TR",
} as const;