"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { TypingMessages } from "./TypingMessages";
import { HERO_VIDEO_URL } from "../constants/HeroVideo";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Hero text */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-35 md:pt-30">
        <motion.h1
          className="font-instrument text-[44px] md:text-[64px] lg:text-[76px] leading-[0.9] tracking-tight text-[#1a1a1a] mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Kenali Ikanmu. Instan.
        </motion.h1>

        <motion.p
          className="font-sans text-[15px] md:text-[17px] text-[#1a1a1a]/70 leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Unggah foto ikan air tawarmu, dan biarkan AI mengenali jenisnya secara
          instan.
        </motion.p>
      </div>

      {/* Tombol — absolute di bawah, di atas Nokia */}
      <motion.div
        className="absolute z-30 left-1/2 -translate-x-1/2"
        style={{ bottom: "15%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/classify"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0871E7] px-6 py-2.5 font-sans text-[14px] text-white shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline outline-1 outline-[#0871E7] -outline-offset-1"
        >
          <span className="absolute left-[10%] top-[1px] h-4 w-[80%] rounded-[12px] bg-gradient-to-b from-[#DEF0FC] to-transparent transition-transform duration-300 group-hover:scale-x-105" />
          <span className="relative">Coba Sekarang</span>
        </Link>
      </motion.div>

      {/* TypingMessages — overlay di layar Nokia */}
      <div
        className="absolute z-30 w-[100px] sm:w-[120px]"
        style={{
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <TypingMessages />
      </div>
    </section>
  );
}