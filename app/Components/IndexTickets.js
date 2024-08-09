import SectionLayout from "../Layouts/SectionLayout";
import IndexTicketCard from "./IndexTicketCard";

const IndexTickets = () => {
  const tickets = [
    {
      id: 1,
      name: "One-Day Pass",
      price: 99.0,
      originalPrice: 129.0,
      saveText: "Save $30 until Sept 1",
      description: [
        "Gain access to all sessions, workshops, and networking opportunities for any single day of the summit.",
        "Access to all sessions, workshops, and networking opportunities for any single day of the summit.",
      ],
    },
    {
      id: 2,
      name: "Three-Day Pass",
      price: 149.0,
      originalPrice: 199.0,
      saveText: "Save $50 until Sept 1",
      description: [
        "Enjoy comprehensive access to all sessions, workshops, and networking events across the entire three-day summit.",
        "Access to all sessions, workshops, and networking events across the entire three-day summit.",
      ],
    },
    {
      id: 3,
      name: "Student Pass",
      price: 99.0,
      originalPrice: 149.0,
      saveText: "Save $50 until Sept 1",
      description: [
        "Specially priced for students, this ticket provides full three-day access to all summit activities and sessions.",
        "Access to all summit activities and sessions. Must purchase with a valid .edu email address.",
      ],
    },
    {
      id: 4,
      name: "VIP Pass",
      price: 1099.0,
      originalPrice: 1499.0,
      saveText: "Save $200 per ticket until Sept 1",
      description: [
        "Experience the summit with exclusive benefits including all-session access, VIP dinner, and premium networking events.",
        "All-session access, VIP dinner with speakers, and premium networking events.",
      ],
    },
  ];
  return (
    <SectionLayout title="Get Tickets Now">
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
        {tickets.map((ticket) => (
          <div className="w-full md:w-1/3" key={ticket.id}>
            <IndexTicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default IndexTickets;
