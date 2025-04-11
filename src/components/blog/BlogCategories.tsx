
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogCategories } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BlogCategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const BlogCategories = ({ selectedCategory, setSelectedCategory }: BlogCategoriesProps) => {
  const handleCategoryClick = (categorySlug: string) => {
    // If the category is already selected, clear the filter
    setSelectedCategory(selectedCategory === categorySlug ? null : categorySlug);
  };

  return (
    <Card className="border-border/40" id="categories">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Categories</CardTitle>
        {selectedCategory && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-2" 
            onClick={() => setSelectedCategory(null)}
          >
            <X size={16} className="mr-1" />
            Clear
          </Button>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-1">
          {blogCategories.map((category, index) => (
            <motion.li 
              key={category.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <button 
                onClick={() => handleCategoryClick(category.slug)}
                className={`flex w-full items-center justify-between p-2 rounded-md transition-colors text-muted-foreground ${
                  selectedCategory === category.slug 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.slug 
                    ? "bg-primary/20" 
                    : "bg-muted"
                }`}>
                  {category.count}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogCategories;
