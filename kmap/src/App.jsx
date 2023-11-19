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

        <Kmap rows={4} cols={4} ones_list = {[0,4,12,8,7]} Xs_list = {[]} />

        <div className="p-20">
        <Changeall/>
        </div>
      </div>
    </>
  );
}

export default App;