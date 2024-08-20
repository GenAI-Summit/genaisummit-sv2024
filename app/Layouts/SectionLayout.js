const SectionLayout = ({ title, description, children, widget }) => {
  return (
    <div className="w-full text-left">
      {widget ? (
        <div className="flex flex-row items-start justify-between">
          <div>
            <div className="bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 w-10 h-1" />
            <div className="w-full mt-6">
              <span className="text-3xl font-monaspace_neon bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
                {title}
              </span>
            </div>
          </div>
          <div className="hidden md:block">{widget}</div>
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 w-10 h-1" />
          <div className="w-full mt-6">
            <span className="text-3xl font-monaspace_neon bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
              {title}
            </span>
          </div>
        </>
      )}
      {description && (
        <div className="mt-6 text-theme1Color2">{description}</div>
      )}
      <div className="flex flex-col items-center justify-center gap-y-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
