import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // assuming you have currentUser here

// Types
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

interface JobContextType {
  jobs: Job[];
  applications: Application[];
  userProfile: UserProfile | null;
  addJob: (job: Omit<Job, "id" | "createdAt" | "postedBy">) => Promise<void>;
  updateJob: (job: Job) => Promise<void>;
  deleteJob: (id: string) => Promise<void>;
  applyForJob: (jobId: string, app: Omit<Application, "id" | "jobId" | "status" | "appliedAt">) => Promise<void>;
  updateApplication: (app: Application) => Promise<void>;
  updateUserProfile: (profile: Partial<UserProfile>) => Promise<void>;
  getJobById: (id: string) => Job | undefined;
  getApplicationsForJob: (jobId: string) => Application[];
  getUserApplications: (userId: string) => Application[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Main Provider
export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const API = import.meta.env.VITE_API_BASE_URL;

useEffect(() => {
  const loadData = async () => {
    try {
      // Always fetch jobs, no matter if user is signed in or not
      const jobRes = await axios.get(`${API}/jobs`);
      const normalizedJobs = jobRes.data.map((job: any) => ({
        ...job,
        id: job._id,
      }));
      setJobs(normalizedJobs);

      // Only fetch applications and profile if user is logged in
      if (currentUser) {
        const [appRes, profileRes] = await Promise.all([
          currentUser.role === 'admin'
            ? axios.get(`${API}/applications`)
            : axios.get(`${API}/applications/user/${currentUser.id}`),
          axios.get(`${API}/users/${currentUser.id}`)
        ]);

        const normalizedApps = appRes.data.map((app: any) => ({
          ...app,
          id: app._id,
        }));

        const normalizedProfile = {
          ...profileRes.data,
          id: profileRes.data._id,
        };

        setApplications(normalizedApps);
        setUserProfile(normalizedProfile);
      }
    } catch (error) {
      console.error("Error loading job context:", error);
    }
  };

  loadData();
}, [currentUser]);


  // CRUD Actions
  const addJob = async (job: Omit<Job, "id" | "createdAt" | "postedBy">) => {
    const res = await axios.post(`${API}/jobs`, { ...job, postedBy: currentUser?.id });
    setJobs((prev) => [...prev, res.data]);
  };

  const updateJob = async (job: Job) => {
    const res = await axios.put(`${API}/jobs/${job.id}`, job);
    setJobs((prev) => prev.map((j) => (j.id === job.id ? res.data : j)));
  };

  const deleteJob = async (id: string) => {
    await axios.delete(`${API}/jobs/${id}`);
    setJobs((prev) => prev.filter((j) => j.id !== id));
    setApplications((prev) => prev.filter((a) => a.jobId !== id));
  };

  const applyForJob = async (
    jobId: string,
    application: Omit<Application, "id" | "jobId" | "status" | "appliedAt">
  ) => {
    const res = await axios.post(`${API}/applications`, {
      ...application,
      jobId,
      userId: currentUser?.id
    });
    setApplications((prev) => [...prev, res.data]);
  };

  const updateApplication = async (application: Application) => {
    const res = await axios.put(`${API}/applications/${application.id}`, application);
    setApplications((prev) =>
      prev.map((a) => (a.id === application.id ? res.data : a))
    );
  };

const updateUserProfile = async (data: Partial<UserProfile>) => {
  const res = await axios.put(`${API}/users/${currentUser?.id}`, data);
  setUserProfile(res.data);
};


  const getJobById = (id: string) => jobs.find((j) => j.id === id);
  const getApplicationsForJob = (jobId: string) => applications.filter((a) => a.jobId === jobId);
  const getUserApplications = (userId: string) => applications.filter((a) => a.userId === userId);

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
    getUserApplications
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

// Hook
export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobs must be used within a JobProvider");
  return context;
};
