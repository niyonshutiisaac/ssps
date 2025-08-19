"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen 
                        bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black 
                        pt-28 px-4">
      
      {/* Heading with gradient animation */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold leading-tight 
                   bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 
                   bg-clip-text text-transparent animate-gradient"
      >
        We are here to Serve <br /> Your School.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        First Smart School Permission System in Rwanda come for Change.(Coming Soon)
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
      >
        <a
          href="#get-started"
          className="px-8 py-3 rounded-full text-lg font-semibold
                     bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                     shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}
