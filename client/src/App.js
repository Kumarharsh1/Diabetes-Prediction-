import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = () => {
    setError("");
    setSuccess("");

    if (email === "kh949118@gmail.com" && password === "Harsh@1234") {
      setSuccess("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "https://yut4dj6nxyxaasimwwvpzm.streamlit.app";
      }, 1500);
    } else {
      setError("❌ Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] to-[#f0f4ff] flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md animate-fade-in">
        <img
          src="/diabetes-logo.png"
          alt="Diabetes Logo"
          className="w-24 h-24 mx-auto mb-6 rounded-full shadow-md"
        />

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2 tracking-wide">
          Diabetes Checker
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
      </div>
    </div>
  );
}

export default App;

