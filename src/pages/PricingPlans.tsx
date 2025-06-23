
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const PricingPlans = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3 text-job-primary">Pricing & Plans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent and competitive pricing tailored to your recruitment needs. Choose the plan that works best for your business.
          </p>
        </div>
        
        <Tabs defaultValue="permanent" className="w-full mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="permanent">Permanent</TabsTrigger>
            <TabsTrigger value="executive">Executive</TabsTrigger>
            <TabsTrigger value="temporary">Temporary</TabsTrigger>
          </TabsList>
          
          {/* Permanent Recruitment Plans */}
          <TabsContent value="permanent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Standard Plan */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Standard</h2>
                  <p className="text-gray-500">For small businesses</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">8%</span>
                    <span className="text-gray-500"> of annual salary</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "30-day replacement guarantee",
                      "Basic job marketing",
                      "Standard candidate screening",
                      "Weekly progress updates",
                      "Up to 5 candidate profiles"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Advanced skills assessment",
                      "Background verification",
                      "Cultural fit assessment",
                      "Dedicated account manager"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Professional Plan */}
              <Card className="border-2 border-job-primary relative hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-job-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Professional</h2>
                  <p className="text-gray-500">For growing companies</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">12%</span>
                    <span className="text-gray-500"> of annual salary</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "60-day replacement guarantee",
                      "Enhanced job marketing",
                      "Comprehensive screening",
                      "Bi-weekly progress updates",
                      "Up to 10 candidate profiles",
                      "Advanced skills assessment",
                      "Background verification",
                      "Cultural fit assessment"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Dedicated account manager"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-job-primary hover:bg-opacity-90">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Enterprise Plan */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Enterprise</h2>
                  <p className="text-gray-500">For large organizations</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">15%</span>
                    <span className="text-gray-500"> of annual salary</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "90-day replacement guarantee",
                      "Premium job marketing",
                      "Elite candidate screening",
                      "Weekly detailed reports",
                      "Unlimited candidate profiles",
                      "Advanced skills assessment",
                      "Background verification",
                      "Cultural fit assessment",
                      "Dedicated account manager"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Executive Search Plans */}
          <TabsContent value="executive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Director Level */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Director Level</h2>
                  <p className="text-gray-500">Mid-senior leadership</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">20%</span>
                    <span className="text-gray-500"> of annual package</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "90-day replacement guarantee",
                      "Targeted headhunting",
                      "Leadership assessment",
                      "Regular progress updates",
                      "Up to 5 shortlisted candidates",
                      "Reference checks"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Industry mapping",
                      "Executive onboarding",
                      "Competitor analysis"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* VP/SVP Level */}
              <Card className="border-2 border-job-primary relative hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-job-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">VP/SVP Level</h2>
                  <p className="text-gray-500">Senior leadership</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">25%</span>
                    <span className="text-gray-500"> of annual package</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "120-day replacement guarantee",
                      "Extensive talent mapping",
                      "Comprehensive leadership assessment",
                      "Weekly detailed updates",
                      "Up to 7 shortlisted candidates",
                      "In-depth reference checks",
                      "Industry mapping",
                      "Executive onboarding"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Competitor analysis"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-job-primary hover:bg-opacity-90">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* C-Suite Level */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">C-Suite Level</h2>
                  <p className="text-gray-500">Top executives</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">30%</span>
                    <span className="text-gray-500"> of annual package</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "180-day replacement guarantee",
                      "Global talent search",
                      "Elite leadership assessment",
                      "Personalized search committee",
                      "Up to 10 shortlisted candidates",
                      "360° reference verification",
                      "Comprehensive industry mapping",
                      "Executive integration program",
                      "Competitor & market analysis"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Temporary Staffing Plans */}
          <TabsContent value="temporary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Staffing */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Basic Staffing</h2>
                  <p className="text-gray-500">Entry to mid-level positions</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">10%</span>
                    <span className="text-gray-500"> markup on hourly rate</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "48-hour replacement",
                      "Basic screening process",
                      "Monthly reporting",
                      "Standard payroll service",
                      "Basic compliance management"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Skills testing",
                      "Workforce analytics",
                      "Dedicated coordinator",
                      "Temp-to-perm transition"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Professional Staffing */}
              <Card className="border-2 border-job-primary relative hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-job-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Professional Staffing</h2>
                  <p className="text-gray-500">Specialized roles</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">15%</span>
                    <span className="text-gray-500"> markup on hourly rate</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "24-hour replacement",
                      "Comprehensive screening",
                      "Weekly reporting",
                      "Enhanced payroll service",
                      "Full compliance management",
                      "Skills testing",
                      "Basic workforce analytics",
                      "Dedicated coordinator"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {[
                      "Temp-to-perm transition"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <XCircle className="h-5 w-5 text-gray-300 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-job-primary hover:bg-opacity-90">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Project Staffing */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <h2 className="text-xl font-bold">Project Staffing</h2>
                  <p className="text-gray-500">Large-scale workforce needs</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Custom</span>
                    <span className="text-gray-500"> pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {[
                      "Immediate replacement",
                      "Elite screening process",
                      "Real-time reporting portal",
                      "Premium payroll services",
                      "Strategic compliance management",
                      "Advanced skills assessment",
                      "Comprehensive workforce analytics",
                      "Dedicated account manager",
                      "Temp-to-perm transition support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-job-primary text-job-primary hover:bg-job-background">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How are your fees structured?",
                a: "Our permanent recruitment fees are calculated as a percentage of the candidate's annual salary. For temporary staffing, we charge a markup on the hourly rate. Executive search fees are based on the total compensation package."
              },
              {
                q: "What is included in your replacement guarantee?",
                a: "If a placed candidate leaves within the specified guarantee period (varies by package), we will find a replacement candidate at no additional cost."
              },
              {
                q: "Do you offer customized recruitment solutions?",
                a: "Yes, we can tailor our services to meet your specific recruitment needs and budget requirements."
              },
              {
                q: "How quickly can you provide candidates?",
                a: "Timeframes vary based on role complexity and market conditions, but our standard is 2-3 weeks for permanent roles and 24-48 hours for temporary positions."
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our team for personalized recruitment packages tailored to your specific business requirements.
          </p>
          <Button className="bg-job-primary hover:bg-opacity-90">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPlans;
