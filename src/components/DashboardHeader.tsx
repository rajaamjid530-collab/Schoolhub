"use client";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Signed out");
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        {user?.role === "super_admin" ? "Admin Panel" : "School Management"}
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
