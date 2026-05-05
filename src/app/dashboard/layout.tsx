"use client";  // Client-side

useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    router.push("/login");
  }
}, []);
