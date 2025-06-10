import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Menu } from "lucide-react";

const navbarElements = {
  candidates: {
    label: "Candidates",
    subItems: [
      { label: "Vacancies", path: "/vacancies" },
      { label: "Tips for Jobseekers", path: "/tips-jobseekers" },
      { label: "Register CV", path: "/register-cv" },
    ],
  },
  aboutUs: {
    label: "About Us",
    subItems: [
      { label: "Services", path: "/employers/services" },
      { label: "Team", path: "/about/team" },
      { label: "Success", path: "/about/success" },
      { label: "Our Locations", path: "/about/locations" },
      { label: "Careers at NMHR", path: "/about/careers" },
    ],
  },
  insights: {
    label: "Insights",
    subItems: [
      { label: "Blog", path: "/insights/blog" },
      { label: "Reports", path: "/insights/reports" },
    ],
  },
  // Flat menu items
  browseJobs: { label: "Browse Jobs", path: "/jobs" },
  resumeBuilder: { label: "Resume Builder", path: "/resume-builder" },
  applications: { label: "My Applications", path: "/applications" },
  profile: { label: "Profile", path: "/profile" },
  adminDashboard: { label: "Admin Dashboard", path: "/admin/dashboard" },
  manageJobs: { label: "Manage Jobs", path: "/admin/jobs" },
};

const Navbar: React.FC = () => {
  const { currentUser, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const showDropdown = (key) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Adjust the delay here (in ms)
  };


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/mainlogo.png" alt="NM-HR Logo" className="h-12 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {Object.entries(navbarElements).map(([key, item]) =>
        "subItems" in item ? (
          <div
            key={key}
            className="relative"
            onMouseEnter={() => showDropdown(key)}
            onMouseLeave={hideDropdown}
          >
            <button className="text-gray-700 hover:text-job-primary">
              {item.label}
            </button>

            {activeDropdown === key && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : null
      )}



          {isAuthenticated && (
            <>
              <Link to={navbarElements.browseJobs.path} className="text-gray-700 hover:text-job-primary">
                {navbarElements.browseJobs.label}
              </Link>
              {!isAdmin && (
                <>
                  <Link to={navbarElements.profile.path} className="text-gray-700 hover:text-job-primary">
                    {navbarElements.profile.label}
                  </Link>
                  <Link to={navbarElements.applications.path} className="text-gray-700 hover:text-job-primary">
                    {navbarElements.applications.label}
                  </Link>
                  <Link to={navbarElements.resumeBuilder.path} className="text-gray-700 hover:text-job-primary">
                    {navbarElements.resumeBuilder.label}
                  </Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link to={navbarElements.adminDashboard.path} className="text-gray-700 hover:text-job-primary">
                    {navbarElements.adminDashboard.label}
                  </Link>
                  <Link to={navbarElements.manageJobs.path} className="text-gray-700 hover:text-job-primary">
                    {navbarElements.manageJobs.label}
                  </Link>
                </>
              )}
            </>
          )}
                    <Link to="/request-proposal">
            <Button className="bg-transparent hover:bg-blue-600 text-black hover:text-white border">
              Request Proposal
            </Button>
          </Link>

          <Link to="/register-cv">
            <Button className="bg-transparent hover:bg-green-600 text-black hover:text-white border">
              Register CV
            </Button>
          </Link>
        </div>



        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2 items-center">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {currentUser?.name || "Account"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="hidden sm:inline-flex">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-200 ${
          mobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-2 bg-gray-100">
          {Object.entries(navbarElements).map(([key, item]) =>
            "subItems" in item ? (
          <details key={key} className="group">
            <summary className="flex items-center justify-between px-4 py-2 text-gray-800 font-medium bg-gray-100 cursor-pointer list-none appearance-none">
              {item.label}
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-1 flex flex-col border-t border-gray-200">
              {item.subItems.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className="text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-job-primary transition"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </details>
            ) : null
          )}

          {isAuthenticated && (
            <>
              <Link to="/jobs" className="text-gray-700 hover:text-job-primary">Browse Jobs</Link>
              {!isAdmin && (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-job-primary">Profile</Link>
                  <Link to="/applications" className="text-gray-700 hover:text-job-primary">My Applications</Link>
                  <Link to="/resume-builder" className="text-gray-700 hover:text-job-primary">Resume Builder</Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link to="/admin/dashboard" className="text-gray-700 hover:text-job-primary">Admin Dashboard</Link>
                  <Link to="/admin/jobs" className="text-gray-700 hover:text-job-primary">Manage Jobs</Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
