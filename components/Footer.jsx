"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full mt-10 bg-white/10 backdrop-blur-lg shadow-lg border-t border-white/20 py-6 flex justify-center items-center"
    >
      <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
        Developed By Niyonshuti Isaac
      </p>
    </motion.footer>
  );
}
