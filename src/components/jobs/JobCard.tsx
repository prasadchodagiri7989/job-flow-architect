
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "../../contexts/JobContext";
import { useAuth } from "../../contexts/AuthContext";
import { Briefcase, Wrench, PaintRoller, Building } from "lucide-react";

interface JobCardProps {
  job: Job;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (job: Job) => void;
}

// Helper function to determine which icon to use based on job tags
const getJobIcon = (tags: string[]) => {
  const lowerTags = tags.map(t => t.toLowerCase());
  
  if (lowerTags.some(t => t.includes('plumb') || t.includes('electric') || t.includes('hvac') || t.includes('repair'))) {
    return <Wrench className="h-5 w-5 text-job-primary" />;
  } else if (lowerTags.some(t => t.includes('paint') || t.includes('tile') || t.includes('carpentry'))) {
    return <PaintRoller className="h-5 w-5 text-job-primary" />;
  } else if (lowerTags.some(t => t.includes('commercial') || t.includes('residential'))) {
    return <Building className="h-5 w-5 text-job-primary" />;
  }
  
  // Default icon
  return <Briefcase className="h-5 w-5 text-job-primary" />;
};

const JobCard: React.FC<JobCardProps> = ({ job, isAdmin, onDelete, onEdit }) => {
  const { isAuthenticated } = useAuth();
  const postedDate = new Date(job.createdAt);
  const daysAgo = Math.floor((Date.now() - postedDate.getTime()) / (1000 * 3600 * 24));

  return (
    <Card className="job-card border border-gray-200 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-job-primary">
              <Link to={`/jobs/${job.id}`}>{job.title}</Link>
            </h3>
            <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
          </div>
          <div className="bg-job-light p-2 rounded-full">
            {getJobIcon(job.tags)}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{job.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mt-3 mb-2">
          {job.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="bg-job-light text-job-primary text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 4 && (
            <span className="text-xs text-gray-500">+{job.tags.length - 4}</span>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-job-primary font-semibold">{job.salary}</span>
          <span className="text-xs text-gray-500">
            {daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo} days ago`}
          </span>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 px-6 py-4">
        {isAdmin ? (
          <div className="flex gap-3 w-full">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onEdit && onEdit(job)}
            >
              Edit
            </Button>
            <Button 
              variant="destructive" 
              className="flex-1"
              onClick={() => onDelete && onDelete(job.id)}
            >
              Delete
            </Button>
          </div>
        ) : (
          <Link to={`/jobs/${job.id}`} className="w-full">
            <Button className="w-full bg-job-primary hover:bg-job-secondary">
              {isAuthenticated ? "View Details" : "Apply Now"}
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
