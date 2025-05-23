import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useJobs, Application } from "../../contexts/JobContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Search, Eye, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AdminApplications: React.FC = () => {
  const { jobs, applications, getJobById, updateApplication } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [viewingApplication, setViewingApplication] = useState<Application | null>(null);

  const filteredApplications = applications.filter((app) => {
    return (
      (!searchTerm ||
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedJob || app.jobId === selectedJob) &&
      (!selectedStatus || app.status === selectedStatus)
    );
  });

  const handleStatusChange = (status: "pending" | "reviewed" | "rejected" | "accepted") => {
    if (!viewingApplication) return;
    const updatedApplication = { ...viewingApplication, status };
    updateApplication(updatedApplication);
    setViewingApplication(updatedApplication);
    toast.success(`Application status updated to ${status}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const statusBadgeStyles = {
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    reviewed: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    accepted: "bg-green-100 text-green-800 hover:bg-green-100",
    rejected: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Manage Applications</h1>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select
              value={selectedJob || ""}
              onValueChange={(value) => setSelectedJob(value || null)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Jobs</SelectItem>
                {jobs.map((job) => (
                  <SelectItem key={job.id} value={job.id}>
                    {job.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedStatus || ""}
              onValueChange={(value) => setSelectedStatus(value || null)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {filteredApplications.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Job Position</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => {
                    const job = getJobById(application.jobId);
                    return (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{application.name}</div>
                            <div className="text-sm text-gray-500">{application.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{job?.title || "Unknown Job"}</TableCell>
                        <TableCell>{formatDate(application.appliedAt)}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            // @ts-ignore
                            className={statusBadgeStyles[application.status]}
                          >
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewingApplication(application)}
                            className="gap-1"
                          >
                            <Eye className="h-4 w-4" />
                            <span className="hidden sm:inline">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600">No applications found</p>
              <p className="text-gray-500 text-sm mt-1">
                Try adjusting your filters or create more job listings
              </p>
            </div>
          )}
        </div>

        <Dialog
          open={!!viewingApplication}
          onOpenChange={(open) => !open && setViewingApplication(null)}
        >
          <DialogContent className="sm:max-w-[600px]">
            {viewingApplication && (
              <>
                <DialogHeader>
                  <DialogTitle>Application Details</DialogTitle>
                  <DialogDescription>
                    {getJobById(viewingApplication.jobId)?.title || "Unknown Position"}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Applicant</p>
                      <p>{viewingApplication.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p>{viewingApplication.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Applied On</p>
                      <p>{formatDate(viewingApplication.appliedAt)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Resume</p>
                      <a
                        href={viewingApplication.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>

                  {viewingApplication.coverLetter && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">Cover Letter</p>
                      <div className="bg-gray-50 p-3 rounded-md text-sm">
                        {viewingApplication.coverLetter}
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-500 mb-2">Update Status</p>
                    <div className="flex gap-2">
                      <Button
                        variant={viewingApplication.status === "pending" ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => handleStatusChange("pending")}
                      >
                        Pending
                      </Button>
                      <Button
                        variant={viewingApplication.status === "reviewed" ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => handleStatusChange("reviewed")}
                      >
                        Reviewed
                      </Button>
                      <Button
                        variant={viewingApplication.status === "accepted" ? "secondary" : "outline"}
                        size="sm"
                        className={viewingApplication.status === "accepted" ? "bg-green-600 hover:bg-green-700 text-white" : ""}
                        onClick={() => handleStatusChange("accepted")}
                      >
                        Accept
                      </Button>
                      <Button
                        variant={viewingApplication.status === "rejected" ? "secondary" : "outline"}
                        size="sm"
                        className={viewingApplication.status === "rejected" ? "bg-red-600 hover:bg-red-700 text-white" : ""}
                        onClick={() => handleStatusChange("rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setViewingApplication(null)}>
                    Close
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default AdminApplications;