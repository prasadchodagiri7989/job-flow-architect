import React from "react";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserIcon, Briefcase, ClipboardList, BarChart } from "lucide-react";

const AdminProfile: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser || currentUser.role !== "admin") {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader className="flex items-center gap-4">
              <div className="bg-job-light p-3 rounded-full">
                <UserIcon className="h-6 w-6 text-job-primary" />
              </div>
              <CardTitle>Welcome, {currentUser.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                You have full access to manage job postings, review applications, and analyze performance.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex items-center gap-4">
              <div className="bg-job-light p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-job-primary" />
              </div>
              <CardTitle>Manage Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Create, update, and remove job listings.</p>
              <Link to="/admin/jobs">
                <Button className="w-full bg-job-primary hover:bg-job-secondary">Go to Jobs</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex items-center gap-4">
              <div className="bg-job-light p-3 rounded-full">
                <ClipboardList className="h-6 w-6 text-job-primary" />
              </div>
              <CardTitle>View Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Review and update status of submitted applications.</p>
              <Link to="/admin/applications">
                <Button className="w-full bg-job-primary hover:bg-job-secondary">Manage Applications</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex items-center gap-4">
              <div className="bg-job-light p-3 rounded-full">
                <BarChart className="h-6 w-6 text-job-primary" />
              </div>
              <CardTitle>Reports & Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">View platform usage and recruitment analytics.</p>
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
