
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Briefcase,
  LayoutDashboard,
  FileText,
  User,
  Settings,
  LogOut,
  ScrollText,
} from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

export const SidebarWrapper: React.FC<SidebarProps> = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

const AppSidebar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) return null;

  const userMenuItems = [
    {
      title: "Browse Jobs",
      url: "/jobs",
      icon: Briefcase,
    },
    {
      title: "My Profile",
      url: "/profile",
      icon: User,
    },
    {
      title: "My Applications",
      url: "/applications",
      icon: ScrollText,
    },
    {
      title: "Resume Builder",
      url: "/resume-builder",
      icon: FileText,
    },
  ];

  const adminMenuItems = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Jobs",
      url: "/admin/jobs",
      icon: Briefcase,
    },
    {
      title: "Applications",
      url: "/admin/applications",
      icon: ScrollText,
    },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <SidebarComponent variant="sidebar" collapsible="offcanvas">
      <SidebarRail />
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-job-primary" />
          <span className="text-xl font-bold">NM-HR</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname === item.url}
                  tooltip={item.title}
                >
                  <Link to={item.url}>
                    <item.icon className="text-job-primary" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button onClick={() => logout()} className="w-full">
                <LogOut />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default SidebarWrapper;
