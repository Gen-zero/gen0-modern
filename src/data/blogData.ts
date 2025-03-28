
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: string[];
  readingTime: number;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

// Sample blog post data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Revolutionizing UI Design with AI: The Future is Here",
    slug: "revolutionizing-ui-design-with-ai",
    excerpt: "Explore how AI is transforming the landscape of user interface design and what it means for designers and users alike.",
    coverImage: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "June 15, 2023",
    author: {
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    categories: ["Design", "AI"],
    readingTime: 8
  }
];

// Blog categories
export const blogCategories: BlogCategory[] = [
  { name: "Design", slug: "design", count: 1 },
  { name: "Development", slug: "development", count: 0 },
  { name: "AI", slug: "ai", count: 1 },
  { name: "Innovation", slug: "innovation", count: 0 },
  { name: "Strategy", slug: "strategy", count: 0 },
  { name: "MVP", slug: "mvp", count: 0 },
  { name: "Web3", slug: "web3", count: 0 },
  { name: "Technology", slug: "technology", count: 0 },
  { name: "Accessibility", slug: "accessibility", count: 0 },
  { name: "UX", slug: "ux", count: 0 },
  { name: "Psychology", slug: "psychology", count: 0 },
  { name: "Sustainability", slug: "sustainability", count: 0 },
  { name: "Regulation", slug: "regulation", count: 0 }
];
