const SubSectionLayout = ({ title, children }) => {
  return (
    <>
      <div className="text-2xl font-semibold mt-5">{title}</div>
      {children}
    </>
  );
};

export default SubSectionLayout;
