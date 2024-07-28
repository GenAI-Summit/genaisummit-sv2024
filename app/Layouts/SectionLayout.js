const SectionLayout = ({ title, description, children }) => {
  return (
    <div className="text-left mt-2 mb-6">
      <div className="bg-color1 w-10 h-1 mt-2" />
      <div className="text-3xl font-bold mt-2 text-color5">{title}</div>
      {description && <div className="mt-1 text-color2">{description}</div>}
      <div className="flex flex-col mt-4 items-center justify-center gap-y-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
