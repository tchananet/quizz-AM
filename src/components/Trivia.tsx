import React, { useEffect, useState } from "react";
import "./Trivia.css";

interface TriviaProps {
    data: {
        question: string;
        answers: { text: string; correct: boolean }[];
    }[];
    setTimeOut: (value: boolean) => void;
    setQuestionNumber: (value: number) => void;
    questionNumber: number;
    setIsPause:(value:any)=>void;
}

const Trivia: React.FC<TriviaProps> = ({
    data,
    setTimeOut,
    setQuestionNumber,
    questionNumber,
    setIsPause
}) => {
    const [question, setQuestion] = useState<any>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
    const [showFeedback, setShowFeedback] = useState<"correct" | "wrong" | null>(
        null
    );

    useEffect(() => {
        if (data && data.length > 0) {
            setQuestion(data[questionNumber - 1]);
        }
        console.log(questionNumber)
    }, [data, questionNumber]);

    const handleClick = (answer: any) => {
        setIsPause(true)
        setSelectedAnswer(answer);
        setShowFeedback(answer.correct ? "correct" : "wrong");

        setTimeout(() => {
            setIsPause(false)
            if (answer.correct) {
                setQuestionNumber((prev) => prev + 1); // Move to next question
            } else {
                setTimeOut(true); // End game if wrong
            }
            setSelectedAnswer(null); // Reset selection
            setShowFeedback(null); // Hide feedback
        }, 2000); // Show feedback for 2 seconds
    };

    return (
        <div className="trivia">
            {showFeedback ? (
                // Feedback Screen
                <div className={`feedback ${showFeedback}`}>
                    {showFeedback === "correct" ? "Correct!" : "Wrong!"}
                </div>
            ) : (
                // Main Trivia Screen
                <>
                    <div className="question">{question?.question}</div>
                    <div className="answers">
                        {question?.answers.map((answer) => (
                            <div
                                key={answer.text}
                                onClick={() => !selectedAnswer && handleClick(answer)}
                                className={`answer ${
                                    selectedAnswer === answer
                                        ? answer.correct
                                            ? "correct"
                                            : "wrong"
                                        : ""
                                }`}
                            >
                                {answer.text}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Trivia;
