import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-screen bg-theme1Dark1 text-theme1Light1 gap-4">
      <div className="animate-bounce">
        <h2 className="text-4xl font-bold bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
          404 - Not Found
        </h2>
      </div>
      <p>Sorry, the page you are looking for is not found.</p>
      <Link href="/" className="group">
        <button className="w-32 bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 text-color7 font-bold rounded-lg">
          <div className="m-[1.5px] bg-theme1Dark1 px-4 py-2 rounded-lg group-hover:bg-theme1Dark3 transition-all ease-in-out duration-300">
            <span className="bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
              Go Home
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
