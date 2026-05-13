"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is AccessLens really free?",
    answer: "Yes. The Chrome extension is completely free — no account, no credit card, no trial period. Install it and start scanning immediately.",
  },
  {
    question: "How many pages can I scan?",
    answer: "Unlimited. Run AccessLens on any page, any time. There are no scan limits on the free tool.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "No. AccessLens explains every issue in plain language and shows you exactly where it is on the page. Code examples are included for developers who want them.",
  },
  {
    question: "What's the difference between the free tool and an audit?",
    answer: "The free extension catches issues automatically during development. A full audit includes a manual review by an accessibility expert, a detailed report, and remediation guidance tailored to your product.",
  },
  {
    question: "Which accessibility standards does it check against?",
    answer: "AccessLens checks against WCAG 2.1 AA — the standard most commonly required by law and referenced in accessibility litigation.",
  },
];

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
};

const FAQItem = ({ question, answer, isOpen, isLast, onToggle }: FAQItemProps) => (
  <div className={`py-6 ${!isLast ? "border-b border-gray-100" : ""}`}>
    <button
      className="btn-ghost w-full flex justify-between items-center gap-8 text-left outline-none"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-semibold text-foreground">{question}</span>
      <span
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-background"
        style={{ background: isOpen ? "var(--accent)" : "var(--foreground)" }}
      >
        <ChevronDown
          className="w-4 h-4"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </span>
    </button>
    {isOpen && (
      <p className="pt-3 text-foreground text-base leading-relaxed max-w-2xl">{answer}</p>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5 shrink-0 flex flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Common<br />questions.
            </h2>
            <p className="text-foreground text-lg">
              Everything you need to know about the free tool.
            </p>
          </div>
          <div className="w-full border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                isLast={i === faqs.length - 1}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
