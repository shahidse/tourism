"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TourCard from "@/components/TourCard";
import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";

export default function ToursPageClient() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [locationFilter, setLocationFilter] = useState("All");
  const [featuredFilter, setFeaturedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  // Fetch tours from API
  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load tours.");
      setLoading(false);
    }
  };

  // Available filter options
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(tours.map((t) => t.location)))],
    [tours]
  );

  useEffect(() => {
    fetchTours();
    const interval = setInterval(fetchTours, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  // Apply filters + search
  const filteredTours = tours.filter((tour) => {
    if (locationFilter !== "All" && tour.location !== locationFilter) return false;
    if (featuredFilter !== "All") {
      if (featuredFilter === "Featured" && !tour.featured) return false;
      if (featuredFilter === "Non-Featured" && tour.featured) return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      if (!tour.title.toLowerCase().includes(q) && !tour.description.toLowerCase().includes(q))
        return false;
    }
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTours.length / toursPerPage);
  const displayedTours = filteredTours.slice(
    (currentPage - 1) * toursPerPage,
    currentPage * toursPerPage
  );

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

      {/* Filters + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-6">
        {/* Location Filter */}
        <div>
          <label className="mr-2 font-semibold text-gray-800">Location:</label>
          <select
            className="border rounded px-2 py-1 bg-white text-gray-700"
            value={locationFilter}
            onChange={(e) => {
              setLocationFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Filter */}
        <div>
          <select
            className="border rounded px-2 py-1 bg-white text-gray-700"
            value={featuredFilter}
            onChange={(e) => {
              setFeaturedFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All</option>
            <option value="Featured">Featured</option>
            <option value="Non-Featured">Non-Featured</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="  text-gray-800 bg-white">
          <input
            type="text"
            placeholder="Search tours..."
            className="border rounded px-3 py-1"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Tours Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {displayedTours.map((tour) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === currentPage ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
