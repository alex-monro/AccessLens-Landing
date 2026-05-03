const DownloadSection = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-center items-start py-12 px-6 lg:px-24 min-h-[37.5rem] bg-alt-sections-bg">
      <h2 className="text-3xl font-bold">No Free Tool Can Catch Everything.</h2>
      <p>
        Discover a versatile tool designed to meet the unique needs of any team,
        improving collaboration and productivity.
      </p>

      <button className="all-buttons">
        <p className="text-2xl font-bold">Download AccessLens</p>
        <span className="text-sm">100% Free | No Purchase Necessary</span>
      </button>
    </section>
  );
};

export default DownloadSection;
