"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">bestandbest</h2>
          <p className="text-gray-400">
            Discover Rome with premium tours and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/tours" className="hover:text-white transition">Tours</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" /> Rome, Italy
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" /> +00 111 222 3333
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500" /> info@bestandbest.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition"><Facebook className="w-6 h-6"/></Link>
            <Link href="#" className="hover:text-white transition"><Instagram className="w-6 h-6"/></Link>
            <Link href="#" className="hover:text-white transition"><Twitter className="w-6 h-6"/></Link>
            <Link href="#" className="hover:text-white transition"><Linkedin className="w-6 h-6"/></Link>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} bestandbest. All rights reserved.
      </div>
    </footer>
  );
}
