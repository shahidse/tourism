"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroShortBookingForm() {
    const [form, setForm] = useState({ name: "", phone: "", tourType: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/book-tour", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed to submit");
            setMessage("Thank you! We'll contact you soon.");
            setForm({ name: "", phone: "", tourType: "" });
        } catch {
            setMessage("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-2 items-center justify-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md  mx-auto z-10 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-gray-800"
                variants={itemVariants}
            />
            <motion.input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-gray-800"
                variants={itemVariants}
            />
            <motion.select
                name="tourType"
                value={form.tourType}
                onChange={handleChange}
                required
                className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-gray-800"
                variants={itemVariants}
            >
                <option value="">Tour Type</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Relax">Relax</option>
            </motion.select>
            <motion.button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                variants={itemVariants}
            >
                {loading ? "Booking..." : "Book Now"}
            </motion.button>
            {message && <p className="mt-2 text-green-600 text-sm">{message}</p>}
        </motion.form>
    );
}
