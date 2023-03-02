import { deleteQuizz, editQuizz, useQuizz } from "./Redux/Quizz";
import { useState } from "react";

export default function AdminQuestion({ question }) {
    const [editMode, setEditMode] = useState(false);
    const [answer1, setAnswer1] = useState(question.answers[0]);
    const [answer2, setAnswer2] = useState(question.answers[1]);
    const [answer3, setAnswer3] = useState(question.answers[2]);
    const [title, setTitle] = useState(question.title);
    const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

    return (
        <div>
            <h3>
                Q.{useQuizz().questions.indexOf(question) + 1}{" "}
                {!editMode ? (
                    <span>{question.title}</span>
                ) : (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                )}{" "}
                <button onClick={() => deleteQuizz({ id: question.id })}>
                    Delete
                </button>
                {!editMode ? (
                    <button onClick={() => setEditMode(!editMode)}>Edit</button>
                ) : (
                    <button
                        onClick={() => {
                            setEditMode(!editMode);
                            editQuizz({
                                id: question.id,
                                title: title,
                                answer1: answer1,
                                answer2: answer2,
                                answer3: answer3,
                                correctAnswer: correctAnswer,
                            });
                        }}
                    >
                        Save
                    </button>
                )}
            </h3>

            <p
                className={`${
                    question.answers[0] === question.correctAnswer
                        ? "correctAnswer"
                        : ""
                }`}
            >
                1.{" "}
                {!editMode ? (
                    <span>{question.answers[0]}</span>
                ) : (
                    <input
                        type="text"
                        value={answer1}
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                )}
            </p>

            <p
                className={`${
                    question.answers[1] === question.correctAnswer
                        ? "correctAnswer"
                        : ""
                }`}
            >
                2.{" "}
                {!editMode ? (
                    <span>{question.answers[1]}</span>
                ) : (
                    <input
                        type="text"
                        value={answer2}
                        onChange={(e) => setAnswer2(e.target.value)}
                    />
                )}
            </p>
            <p
                className={`${
                    question.answers[2] === question.correctAnswer
                        ? "correctAnswer"
                        : ""
                }`}
            >
                3.{" "}
                {!editMode ? (
                    <span>{question.answers[2]}</span>
                ) : (
                    <input
                        type="text"
                        value={answer3}
                        onChange={(e) => setAnswer3(e.target.value)}
                    />
                )}
            </p>
            {editMode && (
                <div>
                    <label htmlFor="editCorrectAnswer">Correct Answer: </label>
                    <select
                        name="editCorrectAnswer"
                        id="editCorrectAnswer"
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                    >
                        <option value={answer1}>{answer1}</option>
                        <option value={answer2}>{answer2}</option>
                        <option value={answer3}>{answer3}</option>
                    </select>
                </div>
            )}
        </div>
    );
}
