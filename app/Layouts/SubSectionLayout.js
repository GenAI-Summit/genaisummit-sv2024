const SubSectionLayout = ({ title, children, textAlign }) => {
  return (
    <>
      <div
        className={`py-6 w-full text-xl md:text-2xl lg:text-3xl font-semibold text-color8 font-monaspace_neon ${textAlign}`}
      >
        {title}
      </div>
      <div className="w-full h-full flex flex-col gap-y-6">{children}</div>
    </>
  );
};

export default SubSectionLayout;
