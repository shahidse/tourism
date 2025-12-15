import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";

export default async function TourDetails({ params }: { params: any }) {
  const id = await params;
  let tour = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours?id=${id.id}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("API error");
    tour = await res.json();
  } catch (error) {
    console.log("error", error);
    return <ErrorMessage message="Failed to load tours." />;
  }

  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="min-h-screen flex justify-center px-4 py-18 bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md text-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-center">{tour.title}</h1>
        <Image
          src={tour.image}
          className="rounded-lg w-full h-80 object-cover mb-6"
          alt={tour.title}
          width={500} // specify appropriate width
          height={300} // specify appropriate height
        />

        <p className="text-lg leading-relaxed mb-4">{tour.description}</p>

        <div className="space-y-2 text-lg mb-8">
          <p>
            <b>Location:</b> {tour.location}
          </p>
          <p>
            <b>Duration:</b> {tour.duration}
          </p>
          <p>
            <b>Price:</b> €{tour.price}
          </p>
        </div>
         <div className="flex justify-center">
          <a
            href={`/book/${tour.id}`}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book This Tour
          </a>
        </div>
      </div>
    </div>
  );
}
