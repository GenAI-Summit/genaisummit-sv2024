import styles from "../styles/section.module.css";

const SectionLayout = ({ title, description, children }) => {
  return (
    <div className={`${styles.container} text-left mb-12`}>
      <div className="bg-sky-400 w-10 h-1 mt-2" />
      <div className={`${styles.title} text-3xl font-bold mt-2`}>{title}</div>
      {description && (
        <div className={`${styles.description} text-sky-400 mt-1`}>
          {description}
        </div>
      )}
      <div className="flex flex-col mt-4 items-center justify-center gap-y-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
