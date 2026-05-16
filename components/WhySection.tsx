import { Scale, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <Scale className="w-6 h-6" />,
    stat: "4,600+",
    heading: "ADA lawsuits filed last year",
    body: "Web accessibility litigation is at an all-time high. Inaccessible sites are easy targets — and settlements average tens of thousands of dollars.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    stat: "1 in 4",
    heading: "Americans live with a disability",
    body: "That's 66 million people. If your site can't be used with a screen reader or keyboard alone, you're excluding a massive part of your market.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    stat: "~30%",
    heading: "Of violations are auto-detectable",
    body: "Most teams don't find out until a lawsuit arrives. Catching even the detectable issues early puts you miles ahead of the competition.",
  },
];

const WhySection = () => {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h2 className="section-heading">
            The stakes are higher than you think.
          </h2>
          <p className="text-lg">
            Accessibility isn't a nice-to-have. It's a legal requirement — and most teams don't find out until it's too late.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon, stat, heading, body }) => (
            <div key={heading} className="flex flex-col gap-4">
              <span className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                {icon}
              </span>
              <span className="text-4xl font-bold text-accent">{stat}</span>
              <h3 className="text-xl font-semibold">{heading}</h3>
              <p className="text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
