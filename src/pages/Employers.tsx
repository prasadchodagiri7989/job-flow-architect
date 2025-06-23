
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, BarChart, Clock } from "lucide-react";

const Employers = () => {
  return (
    <Layout>
      <div className="hero-gradient py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Partner with NM HR for Your Hiring Needs</h1>
            <p className="text-lg text-gray-700 mb-8">
              Access top talent, streamline your recruitment process, and build high-performing teams with our expert consultants.
            </p>
            <Button className="bg-job-primary hover:bg-opacity-90 text-white px-6 py-2">
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Employers Choose NM HR Consultancy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-job-background p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-job-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Our consultants specialize in your industry, understanding the unique skill requirements and cultural fit.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-job-background p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-job-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time-Efficient Process</h3>
                <p className="text-gray-600">
                  We streamline recruitment, delivering pre-screened candidates so you can focus on core business operations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-job-background p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-job-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven Approach</h3>
                <p className="text-gray-600">
                  Our recruitment processes are backed by industry data and proven methodologies that deliver results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          
          <Tabs defaultValue="permanent" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="permanent">Permanent Recruitment</TabsTrigger>
              <TabsTrigger value="executive">Executive Search</TabsTrigger>
              <TabsTrigger value="temporary">Temporary Staffing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="permanent">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Permanent Recruitment Solutions</h3>
                      <p className="text-gray-700 mb-6">
                        Our permanent recruitment services connect you with talented professionals who will drive your business forward for the long term.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Comprehensive candidate screening and assessment",
                          "Industry-specific recruitment expertise",
                          "Cultural fit evaluation",
                          "Thorough background verification",
                          "Extended replacement guarantees"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-job-background rounded-lg p-6">
                      <h4 className="text-xl font-semibold mb-3">Our Process</h4>
                      <ol className="space-y-4">
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</div>
                          <div>
                            <h5 className="font-medium">Requirements Analysis</h5>
                            <p className="text-gray-600">In-depth consultation to understand your needs</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</div>
                          <div>
                            <h5 className="font-medium">Candidate Sourcing</h5>
                            <p className="text-gray-600">Targeted search using our extensive network</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</div>
                          <div>
                            <h5 className="font-medium">Screening & Assessment</h5>
                            <p className="text-gray-600">Rigorous evaluation of skills and experience</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</div>
                          <div>
                            <h5 className="font-medium">Shortlist Presentation</h5>
                            <p className="text-gray-600">Top candidates presented with detailed profiles</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">5</div>
                          <div>
                            <h5 className="font-medium">Offer & Onboarding Support</h5>
                            <p className="text-gray-600">Assistance through negotiations and joining</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="executive">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Executive Search</h3>
                      <p className="text-gray-700 mb-6">
                        Our executive search service identifies and attracts top-tier leadership talent that can transform your organization.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Access to passive candidate networks",
                          "Confidential search processes",
                          "In-depth leadership assessment",
                          "Strategic alignment evaluation",
                          "Executive onboarding support"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-job-background rounded-lg p-6">
                      <h4 className="text-xl font-semibold mb-3">Industries We Serve</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Financial Services",
                          "Technology",
                          "Healthcare",
                          "Oil & Gas",
                          "Construction",
                          "Retail",
                          "Education",
                          "Hospitality"
                        ].map((industry, index) => (
                          <div key={index} className="bg-white p-3 rounded shadow-sm text-center">
                            {industry}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="temporary">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Temporary Staffing</h3>
                      <p className="text-gray-700 mb-6">
                        Our temporary staffing solutions provide flexible workforce options to meet your short-term or project-based needs.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Rapid deployment of qualified staff",
                          "Payroll and compliance management",
                          "Scalable workforce solutions",
                          "Project-specific talent pools",
                          "Temp-to-perm conversion options"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-job-background rounded-lg p-6">
                      <h4 className="text-xl font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                            <span className="text-sm">✓</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Cost Efficiency</h5>
                            <p className="text-gray-600">Reduce overhead and hiring costs</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                            <span className="text-sm">✓</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Flexibility</h5>
                            <p className="text-gray-600">Scale your workforce up or down as needed</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                            <span className="text-sm">✓</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Quick Response</h5>
                            <p className="text-gray-600">Rapidly fill urgent vacancies</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-job-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                            <span className="text-sm">✓</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Risk Mitigation</h5>
                            <p className="text-gray-600">Reduced hiring risks and liabilities</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how NM HR Consultancy can help you find the talent your business needs to thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-job-primary hover:bg-opacity-90">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-job-primary text-job-primary hover:bg-job-background">
              View Our Pricing
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Employers;
