
import React, { useState } from "react";
import Phase1 from "./components/Phase1";

function App() {
  const [proceed, setProceed] = useState(false);
  return proceed ? (
    <h1 className="text-center mt-20 text-xl">Phase 1 Completed</h1>
  ) : (
    <Phase1 onProceed={() => setProceed(true)} />
  );
}

export default App;
