"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://lu.ma/np9nffys";
    }, 3000);
  }, []);

  return (
    <main className="flex h-[82svh] flex-col items-center justify-center">
      <h1>Redirecting to Luma...</h1>
    </main>
  );
};

export default Page;
