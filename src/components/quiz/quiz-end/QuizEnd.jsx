import { useSelector } from "react-redux";

const QuizEnd = ({ data }) => {
  const rightAnswersCount = useSelector((state) => state.rightAnswers);
  return (
    <div>
      <h1>The end</h1>
      <h1>
        Duq havaqel eq {rightAnswersCount}/{data.length}
      </h1>
    </div>
  );
};

export default QuizEnd;
