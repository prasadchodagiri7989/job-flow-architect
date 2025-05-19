
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "../contexts/JobContext";
import JobCard from "../components/jobs/JobCard";
import { 
  Briefcase, 
  Search, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Phone,
  Building2,
  UserCheck,
  FileText,
  Smile,
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Home: React.FC = () => {
  const { jobs } = useJobs();

  const latestJobs = jobs.slice(0, 3);

  const clientLogos = [
    { name: "Mug Company", logo: "/assets/ferropan_company.jpg" },
    { name: "NBTC", logo: "/assets/growmaxx_company.png" },
    { name: "Ferropan", logo: "/assets/mug_company.png" },
    { name: "Growmaxx", logo: "/assets/nbtc_company.png" },
    { name: "Target", logo: "/assets/target_company.jpg" },
  ];

const highlights = [
  {
    title: "Companies Helped",
    count: "264+",
    icon: <Building2 className="h-6 w-6 text-job-primary mb-2 mx-auto" />,
  },
  {
    title: "Permanent Recruitments",
    count: "468+",
    icon: <UserCheck className="h-6 w-6 text-job-primary mb-2 mx-auto" />,
  },
  {
    title: "Overseas Recruitments",
    count: "322+",
    icon: <Globe className="h-6 w-6 text-job-primary mb-2 mx-auto" />,
  },
  {
    title: "Resumes Screened",
    count: "10,000+",
    icon: <FileText className="h-6 w-6 text-job-primary mb-2 mx-auto" />,
  },
  {
    title: "Happy Customers",
    count: "2887",
    icon: <Smile className="h-6 w-6 text-job-primary mb-2 mx-auto" />,
  },
];


const testimonials = [
  {
    text: "NM Consultancy made hiring so easy for us.",
    author: "Ganesh",
    image: "/assets/review.jpg",
  },
  {
    text: "Quick results, highly professional.",
    author: "Harsha",
    image: "/assets/review1.jpeg",
  },
  {
    text: "Smooth hiring experience.",
    author: "Chandu",
    image: "/assets/review2.jpg",
  },
];


  return (
    <Layout>
      {/* Hero section */}
<div className="relative">
  {/* Background image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/assets/slideshow4.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>

  {/* Dark overlay with stronger opacity */}
<div
  className="absolute inset-0 z-0"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }}
></div>


  {/* Foreground content with light transparent base */}
  <div className="relative z-10 bg-white/10">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl relative">
        <div
          className="hidden md:block absolute -right-20 -top-14 w-40 h-40 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(79, 70, 229, 0.3) 1px, transparent 1px)',
            backgroundSize: '15px 15px',
          }}
        ></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Your Recruitment Partner
        </h1>
        <p className="text-xl md:text-2xl text-white font-semibold mb-6">
          Talent is the key to Growth
        </p>

        <p className="text-lg text-gray-200 mb-8">
          To be the most reliable and trustworthy global recruitment partner to both our clients and candidates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/jobs" className="flex-1 sm:flex-none">
            <Button className="w-full sm:w-auto bg-job-primary hover:bg-job-secondary text-lg px-8 py-6">
              Browse Jobs
            </Button>
          </Link>
          <Link to="/login" className="flex-1 sm:flex-none">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-white text-white bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Services section */}
<div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
      Services Offered
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/service_card1.jpg"
          alt="Overseas Recruitment"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Globe className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Overseas Recruitment</h3>
        <p className="text-gray-600">
          Fully-vetted, engaged candidates to save time and resources.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/service_card2.jpg"
          alt="Executive Search"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Users className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Executive Search</h3>
        <p className="text-gray-600">
          Human and data-driven sourcing for top-tier executives.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/service_card3.jpg"
          alt="Temporary Staffing"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Briefcase className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Temporary Staffing</h3>
        <p className="text-gray-600">
          Experienced networks to find innovators and business thinkers.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Core Solutions Section */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Core Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/card1.jpg"
                alt="Recruitment Solutions"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-job-light p-2 rounded-full">
                  <Search className="h-5 w-5 text-job-primary" />
                </div>
                <h3 className="text-xl font-bold">Recruitment Solutions</h3>
              </div>
              <p className="text-gray-600">
                End-to-end recruitment services tailored to your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/card2.jpg"
                alt="Leadership Training"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-job-light p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-job-primary" />
                </div>
                <h3 className="text-xl font-bold">Leadership Training</h3>
              </div>
              <p className="text-gray-600">
                Developing strong leadership skills for your organization.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/card3.jpg"
                alt="Improving Resources"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-job-light p-2 rounded-full">
                  <Users className="h-5 w-5 text-job-primary" />
                </div>
                <h3 className="text-xl font-bold">Improving Resources</h3>
              </div>
              <p className="text-gray-600">
                Resource optimization and management for business success.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Highlights section */}
<div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
      Our Highlights
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {highlights.map((highlight, index) => (
        <Card
          key={index}
          className="border border-job-primary transition-colors"
        >
          <CardContent className="p-6 text-center">
            {highlight.icon}
            <p className="text-3xl md:text-4xl font-bold text-job-primary mb-1">
              {highlight.count}
            </p>
            <p className="text-gray-600 text-sm">{highlight.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>

      {/* Process workflow */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-job-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Understand the Requirements</h3>
              </div>
              <p className="ml-14 mt-3 text-gray-600">
                Initial consultation via email to understand your specific needs.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-job-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Vetting the Candidates</h3>
              </div>
              <p className="ml-14 mt-3 text-gray-600">
                Thorough screening process to ensure quality matches.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-job-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Placing the Job</h3>
              </div>
              <p className="ml-14 mt-3 text-gray-600">
                Final placement and follow-up to ensure satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured jobs section */}
      <div className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Job Openings</h2>
            <Link to="/jobs" className="text-job-primary hover:underline">
              View all jobs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="mt-4">
                Explore All Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Expertise
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-3 mt-1">
                    <Award className="h-5 w-5 text-job-primary" />
                  </div>
                  <div>
                    <span className="text-lg font-semibold block">20+ years of experience</span>
                    <span className="text-gray-600">Delivering quality recruitment solutions across industries</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-job-light p-1 rounded-full mr-3 mt-1">
                    <Calendar className="h-5 w-5 text-job-primary" />
                  </div>
                  <div>
                    <span className="text-lg font-semibold block">Decade of recruitment expertise</span>
                    <span className="text-gray-600">In both IT and Non-IT domains</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Client Testimonials</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                    <div className="border-l-4 border-job-primary pl-4">
                      <p className="italic text-gray-600">"{testimonial.text}"</p>
                      <p className="text-job-primary font-semibold mt-2">– {testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Clients
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <div key={index} className="p-3 w-40 h-32 flex items-center justify-center transition-all border border-gray-200 shadow-md">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA and contact section */}
      <div className="py-16 bg-gradient-to-br from-job-background via-white to-job-light relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-job-light p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-job-primary" />
                    </div>
                    <span>recruit@nmhruae.com</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-job-light p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-job-primary" />
                    </div>
                    <span>+971 58 187 9994</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-job-light p-2 rounded-full mr-3">
                      <Globe className="h-5 w-5 text-job-primary" />
                    </div>
                    <span>Abu Dhabi, UAE</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Join our newsletter for the latest updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-job-primary" 
                  />
                  <Button className="bg-job-primary hover:bg-job-secondary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
