import SectionLayout from "../layouts/SectionLayout";
import CompanyCard from "../components/CompanyCard";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {exhibitors.map((exhibitor) => (
          <CompanyCard key={exhibitor.id} company={exhibitor} />
        ))}
      </div>
    </SectionLayout>
  );
};

const getExhibitiorsData = async () => {
  return [
    {
      id: 0,
      name: "Microsoft",
      image: "/exhibitors/microsoft.webp",
      url: "https://www.microsoft.com",
      description:
        "Microsoft, founded in 1975 by Bill Gates and Paul Allen, is a global leader in software, services, devices, and solutions. Known for its flagship products like Windows, Office, and Azure, Microsoft has significantly influenced personal computing and enterprise solutions. The company's commitment to innovation extends to areas such as cloud computing, artificial intelligence, and gaming, with the Xbox brand. Microsoft continues to drive digital transformation across various industries worldwide.",
    },
    {
      id: 1,
      name: "Amazon",
      image: "/exhibitors/amazon.webp",
      url: "https://www.amazon.com",
      description:
        "Amazon, founded by Jeff Bezos in 1994, has evolved from an online bookstore into a global e-commerce and technology powerhouse. Offering a vast range of products and services, Amazon's innovations include Amazon Prime, Amazon Web Services (AWS), and smart home devices like the Echo. While celebrated for revolutionizing retail and cloud computing, Amazon also faces scrutiny over its labor practices and market impact.",
    },
    {
      id: 2,
      name: "IBM",
      image: "/exhibitors/ibm.webp",
      url: "https://www.ibm.com",
      description:
        "IBM, established in 1911, is a global technology and consulting company renowned for its contributions to hardware, software, and artificial intelligence. Known for innovations like the mainframe computer and Watson AI, IBM has been a pioneer in cloud computing, quantum computing, and enterprise solutions. Despite shifting market dynamics, IBM continues to influence numerous industries with its cutting-edge technology and comprehensive IT services.",
    },
    {
      id: 3,
      name: "IOBC",
      image: "/exhibitors/iobc.webp",
      url: "https://www.iobc.capital/#/",
      description:
        "IOBC is a venture capital firm specializing in investments across the technology and biotechnology sectors. With a focus on early to growth-stage companies, IOBC provides strategic support and funding to innovative startups. The firm is dedicated to fostering breakthroughs in cutting-edge fields, leveraging its expertise and network to drive success and growth for its portfolio companies.",
    },
    {
      id: 4,
      name: "Zilliz",
      image: "/exhibitors/zilliz.webp",
      url: "https://zilliz.com",
      description:
        "Zilliz is a leading technology company specializing in high-performance, AI-powered data infrastructure. Known for developing Milvus, an open-source vector database, Zilliz helps organizations manage and analyze large-scale, unstructured data efficiently. The company focuses on accelerating AI and machine learning applications, providing scalable solutions that enhance data processing and retrieval. Zilliz's innovations support various industries in leveraging big data to drive insights and improve decision-making.",
    },
    {
      id: 5,
      name: "Otter.ai",
      image: "/exhibitors/otter.webp",
      url: "https://otter.ai",
      description:
        "Otter.ai, founded in 2016, specializes in AI-driven transcription and collaboration tools. Its platform offers real-time transcription, meeting summaries, and voice recognition to help users efficiently capture and share information from meetings, lectures, and conversations. By enhancing productivity and communication, Otter.ai serves as a valuable resource for professionals, students, and organizations aiming to streamline their workflow and improve information accessibility.",
    },
    {
      id: 6,
      name: "IDA Ireland",
      image: "/exhibitors/idaireland.webp",
      url: "https://www.idaireland.com",
      description:
        "IDA Ireland is the country's inward investment promotion agency, responsible for attracting foreign direct investment (FDI) to Ireland. It supports multinational companies in establishing and expanding their operations, providing resources and strategic advice. IDA Ireland plays a crucial role in fostering economic growth and job creation by promoting Ireland as a premier destination for global business, leveraging the country's skilled workforce, business-friendly environment, and robust infrastructure.",
    },
    {
      id: 7,
      name: "Iren",
      image: "/exhibitors/iren.webp",
      url: "https://www.iren.com",
      description:
        "Iren, previously known as Iris Energy, is a next-generation data center operator powered entirely by renewable energy. Focused on Bitcoin mining, AI cloud services, and other power-intensive computing tasks, Iren operates facilities in Canada and the USA. The company is dedicated to environmental sustainability, leveraging renewable energy to support both technological advancements and local communities.",
    },
    {
      id: 8,
      name: "ABAKA AI",
      image: "/exhibitors/abaka.webp",
      url: "https://abaka.ai",
      description:
        "ABAKA AI is a leading provider of AI-driven financial wellness solutions. It offers intelligent digital assistants and personalized financial planning tools to help organizations enhance their employees' financial health. By leveraging advanced AI and machine learning technologies, ABAKA.ai delivers tailored financial advice and insights, enabling users to make informed decisions about their financial future. The platform supports financial institutions in engaging clients and improving financial literacy and well-being.",
    },
    {
      id: 9,
      name: "Mountain Lion",
      image: "/exhibitors/mountainlion.webp",
      url: "https://mlion.ai/",
      description:
        "Mountain Lion is a technology company specializing in AI-powered solutions for wealth and asset management. By leveraging advanced machine learning algorithms, Mountain Lion offers comprehensive tools for predictive analytics, risk management, and portfolio optimization. Their innovative platform aims to enhance decision-making processes and improve financial outcomes for clients, helping asset managers and financial advisors navigate complex market environments with greater efficiency and insight.",
    },
  ];
};

export default Exhibitors;
