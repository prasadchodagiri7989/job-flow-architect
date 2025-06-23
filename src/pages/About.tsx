import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  Globe,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-10">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Empowering Growth Through Strategic HR Solutions
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            NM HR Consultancy delivers expert HR and recruitment services across UAE and GCC,
            helping organizations thrive through effective talent and workforce management.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Building className="h-6 w-6 text-job-primary" /> Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Founded with a vision to transform HR processes, NM HR Consultancy has built
                a strong reputation in the UAE and GCC for its commitment to excellence and
                customized workforce solutions. We specialize in recruitment, staffing,
                document processing, and HR advisory—serving industries ranging from
                hospitality to construction.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-job-primary" /> What Drives Us
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Integrity in every client relationship</li>
                <li>Commitment to quality service delivery</li>
                <li>Expertise backed by decades of experience</li>
                <li>Innovation in recruitment and HR consulting</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Industries Served */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-job-primary" /> Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                <span>🏨 Hospitality</span>
                <span>🛠️ Construction</span>
                <span>🧼 Facility Management</span>
                <span>🛍️ Retail</span>
                <span>🧹 Cleaning & Maintenance</span>
                <span>🔐 Security Services</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reach and Commitment */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-job-primary" /> Our Reach & Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With operational presence across Dubai, Abu Dhabi, and Al Ain, we
                support both global corporations and local businesses. Our team
                ensures a smooth experience in candidate sourcing, visa processing,
                and onboarding while maintaining the highest levels of compliance.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Metrics */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">By The Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-job-primary">20+</p>
                  <p className="text-gray-600 text-sm">Years of Industry Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">100+</p>
                  <p className="text-gray-600 text-sm">Clients Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">15+</p>
                  <p className="text-gray-600 text-sm">Industries Covered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">1000+</p>
                  <p className="text-gray-600 text-sm">Candidates Placed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Leadership Team */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-job-primary" /> Leadership Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-3" />
                  <h3 className="font-semibold">Mr. John Doe</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
                <div>
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-3" />
                  <h3 className="font-semibold">Ms. Sarah Ali</h3>
                  <p className="text-sm text-gray-600">Operations Manager</p>
                </div>
                <div>
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-3" />
                  <h3 className="font-semibold">Mr. Ravi Kumar</h3>
                  <p className="text-sm text-gray-600">HR Advisor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default About;
