import Sidebar from "@/components/layout/sidebar";

import { isAuthenticated } from '@/auth/auth'
import { redirect } from "next/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }
  
  return (
    <div className="h-full">
      <div className="flex h-full overflow-hidden max-h-screen">
        <Sidebar className="w-64 hidden md:block" />
        <main className="flex-1 overflow-x-hidden h-full pl-1">
          {children}
        </main>
      </div>
    </div>
  );
}