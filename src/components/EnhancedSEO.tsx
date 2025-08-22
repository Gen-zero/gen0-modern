
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  linkedinTitle?: string;
  linkedinDescription?: string;
  linkedinImage?: string;
  structuredData?: any;
  breadcrumbs?: Array<{name: string; url: string}>;
  author?: string;
  publishDate?: string;
  modifyDate?: string;
  articleSection?: string;
  readingTime?: string;
}

const EnhancedSEO = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://gen0.xyz',
  ogTitle,
  ogDescription,
  ogImage = '/lovable-uploads/ee84fdfe-ba5d-4ccf-acad-c575de3d4633.png',
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage = '/lovable-uploads/ee84fdfe-ba5d-4ccf-acad-c575de3d4633.png',
  linkedinTitle,
  linkedinDescription,
  linkedinImage,
  structuredData,
  breadcrumbs,
  author,
  publishDate,
  modifyDate,
  articleSection,
  readingTime
}: EnhancedSEOProps) => {
  // Enhanced structured data with organization info
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gen0",
    "alternateName": "Gen Zero",
    "url": "https://gen0.xyz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gen0.xyz/lovable-uploads/ee84fdfe-ba5d-4ccf-acad-c575de3d4633.png"
    },
    "description": "Digital innovation studio specializing in 0 to 1 product development, MVP building, and GenZ-focused solutions.",
    "founder": [
      {
        "@type": "Person",
        "name": "Manu Narayanan",
        "jobTitle": "Founder & Advisor",
        "url": "https://gen0.xyz/team/manu-narayanan"
      },
      {
        "@type": "Person", 
        "name": "Kalidasan P E M",
        "jobTitle": "Co-Founder and CTO",
        "url": "https://gen0.xyz/team/kalidasan-pem"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/gen0-design",
      "https://github.com/gen0-xyz"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX", 
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "knowsAbout": [
      "Web Development",
      "MVP Development", 
      "UI/UX Design",
      "Prompt Engineering",
      "Digital Product Development",
      "GenZ Products"
    ]
  };

  // Breadcrumb structured data
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // Article structured data for blog posts
  const articleSchema = publishDate ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": author || "Gen0 Team"
    },
    "publisher": organizationSchema,
    "datePublished": publishDate,
    "dateModified": modifyDate || publishDate,
    "articleSection": articleSection,
    "wordCount": readingTime ? parseInt(readingTime) * 200 : undefined
  } : null;

  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Author and publication info */}
      {author && <meta name="author" content={author} />}
      {publishDate && <meta name="article:published_time" content={publishDate} />}
      {modifyDate && <meta name="article:modified_time" content={modifyDate} />}
      {readingTime && <meta name="twitter:label1" content="Reading time" />}
      {readingTime && <meta name="twitter:data1" content={`${readingTime} min read`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:site_name" content="Gen0" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gen0_design" />
      <meta name="twitter:creator" content="@gen0_design" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* LinkedIn specific */}
      <meta property="linkedin:title" content={linkedinTitle || ogTitle || title} />
      <meta property="linkedin:description" content={linkedinDescription || ogDescription || description} />
      {(linkedinImage || ogImage) && <meta property="linkedin:image" content={linkedinImage || ogImage} />}
      
      {/* Enhanced Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Technical SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://ik.imagekit.io" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
