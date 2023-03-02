import { createReduxModule } from "hooks-for-redux";

const inistialState = {
    questions: [
        {
            title: "Example question?",
            answers: ["You should", "Delete", "This"],
            correctAnswer: "Delete",
            id: Date.now(),
        },
    ],
    quizzStarted: false,
    currentQuestionIdx: 0,
    score: 0,
    showScore: false,
};

export const [
    useQuizz,
    {
        addQuizz,
        deleteQuizz,
        editQuizz,
        setQuizzStarted,
        addScore,
        incrementQuestionIndex,
        resetQuizz,
    },
] = createReduxModule("quizz", inistialState, {
    addQuizz: (state, payload) => {
        return { ...state, questions: [...state.questions, payload] };
    },
    deleteQuizz: (state, payload) => {
        return {
            ...state,
            questions: [
                ...state.questions.filter((question) => {
                    return question.id != payload.id;
                }),
            ],
        };
    },
    editQuizz: (state, payload) => {
        return {
            ...state,
            questions: [
                ...state.questions.map((question) => {
                    if (question.id == payload.id) {
                        question.title = payload.title;
                        question.answers[0] = payload.answer1;
                        question.answers[1] = payload.answer2;
                        question.answers[2] = payload.answer3;
                        question.correctAnswer = payload.correctAnswer;
                    }
                    return question;
                }),
            ],
        };
    },
    setQuizzStarted: (state, payload) => {
        return {
            ...state,
            quizzStarted: payload,
        };
    },
    addScore: (state) => {
        return {
            ...state,
            score: state.score + 1,
        };
    },
    incrementQuestionIndex: (state) => {
        if (state.currentQuestionIdx < state.questions.length - 1) {
            return {
                ...state,
                currentQuestionIdx: state.currentQuestionIdx + 1,
            };
        } else {
            return {
                ...state,
                showScore: true,
            };
        }
    },
    resetQuizz: (state) => {
        return {
            ...state,
            quizzStarted: false,
            currentQuestionIdx: 0,
            score: 0,
            showScore: false,
        };
    },
});
