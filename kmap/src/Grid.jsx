import React, { useState } from "react";
import Kmap from "./Kmap.jsx";

function Grid({ countX, countY, onGridItemClick, mode }) {
  const [gridValues, setGridValues] = useState(Array(countX * countY).fill(0));

  const handleButtonClick = (index) => {
    const newGridValues = [...gridValues];
    newGridValues[index] = mode;
    setGridValues(newGridValues);
    onGridItemClick(newGridValues);
  };

  const generateGridItems = () => {
    const gridItems = [];
    for (let i = 0; i < countY; i++) {
      for (let j = 0; j < countX; j++) {
        const index = i * countX + j;
        const value = gridValues[index];
        gridItems.push(
          <button
            key={index}
            className="grid border-2 border-black w-[50px] h-[50px]"
            onClick={() => handleButtonClick(index)}
          >
            {value}
          </button>
        );
      }
    }
    return gridItems;
  };

  return (
    <div className={`grid grid-cols-${countX} p-6`}>{generateGridItems()}</div>
  );
}

function Changeall({ activeButton, onSetModeClick }) {
  const [showCalculate, setShowCalculate] = useState(false);
  const handleCalculateClicked = () => {
    setShowCalculate(true)
  };
  
  return (
    <div className="flex flex-col">
      <div className="inline-flex rounded-md justify-center" role="group">
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-s-lg ${
            activeButton === 1 ? "bg-gray-300" : ""
          }`}
          onClick={() => onSetModeClick(1)}
        >
          Set 1
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-y-black mt-6 hover:ring-1 hover:bg-gray-100 ${
            activeButton === "x" ? "bg-gray-300" : ""
          }`}
          onClick={() => onSetModeClick("x")}
        >
          Set x
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-e-lg ${
            activeButton === 0 ? "bg-gray-300" : ""
          }`}
          onClick={() => onSetModeClick(0)}
        >
          Clear
        </button>
      </div>

      <button
  className="py-4 border-2 border-black mt-6 hover:ring-1 hover:ring-black hover:bg-gray-100"
  onClick={() => handleCalculateClicked()}
>
  Calculate
</button>
{showCalculate && <Kmap rows={4} cols={4} ones_list={[0, 4, 12, 8, 7]} Xs_list={[]} />}

    </div>
  );
}

function App() {
  const [mode, setMode] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const handleGridItemClick = (newGridValues) => {
    // Handle the updated grid values as needed
    console.log("Grid values updated:", newGridValues);
  };

  const handleSetModeClick = (newMode) => {
    setMode(newMode);
    setActiveButton(newMode);
  };

  return (
    <div>
      {/* Set countX to 2 and countY to 4 for a 2x4 grid */}
      {/* Set both countX and countY to 4 for a 4x4 grid */}
      <Grid countX={4} countY={4} onGridItemClick={handleGridItemClick} mode={mode} />
      <Changeall
        activeButton={activeButton}
        onSetModeClick={handleSetModeClick}
      />
    </div>
  );
}

export default App;

