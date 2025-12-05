"use client";

import { User, Mail, Phone, MessageSquare, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 py-16">
      
      {/* LEFT — Contact Information */}
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8">
          We’re always available to help you plan the perfect trip.  
          Contact us through any channel below.
        </p>

        <div className="space-y-6">

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/90 text-white shadow">
              <MessageCircle />
            </div>
            <div>
              <p className="font-semibold text-gray-800">WhatsApp</p>
              <a href="https://wa.me/000000000000" target="_blank" className="text-blue-600 hover:underline">
                +00 000 000 0000
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/90 text-white shadow">
              <Phone />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-gray-700">+00 111 222 3333</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/90 text-white shadow">
              <Mail />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <a href="mailto:info@bestandbest.com" className="text-blue-600 hover:underline">
                info@bestandbest.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/90 text-white shadow">
              <MapPin />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Office Location</p>
              <p className="text-gray-700">Rome, Italy</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-700/90 text-white shadow">
              <Clock />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Working Hours</p>
              <p className="text-gray-700">Mon–Sun: 8:00 AM – 10:00 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT — Contact Form */}
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>

        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
            <input
              type="text"
              className="peer w-full pl-12 p-4 bg-white/40 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder=" "
              required
            />
            <label className="absolute left-12 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
            <input
              type="email"
              className="peer w-full pl-12 p-4 bg-white/40 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder=" "
              required
            />
            <label className="absolute left-12 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
              Email Address
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
            <input
              type="tel"
              className="peer w-full pl-12 p-4 bg-white/40 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder=" "
            />
            <label className="absolute left-12 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
              Phone Number (Optional)
            </label>
          </div>

          {/* Message */}
          <div className="relative">
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
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
