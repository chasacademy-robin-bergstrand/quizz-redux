import {
    useQuizz,
    setQuizzStarted,
    addScore,
    incrementQuestionIndex,
    resetQuizz,
} from "../Redux/Quizz";
import { useState } from "react";

export default function Quizz() {
    const currentQuestion = useQuizz().questions[useQuizz().currentQuestionIdx];
    const score = useQuizz().score;
    const maxScore = useQuizz().questions.length;

    function checkAnswer(idx) {
        if (currentQuestion.answers[idx] == currentQuestion.correctAnswer) {
            addScore();
        }
        incrementQuestionIndex();
    }

    return (
        <div className="quizzContainer">
            {!useQuizz().quizzStarted && !useQuizz().showScore ? (
                <button onClick={() => setQuizzStarted(true)}>
                    Start Quizz
                </button>
            ) : !useQuizz().showScore ? (
                <div>
                    <h1>{currentQuestion.title}</h1>
                    <div className="quizzAnswers">
                        <button onClick={() => checkAnswer(0)}>
                            {currentQuestion.answers[0]}
                        </button>
                        <button onClick={() => checkAnswer(1)}>
                            {currentQuestion.answers[1]}
                        </button>
                        <button onClick={() => checkAnswer(2)}>
                            {currentQuestion.answers[2]}
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>
                        Your score: {score}/{maxScore}
                    </h2>
                    <button onClick={resetQuizz}>Restart</button>
                </div>
            )}
        </div>
    );
}
