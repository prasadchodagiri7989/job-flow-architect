
import { Experience, Education, UserProfile } from "../contexts/JobContext";

// Simple resume builder
export const generateResumeFromProfile = (profile: UserProfile): string => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const experienceSection = profile.experience
    .map(job => (
      `<div class="mb-4">
        <h3 class="text-lg font-bold">${job.position}</h3>
        <div class="flex justify-between">
          <p class="text-md font-medium">${job.company}</p>
          <p class="text-sm text-gray-600">
            ${formatDate(job.startDate)} - ${job.isCurrent ? 'Present' : formatDate(job.endDate)}
          </p>
        </div>
        <p class="text-sm mt-1">${job.description}</p>
      </div>`
    ))
    .join('');

  const educationSection = profile.education
    .map(edu => (
      `<div class="mb-4">
        <h3 class="text-lg font-bold">${edu.degree} in ${edu.field}</h3>
        <div class="flex justify-between">
          <p class="text-md font-medium">${edu.institution}</p>
          <p class="text-sm text-gray-600">
            ${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}
          </p>
        </div>
        ${edu.description ? `<p class="text-sm mt-1">${edu.description}</p>` : ''}
      </div>`
    ))
    .join('');

  const skillsSection = profile.skills
    .map(skill => `<span class="bg-gray-200 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">${skill}</span>`)
    .join('');

  const resumeHtml = `
    <div class="max-w-3xl mx-auto p-8 bg-white resume-container">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold">${profile.name}</h1>
        <p class="text-lg text-gray-600">${profile.location || ''}</p>
        <div class="flex justify-center gap-4 mt-2">
          <p>${profile.email}</p>
          ${profile.phone ? `<p>${profile.phone}</p>` : ''}
        </div>
      </div>

      ${profile.bio ? `
        <div class="resume-section">
          <h2 class="text-xl font-bold mb-2">Professional Summary</h2>
          <p>${profile.bio}</p>
        </div>
      ` : ''}

      <div class="resume-section">
        <h2 class="text-xl font-bold mb-3">Experience</h2>
        ${experienceSection}
      </div>

      <div class="resume-section">
        <h2 class="text-xl font-bold mb-3">Education</h2>
        ${educationSection}
      </div>

      <div>
        <h2 class="text-xl font-bold mb-3">Skills</h2>
        <div class="flex flex-wrap gap-2">
          ${skillsSection}
        </div>
      </div>
    </div>
  `;

  return resumeHtml;
};

export const saveResumeToPdf = async (resumeHtml: string, fileName: string = 'resume'): Promise<Blob> => {
  // In a real app, this would use a library like jsPDF or a server endpoint
  // For demo purposes, we'll just return the HTML as a blob
  
  // Full HTML document with styling
  const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resume</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .resume-container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .resume-section { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
        .resume-section:last-child { border-bottom: none; }
      </style>
    </head>
    <body>
      ${resumeHtml}
    </body>
    </html>
  `;
  
  const blob = new Blob([fullHtml], { type: 'application/pdf' });
  return blob;
};
