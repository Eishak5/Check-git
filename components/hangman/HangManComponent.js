import React from 'react';

const HangManComponent = ({ mistakes }) => {
  const MAX_MISTAKES = 6;

  return (
    <div className="hangman">
      <div className="mistakes">{`Mistakes: ${mistakes} / ${MAX_MISTAKES}`}</div>
      <img
        src={`/hangman-${mistakes}.png`}
        alt={`Hangman with ${mistakes} mistakes`}
        className="hangman-image"
      />
    </div>
  );
};

export default HangManComponent;