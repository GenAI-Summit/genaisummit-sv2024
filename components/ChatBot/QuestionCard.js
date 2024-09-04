const QuestionCard = ({ question }) => {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div 
      className="bg-gray-200 text-white rounded-full py-2 px-4 cursor-pointer shadow-lg
        transform transition-all duration-300 ease-in-out
        hover:-translate-y-1
        border-2 border-transparent hover:border-theme1Dark1"
      onClick={() => openUrl(question.url)}
    >
      <p className="text-sm text-theme1Dark1">{question.text}</p>
    </div>
  );
};

export default QuestionCard;