import SectionLayout from "../Layouts/SectionLayout";
import IndexTicketCard from "./TicketCard";

const Tickets = ({ widget }) => {
  const tickets = [
    {
      id: 1,
      name: "One-Day Pass",
      price: 99.0,
      originalPrice: 129.0,
      saveText: "Save $30 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/",
      description: [
        "Access to all sessions, workshops, and networking opportunities for any single day of the summit.",
      ],
    },
    {
      id: 2,
      name: "Three-Day Pass",
      price: 149.0,
      originalPrice: 199.0,
      saveText: "Save $50 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/",
      description: [
        "Access to all sessions, workshops, and networking events across the entire three-day summit.",
      ],
    },
    {
      id: 3,
      name: "Student Pass",
      price: 99.0,
      originalPrice: 149.0,
      saveText: "Save $50 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/7zyww8zo",
      description: [
        "Access to all summit activities and sessions. Must purchase with a valid .edu email address.",
      ],
    },
    {
      id: 4,
      name: "VIP Pass",
      price: 1099.0,
      originalPrice: 1499.0,
      saveText: "Save $400 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/",
      description: [
        "All-session access, VIP dinner with speakers, and premium networking events.",
      ],
    },
    {
      id: 5,
      name: "Booth Area A",
      price: 3999.0,
      originalPrice: 5999.0,
      saveText: "Save $2000 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/exhibitor",
      description: [
        "Located in the Exhibition Area and provides a space of 16 x 6 feet. Includes two tables measuring 96 x 26.5 inches, with a height of 29 inches. Publication materials such as roll-up banners and posters are welcomed. WiFi coverage is guaranteed and included. Type A Exhibitors can also choose their booth location on a first-come, first-served basis. The Whova Lead Scan feature (helps track every attendee who stops by through scanning) is included.",
      ],
    },
    {
      id: 6,
      name: "Booth Area B",
      price: 1999.0,
      originalPrice: 2999.0,
      saveText: "Save $1000 until Sept 1",
      url: "https://whova.com/portal/registration/genai_202405/exhibitor",
      description: [
        "Located in the Exhibition Area and provides a space of 8 x 6 feet. Includes one table measuring 96 x 26.5 inches, with a height of 29 inches. Publication materials such as roll-up banners and posters are welcomed. WiFi coverage is guaranteed and included."
      ],
    },
  ];
  return (
    <SectionLayout title="Get Tickets Now" widget={widget}>
      <div
        className="mt-8 md:mt-10 flex flex-wrap justify-start md:gap-x-[4%] lg:gap-x-[3%] gap-y-8"
        id="tickets-section"
      >
        {tickets.map((ticket) => (
          <div className="w-full md:w-[48%] lg:w-[31%]" key={ticket.id}>
            <IndexTicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Tickets;
