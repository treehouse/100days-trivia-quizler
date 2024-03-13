import { useEffect, useState } from "react";

import AnswerButton from "./AnswerButton";
import AnswerMessage from "./AnswerMessage";

const TriviaQuiz = (props) => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setGameOver,
  } = props;

  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState();
  return (
    <div className="w-full max-w-[400px] mt-10 ml-auto mr-auto p-10 text-zinc-700">
      <h1 className="text-indigo-500 font-bold mb-5 text-2xl">
        Trivia Quizler
      </h1>
      <div className="group">
        <h2 className="font-extrabold text-xl">
          Question {currentQuestionIndex + 1}
        </h2>
        <p className="text-sm mb-1">
          {questions.current.questions[currentQuestionIndex].question}
        </p>
        <div className="flex flex-col gap-2">
          {questions.current.questions[currentQuestionIndex].answers.map(
            (answer, index) => {
              return (
                <AnswerButton
                  key={index}
                  hasAnswered={hasAnswered}
                  setHasAnswered={setHasAnswered}
                  answer={answer}
                  isCorrectAnswer={isCorrectAnswer}
                  setIsCorrectAnswer={setIsCorrectAnswer}
                  correctAnswer={
                    questions.current.questions[currentQuestionIndex]
                      .correctAnswer
                  }
                />
              );
            }
          )}
        </div>
        {useEffect(() => {
          let timeout;
          if (hasAnswered) {
            timeout = setTimeout(() => {
              setHasAnswered(false);
              if (
                currentQuestionIndex ===
                questions.current.questions.length - 1
              ) {
                setGameOver(true);
              } else {
                setCurrentQuestionIndex((prev) => prev + 1);
              }
            }, 3000);
          }
          return () => clearTimeout(timeout);
        }, [hasAnswered])}
        {hasAnswered && <AnswerMessage isCorrectAnswer={isCorrectAnswer} />}
      </div>
    </div>
  );
};
export default TriviaQuiz;
