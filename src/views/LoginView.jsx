export default function LoginView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-6 max-w-sm w-full bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="mb-2 p-2 w-full border rounded" />
        <input type="password" placeholder="PIN" className="mb-4 p-2 w-full border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </div>
    </div>
  );
}

