import { useState, useEffect } from 'react';
import Button from "./button";
import pythonQuizzes from "../data/python-quizzes.yml";

const QuizGame = () => {
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      // Award 10 points for correct answer
      setScore(score + 10);
      // Reset the timer and move to the next question
      setTimerKey(timerKey + 1);
    }
  };

  return (
    <div className="container py-4">
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Welcome to QuizMaster Challenge
      </h1>
      <div className="row my-4 text-center">
        <p>
          Are you ready to put your Python knowledge to the test and prove your programming prowess?
          This quiz game is designed to challenge your understanding of Python, its libraries, and everything in between. Get ready to dive into a world of coding questions, trivia, and fun challenges as you compete for the title of PyCon QuizMaster.
          After the game, do not forget to share your score on social media and challenge your friends to beat your Python prowess!
        </p>
        <br />
        <form className='my-2'>
          <div className="form-group row justify-content-center">
            <div className='col-lg-6 col-8'>
              <input
                type="text"
                className="form-control"
                id="player-name"
                maxLength="30"
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                placeholder="Player Name" />
            </div>
          </div>
        </form>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-8">
            <button
              className={"custom-button w-100 px-5 my-4" + (playerName.length > 0 ? " green-btn" : " grey-btn")}
              disabled={playerName.length == 0}
            >
              Challenge Accepted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
