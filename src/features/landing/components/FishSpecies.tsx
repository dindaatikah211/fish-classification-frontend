import { Fish } from "lucide-react";
import { FISH_SPECIES } from "../constants/FishSpecies";

export function FishSpecies() {
  return (
    <section
      id="jenis-ikan"
      className="relative z-20 bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-instrument text-[32px] md:text-[44px] tracking-tight text-[#1a1a1a] mb-4">
          5 Jenis Ikan yang Dikenali
        </h2>
        <p className="font-sans text-[16px] text-[#1a1a1a]/70 max-w-xl mx-auto mb-16">
          Model kami dilatih untuk mengenali jenis-jenis ikan air tawar berikut.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {FISH_SPECIES.map((fish) => (
            <div
              key={fish.id}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] rounded-3xl border border-black/10 bg-[#F3F4ED] p-6 text-left"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0871E7]/10">
                <Fish className="h-6 w-6 text-[#0871E7]" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1a1a1a] mb-1">
                {fish.nama}
              </h3>
              <p className="font-sans text-[13px] italic text-[#1a1a1a]/50 mb-3">
                {fish.namaLatin}
              </p>
              <p className="font-sans text-[14px] text-[#1a1a1a]/70 leading-relaxed">
                {fish.ciri}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}