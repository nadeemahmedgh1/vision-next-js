'use client';
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Faqs() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const faqs = [
    "What is Memorae and how can it help me?",
    "What types of reminders and features does Memorae offer?",
    "Can I set recurring reminders?",
    "Does Memorae spy on me or can I sleep peacefully knowing my data is safe?",
    "How does Memorae protect my privacy and data security?",
    "What advantages does Memorae offer compared to other tools?",
    "Is Memorae available 24/7?",
    "Does Memorae sync with calendars like Google Calendar?",
    "Are there limits to the number of reminders I can set up?",
    "Can I use Memorae on multiple devices?",
    "Do you offer a free trial?",
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 9);

  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center">
        <h2
          data-aos="fade-down"
          className="text-[20px] md:text-[22px] font-bold text-[#0b1b3f]"
        >
          Frequently Asked Questions
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="120"
          className="mt-1 text-[11px] md:text-[12px] text-[#6b7280]"
        >
          Have questions? We answer them here
        </p>
      </div>

      {/* FAQ Card */}
      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        className="
          max-w-[520px] mx-auto mt-10
          bg-white rounded-2xl
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
          border border-[#eef0f4]
          p-4 md:p-5
        "
      >
        <div className="space-y-3">
          {visibleFaqs.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="
                  rounded-xl bg-[#f7f7fb]
                  border border-[#f0f1f6]
                  px-4 py-3
                "
              >
                <button
                  onClick={() => {
                    setOpenIndex(isOpen ? null : i);
                    // refresh so newly opened content animates correctly
                    setTimeout(() => AOS.refreshHard(), 50);
                  }}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-[12px] md:text-[13px] font-medium text-[#111827]">
                    {q}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`h-4 w-4 text-[#7c3aed] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Answer (kept minimal; expand later if you want) */}
                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-[11px] md:text-[12px] text-[#6b7280] leading-relaxed">
                      This is a placeholder answer. Replace with your real FAQ
                      content whenever you’re ready.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View more button */}
      <div className="flex justify-center mt-6">
        <button
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => {
            setShowAll((v) => !v);
            setTimeout(() => AOS.refreshHard(), 50);
          }}
          className="
            flex items-center gap-2
            bg-[#eef2f3] text-[#111827]
            text-[11px] font-medium
            px-4 py-2 rounded-full
            shadow-sm hover:brightness-95 transition
          "
        >
          {showAll ? "View less" : "View more"}
          <span className="h-5 w-5 rounded-full bg-[#111827] text-white flex items-center justify-center text-[12px] font-bold">
            +
          </span>
        </button>
      </div>
    </section>
  );
}

export default Faqs;
