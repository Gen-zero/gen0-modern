
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link 
            to="/" 
            className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer, mobile device, or any other device by a website, containing details of your browsing history on that website. They are widely used to make websites work more efficiently and provide a better browsing experience.
            </p>
            
            <h2>How We Use Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our website and we hold certain information. Cookies help us understand:
            </p>
            <ul>
              <li>Your preferences and settings</li>
              <li>How you use our website</li>
              <li>Your browsing behavior</li>
              <li>To improve your experience</li>
              <li>To remember your login details</li>
            </ul>
            
            <h2>Types of Cookies We Use</h2>
            <p>Our website uses the following types of cookies:</p>
            
            <h3>1. Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            
            <h3>2. Performance Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us understand which pages are the most and least popular and see how visitors move around the site.
            </p>
            
            <h3>3. Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3>4. Targeting Cookies</h3>
            <p>
              These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing.
            </p>
            
            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
            </p>
            
            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this Cookie Policy.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p>Email: privacy@gen0.com</p>
            <p>Or visit our contact page to send us a message.</p>
          </div>
        </div>
      </main>
      
      <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40">
        <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
