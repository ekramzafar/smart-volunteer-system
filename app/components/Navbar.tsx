export default function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="font-bold text-blue-600">sathi app.</h1>

      <div className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
        <a href="/dashboard" className="text-gray-600 hover:text-blue-500">Dashboard</a>
        <a href="/volunteer" className="text-gray-600 hover:text-blue-500">Volunteer</a>
      </div>
    </div>
  );
}