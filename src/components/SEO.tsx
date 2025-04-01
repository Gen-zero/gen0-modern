
import { Helmet } from 'react-helmet-async';

interface SEOProps {
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
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://gen0.xyz',
  ogTitle,
  ogDescription,
  ogImage = '/lovable-uploads/82543c4a-707b-40ad-9352-e934e6252d4f.png',
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage = '/lovable-uploads/82543c4a-707b-40ad-9352-e934e6252d4f.png',
  linkedinTitle,
  linkedinDescription,
  linkedinImage,
  structuredData
}: SEOProps) => {
  // Use the LinkedIn-specific values if provided, otherwise fall back to OG tags
  const finalLinkedinTitle = linkedinTitle || ogTitle || title;
  const finalLinkedinDescription = linkedinDescription || ogDescription || description;
  const finalLinkedinImage = linkedinImage || ogImage;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* LinkedIn specific */}
      <meta property="linkedin:title" content={finalLinkedinTitle} />
      <meta property="linkedin:description" content={finalLinkedinDescription} />
      {finalLinkedinImage && <meta property="linkedin:image" content={finalLinkedinImage} />}
      
      {/* Geo Tags for India and Silicon Valley */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
