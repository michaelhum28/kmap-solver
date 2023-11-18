import { useState } from "react";

function Changeall() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
    <div className="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 bg-transparent border border-gray-600 rounded-s-lg hover:bg-gray-800 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Set 1
  </button>
  <button type="button" class="px-4 py-2 bg-transparent border-t border-b border-gray-600 hover:bg-gray-800 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Set x
  </button>
  <button type="button" class="px-4 py-2 bg-transparent border border-gray-600 rounded-e-lg hover:bg-gray-800 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Clear
  </button>

  </div>

  <button className="py-4 border-2 border-black mt-6 hover:ring-1 focus:ring-black">Calculate</button>
</div>
  );
}
export default Changeall;
