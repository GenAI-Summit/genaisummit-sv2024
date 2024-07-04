import SectionLayout from "../layouts/SectionLayout";
import SubsectionLayout from "../layouts/SubsectionLayout";
import CompanyCard from "./CompanyCard";

const Sponsors = async () => {
  const sponsors = await getSponsorsData();
  const types = [
    "Platinum Sponsor",
    "Gold Sponsor",
    "Silver Sponsor",
    "Special Sponsor",
  ];
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
      >
        {types.map((type) => {
          const filteredSponsors = sponsors.filter(
            (sponsor) => sponsor.type === type,
          );
          return (
            <SubsectionLayout key={type} title={type}>
              <div className="flex flex-wrap items-center mt-2 gap-x-8 gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <CompanyCard key={sponsor.id} company={sponsor} />
                ))}
              </div>
            </SubsectionLayout>
          );
        })}
      </SectionLayout>
    </>
  );
};

const getSponsorsData = async () => {
  const sponsors = [
    {
      id: 0,
      name: "Amazon",
      type: "Platinum Sponsor",
      image: "/sponsors/amazon.webp",
      url: "https://www.amazon.com/",
      description:
        "Amazon, founded by Jeff Bezos in 1994, has evolved from an online bookstore into a global e-commerce and technology powerhouse. Offering a vast range of products and services, Amazon's innovations include Amazon Prime, Amazon Web Services (AWS), and smart home devices like the Echo. While celebrated for revolutionizing retail and cloud computing, Amazon also faces scrutiny over its labor practices and market impact.",
    },
    {
      id: 1,
      name: "IBM",
      type: "Gold Sponsor",
      image: "/sponsors/ibm.webp",
      url: "https://www.ibm.com/",
      description:
        "IBM, established in 1911, is a global technology and consulting company renowned for its contributions to hardware, software, and artificial intelligence. Known for innovations like the mainframe computer and Watson AI, IBM has been a pioneer in cloud computing, quantum computing, and enterprise solutions. Despite shifting market dynamics, IBM continues to influence numerous industries with its cutting-edge technology and comprehensive IT services.",
    },
    {
      id: 2,
      name: "IOBC",
      type: "Gold Sponsor",
      image: "/sponsors/iobc.webp",
      url: "https://www.iobc.capital/",
      description:
        "IOBC is a venture capital firm specializing in investments across the technology and biotechnology sectors. With a focus on early to growth-stage companies, IOBC provides strategic support and funding to innovative startups. The firm is dedicated to fostering breakthroughs in cutting-edge fields, leveraging its expertise and network to drive success and growth for its portfolio companies.",
    },
    {
      id: 3,
      name: "SambaNova",
      type: "Silver Sponsor",
      image: "/sponsors/sambanova.webp",
      url: "https://www.sambanova.ai/",
      description:
        "SambaNova Systems, founded in 2017, is a leading company in AI and machine learning infrastructure. Specializing in advanced software and hardware solutions, SambaNova offers innovative platforms to accelerate AI workloads. Its flagship product, the DataScale system, provides unparalleled performance for enterprise AI applications, enabling organizations to harness the full potential of artificial intelligence and transform their data-driven strategies.",
    },
    {
      id: 4,
      name: "Otter",
      type: "Silver Sponsor",
      image: "/sponsors/otter.webp",
      url: "https://otter.ai/",
      description:
        "Otter.ai, founded in 2016, is a leading provider of AI-powered transcription and collaboration tools. Its platform offers real-time transcription, meeting summaries, and voice recognition, making it easier for users to capture and share information from meetings, lectures, and conversations. Otter.ai's advanced features enhance productivity and communication, making it a valuable tool for professionals, students, and organizations looking to streamline their workflow.",
    },
    {
      id: 5,
      name: "Iren",
      type: "Silver Sponsor",
      image: "/sponsors/iren.webp",
      url: "https://iren.ai/",
      description:
        "Iren, previously known as Iris Energy, is a next-generation data center operator powered entirely by renewable energy. Focused on Bitcoin mining, AI cloud services, and other power-intensive computing tasks, Iren operates facilities in Canada and the USA. The company is dedicated to environmental sustainability, leveraging renewable energy to support both technological advancements and local communities.",
    },
    {
      id: 6,
      name: "Hyperbolic Labs",
      type: "Special Sponsor",
      image: "/sponsors/hyperboliclabs.webp",
      url: "https://hyperboliclabs.com/",
      description:
        "Hyperbolic Labs is an innovative technology company specializing in the development of advanced AI solutions and cutting-edge software applications. Focused on enhancing efficiency and automation across various industries, Hyperbolic Labs leverages state-of-the-art machine learning and data analytics to deliver impactful results. Their expertise spans numerous sectors, providing tailored solutions that drive technological advancement and operational excellence.",
    },
    {
      id: 7,
      name: "TaskUs",
      type: "Special Sponsor",
      image: "/sponsors/taskus.webp",
      url: "https://www.taskus.com/",
      description:
        "TaskUs is a leading provider of outsourced digital services and next-generation customer experience for innovative companies. Specializing in customer support, content moderation, and AI operations, TaskUs helps clients scale operations and enhance efficiency. With a global presence and a commitment to employee well-being, TaskUs partners with high-growth companies to deliver customized, tech-enabled solutions that drive business success.",
    },
    {
      id: 8,
      name: "MetaSill",
      type: "Special Sponsor",
      image: "/sponsors/metasill.webp",
      url: "https://www.metasill.com/",
      description:
        "Metasill is a cutting-edge technology company specializing in developing advanced materials and solutions for the electronics and semiconductor industries. Focused on innovation and performance, Metasill's products enhance device efficiency and reliability. Leveraging state-of-the-art research and development, the company aims to push the boundaries of material science, delivering high-quality solutions that meet the evolving needs of modern technology applications.",
    },
  ];
  return sponsors;
};

export default Sponsors;
