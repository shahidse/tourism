"use client";

import { motion } from "framer-motion";
import HeroShortBookingForm from "./HeroShortBookingForm";

export default function Hero() {
  // Container for text & button stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Hero image animation
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    },
    float: {
      scale: [1, 1.02, 1], // subtle zoom in/out loop
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden ">
      {/* Animated Hero Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rome-hero.jpg')" }}
        variants={imageVariants}
        initial="hidden"
        animate="float"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-500/20"></div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 px-4 mb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl md:text-6xl font-bold" variants={titleVariants}>
          bestandbest Tourism
        </motion.h1>

        <motion.p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto" variants={textVariants}>
          Your best tours, experiences & guiding services
        </motion.p>

        <motion.a
          href="/tours"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded mt-6 inline-block text-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Explore Tours
        </motion.a>

      </motion.div>

      <HeroShortBookingForm />
    </section>
  );
}
