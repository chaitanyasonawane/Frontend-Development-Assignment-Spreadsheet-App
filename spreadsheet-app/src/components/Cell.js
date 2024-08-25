import React, { useState } from 'react';
import { useStore } from '../store';

const Cell = ({ index }) => {
  const [editing, setEditing] = useState(false);
  const { cells, updateCell } = useStore();

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    updateCell(index, e.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  return (
    <div
      className="p-2 border border-gray-300 min-w-[100px] min-h-[30px] flex items-center"
      onDoubleClick={handleDoubleClick}
    >
      {editing ? (
        <input
          value={cells[index]}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="w-full"
        />
      ) : (
        cells[index]
      )}
    </div>
  );
};

export default Cell;