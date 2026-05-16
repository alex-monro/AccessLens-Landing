const VideoSection = () => {
  return (
    <section className="section-pad flex items-center min-h-[37.5rem] bg-alt-sections-bg">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 mx-auto">

        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <h2 className="section-heading">
            See what you've been shipping.
          </h2>
          <p className="text-lg leading-relaxed">
            Most accessibility problems aren't obvious until someone can't use your product.
            AccessLens surfaces them during development — when they're cheap to fix, not after
            launch when they're not.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Instant scan on any page — no setup",
              "Issues ranked by severity",
              "Every finding linked to the exact element",
              "Code examples included",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-3/5">
          <video
            src="/videos/access-lens-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
