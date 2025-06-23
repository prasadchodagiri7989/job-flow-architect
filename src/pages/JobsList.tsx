import React from "react";
import JobCard from "../components/jobs/JobCard";
import Layout from "../components/layout/Layout";
import { useJobs } from "../contexts/JobContext";
import { Briefcase } from "lucide-react";

const JobsList: React.FC = () => {
  const { jobs } = useJobs();

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 mt-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Find Your Dream Job
          </h1>
          <span className="text-job-primary font-medium">
            {jobs.length} jobs available
          </span>
        </div>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <div className="bg-job-light p-4 rounded-full">
                <Briefcase className="h-8 w-8 text-job-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No jobs found
            </h2>
            <p className="text-gray-600">
              Please check back later for more opportunities.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default JobsList;
