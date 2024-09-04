import { motion } from "framer-motion";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const questions = [
    {
      id: 1,
      text: "I want to show my product at the event.",
      url: "https://tally.so/r/nPl9xe",
    },
    {
      id: 2,
      text: "How can I buy tickets?",
      url: "https://whova.com/portal/registration/genai_202405/",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      {questions.map((question, index) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
        >
          <QuestionCard question={question} />
        </motion.div>
      ))}
    </div>
  );
};

export default Questions;