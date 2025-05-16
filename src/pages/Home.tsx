import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "../contexts/JobContext";
import JobCard from "../components/jobs/JobCard";
import { Briefcase, Search, Users, FileText, User, Globe, Award } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Home: React.FC = () => {
  const { jobs } = useJobs();

  const latestJobs = jobs.slice(0, 3);

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl relative">
            <div 
              className="hidden md:block absolute -right-20 -top-14 w-40 h-40 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 1px, transparent 1px)',
                backgroundSize: '15px 15px',
              }}
            ></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Trusted Recruitment Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Empowering careers and businesses with reliable staffing solutions across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jobs" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-job-primary hover:bg-job-secondary text-lg px-8 py-6">
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/login" className="flex-1 sm:flex-none">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured jobs section */}
      <div className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Job Openings</h2>
            <Link to="/jobs" className="text-job-primary hover:underline">
              View all jobs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="mt-4">
                Explore All Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose NM-HR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/50 rounded-full"></div>
              <div className="flex justify-center mb-4 relative">
                <div className="bg-job-light p-3 rounded-full">
                  <Search className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Precision Hiring</h3>
              <p className="text-gray-600">
                We understand your recruitment needs and deliver candidates tailored to your goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/50 rounded-full"></div>
              <div className="flex justify-center mb-4">
                <div className="bg-job-light p-3 rounded-full">
                  <FileText className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Enhancement</h3>
              <p className="text-gray-600">
                Our AI-backed resume services boost your visibility and impact with employers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/50 rounded-full"></div>
              <div className="flex justify-center mb-4">
                <div className="bg-job-light p-3 rounded-full">
                  <Users className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Strong Industry Ties</h3>
              <p className="text-gray-600">
                We collaborate with top-tier companies across sectors, ensuring quality placements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute right-0 top-0 w-80 h-80 bg-job-primary rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-job-secondary rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="bg-gradient-to-r from-job-primary to-job-secondary text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Thousands Who Trust NM HR
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              With 20+ years of experience, NM HR Consultancy has connected thousands of professionals to their dream roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button className="bg-white text-job-primary hover:bg-gray-100 text-lg px-8">
                  Find Jobs
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-white text-white bg-white/10 text-lg px-8">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* For Employers section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                For Employers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Partner with us to access exceptional talent across IT, non-IT, and overseas roles.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <Globe className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Post unlimited job listings with visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <User className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Access a curated pool of verified candidates
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <Award className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Streamlined end-to-end recruitment services
                  </span>
                </li>
              </ul>
              <Link to="/login">
                <Button className="bg-job-primary hover:bg-job-secondary">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
