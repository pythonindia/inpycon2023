import { useState, useEffect } from 'react';
import pythonQuizzes from "../data/python-quizzes.yml";

const QuizGame = () => {
  const [score, setScore] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      // Award 10 points for correct answer
      setScore(score + 10);
      // Reset the timer and move to the next question
      setTimerKey(timerKey + 1);
    }
  };

  return (
    <div>

    </div>
  );
};

export default QuizGame;
