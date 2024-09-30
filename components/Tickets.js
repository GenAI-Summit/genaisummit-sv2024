"use client";

import { useRouter } from "next/navigation";
import SectionLayout from "@/layouts/SectionLayout";
import TicketCard from "@/components/TicketCard";
import Stripe from "@/components/Stripe";

const Tickets = ({ widget }) => {
  const router = useRouter();

  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  const onEduVerify = () => {
    router.push("/edu-verify");
  };

  const onMedia = () => {
    window.open("https://form.gptdao.ai/media-pass", "_blank");
  };

  const tickets = [
    {
      id: 1,
      name: "One-Day Pass",
      price: "$179",
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
        "Access to all sessions, workshops, and networking opportunities for any single day of the summit.",
      ],
    },
    {
      id: 2,
      name: "Three-Day Pass",
      price: "$239",
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
      name: "Group Tickets",
      price: "25% Off",
      saveText: "",
      platforms: [
        {
          name: "Whova",
          url: "https://whova.com/portal/registration/genai_202405",
          logo: "/images/icons/whova.png",
        },
      ],
      description: [
        "Available for VIP Pass and General Admission Three-Day Pass with three or more tickets.",
      ],
    },
    {
      id: 4,
      name: "Student Pass",
      price: "$99.0",
      originalPrice: "$149.0",
      saveText: "Save $50 now",
      stripeText: "Early Bird",
      ModalDescription: (
        <div className="mt-4">
          <p className="text-left text-base md:text-lg text-theme1Light1">
            <span className="font-bold">Note: </span>
            <span>To get student discount, you need to </span>
            <span
              className="text-theme1Color3 cursor-pointer hover:underline"
              onClick={() => {
                onEduVerify();
                umamiTrack("Ticket Modal - Go to Verify");
              }}
            >
              verify your educational email
            </span>
            <span> first.</span>
          </p>
        </div>
      ),
      platforms: [
        {
          name: "Whova",
          url: "https://whova.com/portal/registration/genai_202405/7zyww8zo",
          logo: "/images/icons/whova.png",
        },
      ],
      description: [
        "Access to all summit activities and sessions. Must purchase with a valid .edu email address. (Three days)",
      ],
    },
    {
      id: 5,
      name: "VIP Pass",
      price: "$1099",
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
        "All-session access, VIP dinner with speakers, and premium networking events. (Three days)",
      ],
    },
    {
      id: 6,
      name: "Booth Area A",
      price: "$5999",
      platforms: [
        /*
        {
          name: "Luma",
          url: "https://lu.ma/sc9tn1yv",
          logo: "/images/icons/luma.png",
        },
        */
        {
          name: "Whova",
          url: "https://whova.com/portal/registration/genai_202405/exhibitor",
          logo: "/images/icons/whova.png",
        },
        /*
        {
          name: "Eventbrite",
          url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
          logo: "/images/icons/eventbrite.png",
        },
        */
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
      id: 7,
      name: "Booth Area B",
      price: "$3999",
      saveText: "",
      stripeText: "",
      platforms: [
        /*
        {
          name: "Luma",
          url: "https://lu.ma/sc9tn1yv",
          logo: "/images/icons/luma.png",
        },
        */
        {
          name: "Whova",
          url: "https://whova.com/portal/registration/genai_202405/exhibitor",
          logo: "/images/icons/whova.png",
        },
        /*
        {
          name: "Eventbrite",
          url: "https://www.eventbrite.com/e/genai-summit-silicon-valley-2024-tickets-999543330007",
          logo: "/images/icons/eventbrite.png",
        },
        */
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
          "Complimentary AI agent audit report (optional bonus, value $2999, and powered by Fenz.AI)",
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
          "Complimentary AI agent audit report (optional bonus, value $2999, and powered by Fenz.AI)",
        ],
      ],
    },
    {
      id: 8,
      name: "Media Pass",
      price: null,
      originalPrice: null,
      saveText: "",
      btnText: "Claim Ticket",
      ModalDescription: (
        <div className="mt-4">
          <p className="text-left text-base md:text-lg text-theme1Light1">
            <span className="font-bold">Note: </span>
            <span>To get approval of a Media Pass, please </span>
            <span
              className="text-theme1Color3 cursor-pointer hover:underline"
              onClick={() => {
                onMedia();
                umamiTrack("Ticket Modal - Go to Verify");
              }}
            >
              apply with this form
            </span>
            <span> first.</span>
          </p>
        </div>
      ),
      platforms: [
        {
          name: "Whova",
          url: "https://whova.com/portal/registration/genai_202405/utml7s1n",
          logo: "/images/icons/whova.png",
        },
      ],
      description: [
        "Full access to the summit (except for the VIP lounge) with a media pass.",
      ],
    },
  ];

  return (
    <SectionLayout title="Get Tickets Now" widget={widget}>
      <div
        className="mt-8 md:mt-10 flex flex-wrap justify-start md:gap-x-[4%] xl:gap-x-[3%] gap-y-8"
        id="tickets-section"
      >
        {tickets.map((ticket) => (
          <div className="w-full md:w-[48%] xl:w-[31%]" key={ticket.id}>
            {ticket.stripeText ? (
              <Stripe text={ticket.stripeText}>
                <TicketCard ticket={ticket} />
              </Stripe>
            ) : (
              <TicketCard ticket={ticket} />
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Tickets;
