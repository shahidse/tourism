"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  // Container variants for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* LEFT — Contact Information */}
      <motion.div
        className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 p-8"
        variants={fadeUpVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          We’re always available to help you plan the perfect trip.  
          Contact us through any channel below.
        </p>

        <motion.div className="space-y-6" variants={containerVariants}>
          {[
            {
              icon: <MessageCircle />,
              bg: "bg-green-500/90",
              title: "WhatsApp",
              content: <a href="https://wa.me/000000000000" target="_blank" className="text-blue-600 hover:underline">+00 000 000 0000</a>
            },
            {
              icon: <Phone />,
              bg: "bg-blue-500/90",
              title: "Phone",
              content: "+00 111 222 3333"
            },
            {
              icon: <Mail />,
              bg: "bg-orange-500/90",
              title: "Email",
              content: <a href="mailto:info@bestandbest.com" className="text-blue-600 hover:underline">info@bestandbest.com</a>
            },
            {
              icon: <MapPin />,
              bg: "bg-purple-500/90",
              title: "Office Location",
              content: "Rome, Italy"
            },
            {
              icon: <Clock />,
              bg: "bg-gray-700/90",
              title: "Working Hours",
              content: "Mon–Sun: 8:00 AM – 10:00 PM"
            }
          ].map((item, i) => (
            <motion.div key={i} className="flex items-center gap-4" variants={fadeUpVariants}>
              <motion.div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg} text-white shadow`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <div className="text-gray-700">{item.content}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — Contact Form */}
      <motion.div
        className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 p-8"
        variants={fadeUpVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>

        <motion.form className="space-y-6" variants={containerVariants}>
          {[
            { IconComponent: User, type: "text", placeholder: "Full Name", required: true },
            { IconComponent: Mail, type: "email", placeholder: "Email Address", required: true },
            { IconComponent: Phone, type: "tel", placeholder: "Phone Number (Optional)", required: false },
          ].map((field, i) => (
            <motion.div key={i} className="relative" variants={fadeUpVariants}>
              <field.IconComponent className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                type={field.type}
                className="peer w-full pl-12 p-4 bg-white/40 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder=" "
                required={field.required}
              />
              <label className="absolute left-12 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
                {field.placeholder}
              </label>
            </motion.div>
          ))}

          <motion.div className="relative" variants={fadeUpVariants}>
            <MessageSquare className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
            <textarea
              rows={4}
              className="peer w-full pl-12 p-4 bg-white/40 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              placeholder=" "
              required
            ></textarea>
            <label className="absolute left-12 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
              Your Message
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
