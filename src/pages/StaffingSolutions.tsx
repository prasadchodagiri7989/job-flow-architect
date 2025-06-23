import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle, Globe } from "lucide-react";

const StaffingSolutions: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-job-primary mb-4">
            Staffing Solutions
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Smart staffing. Seamless hiring. Human-focused. At NM HR Consultancy, we connect businesses
            with dependable manpower solutions across multiple sectors—ensuring you always have the right
            people to support your growth.
          </p>
        </section>

        {/* Service Offerings - Card Layout */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Briefcase className="h-6 w-6 text-job-primary" />
            Our Staffing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Temporary & Permanent Staffing",
                desc: "Whether you need project-based staff or long-term hires, we deliver fully screened, skilled candidates ready to contribute from day one.",
              },
              {
                title: "Blue & White Collar Placement",
                desc: "From skilled labor to mid-level and executive roles, we provide recruitment solutions tailored to every level of your organization.",
              },
              {
                title: "Global Talent Sourcing",
                desc: "Our recruitment network spans India, Nepal, Bangladesh, Sri Lanka, and the Philippines, ensuring culturally aligned, qualified candidates.",
              },
              {
                title: "Payroll & Visa Support",
                desc: "We handle visa documentation, WPS-compliant payroll processing, and onboarding compliance with full transparency.",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-job-primary">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us - Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <CheckCircle className="h-6 w-6 text-job-primary" />
            Why Choose NM HR Consultancy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Fit Hiring",
                desc: "We align every placement with your goals, culture, and timeline, ensuring a perfect match every time.",
              },
              {
                title: "Speed Without Compromise",
                desc: "Quick turnaround with zero compromise on quality, compliance, or professionalism.",
              },
              {
                title: "Post-Placement Support",
                desc: "We offer long-term support including performance tracking, issue resolution, and retention services.",
              },
              {
                title: "Compliant & Ethical",
                desc: "Our process follows UAE labor laws and global ethical hiring practices end-to-end.",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-base mb-1 text-job-primary">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries Served - Tag Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-job-primary" />
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
            {[
              "Construction",
              "Facility Management",
              "Hospitality",
              "Cleaning & Maintenance",
              "Retail & Supermarkets",
              "Medical & Paramedical",
              "Drivers & Transport",
              "Manufacturing",
              "MEP & Technicians",
              "Administration",
              "Security Services",
              "Agriculture & Landscaping",
            ].map((industry, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-gray-100 border rounded text-gray-700 text-center"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">
            Ready to Build Your Workforce?
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Let NM HR Consultancy handle your staffing needs with precision, integrity, and care.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-job-primary text-white px-6 py-3 rounded hover:bg-job-dark transition"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default StaffingSolutions;
