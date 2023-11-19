import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import list from "./list.json";
// import Grid from "./Grid"; // Import the Grid component
import App from "./Grid";

let rows = -1;
let cols = -1;
let vars_count = -1;
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [generateClicked, setGenerateClicked] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleGenerateClick = () => {
    // Perform any actions you need when the "Generate" button is clicked
    if (selectedItem && selectedItem.total === "4x4") {
       rows = 4; cols = 4;
       vars_count = 4
      setGenerateClicked(true);
    } else if (selectedItem && selectedItem.total === "4x2"){
      rows =2; cols = 4;
      vars_count = 3;
      setGenerateClicked(true);
    } else {
      setGenerateClicked(false);
    }
  };

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
    setGenerateClicked(false); // Reset generateClicked when dropdown is opened
  };
  return (
    <div className="relative flex flex-col w-[240px] h-[240px] rounded">
      <button
        onClick={handleDropdownClick}
        className="w-full flex items-center justify-between rounded tracking-wider hover:bg-gray-100"
      >
        {"Variable Count: "}
        {selectedItem ? selectedItem.count : "Select value"}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
        {selectedItem && (
          <span className="italic">{selectedItem.total}</span>
        )}
      </button>

      {/* Render dropdown content only if isOpen is true */}
      {isOpen && (
        <div className="absolute top-10 flex flex-col items-start w-full">
          {list.map((item, i) => (
            <div
              className="rounded flex w-full justify-between hover:bg-gray-100 cursor-pointer rounded-r-lg"
              key={i}
              onClick={() => handleItemClick(item)}
            >
              <h3>{item.count}</h3>
              <h3 className="italic">{item.total}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Render a different button when an item is selected and the dropdown is closed */}
      {!isOpen && selectedItem && (
        <button
          onClick={handleGenerateClick}
          className="w-full mt-2 rounded tracking-wider hover:bg-gray-100"
        >
          Generate
        </button>
      )}

      {/* Render the Grid component only when generateClicked is true */}
      
      {generateClicked && <App rows={rows} cols ={cols} vars_count = {vars_count} />}
      
      {!isOpen && !selectedItem && (  
        <button className="w-full mt-2 rounded tracking-wider hover:bg-gray-100 cursor-not-allowed opacity-50">
          Generate
        </button>
      )}
    </div>
  );
}

export default Dropdown;
