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
  const hoverEffect = "hover:font-semibold duration-300 ease-in-out";
  const activeEffect = "font-semibold";

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
