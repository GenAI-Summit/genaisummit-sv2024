import SectionLayout from "../Layouts/SectionLayout";

const TicketPage = () => {
  return (
    <div className="w-full h-full">
      <SectionLayout title="Tickets" description="GET YOUR TICKETS NOW!">
        <iframe
          src="https://whova.com/portal/registration/genai_202405/"
          className="w-full h-screen"
        ></iframe>
      </SectionLayout>
    </div>
  );
};

export default TicketPage;
