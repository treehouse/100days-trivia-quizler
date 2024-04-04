import loadingIcon from "/loading.svg?url";

const Loading = ({ loadingText }) => {
  return (
    <div className="bg-gray-400 flex items-center justify-center">
      <img src={loadingIcon} className="animate-spin mr-3 py-2" />
      <p className="text-white">{loadingText}</p>
    </div>
  );
};

export default Loading;
