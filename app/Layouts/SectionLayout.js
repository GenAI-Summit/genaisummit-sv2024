const SectionLayout = ({ title, description, children }) => {
  return (
    <div className="text-left mt-6 mb-6">
      <div className="bg-sky-400 w-10 h-1 mt-2" />
      <div className="text-3xl font-bold mt-2">{title}</div>
      {description && <div className="text-sky-400 mt-1">{description}</div>}
      <div className="flex flex-col mt-4 items-center justify-center gap-y-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
