import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export type Role = "super_admin" | "school_admin" | "teacher" | "student" | "parent";

export interface AuthUser {
  uid: string;
  email: string | null;
  role: Role;
  schoolId?: string;
}

export const getCurrentUser = (): Promise<AuthUser | null> =>
  new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      unsub();
      if (!user) return resolve(null);
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        const data = snap.data();
        resolve({
          uid: user.uid,
          email: user.email,
          role: data.role,
          schoolId: data.schoolId,
        });
      } else {
        resolve(null);
      }
    });
  });
