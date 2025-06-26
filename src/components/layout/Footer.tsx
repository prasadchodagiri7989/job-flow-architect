import React from "react";
import { Link } from "react-router-dom";
import { Globe, Briefcase, Users, Phone, Mail, FileText, Shield } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About NM-HR</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white flex items-center">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/our-solutions" className="hover:text-white flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>Our Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/team-members" className="hover:text-white flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Team Members</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">For You</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/employers" className="hover:text-white flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>Employers</span>
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-white flex items-center">
                  <span>Job Seekers</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing-plans" className="hover:text-white flex items-center">
                  <span>Pricing & Plans</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-white flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-white flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold text-white">UAE Branch</h4>
                <div className="ml-6 text-sm text-gray-400 space-y-1">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 text-job-primary mr-2 mt-1" />
                    <span>ceo@nmhruae.com</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-job-primary mr-2 mt-1" />
                    <span>+971 54 759 3444</span>
                  </div>
                  <div>Abu Dhabi, UAE</div>
                </div>
              </li>
              <li>
                <h4 className="font-semibold text-white">Indian Branch</h4>
                <div className="ml-6 text-sm text-gray-400 space-y-1">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 text-job-primary mr-2 mt-1" />
                    <span>ceo@nmhruae.com</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-job-primary mr-2 mt-1" />
                    <span>+91 86880 53307</span>
                  </div>
                  <div>
                    Bhupathi Surya Central Mall,<br />
                    Dondaparthy, Railway New Colony,<br />
                    Visakhapatnam, Andhra Pradesh 530016, India
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/mainlogo.png" alt="NM-HR Logo" className="h-8 mr-2" />
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} NM-HR Consultancy. All rights reserved.
            </span>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/share/1BbjuVNLaL/" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-white">
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/nmhrconsultancyuae?igsh=cG9keG0yMnQ5cGF3" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-pink-500">
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5C385.3 29.9 353.7 21.7 318 20 280.4 18.1 167.6 18.1 130 20 94.3 21.7 62.7 29.9 36.5 56.3 10.1 82.7 1.9 114.3 0 150c-1.9 37.6-1.9 150.4 0 188 1.7 35.7 9.9 67.3 36.2 93.5s57.8 34.5 93.5 36.2c37.6 1.9 150.4 1.9 188 0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c1.9-37.6 1.9-150.4 0-188zm-48.4 224c-7.8 19.7-23.1 35-42.8 42.8-29.6 11.7-99.9 9-132.3 9s-102.7 2.6-132.3-9c-19.7-7.8-35-23.1-42.8-42.8-11.7-29.6-9-99.9-9-132.3s-2.6-102.7 9-132.3c7.8-19.7 23.1-35 42.8-42.8 29.6-11.7 99.9-9 132.3-9s102.7-2.6 132.3 9c19.7 7.8 35 23.1 42.8 42.8 11.7 29.6 9 99.9 9 132.3s2.6 102.7-9 132.3z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/human-resources-nmhm-12aab6366/" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
              {/* LinkedIn SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
