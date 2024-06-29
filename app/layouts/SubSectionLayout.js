const SubSectionLayout = ({ title, children }) => {
  return (
    <>
      <div className="text-2xl font-semibold mt-2">{title}</div>
      {children}
    </>
  );
};

export default SubSectionLayout;
