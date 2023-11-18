import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import list from "./list.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col w-[240px] h-[340px] rounded">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
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
    </div>
  );
}

export default Dropdown;
