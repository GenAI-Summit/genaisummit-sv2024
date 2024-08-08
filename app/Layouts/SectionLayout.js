const SectionLayout = ({ title, description, children, widget }) => {
  return (
    <div className="w-full text-left mt-2 mb-6">
      {widget ? (
        <div className="flex flex-row items-center justify-between">
          <div>
            <div className="bg-color1 w-10 h-1 mt-2" />
            <div className="text-2xl md:text-3xl font-bold mt-2 text-color5">
              {title}
            </div>
          </div>
          <div className="hidden md:block">{widget}</div>
        </div>
      ) : (
        <>
          <div className="bg-color1 w-10 h-1 mt-2" />
          <div className="text-3xl font-bold mt-2 text-color5">{title}</div>
        </>
      )}
      {description && <div className="mt-1 text-color2">{description}</div>}
      <div className="flex flex-col mt-4 items-center justify-center gap-y-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
