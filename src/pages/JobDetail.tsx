
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useJobs } from "../contexts/JobContext";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Briefcase, MapPin, Calendar, ArrowLeft, Upload } from "lucide-react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;


const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getJobById, applyForJob } = useJobs();
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const job = getJobById(id || "");
  
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    resumeUrl: "",
    coverLetter: ""
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Job not found</h2>
          <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs">
            <Button>Browse all jobs</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleApply = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { redirectTo: `/jobs/${id}` } });
      return;
    }
    setIsApplyDialogOpen(true);
  };

const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("resume", file);

  try {
    const res = await axios.post(`${API}/upload/resume`, formData);

    const resumeId = res.data.resumeId;

    // ✅ Update state with resume URL and display name
    setApplicationData(prev => ({
      ...prev,
      resumeUrl: `/uploads/${resumeId}`,
    }));

    setFileName(file.name); // ✅ Show file name in UI

    toast.success("Resume uploaded successfully!");
  } catch (err) {
    console.error("❌ Upload error:", err);
    toast.error("File upload failed. Please try again.");
  }
};




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

const handleSubmitApplication = async () => {
  if (!job?.id || !currentUser?.id) {
    toast.error("Missing job or user information.");
    return;
  }

  // Basic validation (optional)
  if (!applicationData.name || !applicationData.email || !applicationData.resumeUrl) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const payload = {
      jobId: job.id,
      userId: currentUser.id,
      name: applicationData.name.trim(),
      email: applicationData.email.trim(),
      resumeUrl: applicationData.resumeUrl,
      coverLetter: applicationData.coverLetter?.trim() || '',
    };

    const res = await axios.post(`${API}/applications`, payload);

    if (res.status === 201) {
      toast.success("Application submitted successfully!");
      setIsApplyDialogOpen(false);
    } else {
      toast.error("Unexpected response from server.");
    }
  } catch (error: any) {
    console.error("❌ Error submitting application:", error);
    const message = error.response?.data?.message || "Failed to submit application.";
    toast.error(message);
  } finally {
    setIsSubmitting(false);
  }
};



  // Format the date
  const postedDate = new Date(job.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/jobs" className="text-job-primary hover:underline inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start sm:items-center flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {job.title}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                <Button 
                  className="bg-job-primary hover:bg-job-secondary"
                  onClick={handleApply}
                >
                  Apply Now
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-700">
                  <Briefcase className="h-4 w-4 mr-1.5 text-gray-500" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-4 w-4 mr-1.5 text-gray-500" />
                  Posted on {postedDate}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Job Description</h2>
                <div className="prose prose-gray max-w-none">
                  {job.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-job-light text-job-primary px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-200">
                <Button 
                  className="bg-job-primary hover:bg-job-secondary w-full sm:w-auto"
                  onClick={handleApply}
                >
                  Apply for this position
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Company Overview</h2>
              <div className="flex items-center mb-6">
                <div className="bg-job-light h-12 w-12 rounded-lg flex items-center justify-center mr-3">
                  <Briefcase className="h-6 w-6 text-job-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{job.company}</h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-6">
                {job.company} is a leading company in its field, known for innovation and excellence.
              </p>
              
              <h3 className="font-medium mb-2">Similar Jobs</h3>
              <div className="space-y-3">
                <Link 
                  to="/jobs"
                  className="block p-3 border border-gray-200 rounded-md hover:border-job-primary hover:bg-job-light/50 transition-colors"
                >
                  <h4 className="font-medium text-sm">Similar Position</h4>
                  <p className="text-xs text-gray-500">
                    {job.company} • {job.location}
                  </p>
                </Link>
                <Link 
                  to="/jobs"
                  className="block p-3 border border-gray-200 rounded-md hover:border-job-primary hover:bg-job-light/50 transition-colors"
                >
                  <h4 className="font-medium text-sm">Related Role</h4>
                  <p className="text-xs text-gray-500">
                    Other Company • Remote
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for: {job.title}</DialogTitle>
            <DialogDescription>
              Complete the form below to submit your application.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={applicationData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={applicationData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="resume">Resume</Label>
              <div className="mt-1 flex items-center">
                <Label
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 w-full"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {fileName ? fileName : "Upload Resume"}
                </Label>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Upload your resume (PDF, DOC, or DOCX)
              </p>
              <div className="mt-2">
                <Link to="/resume-builder" className="text-job-primary hover:underline text-sm">
                  Don't have a resume? Use our Resume Builder
                </Link>
              </div>
            </div>
            
            <div>
              <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={applicationData.coverLetter}
                onChange={handleInputChange}
                placeholder="Why are you a good fit for this position?"
                className="h-36"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsApplyDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-job-primary hover:bg-job-secondary"
              onClick={handleSubmitApplication}
              disabled={isSubmitting || !applicationData.name || !applicationData.email || !applicationData.resumeUrl}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default JobDetail;
