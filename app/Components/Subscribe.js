import SectionLayout from "../Layouts/SectionLayout";

const Subscribe = () => {
  return (
    <SectionLayout
      title="Get Updates"
      description="SUBSCRIBE TO OUR NEWSLETTER TO GET THE LATEST UPDATES"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg bg-color7 text-color5 px-4 py-2 w-64 ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-color1 focus:ring-opacity-50"
          />
          <button className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Subscribe;
