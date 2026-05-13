import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-dvh w-full flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-9xl max-w-5xl text-center font-bold leading-none pb-4 text-foreground">
        Accessibility
        <br />
        is not optional.
      </h1>

      <p className="text-2xl md:text-3xl max-w-2xl text-center text-foreground font-semibold pb-4">
        Your website is a magnet for lawsuits.
      </p>

      {/* ArrowRight aria-hidden — button text is descriptive enough for screen readers */}
      <div className="flex flex-row gap-3 pt-8">
        <button className="all-buttons btn-primary flex items-center gap-2 px-6 py-3 text-base">
          Install free for Chrome
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
        <button className="all-buttons px-6 py-3 text-base">
          Book an audit
        </button>
      </div>
    </section>
  );
};

export default Hero;
