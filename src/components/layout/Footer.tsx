
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900">NM-HR</h3>
            <p className="text-sm text-gray-600 mt-1">
              Find your dream job or perfect candidate
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="/jobs" className="text-gray-600 hover:text-job-primary">
              Browse Jobs
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-job-primary">
              About Us
            </Link>
            <a href="#" className="text-gray-600 hover:text-job-primary">
              Contact
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NM-HR. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
