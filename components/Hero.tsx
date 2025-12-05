export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: "url('/images/rome-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-gray-500/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 ">
        <h1 className="text-5xl md:text-6xl font-bold">
          bestandbest Tourism
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
          Your best tours, experiences & guiding services
        </p>
        <a
          href="/tours"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded mt-6 inline-block text-lg"
        >
          Explore Tours
        </a>
      </div>
    </section>
  );
}
