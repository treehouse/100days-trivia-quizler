import axios from "axios";
import { useRef, useState } from "react";
import GameOver from "./GameOver";
import TriviaQuiz from "./TriviaQuiz";
import TriviaSetup from "./TriviaSetup";

const App = () => {
  const [topic, setTopic] = useState("");
  const [startTrivia, setStartTrivia] = useState(false);
  const [questionCount, setQuestionCount] = useState(3);
  const questions = useRef([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  async function generateQuiz() {
    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          max_tokens: 1000,
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "user",
              content: `I want you to return a JSON object of an array named 'questions' of random trivia questions based on the topic: ${topic}. Generate ${questionCount} amount of questions. with 3 possible answers for each question. also include a 'correctAnswer' property with the correct answer as the value.`,
            },
          ],
        },
        {
          headers: { Authorization: import.meta.env.VITE_OPENAI_KEY },
        }
      );

      questions.current = JSON.parse(res.data.choices[0].message.content);
      setStartTrivia(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {gameOver && <GameOver />}
      {!startTrivia ? (
        <TriviaSetup
          topic={topic}
          setTopic={setTopic}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          generateQuiz={generateQuiz}
        />
      ) : (
        <TriviaQuiz
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          questions={questions}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
};
export default App;
