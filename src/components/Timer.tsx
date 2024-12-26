import { useState, useEffect } from "react";

const Timer = ({ setTimeOut, questionNumber, isPause }) => {
  const [timer, setTimer] = useState(30000);

  useEffect(() => {
    if (timer === 0) {
      setTimeOut(true);
    }
    const interval = setInterval(() => {
      !isPause&&setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up timer
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30); // Reset timer on new question
  }, [questionNumber]);

  return <div className="timer">{timer}</div>;
};

export default Timer;
