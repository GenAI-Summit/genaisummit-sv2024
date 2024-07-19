import SectionLayout from "../Layouts/SectionLayout";
import SubSectionLayout from "../Layouts/SubSectionLayout";

const TermsPage = () => {
  const terms = [
    {
      title: "Introduction",
      paragraphs: [
        "1.1 This website (\"Website\") is operated by GPTDAO, the organizer of the summit.",
        "1.2 Please read these Terms & Conditions carefully before using the Website. By accessing any part of the Website, you shall be deemed to have accepted these Terms & Conditions in full.",
        "1.3 GPTDAO may revise these Terms & Conditions at any time by posting an update on the Website. Your continued use of the Website after any such change constitutes your acceptance of the new Terms & Conditions. These Terms & Conditions were last updated in July 2024. GPTDAO reserves the right to change these Terms & Conditions at any time.",
        "1.4 GPTDAO reserves the right to refuse admission to the summit for any behavior, which it deems unacceptable, or for breach of these Terms & Conditions.",
      ],
    },
    {
      title: "Data Protection and Privacy Policy",
      paragraphs: [
        "2.1 By providing your details, you agree to allow GPTDAO and companies associated with this event to contact you (by mail, email, telephone or fax) regarding their services. If you do not wish to receive such communications please contact us in writing at genaix@gptdao.ai.",
        "2.2 By registering for a ticket, you agree to allow us to use your registered company logo for marketing purposes. This includes displaying your logo on our website, social media, and marketing materials. We may adjust the size, format, or placement of your logo as needed. You confirm that you have the authority to grant this permission and that it does not violate any third-party rights. If you have any concerns, please contact us at genaix@gptdao.ai.",
        "2.3 The provision of personal information by you and use of it by GPTDAO is subject to GPTDAO's Privacy Policy.",
      ],
    },
    {
      title: "Ticket Delivery",
      paragraphs: [
        "3.1 Once a successful purchase transaction has been completed, tickets are delivered in electronic soft-copy via email to the email address nominated by the purchaser. For some ticket types it may be necessary to complete required information – such as attendee name or tax identification number – before the tickets can be issued. The ticket acts as a receipt for the transaction and can be used to redeem entry at the event listed on the ticket. A printed hard-copy ticket or an electronic soft-copy ticket detailing the reference number can be used to register at the event.",
        "3.2 We reserve the right to cancel any tickets obtained through illegal means, including but not limited to bug exploitation or any other method that we deem improper or unauthorized. In the event that tickets are acquired through such unlawful or unauthorized means, we retain the authority to cancel those tickets without prior notice.",
      ],
    },
    {
      title: "Registration/Booking/Purchasing",
      paragraphs: [
        "4.1 GPTDAO may collect data from you in the course of purchasing and or registering for tickets sold by GPTDAO. You give your permission for your user account details to be stored and acknowledge that you may provide GPTDAO a reasonable timeframe to remove your details at any time that you no longer wish them to be stored. You acknowledge and accept that your data will be used for commercial purposes in accordance with our Data Protection Policy and Declaration of Consent and will be retained and stored for this purpose. Should you wish your data to be removed you must request GPTDAO to do so in writing. Requests can be emailed to genaix@gptdao.ai.",
        "4.2 Prices are set out on the online booking form and may be subject to change from time to time. All prices are subject to local taxes where appropriate.",
        "4.3 If we have not received payment in full and cleared funds by the event start date, you will be asked to make payment using a credit card on the day to gain entry. Once your booking has been received you are liable for all outstanding payments for your registration, whether or not you attend the event, unless we notify you that your booking was not successful because the event is full.",
      ],
    },
    {
      title: "Refunds/Cancellations/Discounts",
      paragraphs: [
        "5.1 All purchases of tickets for the summit are non-refundable in their entirety. Your ticket remains the property of GPTDAO and is a personal revocable license, which may be withdrawn, and admission refused at any time upon a refund of the printed registration price.",
        "5.2 If for any reason GPTDAO decides to cancel this event, GPTDAO accepts no responsibility for covering airfare, hotel or other costs incurred by registrants, including delegates, sponsors, speakers and guests.",
        "5.3 No refunds will be issued for cancellations due to weather or other causes beyond the Registrant's control. In the unlikely event of cancellation of the summit by GPTDAO, the liability of GPTDAO is limited to the share of paid registration fees that remains after credit card and payment processing fees have been incurred and deducted.",
        "5.4 Discounts cannot be combined with any other discount or multiple offer and apply to new bookings only; there will be no adjustments on previous registrations.",
        "5.5 For questions about registration or assistance with any registration problems, please contact us at genaix@gptdao.ai.",
      ],
    },
    {
      title: "Exhibitor Information",
      paragraphs: [
        "6.1 GPTDAO will not provide transport or travel expenses to or from the summit. GPTDAO will consider but not guarantee exhibitors' requests for day changes at the summit.",
        "6.2 All items (screens, laptops, cabling and other electronic equipment, rooms, furniture etc.) supplied are on a rental basis and no exchange, transfer or refund of ordered items on-site will be entertained. Exhibitors must pay for any damages or losses caused to items supplied to them. Cancelled orders are not refundable.",
        "6.3 Non-standard items may be offered on request, subject to a separate quotation, and are subject to the same terms and conditions. Any complaint regarding rental items or installation must be lodged before the opening of the event.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "7.1 GPTDAO will not be liable for any loss injury or damage to any person or property howsoever caused (save for death or personal injury as a result of GPTDAO's negligence or for any other type of liability that cannot by law be excluded or limited.)",
        "7.2 GPTDAO will not be liable for the granting of any visas that are required to attend the summit. In the event that an attendee's visa is not granted tickets will not be refunded.",
        "7.3 Please note that while speakers and topics are confirmed at the time of publishing, circumstances beyond the control of GPTDAO may necessitate substitutions, alterations or cancellations of the speakers and/or topics. As such, GPTDAO reserves the right to alter or modify the advertised speakers and/or topics if necessary without any liability to you whatsoever. Any substitutions or alterations will be updated on our website as soon as possible.",
      ],
    },
    {
      title: "Indemnity",
      paragraphs: [
        "You agree to be fully responsible for (and fully indemnify us against) all claims, liability, damages, losses, costs and expenses, including legal fees, suffered by us and arising out of any breach of the terms by you or any other liabilities incurred by us arising out of your use of the website, or use by any other person accessing the website using your PC or internet access account.",
      ],
    },
    {
      title: "Intellectual Property And Right To Use",
      paragraphs: [
        "You acknowledge and agree that all copyright, trademarks and all other intellectual property rights in all material or content contained within the website shall remain at all times owned by us or our licensors. You are permitted to use this material only as expressly authorized by us. We reserve all rights not expressly granted in and to the website and the content on the website.",
      ],
    },
    {
      title: "General",
      paragraphs: [
        "10.1 You agree not to:",
        "10.1.1 Use the website (or any part of it) for any illegal purpose and agree to use it in accordance with all relevant laws;",
        "10.1.2 Upload or transmit through the website any computer viruses, macro viruses, trojan horses, worms or anything else designed to interfere with, interrupt or disrupt the normal operating procedures of a computer;",
        "10.1.3 Use the website in a manner which may cause the website to be interrupted, damaged, rendered less efficient or such that the effectiveness or functionality of the website is in any way impaired;",
        "10.1.4 Use the website in any manner which violates or infringes the rights of any person, firm or company (including, but not limited to, rights of intellectual property, rights of confidentiality or rights of privacy);",
        "10.1.5 Create or publish a hypertext link to any part of the website or attempt any unauthorized access to any part or component of the website;",
        "10.1.6 Copy or distribute any part of the website in any medium without our prior written consent; and",
        "10.1.7 Alter or modify any part of the website other than as may be reasonably necessary to use the website for its intended use.",
        "10.2 In the event that any provision of these Terms & Conditions is held to be invalid or unenforceable, the remainder of these Terms & Conditions shall remain valid and enforceable.",
        "10.3 These Terms & Conditions shall be governed by the laws of the jurisdiction where GPTDAO is registered, and the courts of that jurisdiction shall have exclusive jurisdiction.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "While GPTDAO endeavors to ensure that the Website is normally available 24 hours a day, it shall not be liable if for any reason the Website is unavailable at any time or for any period. Access to the Website may be suspended temporarily and without notice in the case of system failure, maintenance or repair or for any other reasonable cause.",
        "You acknowledge that information on the Website and any related material provided to you by GPTDAO, is provided only for general information. GPTDAO uses reasonable care in publishing materials available on GPTDAO websites, however, does not guarantee their accuracy or completeness. Materials available on GPTDAO websites are provided \"as is\" with no warranty, express or implied, and all such warranties are hereby disclaimed. GPTDAO assumes no liability for any loss, damage or expense from errors or omissions in the materials available on GPTDAO websites, whether arising in contract or otherwise.",
      ],
    },
  ];
  return (
    <SectionLayout title="Terms & Conditions">
      {terms.map((section, index) => (
        <SubSectionLayout key={index} title={`${index + 1}. ${section.title}`}>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-3">
              {paragraph}
            </p>
          ))}
        </SubSectionLayout>
      ))}
    </SectionLayout>
  );
};

export default TermsPage;
