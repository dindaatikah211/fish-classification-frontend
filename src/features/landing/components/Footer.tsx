import { Fish } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="tentang"
      className="border-t border-black/10 bg-[#F3F4ED] px-6 py-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-[#0871E7]" />
          <span className="font-instrument text-[24px] tracking-tight text-[#1a1a1a]">
            fin.
          </span>
        </div>
        <p className="font-sans text-[13px] text-[#1a1a1a]/60 text-center md:text-right">
          Tugas Akhir Pengolahan Citra — Klasifikasi Ikan Air Tawar berbasis AI.
        </p>
      </div>
    </footer>
  );
}