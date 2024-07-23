const SubSectionLayout = ({ title, children, textAlign }) => {
  return (
    <>
      <div
        className={`w-full text-2xl font-semibold mt-5 text-color5 ${textAlign}`}
      >
        {title}
      </div>
      <div className="w-full h-full flex flex-col">{children}</div>
    </>
  );
};

export default SubSectionLayout;
