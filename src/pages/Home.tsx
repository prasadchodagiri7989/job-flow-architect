
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "../contexts/JobContext";
import JobCard from "../components/jobs/JobCard";
import { Briefcase, Search, Users, FileText } from "lucide-react";

const Home: React.FC = () => {
  const { jobs } = useJobs();

  // Get the latest jobs
  const latestJobs = jobs.slice(0, 3);

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-job-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Job Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Connect with top employers and discover opportunities that match
              your skills and aspirations.
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
      <div className="py-16">
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
      <div className="bg-job-light/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose JobQuest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-job-light p-3 rounded-full">
                  <Search className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Job Matching</h3>
              <p className="text-gray-600">
                Find jobs that perfectly match your skills, experience, and
                career goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-job-light p-3 rounded-full">
                  <FileText className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Resume Builder</h3>
              <p className="text-gray-600">
                Create professional resumes with our AI-powered resume builder in
                minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-job-light p-3 rounded-full">
                  <Users className="h-6 w-6 text-job-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Connections</h3>
              <p className="text-gray-600">
                Apply directly to employers and track your application status in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-job-primary text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs
              through JobQuest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button className="bg-white text-job-primary hover:bg-gray-100 text-lg px-8">
                  Find Jobs
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-white text-white hover:bg-job-secondary text-lg px-8">
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
                Find the best talent for your company. Post jobs, review
                applications, and connect with qualified candidates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <Briefcase className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Post unlimited job listings
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <Briefcase className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Access a database of qualified candidates
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-2 mt-1">
                    <Briefcase className="h-4 w-4 text-job-primary" />
                  </div>
                  <span className="text-gray-700">
                    Streamlined application management
                  </span>
                </li>
              </ul>
              <Link to="/login">
                <Button className="bg-job-primary hover:bg-job-secondary">
                  Post a Job
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4">Demo Admin Credentials</h3>
              <div className="bg-gray-50 p-4 rounded-md text-gray-800">
                <p>
                  <span className="font-medium">Email:</span> admin@demo.com
                </p>
                <p>
                  <span className="font-medium">Password:</span> admin123
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Use these credentials to access the admin panel and try out employer features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
