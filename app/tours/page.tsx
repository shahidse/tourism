"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TourCard from "@/components/TourCard";
import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";

export default function ToursPageClient() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tours from API
  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load tours.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours(); // initial load
    const interval = setInterval(fetchTours, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto h-full">
      <SectionTitle title="All Tours" subtitle="" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {tours.map((tour: any) => (
            <motion.div
              key={tour.id}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.4 } }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
