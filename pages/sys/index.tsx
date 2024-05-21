// pages/admin/index.js

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    if (!session || session.user.role !== "SYSTEM_ADMIN") {
      router.push("/auth/signin");
    }
  }, [session, status, router]);

  if (
    status === "loading" ||
    !session ||
    session.user.role !== "SYSTEM_ADMIN"
  ) {
    return <div>Loading...</div>; // Show loading or redirect
  }

  return <div>Admin content</div>;
};

export default AdminPage;
