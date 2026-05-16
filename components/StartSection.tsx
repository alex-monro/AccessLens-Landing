import { ArrowRight } from "lucide-react";

const StartSection = () => {
  return (
    <section className="w-full bg-foreground py-20 px-6 lg:px-24 min-h-[30rem] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-background">
            Stop shipping inaccessible code.
          </h2>
          <p className="text-lg text-background">
            Catch what you can't see. The extension gets you started — the audit goes deeper.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button className="all-buttons btn-accent flex items-center gap-2 px-7 py-3.5 text-base font-semibold">
            Add to Chrome
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button className="all-buttons px-7 py-3.5 text-base font-semibold text-background bg-transparent border-background">
            Book an audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
