const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 border-b border-black/5 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.82)",
        animation: "fadeIn var(--dur-med) var(--ease-expo) both",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">AccessLens</span>
        <div className="flex items-center gap-3">
          <button className="all-buttons btn-primary px-5 py-2.5 text-base">
            Install free
          </button>
          <button className="all-buttons px-5 py-2.5 text-base">
            Book an audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
