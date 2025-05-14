
import React, { useState, useEffect } from "react";
import JobCard from "../components/jobs/JobCard";
import JobFilters, { FilterState } from "../components/jobs/JobFilters";
import Layout from "../components/layout/Layout";
import { useJobs, Job } from "../contexts/JobContext";
import { toast } from "sonner";
import { Briefcase } from "lucide-react";

const JobsList: React.FC = () => {
  const { jobs } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    location: "",
    category: "",
    salaryRange: [0, 200000],
  });

  useEffect(() => {
    applyFilters(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs]);

  const applyFilters = (newFilters: FilterState) => {
    let filtered = [...jobs];
    
    if (newFilters.keyword) {
      const keyword = newFilters.keyword.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword) ||
          job.description.toLowerCase().includes(keyword) ||
          job.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    }

    if (newFilters.location) {
      const location = newFilters.location.toLowerCase();
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location)
      );
    }

    if (newFilters.category) {
      filtered = filtered.filter((job) =>
        job.tags.some((tag) => tag === newFilters.category)
      );
    }

    // Simple salary filter (in a real app, we would parse the salary range properly)
    filtered = filtered.filter((job) => {
      const salaryString = job.salary.replace(/[^0-9-]/g, "");
      const salary = parseInt(salaryString.split("-")[0], 10);
      return (
        !isNaN(salary) &&
        salary >= newFilters.salaryRange[0] &&
        salary <= newFilters.salaryRange[1]
      );
    });

    setFilteredJobs(filtered);
    setFilters(newFilters);
    
    if (filtered.length === 0) {
      toast.info("No jobs match your filters. Try adjusting your criteria.");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Find Your Dream Job
          </h1>
          <span className="text-job-primary font-medium">
            {filteredJobs.length} jobs available
          </span>
        </div>

        <div className="mb-8">
          <JobFilters onFilterChange={applyFilters} />
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
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
              No jobs match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default JobsList;
