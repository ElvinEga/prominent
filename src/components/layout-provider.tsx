"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./dashboard-sidebar";

interface LayoutProviderProps {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname();
  const isDashbaordPage = pathname.startsWith("/dashboard");

  return (
    <div className="relative flex min-h-screen flex-col">
      {!isDashbaordPage && (
        <div className="page-wrapper relative z-[1] bg-white">
          <main className="main-wrapper relative overflow-hidden">
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-2">
                <div className="min-h-screen bg-white">{children}</div>
              </div>
            </div>
          </main>
        </div>
      )}
      {isDashbaordPage && (
        <SidebarProvider>
          <div className="relative flex min-h-screen w-full ">
            <DashboardSidebar />
            <main className="flex-1 p-6 h-screen overflow-auto">
              {children}
            </main>
          </div>
        </SidebarProvider>
      )}
    </div>
  );
}
