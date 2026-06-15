import Link from "next/link";
import { Fish, ArrowLeft } from "lucide-react";

export function ClassifyNavbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between rounded-full border border-black/10 bg-white/40 backdrop-blur-md px-4 py-2 md:px-6 md:py-3">
        <Link href="/" className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-[#0871E7]" />
          <span className="font-instrument text-[28px] tracking-tight text-[#1a1a1a]">
            fin.
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 font-sans text-[14px] text-[#1a1a1a] opacity-80 transition-opacity hover:opacity-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Beranda
        </Link>
      </nav>
    </div>
  );
}