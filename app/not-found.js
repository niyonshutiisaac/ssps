"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="relative w-full max-w-md p-10 rounded-3xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-gray-700 shadow-lg text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-4 animate-gradient">
          404
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Oops! Page Not Found
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg transition-transform"
          >
            Go Home
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
