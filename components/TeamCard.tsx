import Image from 'next/image';

export default function TeamCard({ member }:{member:any}) {
  return (
    <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition">
      <Image
        src={member.photo}
        alt={member.name}
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
      <p className="text-gray-600">{member.role}</p>
    </div>
  );
}
