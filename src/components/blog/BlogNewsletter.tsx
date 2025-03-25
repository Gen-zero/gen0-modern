
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <Card className="border-border/40 overflow-hidden">
      <CardHeader className="pb-4 bg-gradient-to-b from-muted/50 to-transparent">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={18} className="text-accent" />
          <CardTitle className="text-xl">Newsletter</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          Subscribe to get the latest articles and updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        {subscribed ? (
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <p className="text-sm">Thanks for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted/30"
            />
            <Button type="submit" className="w-full">Subscribe</Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground mt-4 text-center">
          No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogNewsletter;
