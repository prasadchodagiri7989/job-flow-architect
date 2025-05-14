
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Briefcase, User } from "lucide-react";

const Navbar: React.FC = () => {
  const { currentUser, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-job-primary" />
          <span className="text-xl font-bold text-gray-900">JobQuest</span>
        </Link>

        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <div className="hidden md:flex gap-4">
                <Link to="/jobs" className="text-gray-700 hover:text-job-primary">
                  Browse Jobs
                </Link>
                {isAdmin && (
                  <Link to="/admin/dashboard" className="text-gray-700 hover:text-job-primary">
                    Admin Dashboard
                  </Link>
                )}
              </div>
              
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
                  {isAdmin ? (
                    <>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/admin/dashboard")}
                      >
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/admin/jobs")}
                      >
                        Manage Jobs
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/admin/applications")}
                      >
                        Applications
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/applications")}
                      >
                        My Applications
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => navigate("/resume-builder")}
                      >
                        Resume Builder
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
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
    </nav>
  );
};

export default Navbar;
