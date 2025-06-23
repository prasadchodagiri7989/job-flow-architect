
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useJobs } from "../contexts/JobContext";
import { useAuth } from "../contexts/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UserApplications: React.FC = () => {
  const { currentUser } = useAuth();
  const { getUserApplications, getJobById } = useJobs();
  
  const applications = currentUser 
    ? getUserApplications(currentUser.id)
    : [];

  const statusBadgeStyles = {
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    reviewed: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    accepted: "bg-green-100 text-green-800 hover:bg-green-100",
    rejected: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">My Applications</h1>

        {applications.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead className="hidden md:table-cell">Company</TableHead>
                    <TableHead className="hidden md:table-cell">Applied</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((application) => {
                    const job = getJobById(application.jobId);
                    return (
                      <TableRow key={application.id}>
                        <TableCell className="font-medium">
                          {job?.title || "Job not found"}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {job?.company || "N/A"}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(application.appliedAt)}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline"
                            // @ts-ignore - We know these status values match
                            className={statusBadgeStyles[application.status]}
                          >
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {job && (
                            <Link to={`/jobs/${job.id}`}>
                              <Button variant="outline" size="sm">View Job</Button>
                            </Link>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <FileText className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">No applications yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't applied for any jobs yet. Start your job search now!
            </p>
            <Link to="/jobs">
              <Button className="bg-job-primary hover:bg-job-secondary">
                Browse Jobs
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserApplications;
