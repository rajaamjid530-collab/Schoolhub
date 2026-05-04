"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  icon: string;
}

const menuMap: Record<string, MenuItem[]> = {
  super_admin: [
    { label: "Dashboard", href: "/dashboard", icon: "🏠" },
    { label: "Schools", href: "/dashboard/schools", icon: "🏫" },
  ],
  school_admin: [
    { label: "Dashboard", href: "/dashboard", icon: "🏠" },
    { label: "Admissions", href: "/dashboard/admissions", icon: "📝" },
    { label: "Students", href: "/dashboard/students", icon: "👨‍🎓" },
    { label: "Staff", href: "/dashboard/staff", icon: "👩‍🏫" },
    { label: "Classes", href: "/dashboard/classes", icon: "📚" },
    { label: "Attendance", href: "/dashboard/attendance", icon: "📅" },
    { label: "Fees", href: "/dashboard/fees", icon: "💰" },
    { label: "Exams", href: "/dashboard/exams", icon: "📄" },
    { label: "Library", href: "/dashboard/library", icon: "📖" },
    { label: "Transport", href: "/dashboard/transport", icon: "🚌" },
    { label: "Hostel", href: "/dashboard/hostel", icon: "🏨" },
    { label: "Reports", href: "/dashboard/reports", icon: "📊" },
  ],
};

export default function Sidebar() {
  const { user } = useAuth();
  const pathname = usePathname();
  if (!user) return null;

  const items = menuMap[user.role] || [];

  return (
    <aside className="w-64 bg-white shadow-lg p-4 flex-shrink-0">
      <div className="text-2xl font-bold text-indigo-600 mb-8">
        Kashmir Sch Hub
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              pathname === item.href
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-700 hover:bg-indigo-50"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
