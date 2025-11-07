// src/app/(admin)/admin/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, FileText, Settings, LogOut } from "lucide-react";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const title = (() => {
    const child = children as any;
    return child?.type?.displayName || child?.type?.name || "Dashboard";
  })();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Molale Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <SidebarLink href="/admin/courses/list" icon={<Package className="w-5 h-5" />}>
            Courses
          </SidebarLink>
          <SidebarLink href="/admin/applications" icon={<FileText className="w-5 h-5" />}>
            Applications
          </SidebarLink>
          <SidebarLink href="/admin/settings" icon={<Settings className="w-5 h-5" />}>
            Settings
          </SidebarLink>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <form action="/api/admin/logout" method="post">
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </form>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">admin@molale.co.za</span>
              <div className="w-8 h-8 rounded-full bg-(--color-primary) flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, children, icon }: { href: string; children: ReactNode; icon: ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100">
      {icon}
      <span className="font-medium">{children}</span>
    </Link>
  );
}