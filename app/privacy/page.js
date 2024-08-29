import SectionLayout from "../Layouts/SectionLayout";
import SubSectionLayout from "../Layouts/SubSectionLayout";
import SectionEnter from "../Motions/SectionEnter";

const PrivacyPage = () => {
  const privacyPolicy = [
    {
      title: "Introduction",
      paragraphs: [
        "1.1 This Privacy and Cookies Policy sets out the privacy and cookies policy of GPTDAO, a company organizing the summit. For the purpose of data protection laws, the data controller is GPTDAO.",
        "1.2 By providing your personal information to GPTDAO, you consent to the collection and use of it and any other information provided to GPTDAO in accordance with this Privacy Policy. If at any time you wish to change the uses of your personal information to which you have consented, please contact us at genaix@gptdao.ai.",
        "1.3 GPTDAO may revise this Privacy Policy at any time by posting an update on its website(s). This Privacy Policy was last updated in July 2024.",
      ],
    },
    {
      title: "Collection of Personal Information",
      paragraphs: [
        "2.1 We acknowledge and agree that any personal data may be processed or otherwise used by us solely to the extent required for the use of the Website, your attendance of our summit, the execution of your orders and the performance of any of your requests and in accordance with the applicable law on the protection of personal data. Personal data comprises any information relating to an identified or identifiable natural person (\"Personal Data\"). Personal Data includes, but is not limited to your name, address, e-mail address, phone number and financial details like credit card or debit card numbers.",
        "2.2 We collect, process and use the following information:",
        "Information you give us: We collect information you provide to us over the Website. This may include in particular your personal information, email address, payment details or other information uploaded by you (e.g. photos, texts etc.). Your Personal Data will be kept confidential and will only be used to complete the transaction, handle your attendance at our summit, send you our newsletter and/or provide you with other Website services.",
        "Information from other sources: We reserve the right to request information from third-parties (e.g. credit card information services) with regard to your payment behavior in order to be able to offer you certain payment options.",
        "Once a payment is completed, all your financial details are erased again. We do not store any of this data.",
        "Automatic information: As soon as you visit the Website, we receive and save certain pieces of information, e.g. the IP address used to connect your computer to the Internet, web browser type and version, operating system, date and time of your visit, the websites you visit within our service and the website you came from if you visit our Website via a link from a third party website. We do this to learn more about your interests and to improve our Website and services.",
      ],
    },
    {
      title: "Storage and retention of your information",
      paragraphs: [
        "3.1 If you would like to change, update or delete your personal information in our databases, you may do so through your account profile or by contacting our customer support. We will make reasonable efforts to comply with your request. Keep in mind, however, that there will be residual information that will remain within our databases, access logs, and other records, which may or may not contain inaccurate or outdated personal information. The residual information will not be used for commercial purposes.",
        "We will retain your information for as long as your account is active, as needed to provide you with our services or as otherwise required by law. If you wish to cancel your account or request that we no longer use your information please contact us at genaix@gptdao.ai. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
        "3.2 Your personal data will be held and used by GPTDAO, and any third party hosting provider acting on its behalf, in order to run the event and for analyzing visitor traffic with a view to improving the event experience for visitors.",
      ],
    },
    {
      title: "Transfer Of Data/Disclosure",
      paragraphs: [
        "4.1 Except as set forth in this Privacy Policy or when specifically agreed to by you, we will not disclose Personal Data we gather from you through your use of our Website to third parties. However, where applicable, your Personal Data will be sent to those companies involved in the fulfillment of your orders (e.g. financial details like credit card or debit card numbers to those companies involved in the payment transaction). We may also share your Personal Data with third party service providers that assist us with processing your Personal Data or support or help us to provide other services to you (e.g. data storage providers), but only in accordance with the purposes for which we collected the data. In case we share your Personal Data with such third party companies, we take steps to ensure that the third party companies use appropriate safeguards to protect your Personal Data. Furthermore, we share your personal information in the clearly identifiable public areas of our Website.",
        "4.2 We reserve the right to disclose your Personal Data as we reasonably feel is necessary to protect our systems or business, including but not limited to complying with judicial orders or with government agencies or law enforcement officials to the extent the disclosure is in accordance with applicable data protection laws.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "The security of your Personal Information is important to us. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, GPTDAO cannot guarantee its absolute security and cannot accept any liability where the security of your Personal Information is compromised.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "We, along with many other websites, make use of so-called \"Cookies\". Cookies are small files that can be stored on your computer during visits to the Website. Cookies are used to facilitate your use of our services and to manage your visits. They enable our systems to recognize your browser and to offer you services, such as saving your preferences between visits to our Website. Cookies are solely saved on the computer you use while visiting our service. They are not stored on our systems.",
        "The help function available in the menu bar of the majority of web browsers will explain how you can prevent your browser from accepting new cookies, should you not wish to make use of the cookie functionality, how you tell your browser to inform you when you have received a new cookie or how to deactivate or delete received cookies. Some functions of our services may not be available if you set your browser to not accept cookies.",
      ],
    },
    {
      title: "Third Party Websites",
      paragraphs: [
        "Our Website may contain links to other Internet websites, including co-branded or other affiliated sites. These linked websites have separate and independent privacy policies. This Privacy Policy only covers our Website and does not cover any other website. We have no responsibility or liability for the content and activities of these linked sites. We strongly encourage you to become familiar with the privacy practices of those sites. Nonetheless, we seek to protect the integrity of our Website and welcome any feedback about these linked sites (including if a specific link does not work).",
      ],
    },
  ];
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <SectionLayout title="Privacy Policy">
          <div className="w-full mt-6">
            {privacyPolicy.map((section, index) => (
              <SubSectionLayout
                key={index}
                title={`${index + 1}. ${section.title}`}
              >
                <div className="w-full h-full flex flex-col gap-y-6">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                  ))}
                </div>
              </SubSectionLayout>
            ))}
          </div>
        </SectionLayout>
      </div>
    </SectionEnter>
  );
};

export default PrivacyPage;
