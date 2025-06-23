
import React from "react";
import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Mohammed Al Naqbi",
    role: "CEO & Founder",
    bio: "With over 20 years of experience in HR and recruitment, Mohammed has built NM HR Consultancy from the ground up, establishing it as a trusted name in the UAE's recruitment landscape.",
    avatar: "MN"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Executive Search",
    bio: "Sarah specializes in C-suite placements and has successfully placed over 100 executives in leading companies across the Middle East.",
    avatar: "SJ"
  },
  {
    name: "Ahmed Hassan",
    role: "Overseas Recruitment Manager",
    bio: "Ahmed manages our international recruitment operations, bringing 15 years of experience in global talent acquisition and mobility.",
    avatar: "AH"
  },
  {
    name: "Priya Sharma",
    role: "Temporary Staffing Lead",
    bio: "Priya has revolutionized our temporary staffing division, creating efficient processes that deliver qualified professionals within tight timeframes.",
    avatar: "PS"
  },
  {
    name: "James Wilson",
    role: "Business Development Director",
    bio: "James focuses on expanding our client relationships and identifying new market opportunities across the GCC region.",
    avatar: "JW"
  },
  {
    name: "Fatima Al Mansouri",
    role: "Client Success Manager",
    bio: "Fatima ensures our clients receive exceptional service throughout their journey with NM HR Consultancy.",
    avatar: "FM"
  }
];

const TeamMembers = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-3xl font-bold text-center mb-2 text-job-primary">Our Team</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Meet the dedicated professionals behind NM HR Consultancy. With decades of combined experience,
          our team works tirelessly to connect great talent with exceptional opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-job-primary text-white text-xl">{member.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="font-medium text-job-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-job-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-job-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamMembers;
