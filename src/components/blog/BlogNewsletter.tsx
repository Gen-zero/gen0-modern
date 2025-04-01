
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Send subscription email to the admin
      const templateParams = {
        to_email: "admin@gen0.xyz", // Change this to your admin email
        from_name: "Gen0 Blog Newsletter",
        subscriber_email: email,
        message: `New subscription request from ${email}`,
      };
      
      // Send confirmation email to the subscriber
      const subscriberParams = {
        to_email: email,
        from_name: "Gen0 Blog",
        message: "Thank you for subscribing to our newsletter! You'll receive the latest articles and updates from Gen0.",
      };

      // Send email to admin using EmailJS
      await emailjs.send(
        "service_newsletter", // Create this service ID in EmailJS
        "template_subscription", // Create this template ID in EmailJS
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      );
      
      // Send confirmation to subscriber
      await emailjs.send(
        "service_newsletter",
        "template_confirmation", // Create this template ID in EmailJS
        subscriberParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      );

      // Success toast
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      // Reset form
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-muted/30"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogNewsletter;
