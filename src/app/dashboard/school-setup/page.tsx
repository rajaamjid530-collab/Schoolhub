"use client";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SchoolSetupPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [schoolName, setSchoolName] = useState("");
  const [board, setBoard] = useState("FBISE");

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    try {
      await setDoc(doc(db, "schools", user.uid), {
        name: schoolName,
        board,
        adminEmail: user.email,
        createdAt: new Date(),
      });
      await setDoc(doc(db, "users", user.uid), { schoolId: user.uid }, { merge: true });
      toast.success("School registered! Redirecting...");
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6">Register Your School</h1>
      <form onSubmit={handleSetup}>
        <label className="block mb-2 font-medium">School Name</label>
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg mb-4"
          required
        />
        <label className="block mb-2 font-medium">Education Board</label>
        <select
          value={board}
          onChange={(e) => setBoard(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg mb-6"
        >
          <option>FBISE</option>
          <option>Cambridge</option>
          <option>BISE Lahore</option>
          <option>Other</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
