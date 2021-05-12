//in order to add state to my application I need to incorporate the useState hook from the React library.
// A hook is a function that allows you to add functionality to a component.
import React, { useState } from "react";

export default function Point() {
  const [status, setStatus] = useState("Winner");
  return (
    <div>
      <h2> Game Result: {status}</h2>
      <button onClick={() => setStatus("Winner")}>Won Game</button>
      <button onClick={() => setStatus("Draw")}>Draw Game</button>
      <button onClick={() => setStatus("Loser")}>Lost Game</button>
    </div>
  );
}
