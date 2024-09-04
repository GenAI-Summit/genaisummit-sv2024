import Image from "next/image";

const MessageCard = ({ message }) => {
  return (
    <div className="flex flex-row gap-3 items-start">
      <div className="flex-shrink-0">
        <Image src="/images/icons/favicon.ico" alt="Bot" width={30} height={30} />
      </div>
      <div className="bg-gray-200 text-white rounded-lg py-2 px-4 max-w-xs self-start">
        <p className="text-left text-sm text-theme1Dark1">
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;