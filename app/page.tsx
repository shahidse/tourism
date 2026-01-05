"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import MainButton from "@/components/MainButton";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import Hero from "@/components/Hero";
import FeaturedToursSlider from "@/components/FeaturedToursSlider";

export default function HomePage() {
  const [tours, setTours] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("API Error");

        const data = await res.json();
        setTours(data.filter((tour: any) => tour.featured));
      } catch (err) {
        setError("Failed to load featured tours.");
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!tours || tours.length === 0)
    return <ErrorMessage message="No featured tours available." />;

  // Show only first 3 tours for featured section
  const featuredTours = tours.slice(0, 10);

  return (
    <main>
      {/* HERO SECTION */}
      <Hero />

      {/* FEATURED TOURS */}
      <section className="bg-gray-100 py-16 px-6 max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Tours"
          subtitle="Our most booked and top rated experiences"
        />
        <FeaturedToursSlider featuredTours={featuredTours} />

        <div className="text-center mt-10">
          <MainButton href="/tours">View All Tours</MainButton>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6">
        <SectionTitle
          title="Why Choose bestandbest?"
          subtitle="Your Roman adventure starts here"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-700">
              Expert Tour Guides
            </h3>
            <p className="text-gray-600">
              Discover hidden gems & local secrets with certified guides.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-700">
              Skip-the-Line Tickets
            </h3>
            <p className="text-gray-600">
              No waiting, no stress — just enjoy your experience.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-700">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600">
              Premium experiences at the best price in Rome.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">
          Ready to Explore Rome?
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          Book your unforgettable journey today.
        </p>

        <MainButton href="/tours">Book Now</MainButton>
      </section>
    </main>
  );
}
