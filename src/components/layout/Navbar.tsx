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
import { useLocation } from "react-router-dom";


const navbarElements = {
  services: {
    label: "Services",
    path: "/",
    subItems: [
      { label: "Staffing Solutions", path: "/services/staffing-solutions" },
      { label: "Overseas Recruitment", path: "/services/overseas-recruitment" },
      { label: "Document & Visa Processing", path: "/services/visa-processing" },
      { label: "Client Support", path: "/services/client-support" },
    ],
  },
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
const [scrolled, setScrolled] = useState(false);

React.useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  const showDropdown = (key) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  return (
<nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isHomePage
      ? scrolled
        ? "bg-white/80 backdrop-blur-md shadow-md"
        : "bg-transparent"
      : "bg-white shadow-md"
  }`}
>

      <div className="py-3 container mx-auto flex items-center justify-between px-4 backdrop-blur-md md:backdrop-blur-none">
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/mainlogo.png"
            alt="NM-HR Logo"
            className="h-12 md:h-20"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}
          >
            Home
          </Link>
          <Link to="/about" className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
            About Us
          </Link>

          {Object.entries(navbarElements).map(([key, item]) =>
            "subItems" in item && item.subItems.length > 0 ? (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => showDropdown(key)}
                onMouseLeave={hideDropdown}
              >
                <button className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
                  {item.label}
                </button>
                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
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

          {!isAdmin && (
            <>
              <Link to="/jobs" className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
                Current Openings
              </Link>
              <Link to="/blogs" className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
                Blogs
              </Link>
              <Link to="/clients" className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
                Clients
              </Link>
              <Link to="/contact" className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}>
                Contact
              </Link>
            </>
          )}

          {isAuthenticated && (
            <>
              {!isAdmin && (
                <>
                  <Link
                    to={navbarElements.profile.path}
                    className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}                  >
                    {navbarElements.profile.label}
                  </Link>
                  <Link
                    to={navbarElements.applications.path}
                    className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}                  >
                    {navbarElements.applications.label}
                  </Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link
                    to={navbarElements.adminDashboard.path}
                    className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}                  >
                    {navbarElements.adminDashboard.label}
                  </Link>
                  <Link
                    to={navbarElements.manageJobs.path}
                    className={`font-semibold ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            }`}                  >
                    {navbarElements.manageJobs.label}
                  </Link>
                </>
              )}
            </>
          )}
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
                <Button variant="outline" className="hidden sm:inline-flex">
                  Login
                </Button>
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
          <Link to="/" className="text-gray-700 hover:text-job-primary">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-job-primary">
            About Us
          </Link>
          {Object.entries(navbarElements).map(([key, item]) =>
            "subItems" in item && item.subItems.length > 0 ? (
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-1 flex flex-col border-t border-gray-200">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
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
          {!isAuthenticated && (
            <>
              <Link to="/jobs" className="text-gray-700 hover:text-job-primary">
                Current Openings
              </Link>
              <Link to="/blogs" className="text-gray-700 hover:text-job-primary">
                Blogs
              </Link>
              <Link to="/clients" className="text-gray-700 hover:text-job-primary">
                Clients
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-job-primary">
                Contact
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link
                to="/jobs"
                className="text-gray-700 hover:text-job-primary"
              >
                Browse Jobs
              </Link>
              {!isAdmin && (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-job-primary"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/applications"
                    className="text-gray-700 hover:text-job-primary"
                  >
                    My Applications
                  </Link>
                  <Link
                    to="/resume-builder"
                    className="text-gray-700 hover:text-job-primary"
                  >
                    Resume Builder
                  </Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-700 hover:text-job-primary"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    to="/admin/jobs"
                    className="text-gray-700 hover:text-job-primary"
                  >
                    Manage Jobs
                  </Link>
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
