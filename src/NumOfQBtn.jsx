const NumOfQBtn = (props) => {
  const { number, setQuestionCount } = props;
  return (
    <button
      onClick={(e) => {
        setQuestionCount(parseInt(e.target.textContent));
      }}
      className="w-full p-2 grid place-items-center bg-gray-100 hover:bg-indigo-500 hover:text-white duration-200 rounded-sm"
    >
      {number}
    </button>
  );
};
export default NumOfQBtn;
