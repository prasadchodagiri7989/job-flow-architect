import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Settings, Workflow } from "lucide-react";

const ClientSupport: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-job-primary mb-4">
            Client Support & HR Operations
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dedicated post-deployment support for seamless workforce management.
          </p>
        </section>

        {/* Service Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Handshake className="h-6 w-6 text-job-primary" />
            Our Support Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Onboarding Assistance",
                desc: "We support client HR teams in the onboarding process, ensuring candidates are legally compliant, oriented, and job-ready.",
                icon: <Users className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "Accommodation & Welfare",
                desc: "We assist with initial accommodation, transport, and address concerns related to workforce welfare after placement.",
                icon: <Settings className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "HR Documentation Compliance",
                desc: "Proper documentation is maintained, updated, and shared in line with UAE labor laws for all deployed candidates.",
                icon: <Workflow className="h-5 w-5 text-job-primary" />,
              },
              {
                title: "Ongoing Client Coordination",
                desc: "Our team stays in close contact with client HR departments, resolving queries and helping with replacement or upskilling needs.",
                icon: <Handshake className="h-5 w-5 text-job-primary" />,
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

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Users className="h-6 w-6 text-job-primary" />
            Why Our Clients Trust Us
          </h2>

          <Card className="shadow-md">
            <CardContent className="p-6 text-gray-700">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>We ensure your workforce is productive from day one</li>
                <li>Minimize HR workload through reliable support channels</li>
                <li>Maintain legal compliance and reduce operational risks</li>
                <li>Provide transparent updates and ongoing collaboration</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Need Post-Deployment Support?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Let our Client Support Team simplify your HR operations and help you retain top talent.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-job-primary text-white px-6 py-3 rounded hover:bg-job-dark transition"
          >
            Connect With Us
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default ClientSupport;
