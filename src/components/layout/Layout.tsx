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
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </SidebarWrapper>
      ) : (
        <>
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}

      {/* Floating WhatsApp & Instagram Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918688053307"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M16.002 2.933c-7.317 0-13.272 5.955-13.272 13.273 0 2.34.61 4.623 1.769 6.641l-1.922 7.051 7.22-1.888a13.173 13.173 0 0 0 6.205 1.556h.001c7.317 0 13.272-5.956 13.272-13.273 0-3.548-1.381-6.883-3.89-9.392-2.509-2.509-5.844-3.888-9.383-3.888zm0 1.994c2.905 0 5.635 1.132 7.691 3.188a10.783 10.783 0 0 1 3.189 7.692c0 5.984-4.896 10.881-10.881 10.881a10.2 10.2 0 0 1-5.02-1.309l-.36-.211-4.296 1.123 1.143-4.195-.231-.371a10.832 10.832 0 0 1-1.618-5.917c0-5.984 4.896-10.881 10.882-10.881zm-2.542 5.213c-.212-.472-.438-.48-.644-.487l-.55-.01a1.053 1.053 0 0 0-.762.356c-.262.287-.999.976-.999 2.38s1.022 2.757 1.165 2.947c.143.19 2.019 3.17 4.943 4.316 2.451.97 2.951.777 3.481.728.53-.049 1.718-.703 1.962-1.381.243-.678.243-1.26.17-1.381-.073-.121-.267-.193-.55-.339s-1.618-.797-1.869-.888c-.25-.09-.432-.137-.617.137-.186.272-.71.888-.87 1.07-.159.182-.318.205-.587.068s-1.144-.421-2.18-1.344c-.805-.717-1.348-1.602-1.506-1.873-.159-.272-.017-.418.12-.554.123-.123.272-.318.408-.477.136-.159.181-.272.272-.454.091-.181.045-.34-.022-.478s-.617-1.49-.847-2.042z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/nmhrconsultancyuae?igsh=OXB6aHJxbXQ1OGtk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Layout;
