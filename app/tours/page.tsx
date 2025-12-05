import TourCard from "@/components/TourCard";
import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";

export default async function ToursPage() {
  let tours = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API error");
    tours = await res.json();
  } catch (error) {
    return <ErrorMessage message="Failed to load tours." />;
  }

  if (!tours) return <Loader />;

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto h-full">
      <SectionTitle title="All Tours" subtitle={""}/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map((tour:any) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
