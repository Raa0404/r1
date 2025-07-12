
import React, { useState } from "react";
import Phase1 from "./components/Phase1";
import Phase2 from "./components/Phase2";
import data from "./data/accounts.json";

function App() {
  const [phase, setPhase] = useState(1);
  const [solId, setSolId] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      {phase === 1 && (
        <Phase1
          onProceed={(sol, name) => {
            setSolId(sol);
            setUserName(name);
            setPhase(2);
          }}
        />
      )}
      {phase === 2 && (
        <Phase2
          solId={solId}
          userName={userName}
          data={data}
          onBack={() => setPhase(1)}
        />
      )}
    </>
  );
}

export default App;
