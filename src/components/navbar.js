// components/BlurredNavbar.tsx
"use client"; // Required for using hooks and client-side effects

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoOld } from "./logo-old";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="border-muted fixed top-4 left-1/2 z-[999] container w-full max-w-7xl -translate-x-1/2 rounded-md bg-white/10 px-8 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="flex h-16 items-center justify-between">
        <LogoOld className="h-8 w-auto" />

        <div className="flex items-center space-x-4">
          <Button asChild>
            <a
              href="https://lu.ma/np9nffys"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Ticket
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
