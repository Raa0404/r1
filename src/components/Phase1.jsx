
import { useState } from "react";

export default function Phase1({ onProceed }) {
  const [solId, setSolId] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const solNum = parseInt(solId);
    if (!userName.trim()) return setError("Please enter your name.");
    if (isNaN(solNum) || solNum < 8701 || solNum > 8771) {
      return setError("SOL ID must be between 8701 and 8771.");
    }
    setError("");
    onProceed(solId, userName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-teal-900 mb-4">OTS REGISTER</h1>
        <p className="text-sm text-gray-700 mb-8">Recover faster. Report smarter.</p>

        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="number"
          placeholder="SOL ID (8701–8771)"
          value={solId}
          onChange={(e) => setSolId(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
        >
          Proceed
        </button>
      </div>
      <p className="text-center text-sm text-blue-600 font-semibold mt-4">
      📞 Need help? Call us at: <a href="tel:+917217038759" className="underline">+91-97217038759</a>
    </p>
      <p className="mt-8 text-xs text-teal-900 font-bold">© Powered by P.Raa</p>
    </div>
  );
}
