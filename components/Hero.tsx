"use client";

import Image from "next/image";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [cueOpacity, setCueOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 500);
      setCueOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-dvh w-full flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl md:text-9xl max-w-5xl font-bold leading-none text-foreground mb-6">
        Accessibility
        <br />
        is not optional.
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl font-semibold text-foreground mb-4">
        Your website is a magnet for lawsuits.
      </p>

      <p className="text-base md:text-lg max-w-xl text-foreground mb-10">
        AccessLens catches WCAG violations in real-time during development — before they become expensive legal exposure.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button className="all-buttons btn-accent flex items-center gap-2 px-7 py-3.5 text-base font-semibold">
          <Image src="/chrome.svg" alt="" width={18} height={18} aria-hidden />
          Add to Chrome
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
        <button className="all-buttons px-7 py-3.5 text-base font-semibold">
          Book an audit
        </button>
      </div>

      <button
        onClick={scrollDown}
        aria-label="Scroll to learn more"
        className="btn-ghost absolute bottom-10 flex flex-col items-center gap-1 cursor-pointer group"
        style={{ opacity: cueOpacity }}
      >
        <span className="text-base font-semibold group-hover:underline">
          Learn more
        </span>
        <ChevronsDown className="w-7 h-7" />
      </button>

    </section>
  );
};

export default Hero;
