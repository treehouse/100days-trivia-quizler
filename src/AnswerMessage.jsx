const AnswerMessage = (props) => {
  const { isCorrectAnswer } = props;
  return (
    <div
      className={`w-full mt-5 rounded-sm p-5 border-2 text-center text-white  ${
        isCorrectAnswer
          ? "bg-emerald-400 border-emerald-500 "
          : "bg-red-400 border-red-500"
      }`}
    >
      {isCorrectAnswer ? "Good job!" : "Nope, that's not it"}
    </div>
  );
};
export default AnswerMessage;
