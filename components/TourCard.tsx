"use client";

import Image from "next/image";
import Link from "next/link";

type TourCardProps = {
  tour: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPrice?: number;
    currency: string;
    duration: string;
    city: string;
    image: string;
    featured?: boolean;
    bookingsCount?: number;
  };
};

export default function TourCard({ tour }: TourCardProps) {
  const hasDiscount =
    tour.discountPrice && tour.discountPrice < tour.price;

  return (
    <div className="relative border rounded-xl shadow-sm hover:shadow-lg transition p-4 bg-white">
      
      {/* Featured Badge */}
      {tour.featured && (
        <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
          Featured
        </span>
      )}

      {/* Image */}
      <Image
        src={tour.image}
        alt={tour.title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
        width={500}
        height={200}
      />

      {/* City + Duration */}
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>{tour.city}</span>
        <span>{tour.duration}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
        {tour.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {tour.description}
      </p>

      {/* Popularity */}
      {tour.bookingsCount && (
        <p className="text-xs text-gray-500 mt-2">
          🔥 {tour.bookingsCount.toLocaleString()} booked
        </p>
      )}

      {/* Price + CTA */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">
                {tour.currency} {tour.price}
              </span>
              <span className="text-lg font-bold text-green-600">
                {tour.currency} {tour.discountPrice}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-blue-700">
              {tour.currency} {tour.price}
            </span>
          )}
        </div>

        <Link
          href={`/tours/${tour.id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View →
        </Link>
      </div>
    </div>
  );
}
