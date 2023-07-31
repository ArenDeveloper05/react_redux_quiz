import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "increment_question_number") {
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
    };
  } else if (action.type === "change_isDone_state") {
    return {
      ...state,
      isDone: true,
    };
  } else if (action.type === "increment_right_answer") {
    return {
      ...state,
      rightAnswers: state.rightAnswers + 1,
    };
  }
  return state;
}

const store = createStore(reducer, {
  currentQuestion: 0,
  isDone: false,
  rightAnswers: 0,
});

export default store;
