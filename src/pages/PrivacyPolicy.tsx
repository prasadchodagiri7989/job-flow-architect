
import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-job-primary">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 16, 2025</p>
          
          <div className="prose prose-gray max-w-none">
            <p>
              At NM HR Consultancy, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our recruitment services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register on our website</li>
              <li>Submit your resume or CV</li>
              <li>Apply for job positions</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            
            <p>The personal information we collect may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name, email address, phone number, and other contact details</li>
              <li>Employment history, educational background, and professional qualifications</li>
              <li>References and background check information</li>
              <li>Citizenship and right to work information</li>
              <li>Any other information you choose to provide in your resume or job application</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Providing, personalizing, and improving our services</li>
              <li>Processing job applications and matching candidates with suitable job opportunities</li>
              <li>Communicating with you about our services, job opportunities, or recruitment processes</li>
              <li>Conducting background checks and verifying information (with your consent)</li>
              <li>Sending promotional materials and newsletters (if you've opted in)</li>
              <li>Analyzing website usage and improving user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Sharing Your Information</h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Potential employers (only with your explicit consent)</li>
              <li>Service providers who assist in our operations (such as IT service providers, background check companies)</li>
              <li>Professional advisors and consultants</li>
              <li>Regulatory authorities, government agencies, or other third parties where required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. If you wish to have your information removed from our database, please contact us using the details provided below.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to erasure (the "right to be forgotten")</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us at recruit@nmhruae.com. We will respond to your request in accordance with applicable data protection laws.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the privacy policy of any website you visit.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="mb-2"><strong>NM HR Consultancy</strong></p>
              <p className="mb-2">Email: recruit@nmhruae.com</p>
              <p className="mb-2">Phone: +971 58 187 9994</p>
              <p>Address: Abu Dhabi, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
