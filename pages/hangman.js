import React, { useState } from 'react';
import HangmanComponent from '../components/hangman/HangManComponent';
import WordComponent from '../components/hangman/WordComponent';

const words = ['peter', 'harry', 'bloktv', 'youtube', 'videogames', 'computer', 'Keyboard'];

const HangmanPage = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const mistakes = guessedLetters.filter(
    letter => !word.includes(letter)
  ).length;

  const wordGuessed = () => {
    return word.split('').every(letter => guessedLetters.includes(letter));
  };

  const isGameOver = mistakes >= 6 || wordGuessed();

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
  };

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
    return (
        <div className="bg-blue-100 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-6">Hangman Game</h1>
        <HangmanComponent mistakes={mistakes} />
        <WordComponent word={word} guessedLetters={guessedLetters} />
        {!isGameOver ? (
          <div className="flex flex-col items-center mt-4">
            <input
              type="text"
              maxLength="1"
              className="px-2 py-1 border rounded"
              placeholder="Guess a letter"
              onChange={(e) => handleGuess(e.target.value)}
            />
            <p className="mt-2 text-sm text-gray-600">
              {guessedLetters.length > 0 &&
                `Guessed letters: ${guessedLetters.join(', ')}`}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <p className="text-red-600 font-semibold">
              {mistakes >= 6 ? 'Game Over' : 'You Win!'}
            </p>
            <p className="mt-2">
              The correct word was: <span className="font-semibold">{word}</span>
            </p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={restartGame}
            >
              Restart Game
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default HangmanPage;