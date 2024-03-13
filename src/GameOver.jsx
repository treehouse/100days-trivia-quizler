const GameOver = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-zinc-900 grid place-items-center text-white text-center">
      <div>
        <p className="text-5xl font-extrabold">Trivia Over!</p>
        <button
          className="px-5 py-2 mt-5 rounded-sm bg-indigo-500 hover:bg-indigo-600 duration-200 cursor-pointer"
          onClick={() => {
            location.reload();
          }}
        >
          Play again?
        </button>
      </div>
    </div>
  );
};
export default GameOver;
