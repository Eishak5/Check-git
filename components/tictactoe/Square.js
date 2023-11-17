import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-white w-20 h-20 border border-gray-300 text-2xl font-bold flex justify-center items-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;