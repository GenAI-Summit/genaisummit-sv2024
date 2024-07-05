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
    {
      id: 10,
      name: "Espeed Capital",
      image: "/exhibitors/espeed.webp",
      url: "https://www.espeedcap.com",
      description:
        "Espeed Capital is a venture capital firm focused on investing in early-stage technology companies. With a portfolio spanning various industries, including AI, fintech, and e-commerce, Espeed Capital provides strategic support and funding to innovative startups. The firm aims to drive growth and success for its portfolio companies by leveraging its expertise, network, and resources to help them achieve their full potential.",
    },
    {
      id: 11,
      name: "Puffer",
      image: "/exhibitors/puffer.webp",
      url: "https://www.puffer.fi/",
      description:
        "Puffer is a decentralized finance (DeFi) platform specializing in liquid restaking for Ethereum. It enables users to stake their ETH and earn rewards while maintaining liquidity through its native token, pufETH. Puffer's protocol features advanced security measures, permissionless validator participation, and the ability to enhance rewards by leveraging pufETH across various DeFi ecosystems. This approach aims to decentralize Ethereum and maximize user returns.",
    },
    {
      id: 12,
      name: "Exabits",
      image: "/exhibitors/exabits.webp",
      url: "https://exabits.ai",
      description:
        "Exabits is a pioneering technology company focused on tokenizing GPU power to create an AI compute economy. By offering a decentralized network of over 65,000 GPUs across global datacenters, Exabits enables users to participate in and benefit from the AI revolution. The platform provides simplified access to high-performance computing resources, facilitating advancements in AI and blockchain technology while driving innovation and efficiency in various industries.",
    },
    {
      id: 13,
      name: "Tele AI",
      image: "/exhibitors/teleai.webp",
      url: "https://cn.94ai.com/",
      description:
        "Tele AI, also known as 94AI, is an intelligent user operation service provider that leverages advanced artificial intelligence to enhance user engagement and operational efficiency. The company offers AI-driven solutions for customer interaction, data analysis, and personalized marketing, enabling businesses to optimize their user experience and drive growth. Tele AI focuses on delivering innovative, scalable technology to support the evolving needs of modern enterprises.",
    },
    {
      id: 14,
      name: "Akool",
      image: "/exhibitors/akool.webp",
      url: "https://akool.com",
      description:
        "Akool is an advanced AI-powered platform designed for dynamic content creation and digital storytelling. It offers a suite of tools including face swaps, realistic avatars, video translation, talking photos, and image generation. Akool aims to enhance marketing and advertising by providing innovative and customizable AI solutions that help brands create engaging, high-quality content efficiently. Its technology is trusted by numerous businesses to elevate their digital presence and connect with audiences in impactful ways.",
    },
    {
      id: 15,
      name: "ArtX Gallery",
      image: "/exhibitors/artxgallery.webp",
      url: "https://www.artxgallery.com",
      description:
        "ArtX Gallery is a digital art platform that showcases and promotes contemporary artists and their works. By leveraging blockchain technology, ArtX Gallery provides a secure and transparent marketplace for art collectors and enthusiasts. The platform features a diverse collection of digital art pieces, including NFTs (non-fungible tokens), enabling artists to monetize their creations and art lovers to discover and collect unique digital artworks.",
    },
    {
      id: 16,
      name: "TaskUs",
      image: "/exhibitors/taskus.webp",
      url: "https://www.taskus.com",
      description:
        "TaskUs is a leading provider of outsourced digital services and next-generation customer experience for innovative companies. Specializing in customer support, content moderation, and AI operations, TaskUs helps clients scale operations and enhance efficiency. With a global presence and a commitment to employee well-being, TaskUs partners with high-growth companies to deliver customized, tech-enabled solutions that drive business success.",
    },
    {
      id: 17,
      name: "OneGen",
      image: "/exhibitors/1gen.webp",
      url: "https://www.1gen.ai/",
      description:
        "1Gen is an innovative AI company focused on community engagement through advanced AI moderation tools. Their platform features an AI moderator that uses a comprehensive knowledge base to provide insightful, engaging, and customizable interactions. 1Gen aims to empower communities by leveraging AI to enhance communication and interaction, ensuring accurate and proactive engagement tailored to the unique needs and personalities of each community.",
    },
    {
      id: 18,
      name: "Covalent",
      image: "/exhibitors/covalent.webp",
      url: "https://www.covalenthq.xyz",
      description:
        "Covalent is a powerful AI compute orchestration platform designed to simplify AI development, deployment, and scaling. It offers developers seamless access to GPU resources across clouds and on-premises environments, enabling efficient training of AI models and execution of complex simulations. By maximizing infrastructure utilization and providing dynamic resource allocation, Covalent helps organizations optimize their AI workflows and accelerate innovation in various fields.",
    },
    {
      id: 19,
      name: "UpMarket",
      image: "/exhibitors/upmarket.webp",
      url: "https://www.upmarket.com",
      description:
        "UpMarket is a platform designed for accredited investors to access alternative investments, including shares in private companies, hedge funds, private equity, and real estate. It offers opportunities in pre-IPO companies, crypto, and various market funds, allowing investors to diversify their portfolios. UpMarket emphasizes transparency, robust due diligence, and a seamless investment process, catering to sophisticated asset classes while providing comprehensive post-investment monitoring and support.",
    },
  ];
};

export default Exhibitors;
