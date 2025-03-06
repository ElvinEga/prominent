"use client";

import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Home,
  Settings,
  LogOut,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const routes = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      title: "Products",
      icon: Package,
      href: "/dashboard/products",
      isActive: pathname === "/products",
    },
    {
      title: "Contacts",
      icon: Users,
      href: "/dashboard/contacts",
      isActive: pathname === "/contacts",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      href: "/dashboard/orders",
      isActive: pathname === "/orders",
    },
  ];

  async function handleLogout() {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setUserName(null); // Clear username on logout
        router.push("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xl font-bold text-primary">
            Prominent Australia
          </span>
        </div>
        <div className="px-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <SidebarInput
              type="search"
              placeholder="Search..."
              className="pl-8"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-4">
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={route.isActive}>
                <Link href={route.href}>
                  <route.icon className="h-4 w-4" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant={"ghost"} onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
      <SidebarTrigger />
    </Sidebar>
  );
}
