
import React, { createContext, useState, useContext, useEffect } from "react";

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  shortDescription: string;
  location: string;
  salary: string;
  tags: string[];
  createdAt: string;
  postedBy: string;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  name: string;
  email: string;
  resumeUrl: string;
  coverLetter?: string;
  status: "pending" | "reviewed" | "rejected" | "accepted";
  appliedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface JobContextType {
  jobs: Job[];
  applications: Application[];
  userProfile: UserProfile | null;
  addJob: (job: Omit<Job, "id" | "createdAt" | "postedBy">) => void;
  updateJob: (job: Job) => void;
  deleteJob: (id: string) => void;
  applyForJob: (jobId: string, application: Omit<Application, "id" | "jobId" | "status" | "appliedAt">) => void;
  updateApplication: (application: Application) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  getJobById: (id: string) => Job | undefined;
  getApplicationsForJob: (jobId: string) => Application[];
  getUserApplications: (userId: string) => Application[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Sample data updated with local service jobs
const sampleJobs: Job[] = [
  {
    id: "job-1",
    title: "Experienced Plumber",
    company: "City Plumbing Services",
    description: `We are looking for an experienced plumber to join our team serving the local community.

Requirements:
- 3+ years of experience in residential and commercial plumbing
- Knowledge of building codes and plumbing regulations
- Experience with installation, repair, and maintenance of pipes, fixtures, and appliances
- Valid driver's license and own transportation
- Strong problem-solving skills and attention to detail

Services include:
- Pipe installation and repair
- Fixture installation (sinks, toilets, bathtubs)
- Water heater installation and maintenance
- Drain cleaning and repair
- Emergency plumbing services`,
    shortDescription: "Join our team of professional plumbers providing essential services to residential and commercial clients.",
    location: "Abu Dhabi, UAE",
    salary: "AED 5,000 - 7,000 per month",
    tags: ["Plumbing", "Trade Skills", "Full-time", "Residential", "Commercial"],
    createdAt: "2025-05-01T12:00:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-2",
    title: "Professional Painter",
    company: "Perfect Finish Painting",
    description: `Perfect Finish Painting is seeking skilled painters to work on residential and commercial projects.

Key Responsibilities:
- Prepare surfaces for painting (cleaning, scraping, sanding, filling holes)
- Apply primer and paint to various surfaces
- Use brushes, rollers, and sprayers as appropriate
- Mix paints to match colors
- Protect surrounding areas from paint splatters

Requirements:
- 2+ years of experience in painting
- Knowledge of different paint types and surface preparation
- Ability to work at heights
- Attention to detail and quality finishing
- Reliable transportation`,
    shortDescription: "Apply your painting skills to residential and commercial projects with our growing local company.",
    location: "Abu Dhabi, UAE",
    salary: "AED 4,000 - 6,000 per month",
    tags: ["Painting", "Trade Skills", "Full-time", "Residential", "Commercial"],
    createdAt: "2025-05-02T10:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-3",
    title: "Electrician",
    company: "PowerSafe Electrical",
    description: `Join our team of qualified electricians to provide essential electrical services.

Key Responsibilities:
- Install, maintain, and repair electrical wiring and equipment
- Read and interpret electrical drawings and specifications
- Test electrical systems to ensure safety and functionality
- Troubleshoot electrical issues
- Ensure compliance with local electrical codes and safety standards

Requirements:
- Certified electrician with relevant qualifications
- 3+ years of experience in residential and commercial electrical work
- Knowledge of electrical codes and safety regulations
- Problem-solving skills and attention to detail
- Valid driver's license`,
    shortDescription: "Work with a leading electrical company providing essential services to homes and businesses.",
    location: "Abu Dhabi, UAE (Various locations)",
    salary: "AED 6,000 - 8,000 per month",
    tags: ["Electrical", "Trade Skills", "Full-time", "Certified"],
    createdAt: "2025-05-03T08:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-4",
    title: "HVAC Technician",
    company: "Cool Comfort Systems",
    description: `Cool Comfort Systems is looking for experienced HVAC technicians to maintain and repair heating and cooling systems.

Key Responsibilities:
- Install, maintain, and repair HVAC systems
- Conduct preventative maintenance
- Diagnose and troubleshoot system issues
- Ensure proper system operation and efficiency
- Advise customers on maintenance and system upgrades

Requirements:
- HVAC certification
- 2+ years of experience in HVAC installation and service
- Knowledge of various heating and cooling systems
- Customer service skills
- Valid driver's license and clean driving record`,
    shortDescription: "Help keep homes and businesses comfortable year-round as part of our professional HVAC team.",
    location: "Abu Dhabi, UAE",
    salary: "AED 5,500 - 7,500 per month",
    tags: ["HVAC", "Trade Skills", "Full-time", "Certified"],
    createdAt: "2025-05-04T14:20:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-5",
    title: "Carpenter",
    company: "Mastercraft Woodworks",
    description: `We are seeking skilled carpenters to join our team for residential and commercial projects.

Key Responsibilities:
- Build and install wooden structures and fixtures
- Read and interpret blueprints and drawings
- Measure and cut materials according to specifications
- Install doors, windows, trim, and cabinetry
- Use and maintain carpentry tools and equipment

Requirements:
- 3+ years of experience in carpentry
- Proficiency with carpentry tools and techniques
- Knowledge of different wood types and their properties
- Ability to work both independently and as part of a team
- Physical stamina and attention to detail`,
    shortDescription: "Create beautiful woodwork and structures as part of our professional carpentry team.",
    location: "Abu Dhabi, UAE",
    salary: "AED 5,000 - 7,000 per month",
    tags: ["Carpentry", "Trade Skills", "Full-time", "Woodworking"],
    createdAt: "2025-05-05T09:15:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-6",
    title: "Gardener/Landscaper",
    company: "Green Oasis Landscaping",
    description: `Green Oasis Landscaping is looking for gardeners and landscapers to maintain and create beautiful outdoor spaces.

Key Responsibilities:
- Plant and maintain gardens, lawns, and ornamental plants
- Prune trees and shrubs
- Apply fertilizers and pest control treatments
- Install irrigation systems
- Design and implement landscape plans

Requirements:
- 1+ years of experience in gardening or landscaping
- Knowledge of local plants and growing conditions
- Experience with gardening tools and equipment
- Physical stamina and ability to work outdoors in all weather conditions
- Valid driver's license`,
    shortDescription: "Help create and maintain beautiful gardens and landscapes across the city.",
    location: "Abu Dhabi, UAE",
    salary: "AED 3,500 - 5,000 per month",
    tags: ["Landscaping", "Gardening", "Outdoor", "Full-time"],
    createdAt: "2025-05-06T11:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-7",
    title: "Tile Installer",
    company: "Precision Tile & Stone",
    description: `Precision Tile & Stone is seeking experienced tile installers for residential and commercial projects.

Key Responsibilities:
- Install ceramic, porcelain, and stone tiles on floors, walls, and countertops
- Prepare surfaces for tile installation
- Measure and cut tiles to fit spaces
- Mix and apply setting materials
- Grout and seal tile installations

Requirements:
- 2+ years of experience in tile installation
- Knowledge of different tile types and installation methods
- Experience with tile cutting tools and equipment
- Attention to detail and precision in measurements
- Physical stamina and ability to work in various positions`,
    shortDescription: "Create beautiful and durable tile installations for homes and businesses.",
    location: "Abu Dhabi, UAE",
    salary: "AED 4,500 - 6,500 per month",
    tags: ["Tile Installation", "Trade Skills", "Full-time", "Construction"],
    createdAt: "2025-05-07T13:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-8",
    title: "Locksmith",
    company: "Secure Lock Solutions",
    description: `We are looking for a skilled locksmith to provide services to residential and commercial clients.

Key Responsibilities:
- Install, repair, and replace locks and security devices
- Make duplicate keys and rekey locks
- Respond to emergency lockout situations
- Advise clients on security solutions
- Maintain records of service calls

Requirements:
- Locksmith certification or 2+ years of experience
- Knowledge of various lock types and security systems
- Problem-solving skills and manual dexterity
- Valid driver's license and reliable transportation
- Availability for emergency call-outs`,
    shortDescription: "Help keep homes and businesses secure with your locksmith skills.",
    location: "Abu Dhabi, UAE",
    salary: "AED 5,000 - 7,000 per month",
    tags: ["Locksmith", "Security", "Full-time", "Emergency Services"],
    createdAt: "2025-05-08T15:00:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-9",
    title: "Appliance Repair Technician",
    company: "Appliance Experts",
    description: `Appliance Experts is seeking technicians to diagnose and repair household appliances.

Key Responsibilities:
- Diagnose problems with refrigerators, washing machines, dryers, dishwashers, etc.
- Repair or replace defective parts
- Perform routine maintenance
- Provide estimates for repairs
- Maintain service records

Requirements:
- 2+ years of experience in appliance repair
- Knowledge of various appliance brands and models
- Electrical and mechanical aptitude
- Customer service skills
- Valid driver's license`,
    shortDescription: "Use your technical skills to repair household appliances and help customers.",
    location: "Abu Dhabi, UAE",
    salary: "AED 5,000 - 7,000 per month",
    tags: ["Appliance Repair", "Technical", "Full-time", "Customer Service"],
    createdAt: "2025-05-09T10:20:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-10",
    title: "House Cleaner",
    company: "Pristine Homes Cleaning Services",
    description: `Pristine Homes is hiring professional house cleaners to maintain clean and healthy environments for our clients.

Key Responsibilities:
- Clean and sanitize kitchens, bathrooms, and living spaces
- Vacuum, sweep, and mop floors
- Dust and polish furniture
- Clean windows and mirrors
- Change linens and make beds

Requirements:
- Previous cleaning experience preferred
- Knowledge of cleaning products and techniques
- Attention to detail and thoroughness
- Reliability and trustworthiness
- Physical stamina`,
    shortDescription: "Join our team providing professional cleaning services to residential clients.",
    location: "Abu Dhabi, UAE",
    salary: "AED 3,000 - 4,500 per month",
    tags: ["Cleaning", "Housekeeping", "Full-time", "Part-time", "Residential"],
    createdAt: "2025-05-10T08:30:00Z",
    postedBy: "admin-1"
  }
];

const sampleApplications: Application[] = [
  {
    id: "app-1",
    jobId: "job-1",
    userId: "user-1",
    name: "Demo User",
    email: "user@demo.com",
    resumeUrl: "/sample-resume.pdf",
    coverLetter: "I am excited to apply for this position...",
    status: "pending",
    appliedAt: "2025-05-10T09:30:00Z"
  }
];

const sampleUserProfile: UserProfile = {
  id: "user-1",
  name: "Demo User",
  email: "user@demo.com",
  phone: "+1 (555) 123-4567",
  location: "Abu Dhabi, UAE",
  bio: "Experienced tradesperson with 5 years of experience in various home services.",
  skills: ["Plumbing", "Basic Electrical", "Painting", "Home Repair", "Customer Service"],
  experience: [
    {
      id: "exp-1",
      company: "Local Maintenance Company",
      position: "Maintenance Technician",
      startDate: "2022-01",
      isCurrent: true,
      description: "Performing various home maintenance and repair tasks for residential clients."
    },
    {
      id: "exp-2",
      company: "City Services",
      position: "Assistant Plumber",
      startDate: "2020-03",
      endDate: "2021-12",
      description: "Assisted lead plumber with installations, repairs, and maintenance calls."
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Technical Training Institute",
      degree: "Certificate",
      field: "Plumbing and Pipefitting",
      startDate: "2019",
      endDate: "2020",
      description: "Comprehensive training in residential and light commercial plumbing."
    }
  ]
};

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state from localStorage or use sample data
  const [jobs, setJobs] = useState<Job[]>(() => {
    const savedJobs = localStorage.getItem("jobSearchJobs");
    return savedJobs ? JSON.parse(savedJobs) : sampleJobs;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const savedApplications = localStorage.getItem("jobSearchApplications");
    return savedApplications ? JSON.parse(savedApplications) : sampleApplications;
  });

  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const savedProfile = localStorage.getItem("jobSearchUserProfile");
    return savedProfile ? JSON.parse(savedProfile) : sampleUserProfile;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("jobSearchJobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem("jobSearchApplications", JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("jobSearchUserProfile", JSON.stringify(userProfile));
    }
  }, [userProfile]);

  // Job CRUD operations
  const addJob = (jobData: Omit<Job, "id" | "createdAt" | "postedBy">) => {
    const newJob: Job = {
      ...jobData,
      id: `job-${Date.now()}`,
      createdAt: new Date().toISOString(),
      postedBy: "admin-1", // In a real app, this would be from auth context
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const updateJob = (updatedJob: Job) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  const deleteJob = (id: string) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    // Also delete associated applications
    setApplications((prevApps) => prevApps.filter((app) => app.jobId !== id));
  };

  // Application operations
  const applyForJob = (
    jobId: string,
    applicationData: Omit<Application, "id" | "jobId" | "status" | "appliedAt">
  ) => {
    const newApplication: Application = {
      ...applicationData,
      id: `app-${Date.now()}`,
      jobId,
      status: "pending",
      appliedAt: new Date().toISOString(),
    };
    setApplications((prevApps) => [...prevApps, newApplication]);
  };

  const updateApplication = (updatedApplication: Application) => {
    setApplications((prevApps) =>
      prevApps.map((app) =>
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
  };

  // Profile operations
  const updateUserProfile = (profileData: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      if (!prev) return null;
      return { ...prev, ...profileData };
    });
  };

  // Utility functions
  const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
  };

  const getApplicationsForJob = (jobId: string) => {
    return applications.filter((app) => app.jobId === jobId);
  };

  const getUserApplications = (userId: string) => {
    return applications.filter((app) => app.userId === userId);
  };

  const value = {
    jobs,
    applications,
    userProfile,
    addJob,
    updateJob,
    deleteJob,
    applyForJob,
    updateApplication,
    updateUserProfile,
    getJobById,
    getApplicationsForJob,
    getUserApplications,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
