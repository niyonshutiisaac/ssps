"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Optional: auto-close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white/20 dark:bg-black/40 backdrop-blur-xl rounded-2xl 
                       p-8 w-[90%] max-w-md text-center shadow-xl border border-white/30"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
              🚧 Coming Soon
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This site is still under development. Exciting updates are on the way!
            </p>

            {/* CTA */}
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                         text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Got It
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
