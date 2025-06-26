import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "../contexts/JobContext";
import { useAuth } from "../contexts/AuthContext";
import JobCard from "../components/jobs/JobCard";
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import { useEffect } from "react";

const Home: React.FC = () => {
  const { jobs } = useJobs();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
  }, []);





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
<div className="relative h-[100vh] md:h-[100vh] bg-black">
  {/* Background video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0 mt-32"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/assets/4480406-hd.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Uniform dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Foreground content */}
  <div className="relative z-10">
    <div className="container mx-auto px-4 py-16 md:py-24 h-full flex items-center">
      <div className="max-w-2xl mt-48">
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
          {isAuthenticated ? (
            <Link to="/jobs" className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto bg-job-primary hover:bg-job-secondary text-lg px-8 py-6">
                Browse Jobs
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/jobs" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-job-primary hover:bg-job-secondary text-lg px-8 py-6">
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/login" className="flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 py-6 border-white text-white bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Clients */}
      <div className="py-16 bg-white" data-aos="fade-up">
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
      
{/* What We Do Section */}
    <div className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          What We Do
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          HR & Recruitment Experts – Empowering Your Growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blue Collar Card */}
          <div className="bg-white p-6 md:ml-48 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full"></div>
            <img
              src="/assets/bluecollar.jpg"
              alt="Blue Collar Recruitment"
              className="w-full h-50 object-cover rounded-md mb-4"
            />
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Blue Collar Recruitment</h3>
            <p className="text-gray-600">
              We connect skilled labor and technical workforce with employers across industries, ensuring reliability and efficiency in every hire.
            </p>
          </div>

          {/* White Collar Card */}
          <div className="bg-white p-6 md:mr-48 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-200 rounded-full"></div>
            <img
              src="/assets/whitecollar.jpg"
              alt="White Collar Recruitment"
              className="w-full h-50 object-cover rounded-md mb-4"
            />
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <Users className="h-6 w-6 text-gray-800" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">White Collar Recruitment</h3>
            <p className="text-gray-600">
              From mid-level to executive roles, we source professionals that match your business culture and strategic goals.
            </p>
          </div>
        </div>
      </div>
    </div>

{/* About Us Section */}
<section className="py-16 bg-gray-50" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        With over 30 years of HR consulting experience, NM HR Consultancy is your trusted recruitment and HR solutions partner in Abu Dhabi and across the UAE.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left Side Content */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-job-primary">Company. People. Growth.</h3>
        <p className="text-gray-700 mb-6">
          At NM HR Consultancy, we connect businesses with top-tier talent from across the globe. Our services go beyond hiring—we offer end-to-end HR solutions that support growth, compliance, and long-term success.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li>✅ 582+ Successful Placements</li>
          <li>✅ 500+ Satisfied Clients</li>
          <li>✅ 30+ Years of Recruitment Expertise</li>
          <li>✅ Global Talent Access – India, Philippines, Sri Lanka & more</li>
        </ul>
      </div>

      {/* Right Side Visual / Image */}
      <div>
        <img
          src="/assets/hr1.jpg"
          alt="NM HR Team"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="mt-16 grid md:grid-cols-2 gap-8" data-aos="fade-up">
      <div className="bg-white p-6 rounded-lg shadow border">
        <h4 className="text-xl font-bold mb-3 text-job-primary">Our Vision</h4>
        <p className="text-gray-700">
          To redefine recruitment by offering ethical, efficient, and people-first manpower solutions that empower both businesses and professionals across the UAE and beyond.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border">
        <h4 className="text-xl font-bold mb-3 text-job-primary">Our Mission</h4>
        <p className="text-gray-700">
          To deliver skilled talent, foster career growth, and support organizations with personalized staffing and consultancy services that ensure long-term success.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Services section */}
