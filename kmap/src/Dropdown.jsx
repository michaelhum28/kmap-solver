import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import list from './list.json';

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div className ="relative flex flex-col w-[180px] h-[340px] rounded">
        <button onClick={() => setIsOpen((prev) => !prev)} className ="w-full flex items-center justify-between rounded tracking-wider active:bg-gray-100">Variable Count
        {!isOpen ? (
            <AiOutlineCaretDown className="h-8" />
        ) : (
            <AiOutlineCaretUp className="h-8" />
        )}
        </button>

        {isOpen && <div className = "absolute top-10 flex flex-col itemrs-start ounded-lg w-full">
            {list.map((item,i) => (
            <div className="flex w-full justify-between hover:bg-gray-100 cursor-pointer rounded-r-lg" key={i}>
                <h3>{item.count}</h3>
                <h3 className = "italic">{item.total}</h3>
            </div>
            ))}
        </div>}
    </div>
    );
}

export default Dropdown;