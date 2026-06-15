"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../constants/Faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section id="faq" className="relative z-20 bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-instrument text-[32px] md:text-[44px] tracking-tight text-[#1a1a1a] mb-12 text-center">
          Pertanyaan Umum
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-black/10 bg-[#F3F4ED] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-sans text-[15px] font-medium text-[#1a1a1a]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#0871E7] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-[14px] text-[#1a1a1a]/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}