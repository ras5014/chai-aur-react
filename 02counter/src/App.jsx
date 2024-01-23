import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Add Value</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease Value</button>
    </>
  );
}

export default App;
