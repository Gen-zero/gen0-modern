
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
  },
  {
    id: "2",
    title: "The Evolution of Product Development in the Digital Age",
    slug: "evolution-product-development-digital-age",
    excerpt: "How digital transformation has revolutionized the way we approach product development and innovation.",
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "May 22, 2023",
    author: {
      name: "Rahul Kapoor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    categories: ["Development", "Innovation"],
    readingTime: 12
  },
  {
    id: "3",
    title: "From 0 to 1: Building MVPs That Actually Succeed",
    slug: "from-zero-to-one-building-successful-mvps",
    excerpt: "The essential principles and practices for creating minimum viable products that lead to long-term success.",
    coverImage: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2023",
    author: {
      name: "Arjun Mehta",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    categories: ["Strategy", "MVP"],
    readingTime: 10
  },
  {
    id: "4",
    title: "The Role of Web3 in Shaping the Next Generation of Digital Products",
    slug: "web3-next-generation-digital-products",
    excerpt: "Understanding the implications of Web3 technologies for product development and user experiences.",
    coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 18, 2023",
    author: {
      name: "Vikram Singh",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    categories: ["Web3", "Technology"],
    readingTime: 15
  },
  {
    id: "5",
    title: "Designing for Accessibility: A Comprehensive Guide",
    slug: "designing-for-accessibility-guide",
    excerpt: "Best practices and principles for creating inclusive digital experiences that work for everyone.",
    coverImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "February 5, 2023",
    author: {
      name: "Neha Patel",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    categories: ["Design", "Accessibility"],
    readingTime: 9
  },
  {
    id: "6",
    title: "The Psychology of User Experience: Why Design Matters",
    slug: "psychology-of-user-experience",
    excerpt: "Exploring the psychological principles that influence how users interact with digital products.",
    coverImage: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "January 29, 2023",
    author: {
      name: "Sanjay Kumar",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    categories: ["UX", "Psychology"],
    readingTime: 7
  },
  {
    id: "7",
    title: "Sustainable Development: Building Tech That's Good for the Planet",
    slug: "sustainable-development-tech-for-planet",
    excerpt: "How to approach development with sustainability in mind, reducing environmental impact while creating effective solutions.",
    coverImage: "https://images.unsplash.com/photo-1593941707882-a56bbc8df49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "December 12, 2022",
    author: {
      name: "Ananya Desai",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    categories: ["Sustainability", "Development"],
    readingTime: 11
  },
  {
    id: "8",
    title: "Navigating Regulatory Challenges in Tech Innovation",
    slug: "regulatory-challenges-tech-innovation",
    excerpt: "Understanding the complex regulatory landscape and how to build compliant products without sacrificing innovation.",
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "November 8, 2022",
    author: {
      name: "Rohan Malhotra",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    categories: ["Regulation", "Innovation"],
    readingTime: 13
  }
];

// Blog categories
export const blogCategories: BlogCategory[] = [
  { name: "Design", slug: "design", count: 3 },
  { name: "Development", slug: "development", count: 3 },
  { name: "AI", slug: "ai", count: 1 },
  { name: "Innovation", slug: "innovation", count: 2 },
  { name: "Strategy", slug: "strategy", count: 1 },
  { name: "MVP", slug: "mvp", count: 1 },
  { name: "Web3", slug: "web3", count: 1 },
  { name: "Technology", slug: "technology", count: 1 },
  { name: "Accessibility", slug: "accessibility", count: 1 },
  { name: "UX", slug: "ux", count: 1 },
  { name: "Psychology", slug: "psychology", count: 1 },
  { name: "Sustainability", slug: "sustainability", count: 1 },
  { name: "Regulation", slug: "regulation", count: 1 }
];
