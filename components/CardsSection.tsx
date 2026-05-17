import { Download, ScanSearch, Wrench } from "lucide-react";
import { type ReactNode } from "react";

const steps: { step: number; icon: ReactNode; title: string; description: string }[] = [
  {
    step: 1,
    icon: <Download className="w-5 h-5" />,
    title: "Install the Extension",
    description: "Add AccessLens to Chrome from the Web Store.",
  },
  {
    step: 2,
    icon: <ScanSearch className="w-5 h-5" />,
    title: "Open Any Page",
    description: "Click the icon in your toolbar. It scans instantly.",
  },
  {
    step: 3,
    icon: <Wrench className="w-5 h-5" />,
    title: "Fix What Matters",
    description: "Issues ranked by severity, linked to the exact element, with code fixes included.",
  },
];

const CardsSection = () => {
  return (
    <section className="section-pad bg-alt-sections-bg">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <h2 className="section-heading">How it works.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map(({ step, icon, title, description }) => (
            <div key={step} className="flex flex-col gap-4 p-6 rounded-2xl bg-background border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="card-badge">{icon}</span>
                <span className="text-5xl font-bold leading-none select-none" aria-hidden="true">{step}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
