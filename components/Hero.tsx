const Hero = () => {
  return (
    <section className="h-dvh w-full  flex flex-col items-center justify-center ">
      <h1 className="text-5xl md:text-8xl max-w-3xl text-center font-bold leading-tight pb-8">
        Accessibility is not optional.
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-center">
        AccessLens spots accessibility problems on your sites before they turn
        into expensive legal exposure.
      </p>
      <div className="flex flex-col flex-row gap-4 pt-8 text-sm md:text-xl">
        <button className="border text-white p-4 rounded-2xl">
          Install Free for Chrome
        </button>
        <button className="border border p-3 rounded-2xl">
          Book An Audit
        </button>
      </div>
    </section>
  );
};

export default Hero;
