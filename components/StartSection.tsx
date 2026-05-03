const StartSection = () => {
  return (
    <section className="w-full flex justify-between items-center bg-[#1a1a2e] min-h-[37.5rem] py-12 px-6 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
        <h2 className="text-xl lg:text-5xl font-bold max-w-sm leading-tight text-white">
          Start With The Free Tool.
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-end gap-2">
          <button className="all-buttons">
            <p className="text-2xl font-bold">Download AccessLens</p> 
            <span className="text-sm">No Purchase Neccessary</span>
          </button>
          {/* <button className="all-buttons">
            Install Free For Chrome
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default StartSection;
