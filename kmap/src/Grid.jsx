import React, { useState } from "react";
import Kmap from "./Kmap.jsx";
let rows_curr = 0;
let cols_curr = 0;
let onesList = [];
let kmap_board = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];
const coord_to_cell = {
  "0,0": 0,
  "0,1": 1,
  "0,3": 2,
  "0,2": 3,
  "1,0": 4,
  "1,1": 5,
  "1,3": 6,
  "1,2": 7,
  "2,0": 12,
  "2,1": 13,
  "2,3": 14,
  "2,2": 15,
  "3,0": 8,
  "3,1": 9,
  "3,3": 10,
  "3,2": 11,
};

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
  
  
  
  for (let i = 0; i < countX; i++) {
    for (let j = 0; j < countY; j++) {
      const index = i * countY + j;
      const value = gridValues[index];


      gridItems.push(
        <button
          key={index}
          className="grid grid-cols-4 border-2 border-black w-[50px] h-[50px]"
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

function Changeall({ activeButton, onSetModeClick, updateOnesList }) {
  const [showCalculate, setShowCalculate] = useState(false);

  const handleButtonClick = (key, value) => {
    // Call onSetModeClick with the key and value
    onSetModeClick(key, value);

    // Update onesList
    updateOnesList(key, value);
  };

  const handleCalculateClicked = () => {
    setShowCalculate(true);
  };

  for(let i=0;i<kmap_board.length;i++)
  {
    for(let j=0;j<kmap_board[i].length;j++)
    {
      if (kmap_board[i][j]===1)
      {
        const coord = i+","+j
        onesList.push(coord_to_cell[coord])
      }
    }
  }

  return (
    <div className="flex flex-col">
      <div className="inline-flex rounded-md justify-center" role="group">
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-s-lg ${
            activeButton === 1 ? "bg-gray-300" : ""
          }`}
          onClick={() => handleButtonClick("1", 1)}
        >
          Set 1
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-y-black mt-6 hover:ring-1 hover:bg-gray-100 ${
            activeButton === "x" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleButtonClick("x", "x")}
        >
          Set x
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-e-lg ${
            activeButton === 0 ? "bg-gray-300" : ""
          }`}
          onClick={() => handleButtonClick("0", 0)}
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
      {console.log("asd",onesList)}
      {showCalculate && <Kmap rows={rows_curr} cols={rows_curr} ones_list={onesList} Xs_list={[]} />}
    </div>
  );
}

function App({rows, cols}) {
  rows_curr = rows;
  cols_curr =cols
  const [mode, setMode] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const handleGridItemClick = (newGridValues) => {
    // Handle the updated grid values as needed
    console.log("Grid values updated:", newGridValues);

    for (let i=0;i<newGridValues.length;i++)
    {
      if (newGridValues[i]===1)
        onesList.push(i);
    } 
  };

  const handleSetModeClick = (newMode) => {
    setMode(newMode);
    setActiveButton(newMode);
  };


  const updateOnesList = (key, value) => {
    // Assuming onesList is a 2D array
    // Update the onesList based on the key and value
    // For example, assuming key is row index and value is column index
    kmap_board[key][value] = 1;
  };


  return (
    <div>
      {/* Set countX to 2 and countY to 4 for a 2x4 grid */}
      {/* Set both countX and countY to 4 for a 4x4 grid */}
      
      <Grid countX={cols} countY={rows} onGridItemClick={handleGridItemClick} mode={mode} />
      <Changeall
        activeButton={activeButton}
        onSetModeClick={handleSetModeClick}
        updateOnesList={updateOnesList}
      />
    </div>
  );
}

export default App;