
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Shield, Database, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            At Gen0 ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Database className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">The Data We Collect About You</h2>
              <p className="text-muted-foreground mb-3">
                Personal data, or personal information, means any information about an individual from which that person can be identified. 
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              
              <div className="pl-1 space-y-3">
                <div className="bg-muted p-3 rounded-md">
                  <span className="font-medium">Identity Data:</span> 
                  <span className="text-sm text-muted-foreground ml-2">includes first name, last name, username or similar identifier.</span>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <span className="font-medium">Contact Data:</span> 
                  <span className="text-sm text-muted-foreground ml-2">includes email address and telephone numbers.</span>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <span className="font-medium">Technical Data:</span> 
                  <span className="text-sm text-muted-foreground ml-2">includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</span>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <span className="font-medium">Usage Data:</span> 
                  <span className="text-sm text-muted-foreground ml-2">includes information about how you use our website, products, and services.</span>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <span className="font-medium">Marketing and Communications Data:</span> 
                  <span className="text-sm text-muted-foreground ml-2">includes your preferences in receiving marketing from us and our third parties and your communication preferences.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Personal Data</h2>
          <p className="text-muted-foreground mb-3">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Lock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p className="text-muted-foreground">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, 
                or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, 
                agents, contractors and other third parties who have a business need to know.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
          <p className="text-muted-foreground">
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes 
            we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
          </p>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <UserCheck className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">Your Legal Rights</h2>
              <p className="text-muted-foreground mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="bg-muted p-3 rounded-md text-sm">The right to request access to your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to request correction of your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to request erasure of your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to object to processing of your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to request restriction of processing your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to request transfer of your personal data.</div>
                <div className="bg-muted p-3 rounded-md text-sm">The right to withdraw consent.</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p className="text-accent">Email: privacy@gen0.com</p>
          <p className="text-muted-foreground">Or visit our contact page to send us a message.</p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
