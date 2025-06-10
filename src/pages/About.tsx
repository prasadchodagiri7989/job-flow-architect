import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Award, Users, CheckCircle, Briefcase } from "lucide-react";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">About NM HR Consultancy</h1>
          
          <div className="space-y-12">
            {/* Vision Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">Our Company's Vision</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    With a vision of excellence, NM HR Consultancy was launched in the UAE. Over the past two decades, we have transformed this vision into reality through dedication, innovation, and a commitment to optimizing outsourcing processes for our clients.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We have consistently delivered specialist services, building a reputation for excellence in staffing, recruitment, payroll, and HR operations. Our growth is a testament to our relentless drive to support businesses with end-to-end workforce solutions.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* What We Do Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">What We Do</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    At NM HR Consultancy, we:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4 text-gray-700 space-y-1">
                    <li>Follow inventive methods</li>
                    <li>Develop innovative approaches</li>
                    <li>Strengthen service delivery</li>
                    <li>Maximize service quality while supporting economic growth</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our executive search services are tailored for defined and senior-level roles. We build deep client relationships, understand corporate culture, and ensure the selection of the most suitable talent.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Our Services Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">🌟 Our Services at NM HR Consultancy</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At NM HR Consultancy, we offer reliable and efficient recruitment services across the UAE—including Dubai, Abu Dhabi, and Al Ain. We help businesses find the right people, and help job seekers find the right opportunities.
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">✅ Manpower Recruitment</p>
                  <p className="text-gray-700 mb-2">We provide skilled, semi-skilled, and unskilled workers for various industries such as:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Hospitality</li>
                    <li>Cleaning & Maintenance</li>
                    <li>Construction</li>
                    <li>Retail</li>
                    <li>Facility Management</li>
                    <li>Security and more</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Our Strengths Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">Our Strengths</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-job-light rounded-lg">
                      <span className="text-2xl">👨‍💼</span>
                      <h3 className="font-semibold mt-2">Expert People</h3>
                      <p className="text-sm text-gray-600 mt-1">Skilled professionals with deep industry knowledge</p>
                    </div>
                    <div className="text-center p-4 bg-job-light rounded-lg">
                      <span className="text-2xl">🏆</span>
                      <h3 className="font-semibold mt-2">Big Experience</h3>
                      <p className="text-sm text-gray-600 mt-1">Over 20 years of practical, market-driven experience</p>
                    </div>
                    <div className="text-center p-4 bg-job-light rounded-lg">
                      <span className="text-2xl">✅</span>
                      <h3 className="font-semibold mt-2">Committed to Quality</h3>
                      <p className="text-sm text-gray-600 mt-1">Continuous improvement in service delivery and client satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Our Impact Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">Our Impact</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-job-primary">21+</p>
                      <p className="text-gray-600 text-sm">Projects completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-job-primary">8+</p>
                      <p className="text-gray-600 text-sm">Experienced professionals</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-job-primary">1+</p>
                      <p className="text-gray-600 text-sm">Years in HR Consulting</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-job-primary">18+</p>
                      <p className="text-gray-600 text-sm">Satisfied customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Meet Our Leadership Section */}
            <section className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-7 w-7 text-job-primary" />
                <h2 className="text-2xl font-bold text-gray-800">Meet Our Leadership</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mt-3">CEO</h3>
                      <p className="text-gray-600">Name</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mt-3">Manager</h3>
                      <p className="text-gray-600">Name</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mt-3">Advisor</h3>
                      <p className="text-gray-600">Name</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
