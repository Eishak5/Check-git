import React from 'react';

const Rock = ({ onSelection }) => {
  return (
    <button onClick={() => onSelection("rock")} className="border p-2 m-2">
      Rock
    </button>
  );
};

export default Rock;