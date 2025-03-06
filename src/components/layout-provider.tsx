"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
            <div className="flex-1 flex flex-col">
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-background px-6">
                <SidebarTrigger className="lg:hidden" />
                <div className="w-full flex-1">
                  <h1 className="font-semibold text-lg">Prominent Australia</h1>
                </div>
              </header>
              <main className="flex-1 p-6 h-screen overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      )}
    </div>
  );
}
