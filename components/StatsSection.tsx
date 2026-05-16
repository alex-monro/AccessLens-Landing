const stats = [
  { value: "WCAG 2.1 AA", label: "The legal standard we check against" },
  { value: "1-click", label: "Instant scan on any page, no setup" },
  { value: "0 setup", label: "Install and scan immediately, no config" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-alt-sections-bg border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            <span className="text-sm text-foreground max-w-[180px]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
