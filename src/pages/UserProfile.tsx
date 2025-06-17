
import React, { useState } from "react";
import { useJobs } from "../contexts/JobContext";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { UserIcon, BookOpen, Briefcase, PlusCircle } from "lucide-react";
import { Experience, Education } from "../contexts/JobContext";

const UserProfile: React.FC = () => {
  const { userProfile, updateUserProfile } = useJobs();

  const [isEditingBasic, setIsEditingBasic] = useState(false);
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
const [formData, setFormData] = useState({
  name: userProfile?.name || "",
  email: userProfile?.email || "",
  phone: userProfile?.phone || "",
  location: userProfile?.location || "",
  bio: userProfile?.bio || "",
  skills: Array.isArray(userProfile?.skills) ? userProfile.skills.join(", ") : "",
});
const experiences = userProfile?.experience || [];
const educationList = userProfile?.education || [];


  const [experienceForm, setExperienceForm] = useState<Partial<Experience>>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    isCurrent: false,
  });

  const [educationForm, setEducationForm] = useState<Partial<Education>>({
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  if (!userProfile) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">User Profile Not Found</h1>
          <p>Please log in to view your profile.</p>
        </div>
      </Layout>
    );
  }

  const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setExperienceForm({ ...experienceForm, [name]: value });
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEducationForm({ ...educationForm, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setExperienceForm({ ...experienceForm, [name]: checked });
  };

  const handleSaveBasic = () => {
    const skills = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);

    updateUserProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      bio: formData.bio,
      skills,
    });

    setIsEditingBasic(false);
    toast.success("Profile updated successfully!");
  };

  const handleAddExperience = () => {
    if (!experienceForm.company || !experienceForm.position || !experienceForm.startDate) {
      toast.error("Please fill required fields");
      return;
    }

    const newExperience = {
      ...experienceForm,
      id: editingExperience?.id || `exp-${Date.now()}`,
    } as Experience;

    const updatedExperiences = editingExperience
      ? userProfile.experience.map((exp) => exp.id === editingExperience.id ? newExperience : exp)
      : [...userProfile.experience, newExperience];

    updateUserProfile({
      experience: updatedExperiences,
    });

    setIsAddingExperience(false);
    setEditingExperience(null);
    setExperienceForm({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      isCurrent: false,
    });
    toast.success(editingExperience ? "Experience updated!" : "Experience added!");
  };

  const handleAddEducation = () => {
    if (!educationForm.institution || !educationForm.degree || !educationForm.field) {
      toast.error("Please fill required fields");
      return;
    }

    const newEducation = {
      ...educationForm,
      id: editingEducation?.id || `edu-${Date.now()}`,
    } as Education;

    const updatedEducation = editingEducation
      ? userProfile.education.map((edu) => edu.id === editingEducation.id ? newEducation : edu)
      : [...userProfile.education, newEducation];

    updateUserProfile({
      education: updatedEducation,
    });

    setIsAddingEducation(false);
    setEditingEducation(null);
    setEducationForm({
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    toast.success(editingEducation ? "Education updated!" : "Education added!");
  };

  const startEditingExperience = (experience: Experience) => {
    setEditingExperience(experience);
    setExperienceForm({
      company: experience.company,
      position: experience.position,
      startDate: experience.startDate,
      endDate: experience.endDate || "",
      description: experience.description,
      isCurrent: experience.isCurrent || false,
    });
    setIsAddingExperience(true);
  };

  const startEditingEducation = (education: Education) => {
    setEditingEducation(education);
    setEducationForm({
      institution: education.institution,
      degree: education.degree,
      field: education.field,
      startDate: education.startDate,
      endDate: education.endDate || "",
      description: education.description || "",
    });
    setIsAddingEducation(true);
  };

  const deleteExperience = (id: string) => {
    const updatedExperiences = userProfile.experience.filter((exp) => exp.id !== id);
    updateUserProfile({
      experience: updatedExperiences,
    });
    toast.success("Experience removed!");
  };

  const deleteEducation = (id: string) => {
    const updatedEducation = userProfile.education.filter((edu) => edu.id !== id);
    updateUserProfile({
      education: updatedEducation,
    });
    toast.success("Education removed!");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/3">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-job-light rounded-full p-4">
                    <UserIcon className="h-10 w-10 text-job-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{userProfile.name}</CardTitle>
                <p className="text-gray-600">{userProfile.location}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Contact Information</h3>
                    <p className="text-sm text-gray-600">{userProfile.email}</p>
                    {userProfile.phone && (
                      <p className="text-sm text-gray-600">{userProfile.phone}</p>
                    )}
                  </div>
                
                </div>
              </CardContent>
            </Card>
          </aside>
          
          <div className="lg:w-2/3">
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile" className="gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card className="border-0 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Personal Information</CardTitle>
                    {!isEditingBasic ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEditingBasic(true)}
                      >
                        Edit
                      </Button>
                    ) : null}
                  </CardHeader>
                  <CardContent>
                    {isEditingBasic ? (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="skills">Skills (comma separated)</Label>
                          <Input
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleBasicChange}
                          />
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button 
                            variant="outline"
                            onClick={() => setIsEditingBasic(false)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleSaveBasic}
                            className="bg-job-primary hover:bg-job-secondary"
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {userProfile.bio && (
                          <div>
                            <h3 className="font-medium mb-2">About Me</h3>
                            <p className="text-gray-700">{userProfile.bio}</p>
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-gray-700">{userProfile.email}</p>
                          </div>
                          {userProfile.phone && (
                            <div>
                              <h3 className="font-medium mb-1">Phone</h3>
                              <p className="text-gray-700">{userProfile.phone}</p>
                            </div>
                          )}
                          {userProfile.location && (
                            <div>
                              <h3 className="font-medium mb-1">Location</h3>
                              <p className="text-gray-700">{userProfile.location}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="experience">
                <Card className="border-0 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Work Experience</CardTitle>
                    {!isAddingExperience && (
                      <Button 
                        onClick={() => setIsAddingExperience(true)}
                        className="gap-2"
                      >
                        <PlusCircle className="h-4 w-4" />
                        Add Experience
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    {isAddingExperience ? (
                      <div className="space-y-4 border-t pt-4 border-gray-100">
                        <h3 className="font-semibold text-lg">
                          {editingExperience ? "Edit Experience" : "Add Work Experience"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="position">Position *</Label>
                            <Input
                              id="position"
                              name="position"
                              value={experienceForm.position}
                              onChange={handleExperienceChange}
                              placeholder="Job Title"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              name="company"
                              value={experienceForm.company}
                              onChange={handleExperienceChange}
                              placeholder="Company Name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="startDate">Start Date *</Label>
                            <Input
                              id="startDate"
                              name="startDate"
                              type="month"
                              value={experienceForm.startDate}
                              onChange={handleExperienceChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="endDate">End Date</Label>
                            <Input
                              id="endDate"
                              name="endDate"
                              type="month"
                              value={experienceForm.endDate}
                              onChange={handleExperienceChange}
                              disabled={experienceForm.isCurrent}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="isCurrent"
                            name="isCurrent"
                            checked={experienceForm.isCurrent}
                            onChange={handleCheckboxChange}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor="isCurrent">I currently work here</Label>
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={experienceForm.description}
                            onChange={handleExperienceChange}
                            placeholder="Describe your responsibilities and achievements"
                          />
                        </div>
                        
                        <div className="flex gap-3 pt-2">
                          <Button 
                            variant="outline"
                            onClick={() => {
                              setIsAddingExperience(false);
                              setEditingExperience(null);
                              setExperienceForm({
                                company: "",
                                position: "",
                                startDate: "",
                                endDate: "",
                                description: "",
                                isCurrent: false,
                              });
                            }}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleAddExperience}
                            className="bg-job-primary hover:bg-job-secondary"
                          >
                            {editingExperience ? "Update Experience" : "Add Experience"}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {userProfile.experience.length === 0 ? (
                          <div className="text-center py-6">
                            <Briefcase className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                            <p className="text-gray-500">No work experience added yet.</p>
                            <Button 
                              onClick={() => setIsAddingExperience(true)}
                              variant="link"
                              className="mt-2"
                            >
                              Add your first experience
                            </Button>
                          </div>
                        ) : (
                          userProfile.experience.map((experience) => (
                            <div 
                              key={experience.id} 
                              className="border-b border-gray-100 last:border-0 pb-5 last:pb-0"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {experience.position}
                                </h3>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => startEditingExperience(experience)}
                                  >
                                    Edit
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => deleteExperience(experience.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                              <p className="text-gray-700">{experience.company}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(experience.startDate).toLocaleDateString("en-US", { 
                                  month: "long", year: "numeric" 
                                })} - {
                                  experience.isCurrent 
                                    ? "Present"
                                    : experience.endDate 
                                      ? new Date(experience.endDate).toLocaleDateString("en-US", { 
                                          month: "long", year: "numeric" 
                                        })
                                      : "Present"
                                }
                              </p>
                              <p className="text-gray-600 mt-2">{experience.description}</p>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="education">
                <Card className="border-0 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Education</CardTitle>
                    {!isAddingEducation && (
                      <Button 
                        onClick={() => setIsAddingEducation(true)}
                        className="gap-2"
                      >
                        <PlusCircle className="h-4 w-4" />
                        Add Education
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    {isAddingEducation ? (
                      <div className="space-y-4 border-t pt-4 border-gray-100">
                        <h3 className="font-semibold text-lg">
                          {editingEducation ? "Edit Education" : "Add Education"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="institution">Institution *</Label>
                            <Input
                              id="institution"
                              name="institution"
                              value={educationForm.institution}
                              onChange={handleEducationChange}
                              placeholder="School or University Name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="degree">Degree *</Label>
                            <Input
                              id="degree"
                              name="degree"
                              value={educationForm.degree}
                              onChange={handleEducationChange}
                              placeholder="e.g. Bachelor's, Master's"
                            />
                          </div>
                          <div>
                            <Label htmlFor="field">Field of Study *</Label>
                            <Input
                              id="field"
                              name="field"
                              value={educationForm.field}
                              onChange={handleEducationChange}
                              placeholder="e.g. Computer Science"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <Label htmlFor="startDate">Start Date</Label>
                              <Input
                                id="startDate"
                                name="startDate"
                                value={educationForm.startDate}
                                onChange={handleEducationChange}
                              />
                            </div>
                            <div>
                              <Label htmlFor="endDate">End Date</Label>
                              <Input
                                id="endDate"
                                name="endDate"
                                value={educationForm.endDate}
                                onChange={handleEducationChange}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={educationForm.description}
                            onChange={handleEducationChange}
                            placeholder="Additional details about your studies"
                          />
                        </div>
                        
                        <div className="flex gap-3 pt-2">
                          <Button 
                            variant="outline"
                            onClick={() => {
                              setIsAddingEducation(false);
                              setEditingEducation(null);
                              setEducationForm({
                                institution: "",
                                degree: "",
                                field: "",
                                startDate: "",
                                endDate: "",
                                description: "",
                              });
                            }}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleAddEducation}
                            className="bg-job-primary hover:bg-job-secondary"
                          >
                            {editingEducation ? "Update Education" : "Add Education"}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {userProfile.education.length === 0 ? (
                          <div className="text-center py-6">
                            <BookOpen className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                            <p className="text-gray-500">No education added yet.</p>
                            <Button 
                              onClick={() => setIsAddingEducation(true)}
                              variant="link"
                              className="mt-2"
                            >
                              Add your first education
                            </Button>
                          </div>
                        ) : (
                          userProfile.education.map((education) => (
                            <div 
                              key={education.id} 
                              className="border-b border-gray-100 last:border-0 pb-5 last:pb-0"
                            >
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-gray-900">
                                  {education.degree} in {education.field}
                                </h3>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => startEditingEducation(education)}
                                  >
                                    Edit
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => deleteEducation(education.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                              <p className="text-gray-700">{education.institution}</p>
                              <p className="text-sm text-gray-500">
                                {education.startDate} - {education.endDate || "Present"}
                              </p>
                              {education.description && (
                                <p className="text-gray-600 mt-2">{education.description}</p>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
