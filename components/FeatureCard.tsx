export default function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-lg rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
