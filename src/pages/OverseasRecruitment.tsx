import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, ShieldCheck, Flag } from "lucide-react";

const OverseasRecruitment: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-job-primary mb-4">
            Overseas Recruitment
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Connecting businesses with qualified, vetted talent from across the globe.
            Our international recruitment services are designed to meet your specific skill and compliance needs.
          </p>
        </section>

        {/* Global Talent Access */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-job-primary" />
            Global Talent Access
          </h2>

          <Card className="shadow-md">
            <CardContent className="p-6 text-gray-700">
              <p className="mb-4">
                NM HR Consultancy sources skilled professionals from countries like India, Nepal, Bangladesh, Sri Lanka,
                and the Philippines. Our overseas recruitment process is built on strict screening, compliance with UAE
                labor laws, and cultural orientation, ensuring your hires are ready to perform from day one.
              </p>
              <p>
                Whether you need technical workers, hospitality staff, drivers, or healthcare professionals — our
                international hiring network delivers dependable manpower tailored to your industry and project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Recruitment Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Users className="h-6 w-6 text-job-primary" />
            Our 5-Step Hiring Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "Step 1: Consultation",
                desc: "Understand client requirements, job roles, timelines, and cultural expectations.",
              },
              {
                step: "Step 2: Sourcing",
                desc: "Tap into our global database and recruitment partners to identify qualified candidates.",
              },
              {
                step: "Step 3: Screening & Selection",
                desc: "Conduct interviews, skill tests, background checks, and document verifications.",
              },
              {
                step: "Step 4: Mobilization",
                desc: "Manage visa processing, travel, medicals, onboarding documentation, and deployment.",
              },
              {
                step: "Step 5: Post-Deployment Support",
                desc: "Track performance and provide long-term client and candidate support.",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-base mb-1 text-job-primary">{item.step}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Countries We Source From */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Flag className="h-6 w-6 text-job-primary" />
            Countries We Source From
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {["India", "Philippines", "Nepal", "Bangladesh", "Sri Lanka"].map((country, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded"
              >
                {country}
              </span>
            ))}
          </div>
        </section>

        {/* Compliance & Ethics */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <ShieldCheck className="h-6 w-6 text-job-primary" />
            Legal & Ethical Hiring
          </h2>
          <Card className="shadow-md">
            <CardContent className="p-6 text-gray-700">
              <p className="mb-2">
                We ensure full compliance with UAE labor and immigration laws, and uphold international ethical
                recruitment standards. From transparent documentation to ethical candidate engagement, NM HR
                prioritizes responsible hiring practices at every stage.
              </p>
              <p>
                Our visa, payroll, WPS registration, and documentation processes are handled efficiently and transparently
                by our HR experts.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Need International Talent?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Partner with NM HR Consultancy to hire qualified candidates from overseas with confidence and ease.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-job-primary text-white px-6 py-3 rounded hover:bg-job-dark transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default OverseasRecruitment;
