
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Info, Shield, Settings } from "lucide-react";

const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy">
      <div className="space-y-8">
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer, mobile device, or any other device by a website, 
                containing details of your browsing history on that website. They are widely used to make websites work more 
                efficiently and provide a better browsing experience.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Settings className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">How We Use Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track the activity on our website and we hold certain information. 
                Cookies help us understand:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>Your preferences and settings</li>
                <li>How you use our website</li>
                <li>Your browsing behavior</li>
                <li>To improve your experience</li>
                <li>To remember your login details</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
          <p className="text-muted-foreground mb-4">Our website uses the following types of cookies:</p>
          
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">1. Essential Cookies</h3>
              <p className="text-muted-foreground text-sm">
                These cookies are necessary for the website to function properly. They enable basic functions like page 
                navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">2. Performance Cookies</h3>
              <p className="text-muted-foreground text-sm">
                These cookies help us understand how visitors interact with our website by collecting and reporting 
                information anonymously. They help us understand which pages are the most and least popular and see 
                how visitors move around the site.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">3. Functional Cookies</h3>
              <p className="text-muted-foreground text-sm">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by 
                us or by third-party providers whose services we have added to our pages.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">4. Targeting Cookies</h3>
              <p className="text-muted-foreground text-sm">
                These cookies are used to make advertising messages more relevant to you and your interests. They also 
                perform functions like preventing the same ad from continuously reappearing.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Managing Cookies</h2>
              <p className="text-muted-foreground">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the 
                ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Changes to This Cookie Policy</h2>
          <p className="text-muted-foreground">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the 
            new Cookie Policy on this page and updating the "Last updated" date at the top of this Cookie Policy.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <p className="text-accent">Email: privacy@gen0.com</p>
          <p className="text-muted-foreground">Or visit our contact page to send us a message.</p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
