const SubSectionLayout = ({ title, children, textAlign }) => {
  return (
    <>
      <div
        className={`py-6 w-full text-xl md:text-2xl lg:text-4xl font-semibold font-monaspace_neon ${textAlign}`}
      >
        {title}
      </div>
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default SubSectionLayout;
