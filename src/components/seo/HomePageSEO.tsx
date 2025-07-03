import EnhancedSEO from "@/components/EnhancedSEO";

const HomePageSEO = () => {
  const homeTitle = "Gen0 | Building AGI from India - Artificial General Intelligence Development";
  const homeDescription = "Pioneering Artificial General Intelligence development from India's innovation ecosystem. Gen0 specializes in AGI research, infrastructure, applications, and ethics & safety. Building the future of AI that thinks, learns, and evolves.";
  const homeKeywords = "Gen0, Gen zero, AGI, Artificial General Intelligence, AI development India, AGI research, AI infrastructure, AI applications, AI ethics, AI safety, machine learning, deep learning, neural networks, AI innovation India, Bharat AI, Indian AI startup";
  const canonicalUrl = "https://gen0.xyz/";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gen0 - Building AGI from India",
    "description": homeDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "Gen0",
      "description": "Artificial General Intelligence development company pioneering the future of AI from India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gen0 AGI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "AGI Research",
            "description": "Fundamental research in artificial general intelligence, cognitive architectures, and advanced AI systems",
            "category": "AI Research"
          },
          {
            "@type": "Offer", 
            "name": "AGI Infrastructure",
            "description": "Scalable computing infrastructure and frameworks for AGI development and deployment",
            "category": "AI Infrastructure"
          },
          {
            "@type": "Offer",
            "name": "AGI Applications", 
            "description": "Real-world applications of artificial general intelligence across industries and domains",
            "category": "AI Applications"
          },
          {
            "@type": "Offer",
            "name": "Ethics & Safety",
            "description": "Responsible AI development with focus on safety, alignment, and ethical considerations",
            "category": "AI Ethics"
          }
        ]
      },
      "knowsAbout": [
        "Artificial General Intelligence",
        "Machine Learning",
        "Deep Learning", 
        "Neural Networks",
        "AI Safety",
        "AI Ethics",
        "Cognitive Architectures",
        "AI Research"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": canonicalUrl
        }
      ]
    }
  };

  return (
    <EnhancedSEO 
      title={homeTitle}
      description={homeDescription}
      keywords={homeKeywords}
      canonicalUrl={canonicalUrl}
      ogTitle="Gen0 | Building AGI from India - The Future of Artificial Intelligence"
      ogDescription="Pioneering Artificial General Intelligence from India. We're building AI that thinks, learns, and evolves - transforming the future of technology from Bharat to the world."
      ogType="website"
      twitterTitle="Gen0 | Building AGI from India 🇮🇳🧠"
      twitterDescription="Pioneering Artificial General Intelligence development from India's innovation ecosystem. Building the future of AI that truly understands and adapts."
      linkedinTitle="Gen0 | Artificial General Intelligence Development from India"
      linkedinDescription="Leading AGI research and development from India. Specializing in cognitive architectures, AI safety, and next-generation artificial intelligence systems."
      structuredData={structuredData}
      breadcrumbs={[
        { name: "Home", url: "https://gen0.xyz/" }
      ]}
    />
  );
};

export default HomePageSEO;