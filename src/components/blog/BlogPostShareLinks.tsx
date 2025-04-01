
import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, Instagram, Copy } from "lucide-react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const BlogPostShareLinks = () => {
  const location = useLocation();
  const currentUrl = `https://gen0.design${location.pathname}`;
  const pageTitle = document.title || "Check out this article from Gen0";
  const pageDescription = "Explore this fascinating article about AI, design, and technology from Gen0.";
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Social share URLs with proper parameters for rich previews
  const shareLinks = {
    facebook: `https://www.facebook.com/dialog/share?app_id=966242223397117&display=popup&href=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(pageTitle)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(pageTitle)}&summary=${encodeURIComponent(pageDescription)}`,
    instagram: `https://www.instagram.com/` // Instagram doesn't support direct sharing via URL
  };

  // Open share links in new window
  const handleShare = (url: string, platform: string) => {
    // Instagram doesn't have a share URL so we'll just open Instagram
    if (platform === 'instagram') {
      window.open(url, '_blank');
      return;
    }
    
    // For all other platforms, open a popup window with appropriate dimensions
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  // Copy the current URL to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast.success("Link copied to clipboard!", {
        description: "Share this article with your friends and colleagues.",
        duration: 3000,
      });
    } catch (err) {
      toast.error("Failed to copy link", {
        description: "Please try again or copy the URL manually.",
        duration: 3000,
      });
    }
  };

  return (
    <motion.div variants={itemVariants} className="bg-muted/50 p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Share2 className="h-5 w-5" />
        <h3 className="text-xl font-bold">Share this article</h3>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => handleShare(shareLinks.facebook, 'facebook')} 
          className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => handleShare(shareLinks.twitter, 'twitter')} 
          className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => handleShare(shareLinks.linkedin, 'linkedin')} 
          className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => handleShare(shareLinks.instagram, 'instagram')} 
          className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Open Instagram"
        >
          <Instagram className="h-5 w-5" />
        </button>
        
        <button 
          onClick={handleCopyLink} 
          className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Copy link to clipboard"
        >
          <Copy className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default BlogPostShareLinks;
