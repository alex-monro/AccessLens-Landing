const StartSection = () => {
  return (
    <section className="w-full flex justify-between items-center bg-[#1a1a2e] min-h-[37.5rem] py-12 px-6 lg:px-24 border-4 border-white-200">
      <div className="w-full flex flex-col lg:flex-row justify-between items-end ">
        <h2 className="text-xl lg:text-5xl font-bold max-w-sm leading-tight text-white">
          Start With The Free Tool.
        </h2>
        <div>
          <button className="border border-black p-3 rounded-2xl cursor-pointer">
            Install Free For Chrome
          </button>
          <button className="border border-black p-3 rounded-2xl cursor-pointer">
            Install Free For Chrome
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
