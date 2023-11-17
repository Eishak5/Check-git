import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Rock from '../components/rpc/Rock';
import Paper from '../components/rpc/Paper';
import Scissors from '../components/rpc/Scissors';
import GameResult from '../components/rpc/GameResult';

const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'You win!';
  }
  return 'Computer wins!';
};

const RpsPage = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const router = useRouter();

  const playGame = (choice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(choice, computerChoice);
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };

  const backToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl text-center font-bold mb-4">Rock Paper Scissors</h1>
      <div className="flex">
        <Rock onSelection={playGame} />
        <Paper onSelection={playGame} />
        <Scissors onSelection={playGame} />
      </div>
      <GameResult result={result} />
      <button onClick={backToHome} className="mt-4">
        Back to Home
      </button>
    </div>
  );
};

export default RpsPage;