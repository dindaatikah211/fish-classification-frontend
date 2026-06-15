import { STEPS } from "@/features/landing/constants/Steps";

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="relative z-20 bg-[#F3F4ED] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-instrument text-[32px] md:text-[44px] tracking-tight text-[#1a1a1a] mb-4">
          Tiga langkah sederhana
        </h2>
        <p className="font-sans text-[16px] text-[#1a1a1a]/70 max-w-xl mx-auto mb-16">
          Tidak perlu jadi ahli perikanan untuk mengenali jenis ikanmu.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur-sm p-8 text-left"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0871E7]/10">
                  <Icon className="h-6 w-6 text-[#0871E7]" />
                </div>
                <h3 className="font-sans text-[18px] font-semibold text-[#1a1a1a] mb-2">
                  {String(index + 1).padStart(2, "0")} — {step.title}
                </h3>
                <p className="font-sans text-[14px] text-[#1a1a1a]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}