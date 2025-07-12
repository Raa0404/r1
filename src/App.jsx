
import React, { useState } from "react";
import RAABOTIntro from "./components/RAABOTIntro";
import Phase1 from "./components/Phase1";
import Phase2 from "./components/Phase2";
import Phase3 from "./components/Phase3";
import data from "./data/accounts.json";

function App() {
  const [phase, setPhase] = useState(0);
  const [solId, setSolId] = useState("");
  const [userName, setUserName] = useState("");
  const [accountData, setAccountData] = useState([]);

  return (
    <>
      {phase === 0 && <RAABOTIntro onFinish={() => setPhase(1)} />}
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
          onProceed={(accounts) => {
            setAccountData(accounts);
            setPhase(3);
          }}
        />
      )}
      {phase === 3 && (
        <Phase3
          solId={solId}
          userName={userName}
          accountData={accountData}
          onBack={() => setPhase(2)}
        />
      )}
    </>
  );
}

export default App;
