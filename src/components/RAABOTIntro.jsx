
import { useEffect } from "react";

export default function RAABOTIntro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">RAABOT</h1>
      <p className="text-md italic text-center">P.Raa’s brain and his Jarvis bot.<br />Fully optimized for chaos and trained for solutions.</p>
      <p className="mt-6 text-sm text-gray-400">© Powered by P.Raa</p>
    </div>
  );
}
