import { useRef } from "react";
import "./Quiz.scss";
import QuizAnswers from "./quiz-answers/QuizAnswers";
import QuizQuestion from "./quiz-question/QuizQuestion";
import { useSelector } from "react-redux";
import QuizEnd from "./quiz-end/QuizEnd";

const Quiz = () => {
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const isDone = useSelector((state) => state.isDone);
  const data = useRef([
    {
      id: 1,
      questionText: "Vorn e Hayastani mayqaraxaqy?",
      answers: [
        {
          id: 1,
          answerText: "Yerevan",
          isCorrect: true,
        },
        {
          id: 2,
          answerText: "Moskva",
          isCorrect: false,
        },
        {
          id: 3,
          answerText: "Amsterdam",
          isCorrect: false,
        },
        {
          id: 4,
          answerText: "Pariz",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      questionText: "Vorn e Rusastani mayqaraxaqy?",
      answers: [
        {
          id: 1,
          answerText: "Brazilia",
          isCorrect: false,
        },
        {
          id: 2,
          answerText: "Moskva",
          isCorrect: true,
        },
        {
          id: 3,
          answerText: "Amsterdam",
          isCorrect: false,
        },
        {
          id: 4,
          answerText: "Tbilisi",
          isCorrect: false,
        },
      ],
    },
  ]);
  return (
    <div className="quiz">
      {isDone ? (
        <QuizEnd data={data.current} />
      ) : (
        <>
          <QuizQuestion data={data.current} currentQuestion={currentQuestion} />
          <QuizAnswers data={data.current} currentQuestion={currentQuestion} />
        </>
      )}
    </div>
  );
};

export default Quiz;
