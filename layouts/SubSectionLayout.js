const SubSectionLayout = ({ title, children, textAlign, titleColor }) => {
  return (
    <>
      <div
        className={`py-6 w-full text-2xl md:text-3xl lg:text-4xl font-semibold ${textAlign} ${titleColor}`}
      >
        {title}
      </div>
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default SubSectionLayout;
