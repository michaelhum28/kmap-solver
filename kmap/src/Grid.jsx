import React, { useState } from 'react';

function Grid({ count, onGridItemClick, mode }) {
  const [gridValues, setGridValues] = useState(Array(count * count).fill(0));

  const handleButtonClick = (index) => {
    const newGridValues = [...gridValues];
    newGridValues[index] = mode;
    setGridValues(newGridValues);
    onGridItemClick(newGridValues);
  };

  const generateGridItems = () => {
    const gridItems = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = i * count + j;
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
    <div className={`grid grid-cols-${count} p-6`}>
      {generateGridItems()}
    </div>
  );
}

function Changeall({ activeButton, onSetModeClick }) {
  return (
    <div className="flex flex-col">
      <div className="inline-flex rounded-md justify-center" role="group">
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-s-lg ${activeButton === 1 ? 'bg-gray-300' : ''}`}
          onClick={() => onSetModeClick(1)}
        >
          Set 1
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-y-black mt-6 hover:ring-1 hover:bg-gray-100 ${activeButton === 'x' ? 'bg-gray-300' : ''}`}
          onClick={() => onSetModeClick('x')}
        >
          Set x
        </button>
        <button
          type="button"
          className={`py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-e-lg ${activeButton === 0 ? 'bg-gray-300' : ''}`}
          onClick={() => onSetModeClick(0)}
        >
          Clear
        </button>
      </div>

      <button className="py-4 border-2 border-black mt-6 hover:ring-1 hover:ring-black hover:bg-gray-100">
        Calculate
      </button>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const handleGridItemClick = (newGridValues) => {
    // Handle the updated grid values as needed
    console.log('Grid values updated:', newGridValues);
  };

  const handleSetModeClick = (newMode) => {
    setMode(newMode);
    setActiveButton(newMode);
  };

  return (
    <div>
      <Grid count={4} onGridItemClick={handleGridItemClick} mode={mode} />
      <Changeall activeButton={activeButton} onSetModeClick={handleSetModeClick} />
    </div>
  );
}

export default App;
