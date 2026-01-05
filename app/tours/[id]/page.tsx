import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";

export default async function TourDetails({ params }: { params: any }) {
  const id = await params;
  let tour = null;
  console.log("Fetching tour with id:", id.id);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours?id=${id.id}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("API error");
    tour = await res.json();
  } catch (error) {
    console.log("error", error);
    return <ErrorMessage message="Failed to load tour." />;
  }

  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 space-y-8 text-gray-700">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center">{tour.title}</h1>

        {/* Main Image */}
        <Image
          src={tour.image}
          alt={tour.title}
          width={800}
          height={400}
          className="rounded-lg w-full h-80 object-cover"
        />

        {/* Gallery */}
        {tour.gallery && tour.gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tour.gallery.map((img: string, index: number) => (
              <Image
                key={index}
                src={img}
                alt={`${tour.title} ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-lg leading-relaxed">{tour.description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <p>
            <b>Location:</b> {tour.location}
          </p>
          {tour.city && (
            <p>
              <b>City:</b> {tour.city}
            </p>
          )}
          <p>
            <b>Duration:</b> {tour.duration}
          </p>
          <p>
            <b>Price:</b>{" "}
            {tour.discountPrice ? (
              <>
                <span className="line-through text-gray-400">
                  {tour.currency}
                  {tour.price}
                </span>{" "}
                <span className="text-blue-600 font-semibold">
                  {tour.currency}
                  {tour.discountPrice}
                </span>
              </>
            ) : (
              <>
                {tour.currency}
                {tour.price}
              </>
            )}
          </p>
          <p>
            <b>Times Booked:</b> {tour.bookedCount || 0}
          </p>
          <p>
            <b>Best Season:</b> {tour.season || "All year"}
          </p>
          <p>
            <b>Featured:</b>{" "}
            {tour.feature ? (
              <span className="text-green-600 font-semibold">Yes</span>
            ) : (
              "No"
            )}
          </p>
        </div>

        {/* Book Button */}
        <div className="flex justify-center mt-6">
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
