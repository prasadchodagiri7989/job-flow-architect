
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, BriefcaseBusiness, Users } from "lucide-react";

const OurSolutions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-job-primary">Our Solutions</h1>
        
        <Tabs defaultValue="overseas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overseas" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Overseas Recruitment</span>
            </TabsTrigger>
            <TabsTrigger value="executive" className="flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4" />
              <span>Executive Search</span>
            </TabsTrigger>
            <TabsTrigger value="temporary" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Temporary Staffing</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overseas" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2 h-6 w-6 text-job-primary" />
              Overseas Recruitment
            </h2>
            <p className="mb-6">
              At NM HR Consultancy, we specialize in delivering exceptional global talent to our clients across various countries including the Middle East, Europe, Africa, USA, Canada, Australia, Central Asia, and the Far East.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Our international recruitment process involves:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>A robust screening matrix for shortlisting candidates</li>
              <li>An intensive interview matrix to identify the right fit</li>
              <li>Complete end-to-end support including document formalization, background verification, and relocation logistics</li>
            </ul>
            
            <p className="mb-6">
              We have successfully filled roles across a wide range of industries, ensuring that with NM HR Consultancy, you get only the most qualified and culturally-fit candidates.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">💼 Why Choose Us</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Licensed by official authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>Strong understanding of client requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>Genuine interest in stakeholders' success</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⚡</span>
                  <span>Fast and efficient turnaround time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌐</span>
                  <span>Exposure to diverse industries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💰</span>
                  <span>Cost-effective and time-saving recruitment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">🔧 Our Strengths</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">👥 Expert Peoples</td>
                      <td className="py-3 px-4">A highly experienced team of recruitment professionals</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">🏆 Big Experience</td>
                      <td className="py-3 px-4">Over 20 years of experience across multiple regions</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">✅ Committed to Quality</td>
                      <td className="py-3 px-4">Reliable screening, clear communication, and ethical practices</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="executive" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BriefcaseBusiness className="mr-2 h-6 w-6 text-job-primary" />
              Executive Search
            </h2>
            <p className="mb-6">
              At NM HR Consultancy, we provide premium executive search services by accessing exceptional leadership talent from around the world.
            </p>
            <p className="mb-6">
              Our process is tailored to identify and deliver senior executives who align perfectly with your organization's goals, culture, and strategy. We understand that leadership hires are mission-critical, which is why we ensure end-to-end management — from assessment to final negotiation.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">🔍 What We Do</h3>
            <p className="mb-4">Our consultants specialize in executive headhunting and recruitment for organizations across the Middle East, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>🇦🇪 UAE (Dubai and Abu Dhabi)</li>
              <li>🇸🇦 Saudi Arabia</li>
              <li>🇴🇲 Oman</li>
            </ul>
            
            <p className="mb-4">Using a fully adaptable methodology, we meet each client's unique business requirements through:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>A large executive talent database</li>
              <li>Deep market knowledge and industry insights</li>
              <li>Fast, accurate, and reliable candidate shortlisting</li>
              <li>Transparent communication and efficient onboarding</li>
            </ul>
            
            <p className="mb-6">
              Our Executive Search consultants are based in Abu Dhabi and serve clients across the region.
              <br />
              📞 Start your leadership hiring journey today — call us at +971 58 187 9994 or email us.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">⭐ Why NM HR for Executive Search?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deep understanding of leadership recruitment</li>
                <li>Customized search strategy</li>
                <li>Global reach, local expertise</li>
                <li>Proven success in placing top-tier executives</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">🔧 Our Strengths</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">👥 Expert Peoples</td>
                      <td className="py-3 px-4">Executive recruitment specialists with proven track records</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">🏆 Big Experience</td>
                      <td className="py-3 px-4">Decades of experience serving elite firms across the Middle East</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">✅ Committed to Quality</td>
                      <td className="py-3 px-4">Thorough screening, confidentiality, and client satisfaction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">📢 In the Spotlight</h3>
              <p>
                Our Executive Search consultants are often featured in news and industry publications, offering expert insights on leadership, hiring strategies, and market trends.
                <br />
                We believe in sharing knowledge that helps your business grow and your leaders thrive.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="temporary" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6 text-job-primary" />
              Temporary Staffing Solutions
            </h2>
            <p className="mb-6">
              At NM HR Consultancy, we provide flexible and scalable temporary staffing services that empower businesses to quickly respond to project requirements, seasonal demand, or short-term workforce gaps.
            </p>
            <p className="mb-6">
              We handle the entire staffing lifecycle — from screening and selection to onboarding, documentation, and compliance — ensuring your team is productive from day one.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">🛠️ What We Do</h3>
            <p className="mb-4">Our consultants specialize in temporary staffing across the Middle East, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>🇦🇪 UAE (Dubai and Abu Dhabi)</li>
              <li>🇸🇦 Saudi Arabia</li>
              <li>🇴🇲 Oman</li>
            </ul>
            
            <p className="mb-4">We deliver qualified, adaptable professionals who align with your operational goals and project timelines. Our solutions are:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Fast and responsive</li>
              <li>Custom-tailored to urgent needs</li>
              <li>Backed by extensive databases and local industry networks</li>
              <li>Focused on providing staff who integrate seamlessly into your teams</li>
            </ul>
            
            <p className="mb-6">
              📍 Our temporary staffing consultants are headquartered in Abu Dhabi and serve companies across the region.
              <br />
              📞 Contact us at +971 58 187 9994 to find the right people at the right time.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">✅ Why Choose NM HR for Temporary Staffing?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Immediate access to pre-screened, project-ready professionals</li>
                <li>Full compliance and documentation handling</li>
                <li>Industry-specific staffing expertise</li>
                <li>Seamless workforce scaling during peak times or project rollouts</li>
                <li>Cost control and operational efficiency</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default OurSolutions;
