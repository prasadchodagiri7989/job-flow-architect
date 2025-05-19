
import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-job-primary">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 16, 2025</p>
          
          <div className="prose prose-gray max-w-none">
            <p>
              Please read these Terms and Conditions carefully before using the website and services of NM HR Consultancy. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our website or use our services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">2. Services Description</h2>
            <p>
              NM HR Consultancy provides recruitment and HR consulting services, including but not limited to permanent recruitment, executive search, and temporary staffing solutions.
            </p>
            <p>
              As a user of our services, you may submit information including personal details, resumes/CVs, job preferences, and other employment-related information. You may also browse job listings, apply for positions, and communicate with our recruitment consultants.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">3. User Obligations</h2>
            <p>By using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information about yourself</li>
              <li>Maintain and promptly update your information</li>
              <li>Not use the services for any illegal or unauthorized purpose</li>
              <li>Not infringe upon the rights of others or violate any laws</li>
              <li>Not upload or transmit viruses or any malicious code</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">4. Client and Candidate Agreements</h2>
            <h3 className="text-lg font-semibold mb-3">For Employers/Clients:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Recruitment services are provided subject to our standard client agreement</li>
              <li>Placement fees are payable according to the fee structure agreed upon in writing</li>
              <li>Introduction of candidates is subject to confidentiality and non-circumvention provisions</li>
              <li>Any engagement of a candidate within 12 months of introduction will incur our standard fees</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3">For Job Seekers/Candidates:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>By submitting your information, you consent to us representing you to potential employers</li>
              <li>You authorize us to verify any information you provide</li>
              <li>There is no fee charged to candidates for our recruitment services</li>
              <li>We do not guarantee job placement or employment</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">5. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by NM HR Consultancy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">6. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "AS IS" and "AS AVAILABLE" basis. NM HR Consultancy makes no warranties, expressed or implied, regarding the reliability, availability, timeliness, quality, accuracy, or performance of our services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall NM HR Consultancy be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your access to or use of, or inability to access or use, our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless NM HR Consultancy and its employees, contractors, officers, and directors from any claims, liabilities, damages, losses, and expenses, including legal fees, arising from your use of our services or violation of these Terms.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on our website. Your continued use of our services after any changes to the Terms constitutes your acceptance of the new Terms.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use our services will immediately cease.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="mb-2"><strong>NM HR Consultancy</strong></p>
              <p className="mb-2">Email: ceo@nmhruae.com</p>
              <p className="mb-2">Phone: +971 54 759 3444</p>
              <p>Address: Abu Dhabi, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
