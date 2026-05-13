const StartSection = () => {
  return (
    <section className="w-full bg-foreground py-20 px-6 lg:px-24 min-h-[30rem] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-background max-w-md">
          Start With The Free Tool.
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="all-buttons btn-accent px-6 py-3 text-base">
            Install free for chrome
          </button>
          <button className="all-buttons px-6 py-3 text-base text-background bg-transparent border-background">
            Book an audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
