import AppHeader from "@/components/app-header";
import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            {children}
            </div>
          </div>
        </div>
          {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-4"></div> */}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default RootLayout;
