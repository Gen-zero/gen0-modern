
import React, { ReactNode } from 'react';
import { Code, Layout, Database, Globe, Rocket } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  icon: ReactNode;
  description: string;
  longDescription: string;
  backgroundGradient: string;
  features: string[];
  detailedFeatures: ServiceFeature[];
}

export const services: ServiceData[] = [{
  title: '0 TO 1',
  icon: <Rocket className="h-16 w-16 md:h-20 md:w-20" />,
  description: "Transform your ideas into reality swiftly with our '0 to 1' service—rapid, robust MVPs built to validate your vision.",
  longDescription: "Our '0 to 1' service is designed for entrepreneurs and businesses looking to quickly transform their ideas into tangible products. We focus on building rapid, robust MVPs that validate your vision and accelerate your journey to market.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #7c43ea 100%)',
  features: ['Branding', 'MVP Development', 'Product Website', 'Product Documentation'],
  detailedFeatures: [
    { title: "Strategic Branding", description: "Create a compelling brand identity that resonates with your target audience and differentiates you from competitors." },
    { title: "Rapid MVP Development", description: "Build a functional minimum viable product within weeks, not months, focusing on core features that deliver immediate value." },
    { title: "Product Website", description: "Launch a professional, conversion-focused website that effectively communicates your product's value proposition." },
    { title: "Comprehensive Documentation", description: "Develop clear, structured documentation to support user onboarding and facilitate future development." }
  ]
}, {
  title: 'WEB DEVELOPMENT',
  icon: <Code className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Building performant, scalable web applications with modern technologies and best practices.',
  longDescription: "Our web development services deliver performant, scalable applications built with modern technologies and best practices. We focus on creating solutions that are not only technically excellent but also intuitive and user-friendly.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #9b59b6 100%)',
  features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization'],
  detailedFeatures: [
    { title: "Frontend Development", description: "Create responsive, accessible user interfaces using modern frameworks like React, Vue, or Angular that deliver exceptional user experiences." },
    { title: "Backend Systems", description: "Build robust, secure backend infrastructure using Node.js, Python, or other technologies tailored to your specific requirements." },
    { title: "API Integration", description: "Seamlessly connect your application with third-party services and data sources through well-designed API integrations." },
    { title: "Performance Optimization", description: "Optimize loading times, responsiveness, and resource usage to ensure your application performs flawlessly across all devices." }
  ]
}, {
  title: 'UI/UX DESIGN',
  icon: <Layout className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
  longDescription: "Our UI/UX design services focus on creating intuitive interfaces and experiences that not only delight users but also drive business success. We combine aesthetic appeal with functional design to create memorable digital experiences.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #8e44ad 100%)',
  features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  detailedFeatures: [
    { title: "Comprehensive User Research", description: "Understand your users' needs, behaviors, and pain points through in-depth research and analysis to inform design decisions." },
    { title: "Strategic Wireframing", description: "Develop the blueprint of your digital product with clear information architecture and user flows that optimize conversion paths." },
    { title: "Interactive Prototyping", description: "Create clickable prototypes that simulate the real user experience, allowing for early testing and refinement." },
    { title: "Iterative Usability Testing", description: "Conduct thorough usability tests to identify issues, gather user feedback, and continuously improve the design." }
  ]
}, {
  title: 'SEO OPTIMIZATION',
  icon: <Globe className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Boost your online visibility and drive more traffic to your website with our SEO services.',
  longDescription: "Our SEO optimization services are designed to boost your online visibility and drive qualified traffic to your website. We use data-driven strategies that adapt to the constantly evolving search engine algorithms.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #6c3483 100%)',
  features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
  detailedFeatures: [
    { title: "Strategic Keyword Research", description: "Identify high-value keywords that your target audience is actively searching for, balancing search volume and competition." },
    { title: "Comprehensive On-Page SEO", description: "Optimize all on-page elements including meta tags, headings, content, and internal linking to improve search engine rankings." },
    { title: "Technical SEO Audits", description: "Identify and fix technical issues that may be hindering your site's performance in search engines, such as site speed, mobile-friendliness, and crawlability." },
    { title: "Content Strategy Development", description: "Create a content plan that addresses user intent at each stage of the buyer's journey, establishing your brand as an authority." }
  ]
}];
