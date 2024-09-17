import SectionLayout from "@/layouts/SectionLayout";
import TicketCard from "@/components/TicketCard";

const tickets = [
  {
    id: 1,
    name: "One-Day Pass",
    price: 129.0,
    originalPrice: 149.0,
    saveText: "Save $20 at early bird phase",
    platforms: [
      {
        name: "Luma",
        url: "https://lu.ma/sc9tn1yv",
        logo: "/images/icons/luma.png",
      },
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405",
        logo: "/images/icons/whova.png",
      },
      {
        name: "Eventbrite",
        url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
        logo: "/images/icons/eventbrite.png",
      },
    ],
    description: [
      "Access to all sessions, workshops, and networking opportunities for any single day of the summit.",
    ],
  },
  {
    id: 2,
    name: "Three-Day Pass",
    price: 189.0,
    originalPrice: 219.0,
    saveText: "Save $30 now",
    platforms: [
      {
        name: "Luma",
        url: "https://lu.ma/sc9tn1yv",
        logo: "/images/icons/luma.png",
      },
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405",
        logo: "/images/icons/whova.png",
      },
      {
        name: "Eventbrite",
        url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
        logo: "/images/icons/eventbrite.png",
      },
    ],
    description: [
      "Access to all sessions, workshops, and networking events across the entire three-day summit.",
    ],
  },
  {
    id: 3,
    name: "Student Pass",
    price: 99.0,
    originalPrice: 149.0,
    saveText: "",
    student: true,
    platforms: [
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405/7zyww8zo",
        logo: "/images/icons/whova.png",
      },
    ],
    description: [
      "Access to all summit activities and sessions. Must purchase with a valid .edu email address.",
    ],
  },
  {
    id: 4,
    name: "VIP Pass",
    price: 1099.0,
    originalPrice: 1499.0,
    saveText: "",
    platforms: [
      {
        name: "Luma",
        url: "https://lu.ma/sc9tn1yv",
        logo: "/images/icons/luma.png",
      },
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405",
        logo: "/images/icons/whova.png",
      },
      {
        name: "Eventbrite",
        url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
        logo: "/images/icons/eventbrite.png",
      },
    ],
    description: [
      "All-session access, VIP dinner with speakers, and premium networking events.",
    ],
  },
  {
    id: 5,
    name: "Booth Area A",
    price: 3999.0,
    originalPrice: 5999.0,
    saveText: "",
    platforms: [
      {
        name: "Luma",
        url: "https://lu.ma/sc9tn1yv",
        logo: "/images/icons/luma.png",
      },
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405/exhibitor",
        logo: "/images/icons/whova.png",
      },
      {
        name: "Eventbrite",
        url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
        logo: "/images/icons/eventbrite.png",
      },
    ],
    description: [
      "Showcase your innovations in our premium booth area. Includes advanced lead tracking technology.",
    ],
    benefits: [
      [
        "Located in the exhibition area",
        "16 x 6 feet of space",
        "Two 96 x 26.5-inch tables (29 inches high)",
        "Publicity materials (roll-up banners and posters) allowed",
        "WIFI coverage included",
        "3 Tickets (1 VIP included)",
        "Pick booth location (first come/served basis) included",
        "Whova Lead Scan included for attendee tracking",
      ],
      [
        "Located in the exhibition area",
        "8 x 6 feet of space",
        "One 96 x 26.5-inch table (29 inches high)",
        "Publicity materials (roll-up banners and posters) allowed",
        "WIFI coverage included",
        "2 Tickets (option to add 1 VIP for $300)",
        "Pick booth location (first come/served basis) for $100",
        "Whova Lead Scan included for attendee tracking for $500",
      ],
    ],
  },
  {
    id: 6,
    name: "Booth Area B",
    price: 1999.0,
    originalPrice: 2999.0,
    saveText: "",
    platforms: [
      {
        name: "Luma",
        url: "https://lu.ma/sc9tn1yv",
        logo: "/images/icons/luma.png",
      },
      {
        name: "Whova (Recommended)",
        url: "https://whova.com/portal/registration/genai_202405/exhibitor",
        logo: "/images/icons/whova.png",
      },
      {
        name: "Eventbrite",
        url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
        logo: "/images/icons/eventbrite.png",
      },
    ],
    description: [
      "Strategic visibility in a streamlined space. Connect with attendees efficiently in our popular exhibition area.",
    ],
    benefits: [
      [
        "Located in the exhibition area",
        "16 x 6 feet of space",
        "Two 96 x 26.5-inch tables (29 inches high)",
        "Publicity materials (roll-up banners and posters) allowed",
        "WIFI coverage included",
        "3 Tickets (1 VIP included)",
        "Pick booth location (first come/served basis) included",
        "Whova Lead Scan included for attendee tracking",
      ],
      [
        "Located in the exhibition area",
        "8 x 6 feet of space",
        "One 96 x 26.5-inch table (29 inches high)",
        "Publicity materials (roll-up banners and posters) allowed",
        "WIFI coverage included",
        "2 Tickets (option to add 1 VIP for $300)",
        "Pick booth location (first come/served basis) for $100",
        "Whova Lead Scan included for attendee tracking for $500",
      ],
    ],
  },
];

const Tickets = ({ widget }) => {
  return (
    <SectionLayout title="Get Tickets Now" widget={widget}>
      <div
        className="mt-8 md:mt-10 flex flex-wrap justify-start md:gap-x-[4%] xl:gap-x-[3%] gap-y-8"
        id="tickets-section"
      >
        {tickets.map((ticket) => (
          <div className="w-full md:w-[48%] xl:w-[31%]" key={ticket.id}>
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Tickets;
