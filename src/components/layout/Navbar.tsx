import React, { useState } from "react";
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

const Navbar: React.FC = () => {
  const { currentUser, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 items-center">
          {isAuthenticated && (
            <>
              <Link to="/jobs" className="text-gray-700 hover:text-job-primary">
                Browse Jobs
              </Link>

              {isAdmin ? (
                <>
                  <Link to="/admin/dashboard" className="text-gray-700 hover:text-job-primary">
                    Admin Dashboard
                  </Link>
                  <Link to="/admin/jobs" className="text-gray-700 hover:text-job-primary">
                    Manage Jobs
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-job-primary">
                    Profile
                  </Link>
                  <Link to="/applications" className="text-gray-700 hover:text-job-primary">
                    My Applications
                  </Link>
                  <Link to="/resume-builder" className="text-gray-700 hover:text-job-primary">
                    Resume Builder
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* User or Auth Buttons */}
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
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="hidden sm:inline-flex">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-2 gap-2">
          <Link to="/jobs" className="text-gray-700 hover:text-job-primary">
            Browse Jobs
          </Link>
          {isAuthenticated && isAdmin && (
            <>
              <Link to="/admin/dashboard" className="text-gray-700 hover:text-job-primary">
                Admin Dashboard
              </Link>
              <Link to="/admin/jobs" className="text-gray-700 hover:text-job-primary">
                Manage Jobs
              </Link>
            </>
          )}
          {isAuthenticated && !isAdmin && (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-job-primary">
                Profile
              </Link>
              <Link to="/applications" className="text-gray-700 hover:text-job-primary">
                My Applications
              </Link>
              <Link to="/resume-builder" className="text-gray-700 hover:text-job-primary">
                Resume Builder
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
