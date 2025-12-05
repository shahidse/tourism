export default function SectionTitle({ title, subtitle }:{title:any, subtitle:any}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-700">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}
