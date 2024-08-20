import Link from "next/link";
import PrevEvents from "./PrevEvents";
import { usePathname } from "next/navigation";
import TextHover from "../../Motions/TextHover";

const NavBarItems = ({
  closeDrawer,
  showDialog,
  openDialog,
  closeDialog,
  handleDialog,
}) => {
  const pathname = usePathname();
  const hoverEffect = "hover:font-semibold duration-300 ease-in-out";
  const activeEffect = "font-semibold";

  const close = () => {
    closeDrawer();
    closeDialog();
  };

  const items = [
    { name: "HOME", path: ["/", "/home"] },
    { name: "PARTNERS", path: ["/partners"] },
    { name: "SPEAKERS", path: ["/speakers"] },
    { name: "EXHIBITORS", path: ["/exhibitors"] },
    { name: "AGENDA", path: ["/agenda"] },
  ];

  return (
    <>
      {items.map((item, index) => (
        <Link
          className={`${item.path.includes(pathname) ? activeEffect : ""}`}
          href={item.path[0]}
          onClick={close}
          key={index}
        >
          <TextHover color="theme1Dark1">{item.name}</TextHover>
        </Link>
      ))}
      <PrevEvents
        closeDrawer={closeDrawer}
        showDialog={showDialog}
        openDialog={openDialog}
        closeDialog={closeDialog}
        handleDialog={handleDialog}
        hoverEffect={hoverEffect}
      />
    </>
  );
};

export default NavBarItems;
