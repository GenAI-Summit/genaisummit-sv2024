import SectionLayout from "../Layouts/SectionLayout";
import IndexTicketCard from "./IndexTicketCard";

const IndexTickets = () => {
  const tickets = [
    {
      id: 1,
      name: "General Admission",
      price: 199.0,
      originalPrice: 299.0,
      saveText: "Save $100 until Sept 1",
      description:
        "Enjoy access to in-person sessions, partner showcases, and delicious food, with keynote viewing available from on-site broadcasting areas.",
    },
    {
      id: 2,
      name: "VIP Admission",
      price: 599.0,
      originalPrice: 799.0,
      saveText: "Save $200 until Sept 1",
      description:
        "Enjoy all the benefits of General Admission, plus exclusive access to VIP lounges, priority seating, and more.",
    },
    {
      id: 3,
      name: "Student Pass",
      price: 99.0,
      originalPrice: 199.0,
      saveText: "Save $100 until Sept 1",
      description:
        "Enjoy all the benefits of General Admission at a discounted rate. Must provide valid student ID.",
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
