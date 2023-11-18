import { useState } from "react";

function Changeall() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="inline-flex rounded-md" role="group">
        <button
          type="button"
          class="py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-s-lg"
        >
          Set 1
        </button>
        <button
          type="button"
          class="py-4 px-3 border-2 border-y-black mt-6 hover:ring-1 hover:bg-gray-100"
        >
          Set x
        </button>
        <button
          type="button"
          class="py-4 px-3 border-2 border-black mt-6 hover:ring-1 hover:bg-gray-100 rounded-e-lg"
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
export default Changeall;
