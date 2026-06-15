import { MARQUEE_ITEMS } from "../constants/Marquee";

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y-2 border-[#0871E7] bg-[#0871E7] py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 inline-flex items-center gap-3 font-sans font-semibold text-sm text-white"
          >
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{
                background: i % 2 === 0 ? "#ffffff" : "#93c5fd",
                opacity: i % 2 === 0 ? 1 : 0.6,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}