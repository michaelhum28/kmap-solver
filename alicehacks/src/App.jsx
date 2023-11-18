import { useState } from "react";
import Dropdown from "./Dropdown.jsx";
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Karnaugh Map Solver</h1>
      <div className="">
        <p>Variable Count: {count}</p>
        <Dropdown/>
      </div>
    </>
  );
}

export default App;