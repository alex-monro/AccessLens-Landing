import { Download, ScanSearch, Wrench } from "lucide-react";
import { type ReactNode } from "react";

const cards: { step: number; icon: ReactNode; title: string; description: string }[] = [
  {
    step: 1,
    icon: <Download className="w-5 h-5" />,
    title: "Install the Extension",
    description: "Add AccessLens to Chrome from the Web Store. It sits in your toolbar, ready whenever you need it.",
  },
  {
    step: 2,
    icon: <ScanSearch className="w-5 h-5" />,
    title: "Run a Scan",
    description: "Navigate to any page and click the AccessLens icon. It audits the page instantly — no setup required.",
  },
  {
    step: 3,
    icon: <Wrench className="w-5 h-5" />,
    title: "Fix What Matters",
    description: "Every issue is ranked by severity, linked to the exact element, and paired with a code example so you're never left guessing.",
  },
];

const CardsSection = () => {
  return (
    <section className="w-full py-12 px-6 lg:px-24 min-h-[37.5rem] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-5">
        <h2 className="text-4xl font-bold text-foreground">How it works.</h2>
        <p className="text-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          voluptatibus explicabo laboriosam voluptatum tempore porro!
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          {cards.map(({ step, icon, title, description }) => (
            <div key={step} className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl p-4">
              <div className="w-full flex justify-between">
                <span className="card-badge">{icon}</span>
                <span className="card-badge font-bold">{step}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-foreground">{title}</h3>
                <p className="text-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
