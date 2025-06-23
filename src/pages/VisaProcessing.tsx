import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Plane, ShieldCheck, UserCheck } from "lucide-react";

const VisaProcessing: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-job-primary mb-4">
            Document & Visa Processing
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            End-to-end documentation and visa support for smooth international hiring and deployment.
          </p>
        </section>

        {/* Service Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-job-primary" />
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Visa & Work Permit Handling",
                desc: "We manage visa applications, approvals, and work permit coordination in line with UAE immigration regulations.",
                icon: <Plane className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "Document Preparation & Verification",
                desc: "From employment contracts to medical certificates and insurance documentation, we ensure everything is accurate and compliant.",
                icon: <FileText className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "Government Liaison",
                desc: "Our team coordinates with MOHRE, embassies, and local UAE authorities for efficient approvals and legal processing.",
                icon: <ShieldCheck className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "Candidate Orientation & Exit Management",
                desc: "We brief overseas hires on the UAE labor system and ensure all exit documentation and travel plans are handled professionally.",
                icon: <UserCheck className="h-5 w-5 text-job-primary" />,
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-base text-job-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <ShieldCheck className="h-6 w-6 text-job-primary" />
            Why Choose NM HR?
          </h2>

          <Card className="shadow-md">
            <CardContent className="p-6 text-gray-700">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Expertise in Gulf labor laws and documentation protocols</li>
                <li>Seamless coordination with embassies and immigration departments</li>
                <li>Transparent, ethical practices ensuring candidate satisfaction</li>
                <li>Minimized delays and errors in visa/work permit approvals</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Need Visa & Documentation Support?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Let NM HR Consultancy handle all the legalities while you focus on growing your business.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-job-primary text-white px-6 py-3 rounded hover:bg-job-dark transition"
          >
            Contact Our Team
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default VisaProcessing;
