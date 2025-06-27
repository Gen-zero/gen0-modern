
import React, { ReactElement } from 'react';
import { Brain, Cpu, Network, Shield } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  icon: ReactElement;
  description: string;
  longDescription: string;
  backgroundGradient: string;
  features: string[];
  detailedFeatures: ServiceFeature[];
}

export const services: ServiceData[] = [{
  title: 'AGI RESEARCH & DEVELOPMENT',
  icon: <Brain className="h-16 w-16 md:h-20 md:w-20" />,
  description: "Pioneering the next generation of artificial intelligence through advanced neural architectures and cognitive computing systems built from India's innovation hubs.",
  longDescription: "Our AGI Research & Development division is at the forefront of creating truly intelligent systems that can understand, learn, and adapt like humans. Based in India's thriving tech ecosystem, we're developing foundational models that will power the next wave of AI applications across industries.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #FF6B35 100%)',
  features: ['Neural Architecture Research', 'Multi-Modal AI Systems', 'Cognitive Computing', 'Advanced ML Models'],
  detailedFeatures: [
    { title: "Neural Architecture Research", description: "Developing breakthrough neural network architectures that mimic human cognitive processes for enhanced reasoning and learning capabilities." },
    { title: "Multi-Modal AI Systems", description: "Creating AI systems that can process and understand text, images, audio, and video simultaneously for comprehensive intelligence." },
    { title: "Cognitive Computing", description: "Building systems that can think, reason, and make decisions using human-like cognitive processes and knowledge representation." },
    { title: "Advanced ML Models", description: "Researching and developing cutting-edge machine learning models that push the boundaries of what's possible in artificial intelligence." }
  ]
}, {
  title: 'AGI INFRASTRUCTURE & SCALING',
  icon: <Cpu className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Building robust, scalable infrastructure to support AGI development and deployment at scale across India and globally.',
  longDescription: "Our infrastructure team creates the backbone that enables AGI systems to scale efficiently. We design and implement high-performance computing solutions, distributed training systems, and deployment frameworks that can handle the computational demands of next-generation AI.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #E67E22 100%)',
  features: ['High-Performance Computing', 'Distributed Training', 'Model Optimization', 'Scalable Deployment'],
  detailedFeatures: [
    { title: "High-Performance Computing", description: "Designing and implementing HPC clusters optimized for AI workloads, leveraging India's growing computational infrastructure." },
    { title: "Distributed Training Systems", description: "Creating efficient distributed training frameworks that can scale AGI model training across multiple nodes and cloud environments." },
    { title: "Model Optimization", description: "Developing techniques to optimize AGI models for various hardware configurations while maintaining performance and accuracy." },
    { title: "Scalable Deployment", description: "Building deployment pipelines that can efficiently serve AGI models at scale, from edge devices to cloud infrastructure." }
  ]
}, {
  title: 'AGI APPLICATIONS & INTEGRATION',
  icon: <Network className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Translating AGI research into practical applications that solve real-world problems across industries.',
  longDescription: "We bridge the gap between AGI research and practical applications by developing industry-specific solutions, APIs, and integration frameworks. Our team specializes in making advanced AI accessible through well-designed interfaces and human-AI collaboration tools.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #D35400 100%)',
  features: ['Industry Solutions', 'API Development', 'Custom Implementations', 'Human-AI Collaboration'],
  detailedFeatures: [
    { title: "Industry-Specific Solutions", description: "Developing tailored AGI applications for healthcare, finance, education, and other sectors, addressing unique industry challenges." },
    { title: "API & SDK Development", description: "Creating developer-friendly APIs and SDKs that make AGI capabilities accessible to businesses and developers worldwide." },
    { title: "Custom AGI Implementations", description: "Building bespoke AGI solutions that integrate seamlessly with existing business processes and technology stacks." },
    { title: "Human-AI Collaboration Tools", description: "Designing interfaces and workflows that enhance human capabilities through intelligent AI assistance and augmentation." }
  ]
}, {
  title: 'AGI ETHICS & SAFETY',
  icon: <Shield className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Ensuring responsible AGI development through comprehensive safety protocols, ethical frameworks, and alignment research.',
  longDescription: "As we advance toward AGI, ensuring safety and ethical development is paramount. Our ethics and safety team works on AI alignment, bias mitigation, and responsible development practices that prioritize human welfare and societal benefit.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #C0392B 100%)',
  features: ['AI Safety Protocols', 'Bias Mitigation', 'Alignment Research', 'Regulatory Compliance'],
  detailedFeatures: [
    { title: "AI Safety Protocols", description: "Developing comprehensive safety frameworks to ensure AGI systems operate reliably and predictably in all scenarios." },
    { title: "Bias Detection & Mitigation", description: "Creating tools and methodologies to identify, measure, and eliminate bias in AGI systems for fair and equitable outcomes." },
    { title: "AGI Alignment Research", description: "Researching methods to ensure AGI systems remain aligned with human values and objectives as they become more capable." },
    { title: "Regulatory Compliance", description: "Working with policymakers and regulators to establish responsible AI governance frameworks for safe AGI deployment." }
  ]
}];
