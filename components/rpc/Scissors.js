import React from 'react';

const Scissors = ({ onSelection }) => {
  return (
    <button onClick={() => onSelection("scissors")} className="border p-2 m-2">
      Scissors
    </button>
  );
};

export default Scissors;