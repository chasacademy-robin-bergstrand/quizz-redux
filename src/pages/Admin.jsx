import { addQuizz, useQuizz } from "../Redux/Quizz";
import { useState } from "react";
import AdminQuestion from "../AdminQuestions";

export default function Admin() {
    const [title, setTitle] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    return (
        <div className="adminPage">
            <div className="createQuestion">
                <h2>Create question</h2>
                <form
                    className="createQuestionForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addQuizz({
                            title: title,
                            answers: [answer1, answer2, answer3],
                            correctAnswer: correctAnswer,
                            id: Date.now(),
                        });
                    }}
                >
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="answer1">Answer 1</label>
                    <input
                        type="text"
                        name="answer1"
                        id="answer1"
                        value={answer1}
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                    <label htmlFor="answer1">Answer 2</label>
                    <input
                        type="text"
                        name="answer2"
                        id="answer2"
                        value={answer2}
                        onChange={(e) => setAnswer2(e.target.value)}
                    />
                    <label htmlFor="answer1">Answer 3</label>
                    <input
                        type="text"
                        name="answer3"
                        id="answer3"
                        value={answer3}
                        onChange={(e) => setAnswer3(e.target.value)}
                    />
                    <label htmlFor="correctAnswer">Correct answer</label>
                    {/* <input
                        type="text"
                        name="correctAnswer"
                        id="correctAnswer"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                    /> */}
                    <select
                        name="correctAnswer"
                        id="correctAnswer"
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        defaultValue={""}
                    >
                        <option value="" disabled>
                            Select correct answer
                        </option>
                        <option value={answer1}>{answer1}</option>
                        <option value={answer2}>{answer2}</option>
                        <option value={answer3}>{answer3}</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h2>Current Questions</h2>
                <div className="questionsGrid">
                    {useQuizz().questions.map((question) => {
                        return <AdminQuestion question={question} />;
                    })}
                </div>
            </div>
        </div>
    );
}
