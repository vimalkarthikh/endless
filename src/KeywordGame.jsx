import React, { useState, useEffect } from 'react';

const keywords = ['Smash IT', 'Smash IT', 'Smash IT', 'Smash IT', 'Smash IT', 'Smash IT', 'Smash IT', 'Smash IT', 'Smash IT'];

const KeywordGame = () => {
  const [score, setScore] = useState(0);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(-1);
  const [timer, setTimer] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setGameOver(true);
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const keywordInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * keywords.length);
        setCurrentKeywordIndex(randomIndex);
      }, 750); // Change keyword every 2 seconds

      return () => clearInterval(keywordInterval);
    }
  }, [gameOver]);

  const handleClick = (index) => {
    if (!gameOver) {
      if (index === currentKeywordIndex) {
        setScore((prevScore) => prevScore + 5);
      } else {
        setScore((prevScore) => prevScore - 2.5);
      }
    }
  };

  return (
    <div className="game-container">
      {!gameOver ? (
        <>
          <div className="score-timer">
            <br /><br /><br />
            <h1>Score: {score}</h1>
            <h2>Time Remaining: {timer} seconds</h2>
          </div>
          <div className="box-container">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className={`box ${index === currentKeywordIndex ? 'highlight' : ''}`}
                onClick={() => handleClick(index)}
              >
                {index === currentKeywordIndex && keyword}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
        <br /><br /><br />
        <h1>Thanks For playing</h1>
        <h1 className="final-score">Final Score: {score}</h1>
        </>
      
      )}
    </div>
  );
};

export default KeywordGame;
