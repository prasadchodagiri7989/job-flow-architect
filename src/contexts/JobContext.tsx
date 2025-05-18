
import React, { createContext, useState, useContext } from "react";

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

// Sample data
const sampleJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior React Developer",
    company: "Tech Innovations Inc.",
    description: `We are looking for a Senior React Developer to join our dynamic team. The ideal candidate will have extensive experience with React, Redux, and modern JavaScript practices.

Requirements:
- 5+ years of experience with React and its ecosystem
- Strong understanding of state management with Redux or similar libraries
- Experience with RESTful APIs and GraphQL
- Knowledge of testing frameworks such as Jest and React Testing Library
- Familiarity with CI/CD pipelines

Benefits:
- Competitive salary and benefits package
- Remote work options
- Professional development opportunities
- Collaborative and innovative work environment`,
    shortDescription: "Join our team to build cutting-edge web applications using React and modern JavaScript.",
    location: "San Francisco, CA (Remote)",
    salary: "$130,000 - $160,000",
    tags: ["React", "JavaScript", "Redux", "Full-time", "Senior"],
    createdAt: "2025-05-01T12:00:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-2",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    description: `Creative Solutions is seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients.

Key Responsibilities:
- Create user-centered designs by understanding business requirements
- Illustrate design ideas using storyboards, process flows, and sitemaps
- Design graphic user interface elements, like menus, tabs, and widgets
- Develop UI mockups and prototypes that clearly illustrate how sites function and look
- Conduct usability testing to ensure optimal user experiences

Requirements:
- 3+ years of experience in UX/UI design
- Proficiency with design tools like Figma, Sketch, or Adobe XD
- Portfolio demonstrating strong design skills
- Understanding of basic front-end development (HTML, CSS)`,
    shortDescription: "Design beautiful and intuitive user interfaces for web and mobile applications.",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    tags: ["Design", "UX", "UI", "Figma", "Full-time"],
    createdAt: "2025-05-02T10:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-3",
    title: "Data Scientist",
    company: "DataMetrics",
    description: `Join our data science team to solve complex problems using machine learning and statistical analysis.

Key Responsibilities:
- Develop machine learning models to solve business problems
- Process, cleanse, and verify the integrity of data used for analysis
- Create and maintain optimal data pipeline architecture
- Conduct data mining using state-of-the-art methods
- Collaborate with other teams to implement models and monitor outcomes

Requirements:
- MS or PhD in Computer Science, Statistics, or related field
- Experience with Python, R, and SQL
- Knowledge of machine learning frameworks (e.g., TensorFlow, PyTorch)
- Experience with data visualization tools
- Strong problem-solving and analytical skills`,
    shortDescription: "Apply machine learning and statistical analysis to solve complex business problems.",
    location: "Boston, MA (Hybrid)",
    salary: "$120,000 - $150,000",
    tags: ["Data Science", "Machine Learning", "Python", "Full-time"],
    createdAt: "2025-05-03T08:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-4",
    title: "DevOps Engineer",
    company: "CloudNative Systems",
    description: `CloudNative Systems is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure.

Key Responsibilities:
- Design, implement and manage CI/CD pipelines
- Implement and optimize cloud infrastructure on AWS/Azure/GCP
- Deploy and manage containerized applications using Docker and Kubernetes
- Monitor systems and applications for performance and security
- Collaborate with development teams to improve delivery workflow

Requirements:
- 3+ years of experience in DevOps or SRE roles
- Strong knowledge of cloud platforms (AWS, Azure, or GCP)
- Experience with container orchestration (Kubernetes, Docker Swarm)
- Proficiency in scripting languages (Python, Bash)
- Knowledge of infrastructure as code tools (Terraform, CloudFormation)`,
    shortDescription: "Build and maintain cloud infrastructure for scalable, reliable applications.",
    location: "Austin, TX (Remote)",
    salary: "$110,000 - $140,000",
    tags: ["DevOps", "Cloud", "Kubernetes", "Full-time"],
    createdAt: "2025-05-04T14:20:00Z",
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
  location: "New York, NY",
  bio: "Software developer with 5 years of experience in web technologies.",
  skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS"],
  experience: [
    {
      id: "exp-1",
      company: "Tech Company",
      position: "Frontend Developer",
      startDate: "2022-01",
      isCurrent: true,
      description: "Developing and maintaining web applications using React and TypeScript."
    },
    {
      id: "exp-2",
      company: "Digital Agency",
      position: "Web Developer",
      startDate: "2020-03",
      endDate: "2021-12",
      description: "Built responsive websites using modern JavaScript frameworks."
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of Technology",
      degree: "Bachelor's",
      field: "Computer Science",
      startDate: "2016",
      endDate: "2020",
      description: "Focused on software engineering and web technologies."
    }
  ]
};

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state with sample data directly (no localStorage)
  const [jobs, setJobs] = useState<Job[]>(sampleJobs);
  const [applications, setApplications] = useState<Application[]>(sampleApplications);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(sampleUserProfile);

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
