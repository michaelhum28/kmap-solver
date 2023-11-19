function Grid({ count }) {
  const generateGridItems = () => {
    const gridItems = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const value = i * count + j;
        gridItems.push(
          <div key={value} className="grid grid-cols-4 border-2 border-black w-[50px] h-[50px]">
            {value}
          </div>
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

export default Grid;
