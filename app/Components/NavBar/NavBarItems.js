import Link from "next/link";
import PrevEvents from "./PrevEvents";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
          <motion.span
            className="relative"
            whileHover="hover"
            initial="initial"
            variants={{
              initial: { color: "colorNavBarText" },
            }}
          >
            {item.name}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-colorNavBarText"
              initial={{ scaleX: 0 }}
              variants={{
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
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
