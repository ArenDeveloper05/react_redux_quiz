const QuizQuestion = ({ data, currentQuestion }) => {
  return (
    <div className="quiz-question">{data[currentQuestion].questionText}</div>
  );
};

export default QuizQuestion;
