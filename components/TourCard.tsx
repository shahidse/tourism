"use client";

import Image from "next/image";
import Link from "next/link";

export default function TourCard({ tour }:{tour:any}) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <Image
        src={tour.image}
        alt={tour.title}
        className="rounded mb-4 w-full h-48 object-cover"
        width={500} // specify appropriate width
        height={200} // specify appropriate height
      />
      <h3 className="text-xl font-bold text-gray-800">{tour.title}</h3>
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
