import SectionLayout from "../layouts/SectionLayout";
import SubsectionLayout from "../layouts/SubsectionLayout";
import SessionCard from "../components/SessionCard";
import { getAgenda } from "/lib/api";

const Agenda = async () => {
  const events = await getAgendaData();
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT"
      >
        {events.map((arr) => (
          <SubsectionLayout key={arr[0].date} title={arr[0].date}>
            {arr.map((item) => (
              <SessionCard key={item.id} item={item} />
            ))}
          </SubsectionLayout>
        ))}
      </SectionLayout>
    </>
  );
};

const getAgendaData = async () => {
  const agenda = await getAgenda();

  const parseTime = (timeString) => {
    const [start] = timeString.split("-");
    return new Date(`1970-01-01T${start}`);
  };

  agenda.sort((a, b) => {
    const dateComparison = new Date(a.date) - new Date(b.date);
    if (dateComparison === 0) {
      return parseTime(a.time) - parseTime(b.time);
    }
    return dateComparison;
  });

  const groupedEvents = agenda.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  return Object.values(groupedEvents);
};

export default Agenda;
