
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  url?: string;
  keywords?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Guild Board',
    category: 'Web App',
    image: '/lovable-uploads/611c98b6-d6c7-4eef-8c6e-2adb0ecc29ef.png',
    description: "Organization at your fingertips. Guild Board isn't just another social platform—Here, you don't scroll—you build.\n\nCreate your Guild and build⚡",
    longDescription: "Guild Board is a revolutionary platform for community building and organization. Unlike other social platforms where endless scrolling leads to diminishing returns, Guild Board is designed for purposeful interaction and community building. Create your own Guild, invite members, assign roles, and collaborate on projects that matter.",
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    url: 'https://guildboard.com',
    keywords: ['community platform', 'organization tool', 'team collaboration', 'guild management', 'project coordination'],
    featured: true
  },
  {
    id: 2,
    title: 'Saadhana Board',
    category: 'Web App',
    image: 'https://ik.imagekit.io/kalidaspem/d1660e9c-7a59-4119-9b87-992fd0e28886.jpg',
    description: 'A digital Yantra to connect with your deity and your inner self. This sacred tool helps manifest the deity\'s will into reality. 🔱✨',
    longDescription: "Saadhana Board is a digital spiritual platform that bridges ancient practices with modern technology. It serves as a digital Yantra, helping users connect with their deity and inner selves through guided meditation, prayer tracking, and community support. The platform respects tradition while making spiritual practices accessible in today's digital world.",
    technologies: ['React', 'Firebase', 'WebGL', 'Redux'],
    url: 'https://sadhanaboard.com',
    keywords: ['spiritual platform', 'digital yantra', 'meditation app', 'prayer tracking', 'spiritual community'],
    featured: true
  },
  {
    id: 3,
    title: 'Fuel Unit',
    category: 'Web App',
    image: 'https://ik.imagekit.io/kalidaspem/b8a842e9-0b59-4687-8b15-ea15a15a2a0d.jpg',
    description: 'Fuel Unit tracks fuel prices in real-time, spotting the cheapest fuel stops along your route—no cap, just savings!',
    longDescription: "Fuel Unit is an innovative application that helps users save money on fuel by tracking real-time prices and identifying the most cost-effective fuel stations along their routes. The app analyzes multiple factors including distance, fuel price, and vehicle efficiency to calculate the optimal refueling strategy. With intuitive interfaces and precise algorithms, Fuel Unit ensures you never overpay for fuel again.",
    technologies: ['React Native', 'Node.js', 'Google Maps API', 'Express'],
    url: 'https://fuelunit.app',
    keywords: ['fuel tracking', 'gas price app', 'route optimization', 'fuel savings', 'travel planning'],
    featured: true
  },
  {
    id: 4,
    title: 'Kaali Punk',
    category: 'Web3 Project',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fHww',
    description: 'A Web3 platform merging traditional cultural elements with modern blockchain technology.',
    longDescription: "Kaali Punk is a groundbreaking Web3 project that explores the intersection of traditional cultural elements and modern blockchain technology. It features a unique NFT collection that draws inspiration from ancient deities while embracing a futuristic cyberpunk aesthetic. Beyond just digital art, Kaali Punk creates a community-driven ecosystem with governance tokens, virtual events, and collaborative creative projects.",
    technologies: ['Ethereum', 'Solidity', 'IPFS', 'React', 'Three.js'],
    url: 'https://kaalipunk.io',
    keywords: ['NFT project', 'web3 platform', 'blockchain art', 'cultural NFTs', 'digital collectibles'],
    featured: false
  },
  {
    id: 5,
    title: 'Prompt Engineering Course',
    category: 'E-Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Comprehensive course teaching the art and science of prompt engineering for AI systems.',
    longDescription: "Our Prompt Engineering Course is designed for professionals who want to master the art and science of creating effective prompts for AI systems. From basic concepts to advanced techniques, this course covers everything you need to know about communicating effectively with AI. Learn how to craft prompts that generate consistent, high-quality outputs, troubleshoot common issues, and adapt your approach for different AI models and use cases.",
    technologies: ['Online Learning Platform', 'Interactive Exercises', 'AI Labs', 'Community Forum'],
    url: 'https://gen0.design/courses/prompt-engineering',
    keywords: ['prompt engineering', 'AI course', 'LLM training', 'AI prompting', 'generative AI skills'],
    featured: false
  }
];
