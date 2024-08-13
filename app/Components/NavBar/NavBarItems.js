import Link from "next/link";
import PrevEvents from "./PrevEvents";
import { usePathname } from "next/navigation";

const NavBarItems = ({
  closeDrawer,
  showDialog,
  openDialog,
  closeDialog,
  handleDialog,
}) => {
  const pathname = usePathname();
  const hoverEffect =
    "hover:bg-gradient-to-br from-color1 to-color2 hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out";
  const activeEffect =
    "bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent";

  const close = () => {
    closeDrawer();
    closeDialog();
  };

  return (
    <>
      <Link
        className={`${pathname === "/" || pathname === "/home" ? activeEffect : ""} ${hoverEffect}`}
        href="/"
        onClick={close}
      >
        HOME
      </Link>
      <Link
        className={`${pathname === "/partners" ? activeEffect : ""} ${hoverEffect}`}
        href="/partners"
        onClick={close}
      >
        PARTNERS
      </Link>
      <Link
        className={`${pathname === "/speakers" ? activeEffect : ""} ${hoverEffect}`}
        href="/speakers"
        onClick={closeDrawer}
      >
        SPEAKERS
      </Link>
      <Link
        className={`${pathname === "/exhibitors" ? activeEffect : ""} ${hoverEffect}`}
        href="/exhibitors"
        onClick={close}
      >
        EXHIBITORS
      </Link>
      <Link
        className={`${pathname === "/agenda" ? activeEffect : ""} ${hoverEffect}`}
        href="/agenda"
        onClick={close}
      >
        AGENDA
      </Link>
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
