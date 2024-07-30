import Link from "next/link";

const AddToCalendarBtn = () => {
  return (
    <button className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300">
      <Link href="#">Add to Calendar</Link>
    </button>
  );
};

export default AddToCalendarBtn;
