
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useJobs, UserProfile } from "../contexts/JobContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { generateResumeFromProfile, saveResumeToPdf } from "../services/resumeService";
import { FileText, Download, Edit, Eye } from "lucide-react";

const ResumeBuilder: React.FC = () => {
  const { userProfile, updateUserProfile } = useJobs();
  const [mode, setMode] = useState<"edit" | "preview">("preview");
  const [resumeHtml, setResumeHtml] = useState<string>("");

  React.useEffect(() => {
    if (userProfile) {
      const html = generateResumeFromProfile(userProfile);
      setResumeHtml(html);
    }
  }, [userProfile]);

  const handlePreview = () => {
    if (userProfile) {
      const html = generateResumeFromProfile(userProfile);
      setResumeHtml(html);
      setMode("preview");
      toast.success("Resume preview generated!");
    }
  };

  const handleDownload = async () => {
    if (!resumeHtml) return;
    
    try {
      const pdfBlob = await saveResumeToPdf(resumeHtml, `${userProfile?.name.replace(/\s+/g, "-")}-resume`);
      
      // Create a download link
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${userProfile?.name.replace(/\s+/g, "-")}-resume.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download resume. Please try again.");
    }
  };

  if (!userProfile) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
          <p>Please log in to access the resume builder.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Resume Builder</h1>
            <p className="text-gray-600 mt-1">
              Generate a professional resume based on your profile information
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setMode(mode === "edit" ? "preview" : "edit")}
            >
              {mode === "edit" ? (
                <>
                  <Eye className="h-4 w-4" /> Preview
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4" /> Edit Profile
                </>
              )}
            </Button>
            <Button 
              className="gap-2 bg-job-primary hover:bg-job-secondary"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>

        {mode === "preview" ? (
          <Card className="border shadow-lg my-4 max-w-4xl mx-auto">
            <CardContent className="p-0">
              {resumeHtml ? (
                <div 
                  className="p-8 resume-container" 
                  dangerouslySetInnerHTML={{ __html: resumeHtml }}
                />
              ) : (
                <div className="p-8 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">
                    No resume content available. Please update your profile.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-xl font-bold mb-4">Resume Tips</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-job-light text-job-primary rounded-full w-5 h-5 flex items-center justify-center text-sm mr-2 mt-0.5">1</span>
                  <span>Complete your profile information for a comprehensive resume</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-job-light text-job-primary rounded-full w-5 h-5 flex items-center justify-center text-sm mr-2 mt-0.5">2</span>
                  <span>Add multiple work experiences to showcase your career growth</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-job-light text-job-primary rounded-full w-5 h-5 flex items-center justify-center text-sm mr-2 mt-0.5">3</span>
                  <span>Include relevant skills that match the jobs you're applying for</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-job-light text-job-primary rounded-full w-5 h-5 flex items-center justify-center text-sm mr-2 mt-0.5">4</span>
                  <span>Write a concise professional summary that highlights your strengths</span>
                </li>
              </ul>
            </div>
            
            <p className="mb-4 text-center">
              <Button onClick={() => {
                handlePreview();
                setMode("preview");
              }}>
                Generate Resume Preview
              </Button>
              <span className="block text-sm text-gray-500 mt-2">
                Update your profile to enhance your resume
              </span>
            </p>
            
            <iframe 
              src="/profile"
              title="Profile Editor" 
              className="w-full h-[800px] border-0 rounded-lg shadow-sm"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ResumeBuilder;
