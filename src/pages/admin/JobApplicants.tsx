
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useJobs, Application, Job } from "../../contexts/JobContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, FileText, Eye } from "lucide-react";

const JobApplicants: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getJobById, getApplicationsForJob, updateApplication } = useJobs();
  
  const [job, setJob] = useState<Job | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [viewingApplication, setViewingApplication] = useState<Application | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const jobData = getJobById(id);
      if (jobData) {
        setJob(jobData);
        const jobApplications = getApplicationsForJob(id);
        setApplications(jobApplications);
      } else {
        toast.error("Job not found");
        navigate("/admin/jobs");
      }
    }
  }, [id, getJobById, getApplicationsForJob, navigate]);

  const handleViewApplication = (app: Application) => {
    setViewingApplication(app);
    setDialogOpen(true);
  };

  const handleStatusChange = (status: "pending" | "reviewed" | "rejected" | "accepted") => {
    if (!viewingApplication) return;

    const updatedApplication = { ...viewingApplication, status };
    updateApplication(updatedApplication);
    
    // Update local state
    setApplications(applications.map(app => 
      app.id === updatedApplication.id ? updatedApplication : app
    ));
    setViewingApplication(updatedApplication);
    
    toast.success("Application status updated");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "reviewed":
        return <Badge className="bg-blue-500">Reviewed</Badge>;
      case "accepted":
        return <Badge className="bg-green-500">Accepted</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (!job) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p>Loading job details...</p>
          </div>
        </div>
      </Layout>
    );
  }

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
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Applications</h2>
          
          {applications.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Applied On</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.name}</TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewApplication(application)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p className="text-lg font-medium">No applications yet</p>
              <p className="text-gray-500">
                When candidates apply to this job, they will appear here
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Application Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {viewingApplication && (
            <>
              <DialogHeader>
                <DialogTitle>Application Details</DialogTitle>
                <DialogDescription>
                  Submitted on {new Date(viewingApplication.appliedAt).toLocaleDateString()}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground">Name</Label>
                    <p className="font-medium">{viewingApplication.name}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Email</Label>
                    <p className="font-medium">{viewingApplication.email}</p>
                  </div>
                </div>

                {viewingApplication.coverLetter && (
                  <div>
                    <Label className="text-muted-foreground">Cover Letter</Label>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                      <p className="whitespace-pre-line text-sm">
                        {viewingApplication.coverLetter}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <Label className="text-muted-foreground">Resume</Label>
                  <div className="mt-1">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={viewingApplication.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View Resume
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="status" className="text-muted-foreground">
                    Application Status
                  </Label>
                  <Select
                    value={viewingApplication.status}
                    onValueChange={(value) => 
                      handleStatusChange(value as "pending" | "reviewed" | "rejected" | "accepted")
                    }
                  >
                    <SelectTrigger id="status" className="mt-1">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default JobApplicants;
