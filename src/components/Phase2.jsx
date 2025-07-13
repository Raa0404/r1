
import { useState } from "react";

export default function Phase2({ solId, userName, data, onBack, onProceed }) {
  const [inputAcc, setInputAcc] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = data.find(acc =>
  acc["Account No"].toString().trim() === inputAcc.trim()
);
    if (!found) return setError("Account not found.");

    const sameCIF = data.filter(acc => acc["CIF ID"] === found["CIF ID"]);
    setAccounts(sameCIF);
    setError("");
  };

  const sum = (field) =>
    accounts.reduce((total, acc) => total + parseFloat(acc[field] || 0), 0);

  return (
    <div className="min-h-screen bg-yellow-100 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">Welcome, {userName} (SOL {solId})</h2>

        <input
          type="text"
          placeholder="Enter Account Number"
          value={inputAcc}
          onChange={(e) => setInputAcc(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSearch}
          className="mb-6 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Search
        </button>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {accounts.length > 0 && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              Accounts under CIF ID: {accounts[0]["CIF ID"]}
            </h3>
            <table className="w-full border text-sm">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="border px-2 py-1">Account No</th>
                  <th className="border px-2 py-1">Borrower</th>
                  <th className="border px-2 py-1">Current O/S</th>
                  <th className="border px-2 py-1">Principal O/S</th>
                  <th className="border px-2 py-1">NPA Date</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((acc, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border px-2 py-1">{acc["Account No"]}</td>
                    <td className="border px-2 py-1">{acc["Borrower Name"]}</td>
                    <td className="border px-2 py-1">{acc["Current O/S"]}</td>
                    <td className="border px-2 py-1">{acc["Principal O/S"]}</td>
                    <td className="border px-2 py-1">{acc["NPA Date"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right text-sm font-medium mt-4">
              Total CIF Current O/S: ₹{sum("Current O/S").toFixed(2)} <br />
              Total CIF Principal O/S: ₹{sum("Principal O/S").toFixed(2)}
            </div>

            <button
              onClick={() => onProceed(accounts)}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Proceed to Final Entry
            </button>
          </>
        )}

        <button
          onClick={onBack}
          className="mt-6 text-sm text-gray-600 hover:underline"
        >
          ← Back
        </button>

        <p className="mt-8 text-xs text-red-900 text-center">© Powered by P.Raa</p>
      </div>
    </div>
  );
}
