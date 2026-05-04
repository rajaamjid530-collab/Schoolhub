import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Welcome to Kashmir School Hub
      </h1>
      <p className="text-gray-500 mb-2">{user?.email}</p>
      <p className="text-gray-500 mb-8">Role: {user?.role}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Schools" value="12" color="indigo" />
        <DashboardCard title="Active Students" value="3,400" color="green" />
        <DashboardCard title="Teachers" value="210" color="yellow" />
      </div>
    </div>
  );
}

function DashboardCard({ title, value, color }: any) {
  const colors: any = {
    indigo: "border-l-indigo-500",
    green: "border-l-green-500",
    yellow: "border-l-yellow-500",
  };
  return (
    <div className={`bg-white p-6 rounded-xl shadow border-l-4 ${colors[color]}`}>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
