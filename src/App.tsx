
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import UserProfile from "./pages/UserProfile";
import UserApplications from "./pages/UserApplications";
import ResumeBuilder from "./pages/ResumeBuilder";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminJobs from "./pages/admin/AdminJobs";
import CreateJob from "./pages/admin/CreateJob";
import JobApplicants from "./pages/admin/JobApplicants";
import AdminApplications from "./pages/admin/AdminApplications";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// New pages
import OurSolutions from "./pages/OurSolutions";
import TeamMembers from "./pages/TeamMembers";
import ContactUs from "./pages/ContactUs";
import Employers from "./pages/Employers";
import PricingPlans from "./pages/PricingPlans";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ScrollToTop from "./components/ScrollToTop";

// Components
import ProtectedRoute from "./components/layout/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <JobProvider>
          <BrowserRouter>
          <ScrollToTop />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/jobs" element={<JobsList />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              
              {/* New public routes */}
              <Route path="/our-solutions" element={<OurSolutions />} />
              <Route path="/team-members" element={<TeamMembers />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/pricing-plans" element={<PricingPlans />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />

              {/* User routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/applications"
                element={
                  <ProtectedRoute>
                    <UserApplications />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resume-builder"
                element={
                  <ProtectedRoute>
                    <ResumeBuilder />
                  </ProtectedRoute>
                }
              />

              {/* Admin routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/profile"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminJobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs/create"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <CreateJob />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs/:id/applicants"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <JobApplicants />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/applications"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminApplications />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </JobProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
