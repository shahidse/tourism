export default function TeamCard({ member }:{member:any}) {
  return (
    <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition">
      <img
        src={member.photo}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="text-xl font-bold">{member.name}</h4>
      <p className="text-gray-600">{member.role}</p>
    </div>
  );
}
