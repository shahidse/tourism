export default function ErrorMessage({ message }:{message:any}) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded text-center mt-4">
      {message || "Something went wrong. Please try again."}
    </div>
  );
}
