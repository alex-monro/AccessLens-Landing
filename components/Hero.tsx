const Hero = () => {
  return (
    <section className="h-dvh w-full bg-white flex flex-col items-center justify-center text-black">
      <h1 className="text-5xl lg:text-8xl max-w-2xl text-center pb-8">
        Accessibility is not optional.
      </h1>
      <p className="text-xl lg:text-2xl max-w-2xl text-center">
        AccessLens spots accessibility problems on your sites before they turn
        into expensive legal exposure.
      </p>
      <div className="flex flex-col flex-row gap-4 pt-8 text-lg">
        <button className="btn-black">Install Free for Chrome</button>
        <button className="border border-black p-4 rounded-full hover:bg-gray-200">
          Book An Audit
        </button>
      </div>
    </section>
  );
};

export default Hero;
