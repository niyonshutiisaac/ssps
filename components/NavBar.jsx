"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl px-6 py-3 rounded-2xl 
                   bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-lg border border-white/30 
                   dark:border-gray-800 flex items-center justify-between z-50">
      
      {/* Logo */}
      <div className="text-xl font-bold text-black dark:text-white">
        SSPS
      </div>

      {/* Links */}
      <div className="flex space-x-6 text-black dark:text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}
