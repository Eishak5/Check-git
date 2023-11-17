import React from 'react';

const Paper = ({ onSelection }) => {
  return (
    <button onClick={() => onSelection("paper")} className="border p-2 m-2">
      Paper
    </button>
  );
};

export default Paper;