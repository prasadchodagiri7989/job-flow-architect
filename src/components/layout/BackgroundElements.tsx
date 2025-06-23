
import React from "react";

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Abstract circles */}
      <div className="absolute top-20 right-[5%] w-72 h-72 bg-job-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-job-accent/20 rounded-full blur-3xl"></div>
      
      {/* Grid patterns */}
      <div 
        className="hidden md:block absolute top-1/4 right-[15%] w-72 h-72 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      
      <div 
        className="hidden md:block absolute bottom-1/4 left-[5%] w-64 h-64 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      ></div>

    </div>
  );
};

export default BackgroundElements;
