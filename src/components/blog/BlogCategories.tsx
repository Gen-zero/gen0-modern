
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogCategories } from "@/data/blogData";

const BlogCategories = () => {
  return (
    <Card className="border-border/40" id="categories">
      <CardHeader>
        <CardTitle className="text-xl">Categories</CardTitle>
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
              <a 
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <span>{category.name}</span>
                <span className="text-sm bg-muted px-2 py-1 rounded-full">{category.count}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogCategories;
