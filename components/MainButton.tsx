import Link from "next/link";

export default function MainButton({ href, children }:{href:any, children:any}) {
  return (
    <Link
      href={href}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition inline-block"
    >
      {children}
    </Link>
  );
}
