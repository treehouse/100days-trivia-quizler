import { useState } from "react";
import NumOfQBtn from "./NumOfQBtn";
const TriviaSetup = (props) => {
  const { topic, setTopic, questionCount, setQuestionCount, generateQuiz } =
    props;
  const [inputVal, setInputVal] = useState("");

  function startTrivia(userTopic, userNumOfQuestions) {
    console.log(userTopic);
    console.log(userNumOfQuestions);
  }

  return (
    <div className="w-full max-w-[400px] mt-10 ml-auto mr-auto p-10 text-zinc-700">
      <h1 className="text-indigo-500 font-bold mb-5 text-2xl">
        Trivia Quizler
      </h1>
      <div className="group">
        <h2 className="font-extrabold text-xl">Step One</h2>
        <p className="text-sm mb-1">Give me a topic for the quiz</p>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
            setTopic(e.target.value);
          }}
          value={inputVal}
          type="text"
          className="w-full bg-gray-100 outline-none py-2 px-4 rounded-sm"
        />
      </div>
      <div className="group mt-10">
        <h2 className="font-extrabold text-xl">Step Two</h2>
        <p className="text-sm mb-1">How many questions should I include?</p>
        <div className="group flex justify-between gap-2">
          <NumOfQBtn setQuestionCount={setQuestionCount} number={3} />
          <NumOfQBtn setQuestionCount={setQuestionCount} number={5} />
          <NumOfQBtn setQuestionCount={setQuestionCount} number={10} />
        </div>
        <button
          onClick={() => {
            generateQuiz();
          }}
          className="bg-indigo-500 p-3 text-white w-full mt-5 rounded-sm hover:bg-indigo-600 duration-200"
        >
          Start Trivia Quiz
        </button>
      </div>
    </div>
  );
};
export default TriviaSetup;
