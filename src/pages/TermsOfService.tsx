
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { FileText, AlertTriangle, Scale, Globe } from "lucide-react";

const TermsOfService = () => {
  return (
    <LegalPageLayout title="Terms of Service">
      <div className="space-y-8">
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <FileText className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using our website, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, then you may not access our services.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
          <p className="text-muted-foreground mb-3">
            Permission is granted to temporarily download one copy of the materials (information or software) 
            on Gen0's website for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Gen0's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Gen0's website are provided on an 'as is' basis. Gen0 makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
          <div className="bg-muted/70 p-4 rounded-md border border-border/20">
            <p className="text-muted-foreground">
              In no event shall Gen0 or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on Gen0's website, even if Gen0 or a Gen0 authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
          <p className="text-muted-foreground">
            The materials appearing on Gen0's website could include technical, typographical, or photographic errors. 
            Gen0 does not warrant that any of the materials on its website are accurate, complete or current. 
            Gen0 may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">6. Links</h2>
              <p className="text-muted-foreground">
                Gen0 has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by Gen0 of the site. 
                Use of any such linked website is at the user's own risk.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">7. Modifications</h2>
          <p className="text-muted-foreground">
            Gen0 may revise these terms of service for its website at any time without notice. 
            By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>
        
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <Scale className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws and 
                you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-accent">Email: legal@gen0.com</p>
          <p className="text-muted-foreground">Or visit our contact page to send us a message.</p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfService;
