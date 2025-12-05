"use client";

import Link from "next/link";

export default function TourCard({ tour }:{tour:any}) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={tour.image}
        alt={tour.title}
        className="rounded mb-4 w-full h-48 object-cover"
      />

      <h3 className="text-xl font-bold">{tour.title}</h3>
      <p className="text-gray-600 mt-2">{tour.description}</p>

      <div className="mt-3 flex justify-between items-center">
        <span className="font-bold text-blue-700">€{tour.price}</span>
        <Link href={`/tours/${tour.id}`} className="text-blue-600 font-semibold">
          View →
        </Link>
      </div>
    </div>
  );
}
