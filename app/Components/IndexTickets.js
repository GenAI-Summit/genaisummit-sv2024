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
      saveText: "Save $400 until Sept 1",
      description: [
        "Experience the summit with exclusive benefits including all-session access, VIP dinner, and premium networking events.",
        "All-session access, VIP dinner with speakers, and premium networking events.",
      ],
    },
    {
      id: 5,
      name: "Booth Area",
      price: 1999.0,
      originalPrice: 2999.0,
      saveText: "Save $1000 until Sept 1",
      description: [
        "Located in the exhibition area, provides 8 x 6 feet space including 96 x 26.5 inch table with height of 29 inch. Publication materials such as roll-up banners/posters are welcomed among the area.",
      ],
    },
  ];
  return (
    <SectionLayout title="Get Tickets Now">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-4 w-full max-w-[1400px]">
          {tickets.map((ticket) => (
            <div
              className="w-full md:w-[48%] 2xl:w-[30%] 2xl:max-w-[430px]"
              key={ticket.id}
            >
              <IndexTicketCard ticket={ticket} />
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default IndexTickets;
