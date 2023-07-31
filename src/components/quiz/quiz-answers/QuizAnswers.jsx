import { useDispatch } from "react-redux";

const QuizAnswers = ({ data, currentQuestion }) => {
  const dispatch = useDispatch();
  return (
    <div className="quiz-answers">
      {data[currentQuestion].answers.map(({ id, answerText, isCorrect }) => {
        return (
          <div
            className="quiz-answers-item"
            key={id}
            onClick={(e) => {
              if (isCorrect) {
                e.target.style.backgroundColor = "green";
                dispatch({ type: "increment_right_answer" });
              } else {
                e.target.style.backgroundColor = "red";
              }
              setTimeout(() => {
                if (currentQuestion < data.length - 1) {
                  dispatch({ type: "increment_question_number" });
                  e.target.style.backgroundColor = "";
                } else {
                  dispatch({ type: "change_isDone_state" });
                }
              }, 1000);
            }}
          >
            {answerText}
          </div>
        );
      })}
    </div>
  );
};

export default QuizAnswers;
