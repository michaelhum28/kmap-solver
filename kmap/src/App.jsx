import { useState } from "react";
import Dropdown from "./Dropdown.jsx";
import './index.css'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className = "flex justify-center text-3xl font-bold p-4">Karnaugh Map Solver</h1>
      <div className="flex justify-center">
        <Dropdown/>
      </div>
    </>
  );
}

export default App;