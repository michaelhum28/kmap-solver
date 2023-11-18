import Dropdown from "./Dropdown.jsx"
import Changeall from "./Changeall.jsx";
import './index.css'
import './App.css'
// import Kmap from "./Kmap.jsx";

function App() {
  return (
    <>
      <h1 className = "flex justify-center text-3xl font-bold p-4">Karnaugh Map Solver</h1>
      <div className="flex flex-col items-center">
        <Dropdown/>

        {/* <Kmap/> */}

        <div className="p-48">
        <Changeall/>
        </div>
      </div>
    </>
  );
}

export default App;