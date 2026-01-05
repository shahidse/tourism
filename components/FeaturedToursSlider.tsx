"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useEffect } from "react";
import TourCard from "@/components/TourCard";

export default function FeaturedToursSlider({ featuredTours }: { featuredTours: any[] }) {
  // Refs for custom navigation
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      {/* Custom arrows outside */}
      <div
        ref={prevRef}
        className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 text-gray-700 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition"
      >
        ‹
      </div>
      <div
        ref={nextRef}
        className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 text-gray-700 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition"
      >
        ›
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        pagination={{ clickable: true}}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative " // space for pagination
      >
        {featuredTours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <TourCard tour={tour} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-horizontal {
          margin-top: 20px;
          position: relative;
        }
      `}</style>
    </div>
  );
}
