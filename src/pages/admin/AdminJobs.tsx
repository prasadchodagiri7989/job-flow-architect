
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useJobs, Job } from "../../contexts/JobContext";
import JobCard from "../../components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Search, Plus } from "lucide-react";

const AdminJobs: React.FC = () => {
  const { jobs, deleteJob, addJob, updateJob } = useJobs();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);
  const [jobDialogOpen, setJobDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    description: "",
    shortDescription: "",
    location: "",
    salary: "",
    tags: "",
  });

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobForm({ ...jobForm, [name]: value });
  };

  const handleAddEditJob = () => {
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
      if (editingJob) {
        // Update existing job
        updateJob({
          ...editingJob,
          title: jobForm.title,
          company: jobForm.company,
          description: jobForm.description,
          shortDescription: jobForm.shortDescription || jobForm.description.substring(0, 120) + "...",
          location: jobForm.location,
          salary: jobForm.salary,
          tags,
        });
        toast.success("Job updated successfully!");
      } else {
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
      }

      // Close dialog and reset form
      setJobDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Error saving job");
      console.error("Error saving job:", error);
    }
  };

  const openDeleteDialog = (id: string) => {
    setJobToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (jobToDelete) {
      deleteJob(jobToDelete);
      toast.success("Job deleted successfully!");
      setDeleteDialogOpen(false);
      setJobToDelete(null);
    }
  };

  const openEditDialog = (job: Job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      company: job.company,
      description: job.description,
      shortDescription: job.shortDescription,
      location: job.location,
      salary: job.salary,
      tags: job.tags.join(", "),
    });
    setJobDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingJob(null);
    resetForm();
    setJobDialogOpen(true);
  };

  const resetForm = () => {
    setJobForm({
      title: "",
      company: "",
      description: "",
      shortDescription: "",
      location: "",
      salary: "",
      tags: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Manage Jobs</h1>
          <Button
            className="bg-job-primary hover:bg-job-secondary gap-2"
            onClick={openCreateDialog}
          >
            <Plus className="h-4 w-4" /> Post New Job
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search jobs by title or company..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isAdmin={true}
                onDelete={() => openDeleteDialog(job.id)}
                onEdit={() => openEditDialog(job)}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No jobs found. Create a new job.</p>
              <Button
                className="mt-4 bg-job-primary hover:bg-job-secondary"
                onClick={openCreateDialog}
              >
                Create Job
              </Button>
            </div>
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the job listing
                and all associated applications.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Job Create/Edit Dialog */}
        <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{editingJob ? "Edit Job" : "Create New Job"}</DialogTitle>
              <DialogDescription>
                {editingJob
                  ? "Make changes to this job listing."
                  : "Fill in the details to create a new job listing."}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={jobForm.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Frontend Developer"
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
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={jobForm.location}
                    onChange={handleInputChange}
                    placeholder="e.g. New York, NY or Remote"
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
                  Leave blank to auto-generate from main description.
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
                />
                <p className="text-xs text-gray-500">
                  Examples: JavaScript, Full-time, Remote, Design, Marketing
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setJobDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                className="bg-job-primary hover:bg-job-secondary" 
                onClick={handleAddEditJob}
              >
                {editingJob ? "Save Changes" : "Create Job"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default AdminJobs;
