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
      <div className="container mx-auto px-4 py-12 mt-16">

        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/overlay2.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Growth Through Strategic HR Solutions
            </h1>
            <p className="text-gray-200 leading-relaxed text-lg">
              NM HR Consultancy delivers expert HR and recruitment services across UAE and GCC,
              helping organizations thrive through effective talent and workforce management.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-job-primary" /> Our Mission & Vision
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>Our Mission:</strong> Empower clients with skilled and reliable human resources while enabling
                professionals to grow in their careers. We strive to deliver tailored staffing and consultancy solutions that
                support long-term success.
              </p>
              <p className="text-gray-700">
                <strong>Our Vision:</strong> To redefine recruitment through ethical, efficient, and dependable HR solutions.
                We aim to foster partnerships by aligning the right talent with the right opportunities across the UAE and GCC.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why NM HR Consultancy */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-job-primary" /> Why NM HR Consultancy?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access to 15+ sourcing countries and a large talent pool</li>
                <li>Custom recruitment aligned to your business goals</li>
                <li>Quick turnaround without compromising compliance</li>
                <li>Transparent visa, payroll & HR services</li>
                <li>30+ years of combined HR & recruitment experience</li>
                <li>Long-term support post-placement</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-job-primary" /> Our Core Values
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
                <li><strong>Excellence:</strong> We strive to exceed expectations in every service.</li>
                <li><strong>Commitment:</strong> Dedicated to long-term partnerships and results.</li>
                <li><strong>Respect:</strong> We value every client, candidate, and stakeholder equally.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Industries We Serve */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-job-primary" /> Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                <span>🛠️ Civil & Architecture</span>
                <span>🔧 Mechanical</span>
                <span>⚡ Electrical</span>
                <span>🧼 Cleaning & Housekeeping</span>
                <span>🏨 Hotel & Hospitality</span>
                <span>🏬 Supermarkets</span>
                <span>🏥 Medical / Paramedical</span>
                <span>🧵 Garments & Textiles</span>
                <span>🚛 Heavy Drivers & Equipment Operators</span>
                <span>🛡️ Security Services</span>
                <span>🏭 Manufacturing & Production</span>
                <span>🌾 Agriculture & Plantation</span>
                <span>🛠️ Denting, Painting & Welding</span>
                <span>💼 Administration</span>
              </div>
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
                  <p className="text-4xl font-bold text-job-primary">582+</p>
                  <p className="text-gray-600 text-sm">Successful Placements</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">215+</p>
                  <p className="text-gray-600 text-sm">Experienced Professionals</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">30+</p>
                  <p className="text-gray-600 text-sm">Years of Expertise</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-job-primary">500+</p>
                  <p className="text-gray-600 text-sm">Satisfied Clients</p>
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
