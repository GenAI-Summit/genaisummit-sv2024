export const metadata = {
  title: "Agenda | GenAI Summit Silicon Valley 2024 | GenAI X, Inc. (GPT DAO)",
  description:
    "Explore cutting-edge GenAI topics over 3 days. From keynotes to panel discussions, dive deep into the latest advancements and applications.",
};

const AgendaLayout = ({ children }) => {
  return (
    <div className="max-w-maxWidth w-full lg:w-5/6 h-full px-5 pt-20">
      {children}
    </div>
  );
};

export default AgendaLayout;
