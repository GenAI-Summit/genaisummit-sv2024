import { motion } from "framer-motion";
import MessageCard from "./MessageCard";

const Messages = () => {
  const messages = [
    {
      id: 1,
      text: "👋🏻 Hello, this is the GenAI Summit SV 2024 Bot. How can I help you today?",
    },
    {
      id: 2,
      text: "I am looking forward to meeting you in the event! 😊",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <MessageCard message={message} />
        </motion.div>
      ))}
    </div>
  );
};

export default Messages;