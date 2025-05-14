
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useJobs } from "../../contexts/JobContext";
import { useAuth } from "../../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Clock,
  FileText,
  CheckCircle,
  XCircle,
  Eye,
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  const { jobs, applications } = useJobs();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const pendingApplications = applications.filter(app => app.status === 'pending').length;
  const reviewedApplications = applications.filter(app => app.status === 'reviewed').length;
  const acceptedApplications = applications.filter(app => app.status === 'accepted').length;
  const rejectedApplications = applications.filter(app => app.status === 'rejected').length;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {currentUser?.name}
            </p>
          </div>
          
          <Button 
            className="bg-job-primary hover:bg-job-secondary"
            onClick={() => navigate("/admin/jobs/create")}
          >
            Post New Job
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{jobs.length}</div>
                  <div className="text-xs text-gray-500">Active listings</div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-blue-600 hover:bg-blue-50" 
                size="sm"
                onClick={() => navigate("/admin/jobs")}
              >
                Manage Jobs
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{applications.length}</div>
                  <div className="text-xs text-gray-500">Received applications</div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-green-600 hover:bg-green-50" 
                size="sm"
                onClick={() => navigate("/admin/applications")}
              >
                View All Applications
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Pending Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{pendingApplications}</div>
                  <div className="text-xs text-gray-500">Need review</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-xs text-gray-500">Demo users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Jobs</CardTitle>
                  <Link to="/admin/jobs">
                    <Button variant="link" className="text-job-primary">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {jobs.length > 0 ? (
                  <div className="space-y-4">
                    {jobs.slice(0, 5).map((job) => {
                      const applicantCount = applications.filter(app => app.jobId === job.id).length;
                      return (
                        <div key={job.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                          <div className="flex items-start">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Briefcase className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">{job.title}</p>
                              <p className="text-sm text-gray-600">
                                {job.company}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(job.createdAt).toLocaleDateString()} • {applicantCount} {applicantCount === 1 ? 'applicant' : 'applicants'}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => navigate(`/admin/jobs/${job.id}/applicants`)}
                              className="flex items-center gap-1"
                            >
                              <Eye className="h-3 w-3" /> View
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Briefcase className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">No jobs yet</p>
                    <Button
                      className="mt-4 bg-job-primary hover:bg-job-secondary"
                      onClick={() => navigate("/admin/jobs/create")}
                    >
                      Create Job
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 p-1.5 rounded-full mr-2">
                        <Clock className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-sm">Pending</span>
                    </div>
                    <span className="font-medium">{pendingApplications}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">Reviewed</span>
                    </div>
                    <span className="font-medium">{reviewedApplications}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-1.5 rounded-full mr-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm">Accepted</span>
                    </div>
                    <span className="font-medium">{acceptedApplications}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-100 p-1.5 rounded-full mr-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-sm">Rejected</span>
                    </div>
                    <span className="font-medium">{rejectedApplications}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Applications</span>
                    <span className="text-sm text-gray-500">Percentage</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${pendingApplications / Math.max(1, applications.length) * 100}%` }}></div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6" 
                  onClick={() => navigate("/admin/applications")}
                >
                  View All Applications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
