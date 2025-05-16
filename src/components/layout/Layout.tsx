import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SidebarWrapper from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import BackgroundElements from "./BackgroundElements";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundElements />
      <Navbar />

      {isAuthenticated && isMobile ? (
        <SidebarWrapper>
          <div className="flex-grow flex flex-col min-h-[calc(100vh-64px)]">
            {/* Removed SidebarTrigger from here */}
            <div className="flex-grow p-4">{children}</div>
            <Footer />
          </div>
        </SidebarWrapper>
      ) : (
        <>
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
