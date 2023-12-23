import Dropdown from "./Dropdown.jsx"
// import Changeall from "./Changeall.jsx";
import './index.css'
import './App.css'
import Kmap from "./Kmap.jsx";

function App() {
  return (
    <>
      <h1 className = "flex justify-center text-3xl font-bold p-4">Karnaugh Map Solver</h1>
      <div className="flex flex-col items-center">
        <Dropdown/>

        {/* { <Kmap rows={4} cols={4} ones_list = {[0,1,4,5]} Xs_list = {[3,8,9,12,13]} /> } */}

      </div>
    </>
  );
}

export default App;