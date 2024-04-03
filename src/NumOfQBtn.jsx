const NumOfQBtn = (props) => {
  const { number, setQuestionCount, isActive } = props;
  return (
    <label
      className="w-full p-2 grid place-items-center bg-gray-100 hover:bg-indigo-500 hover:text-white duration-200 rounded-sm cursor-pointer has-[:checked]:bg-indigo-500 has-[:checked]:text-white"
    >
      {number}
      <input 
        type="radio"
        className="hidden"
        name="questionCount"
        value={number}
        onChange={() => setQuestionCount(number)}
        checked={isActive}
      />
    </label>
  );
};
export default NumOfQBtn;
