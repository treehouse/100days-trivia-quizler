const AnswerButton = (props) => {
  const {
    answer,
    correctAnswer,
    hasAnswered,
    setHasAnswered,
    setIsCorrectAnswer,
  } = props;

  function checkAnswer(e) {
    setHasAnswered(true);
    let userAnswer = e.target.textContent;
    userAnswer === correctAnswer
      ? setIsCorrectAnswer(true)
      : setIsCorrectAnswer(false);
  }
  return (
    <button
      onClick={(e) => {
        checkAnswer(e);
      }}
      className={`${
        hasAnswered ? "disabled" : ""
      } w-full p-3 rounded-sm bg-gray-200 first-of-type:mt-5 hover:bg-indigo-500 hover:text-white curosr-pointer duration-200`}
    >
      {answer}
    </button>
  );
};
export default AnswerButton;
