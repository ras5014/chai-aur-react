import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        {" "}
        // prevCounter gives the prev state of the variable Add Value
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        Decrease Value Value
      </button>
    </>
  );
}

export default App;
