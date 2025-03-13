
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our services.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Gen0's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Gen0's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Gen0's website are provided on an 'as is' basis. Gen0 makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>4. Limitations</h2>
            <p>
              In no event shall Gen0 or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gen0's website, even if Gen0 or a Gen0 authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Gen0's website could include technical, typographical, or photographic errors. Gen0 does not warrant that any of the materials on its website are accurate, complete or current. Gen0 may make changes to the materials contained on its website at any time without notice.
            </p>
            
            <h2>6. Links</h2>
            <p>
              Gen0 has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Gen0 of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2>7. Modifications</h2>
            <p>
              Gen0 may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>Email: legal@gen0.com</p>
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

export default TermsOfService;
