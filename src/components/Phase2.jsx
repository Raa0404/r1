
import { useState } from "react";

export default function Phase2({ solId, userName, data, onBack }) {
  const [inputAcc, setInputAcc] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = data.find(acc => acc["Account No"] === inputAcc);
    if (!found) return setError("Account not found.");

    const sameCIF = data.filter(acc => acc["CIF ID"] === found["CIF ID"]);
    setAccounts(sameCIF);
    setError("");
  };

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
                  <th className="border px-2 py-1">Borrower Name</th>
                  <th className="border px-2 py-1">CIF O/S</th>
                  <th className="border px-2 py-1">Principal O/S</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((acc, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border px-2 py-1">{acc["Account No"]}</td>
                    <td className="border px-2 py-1">{acc["Borrower Name"]}</td>
                    <td className="border px-2 py-1">{acc["CIF CURRENT O/S"]}</td>
                    <td className="border px-2 py-1">{acc["CIF PRINCIPAL O/S"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <button
          onClick={onBack}
          className="mt-6 text-sm text-gray-600 hover:underline"
        >
          ← Back
        </button>

        <p className="mt-6 text-xs text-gray-600 text-center">© Powered by P.Raa</p>
      </div>
    </div>
  );
}
