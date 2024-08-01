import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-screen bg-color3 text-color5 gap-4">
      <div className="animate-bounce">
        <h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
      </div>
      <p>Sorry, the page you are looking for is not found.</p>
      <Link href="/">
        <button className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