<div className="py-16 bg-white" data-aos="fade-up">
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
          className="w-full h-50 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Globe className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Staffing Solutions</h3>
        <p className="text-gray-600">
          Whether you need staff on a temporary, permanent, or contract basis, we tailor our services to suit your business needs.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/service_card2.jpg"
          alt="Executive Search"
          className="w-full h-50 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Users className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Overseas Recruitment</h3>
        <p className="text-gray-600">
          We source qualified candidates from abroad through a smooth, legal, and professional process. We handle everything—from screening to visa coordination.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/service_card3.jpg"
          alt="Temporary Staffing"
          className="w-full h-50 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Briefcase className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Document & Visa Processing</h3>
        <p className="text-gray-600">
          We assist with documentation, offer letters, visa applications, and onboarding procedures, saving your time and effort.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-job-light/30 rounded-full"></div>
        <img
          src="/assets/slideshow4.jpg"
          alt="Temporary Staffing"
          className="w-full h-50 object-cover rounded-md mb-4"
        />
        <div className="flex justify-center mb-4">
          <div className="bg-job-light p-3 rounded-full">
            <Briefcase className="h-6 w-6 text-job-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Client Support</h3>
        <p className="text-gray-600">
          We maintain strong, ongoing relationships with our clients and ensure quick response, clear communication, and reliable follow-up.
        </p>
      </div>
    </div>
  </div>
</div>

{/* How It Works Section */}
<section className="py-16 bg-white" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Our streamlined 5-step process ensures efficient, compliant, and successful placements tailored to your business needs.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6 text-center">
      {/* Step 1 */}
      <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
        <div className="text-4xl font-bold text-job-primary mb-2">01</div>
        <h3 className="font-semibold text-lg mb-2">Consultation</h3>
        <p className="text-gray-600 text-sm">
          Understand your business goals, timelines, and culture to define the ideal candidate profile.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
        <div className="text-4xl font-bold text-job-primary mb-2">02</div>
        <h3 className="font-semibold text-lg mb-2">Sourcing</h3>
        <p className="text-gray-600 text-sm">
          Identify top talent from 15+ sourcing countries using a global recruitment network.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
        <div className="text-4xl font-bold text-job-primary mb-2">03</div>
        <h3 className="font-semibold text-lg mb-2">Screening</h3>
        <p className="text-gray-600 text-sm">
          Each candidate is evaluated with interviews, skill tests, and background/reference checks.
        </p>
      </div>

      {/* Step 4 */}
      <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
        <div className="text-4xl font-bold text-job-primary mb-2">04</div>
        <h3 className="font-semibold text-lg mb-2">Mobilization</h3>
        <p className="text-gray-600 text-sm">
          We handle visa processing, travel, onboarding, and documentation for a smooth transition.
        </p>
      </div>

      {/* Step 5 */}
      <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
        <div className="text-4xl font-bold text-job-primary mb-2">05</div>
        <h3 className="font-semibold text-lg mb-2">Follow-up</h3>
        <p className="text-gray-600 text-sm">
          Post-placement support, performance tracking, and continuous client-candidate care.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Core Solutions Section */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16" data-aos="fade-up">
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
                className="w-full h-50 object-cover rounded-md mb-4"
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
                className="w-full h-50 object-cover rounded-md mb-4"
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
                className="w-full h-50 object-cover rounded-md mb-4"
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
<div className="py-16 bg-white" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
      Our Highlights
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {highlights.map((highlight, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.3, // Adjusts how much of the element should be visible
        });

        return (
          <Card
            key={index}
            className="border border-job-primary transition-colors"
            ref={ref}
          >
            <CardContent className="p-6 text-center">
              {highlight.icon}
              <p className="text-3xl md:text-4xl font-bold text-job-primary mb-1">
                {inView ? (
                  <CountUp end={parseInt(highlight.count)} duration={2} />
                ) : (
                  0
                )}
              </p>
              <p className="text-gray-600 text-sm">{highlight.title}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</div>

      {/* Process workflow */}
      <div className="bg-gradient-to-br from-job-background via-white to-job-light py-16" data-aos="fade-up">
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
      <div className="py-16 bg-white relative" data-aos="fade-up">
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

      {/* CTA and contact section */}
      <div className="py-16 bg-gradient-to-br from-job-background via-white to-job-light relative" data-aos="fade-up">
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
                    <span>ceo@nmhruae.com</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-job-light p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-job-primary" />
                    </div>
                    <span>+971 54 759 3444</span>
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
