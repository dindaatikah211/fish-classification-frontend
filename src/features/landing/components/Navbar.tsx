"use client";

import Link from "next/link";
import { Fish } from "lucide-react";
import { LINKS } from "../constants/Navbar";

export function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between rounded-full border border-black/10 bg-white/40 backdrop-blur-md px-4 py-2 md:px-6 md:py-3">
        <div className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-[#0871E7]" />
          <span className="font-instrument text-[28px] tracking-tight text-[#1a1a1a]">
            fin.
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[14px] text-[#1a1a1a] opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="/classify"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0871E7] px-5 py-2 font-sans text-[14px] text-white shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline outline-1 outline-[#0871E7] -outline-offset-1"
        >
          <span className="absolute left-[10%] top-[1px] h-4 w-[80%] rounded-[12px] bg-gradient-to-b from-[#DEF0FC] to-transparent transition-transform duration-300 group-hover:scale-x-105" />
          <span className="relative">Mulai Deteksi</span>
        </Link>
      </nav>
    </div>
  );
}