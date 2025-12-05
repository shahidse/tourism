import SectionTitle from "@/components/SectionTitle";
import TourCard from "@/components/TourCard";
import MainButton from "@/components/MainButton";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import Hero from "@/components/Hero";

export default async function HomePage() {
  let tours = null;

  // Fetch data from your API
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API Error");

    tours = await res.json();
  } catch (error) {
    return (
      <div className="py-20">
        <ErrorMessage message="Failed to load featured tours." />
      </div>
    );
  }

  if (!tours) return <Loader />;

  // Show only first 3 tours for featured section
  const featuredTours = tours.slice(0, 3);

  return (
    <main className="">
      {/* HERO SECTION */}
      <Hero/>

      {/* FEATURED TOURS */}
      <section className="bg-gray-100 py-16 px-6 max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Tours"
          subtitle="Our most booked and top rated experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTours.map((tour:any) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

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
            <h3 className="text-xl font-bold mb-3 text-gray-700">Expert Tour Guides</h3>
            <p className="text-gray-600">
              Discover hidden gems & local secrets with certified guides.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Skip-the-Line Tickets</h3>
            <p className="text-gray-600">
              No waiting, no stress — just enjoy your experience.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Best Price Guarantee</h3>
            <p className="text-gray-600">
              Premium experiences at the best price in Rome.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Ready to Explore Rome?</h2>
        <p className="text-lg mb-6 text-gray-600">Book your unforgettable journey today.</p>

        <MainButton href="/tours">Book Now</MainButton>
      </section>
    </main>
  );
}
