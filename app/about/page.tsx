import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import TeamCard from "@/components/TeamCard";
import { User, Compass, Heart } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-8 h-8 text-blue-600 mx-auto" />,
    title: "Our Mission",
    description: "To provide unforgettable tours and experiences in Rome.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500 mx-auto" />,
    title: "Our Values",
    description: "Trust, quality, and personalized attention for every traveler.",
  },
  {
    icon: <User className="w-8 h-8 text-green-500 mx-auto" />,
    title: "Our Commitment",
    description: "Expert local guides and hassle-free experiences guaranteed.",
  },
];

const teamMembers = [
  {
    name: "Giovanni Rossi",
    role: "Founder & CEO",
    photo: "/images/team1.jpg",
  },
  {
    name: "Maria Bianchi",
    role: "Head Tour Guide",
    photo: "/images/team2.jpg",
  },
  {
    name: "Luca Conti",
    role: "Customer Relations",
    photo: "/images/team3.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">

      {/* Hero / Intro */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-700">About bestandbest</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are passionate about creating unique travel experiences in Rome. 
          From hidden gems to iconic landmarks, our team ensures every tour is memorable.
        </p>
      </section>

      {/* Features / Mission & Values */}
      <section className="mb-20">
        <SectionTitle title="Our Mission & Values" subtitle={''}/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <SectionTitle title="Meet Our Team" subtitle="The people behind bestandbest" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
