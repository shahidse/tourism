"use client";
import { motion } from "framer-motion";

export default function FloatingContact() {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Individual button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } },
    hover: { scale: 1.15, rotate: [0, 5, -5, 0], transition: { duration: 0.4 } },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/000000000000${process.env.NEXT_PUBLIC_WHATSAPP}`} // replace with your number
        target="_blank"
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      </motion.a>

      {/* Message */}
      <motion.a
        href="/contact"
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src="/icons/message.svg" alt="Message" className="w-7 h-7" />
      </motion.a>
    </motion.div>
  );
}
