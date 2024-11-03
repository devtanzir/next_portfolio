const Loader = () => {
  return (
    <>
      <div className="w-[112px] h-[112px]">
        <div className="border-[16px] dark:first-line:border-light border-dark absolute block box-border w-[112px] h-12 mt-16 ml-0 animate-loader1"></div>

        <div className="border-[16px] dark:border-light border-dark absolute block box-border w-12 h-12 mt-0 ml-0 animate-loader2"></div>

        <div className="border-[16px] dark:border-light border-dark absolute block box-border w-12 h-12 mt-0 ml-16 animate-loader3"></div>
      </div>
    </>
  );
};

export default Loader;
