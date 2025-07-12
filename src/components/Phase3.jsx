
import { useState } from "react";
import axios from "axios";

export default function Phase3({ solId, userName, accountData, onBack }) {
  const [otsDate, setOtsDate] = useState("");
  const [compAmount, setCompAmount] = useState("");
  const [token, setToken] = useState("");
  const [scheme, setScheme] = useState("Branch Power");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!otsDate || !compAmount || !token) {
      return setStatus("❌ Please fill all fields.");
    }

    const payload = accountData.map((acc) => ({
      "SOL ID": solId,
      "User Name": userName,
      "Account No": acc["Account No"],
      "Borrower Name": acc["Borrower Name"],
      "CIF ID": acc["CIF ID"],
      "CIF CURRENT O/S": acc["CIF CURRENT O/S"],
      "CIF PRINCIPAL O/S": acc["CIF PRINCIPAL O/S"],
      "OTS Date": otsDate,
      "Compromise Amount": compAmount,
      "Token Money": token,
      "Scheme": scheme
    }));

    try {
      for (const row of payload) {
        await axios.post(
          "https://api.sheetbest.com/sheets/11bd0342-8db4-4c75-beb0-3d7bb965769f",
          row
        );
      }
      setStatus("✅ Submission Successful!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4 text-orange-800">Enter Final OTS Details</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            value={otsDate}
            onChange={(e) => setOtsDate(e.target.value)}
            placeholder="Date of OTS (dd/mm/yyyy)"
            className="border px-3 py-2 rounded w-full"
          />

          <input
            type="number"
            value={compAmount}
            onChange={(e) => setCompAmount(e.target.value)}
            placeholder="Compromise Amount"
            className="border px-3 py-2 rounded w-full"
          />

          <input
            type="number"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token Money"
            className="border px-3 py-2 rounded w-full"
          />

          <select
            value={scheme}
            onChange={(e) => setScheme(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          >
            <option>Branch Power</option>
            <option>RO Power</option>
            <option>HO Power</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
        >
          Submit to Register
        </button>

        {status && <p className="mt-4 text-center text-sm">{status}</p>}

        <button
          onClick={onBack}
          className="mt-4 block text-sm text-gray-500 hover:underline text-center w-full"
        >
          ← Back
        </button>

        <p className="mt-6 text-xs text-orange-800 text-center">© Powered by P.Raa</p>
      </div>
    </div>
  );
}
