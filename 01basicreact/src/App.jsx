import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add Value</button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrease Value Value
      </button>
    </>
  );
}

export default App;
