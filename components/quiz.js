import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answersQ, setAnswersQ] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const discountCode = "PYCON2023";

  useEffect(() => {
    setQuestions([
      "Password",
      "What is the name of the conference? \nA. pycon2023 \n B. pycon2022 \n C. pycon2021 \n D. pycon2020",
    ]);

    setAnswersQ([
      "PYCON2023",
      'A',
    ]);
  }, []);

  useEffect(() => {
    if (answer.toUpperCase() === answersQ[currentQuestion]) {
      setAnswer("");
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === questions.length - 1) {
        setOpenModal(true);
      }
    }
  }, [answer]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleClose = () => {setOpenModal(false); window.location.href = "/2023";}
  const copyToClipboard = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(discountCode);
    } else {
      return document.execCommand('copy', true, discountCode);
    }
  }

  return (
    <>
      <div className="cyber-container">
        <div className="cyber-card">
          {currentQuestion !== 0 && (
            <h2 className="cyber-heading">
              Answer These Questions for a Special Prize!
            </h2>
          )}
          <div className="cyber-form-group">
            <label className="cyber-label" htmlFor="passwordInput">
              <text style={{whiteSpace: "pre-line"}}>{questions[currentQuestion]}</text>
            </label>
            <input
              type="password"
              className="cyber-form-control"
              id="passwordInput"
              value={answer}
              onChange={handleAnswerChange}
            />
          </div>

          <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you completed the quiz! Here is a pycon ticket discount code just for you! <br/> {discountCode}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={copyToClipboard}>
            Copy Code
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    </>
  );
};

export default Quiz;
