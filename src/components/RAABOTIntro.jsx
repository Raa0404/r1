
import { useEffect } from "react";

export default function RAABOTIntro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <img
        src="/raabot-logo.png"
        alt="RAABOT"
        className="w-64 md:w-80 lg:w-96"
      />
    </div>
  );
}
