
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useJobs } from "../../contexts/JobContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const { addJob } = useJobs();
  
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    description: "",
    shortDescription: "",
    location: "",
    salary: "",
    tags: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobForm({ ...jobForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!jobForm.title || !jobForm.company || !jobForm.description || !jobForm.location || !jobForm.salary) {
      toast.error("Please fill all required fields");
      return;
    }

    // Process tags
    const tags = jobForm.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    try {
      // Create new job
      addJob({
        title: jobForm.title,
        company: jobForm.company,
        description: jobForm.description,
        shortDescription: jobForm.shortDescription || jobForm.description.substring(0, 120) + "...",
        location: jobForm.location,
        salary: jobForm.salary,
        tags,
      });
      
      toast.success("Job created successfully!");
      navigate("/admin/jobs");
    } catch (error) {
      toast.error("Error saving job");
      console.error("Error saving job:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Button 
            variant="ghost" 
            className="mr-4 p-2" 
            onClick={() => navigate("/admin/jobs")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Create New Job</h1>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={jobForm.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  value={jobForm.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Tech Company Inc."
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  value={jobForm.location}
                  onChange={handleInputChange}
                  placeholder="e.g. New York, NY or Remote"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="salary">Salary *</Label>
                <Input
                  id="salary"
                  name="salary"
                  value={jobForm.salary}
                  onChange={handleInputChange}
                  placeholder="e.g. $80,000 - $100,000"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Textarea
                id="shortDescription"
                name="shortDescription"
                value={jobForm.shortDescription}
                onChange={handleInputChange}
                placeholder="Brief summary of the job (will be truncated if not provided)"
                className="resize-none h-20"
              />
              <p className="text-xs text-gray-500">
                Leave blank to auto-generate from main description
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Full Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={jobForm.description}
                onChange={handleInputChange}
                placeholder="Detailed job description including responsibilities and requirements"
                className="resize-none h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated) *</Label>
              <Input
                id="tags"
                name="tags"
                value={jobForm.tags}
                onChange={handleInputChange}
                placeholder="e.g. React, Full-time, Remote"
                required
              />
              <p className="text-xs text-gray-500">
                Examples: JavaScript, Full-time, Remote, Design, Marketing
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/jobs")}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-job-primary hover:bg-job-secondary"
              >
                Create Job
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateJob;
