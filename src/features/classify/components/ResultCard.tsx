"use client";

import { RotateCcw, MapPin, Tag, Microscope } from "lucide-react";
import type { PredictResponse } from "@/shared/lib/api";

interface ResultCardProps {
  result: PredictResponse;
  preview: string;
  onReset: () => void;
}

export function ResultCard({ result, preview, onReset }: ResultCardProps) {
  const { info, confidence } = result;

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 text-left md:p-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <img
          src={preview}
          alt={info.nama}
          className="h-48 w-full rounded-2xl object-cover md:h-auto md:w-48"
        />

        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">{info.emoji}</span>
            <h2 className="font-instrument text-[28px] md:text-[32px] tracking-tight text-[#1a1a1a]">
              {info.nama}
            </h2>
          </div>
          <p className="font-sans text-[14px] italic text-[#1a1a1a]/50 mb-4">
            {info.nama_latin}
          </p>

          {/* Confidence bar */}
          <div className="mb-5">
            <div className="mb-1 flex items-center justify-between font-sans text-[13px] text-[#1a1a1a]/70">
              <span>Tingkat Keyakinan</span>
              <span className="font-semibold text-[#0871E7]">
                {confidence}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#F3F4ED]">
              <div
                className="h-full rounded-full bg-[#0871E7] transition-all duration-700"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 font-sans text-[14px] text-[#1a1a1a]/80">
            <div className="flex items-start gap-3">
              <Tag className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0871E7]" />
              <p>
                <span className="font-medium">Klasifikasi:</span>{" "}
                {info.kelas} — {info.ordo}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0871E7]" />
              <p>
                <span className="font-medium">Habitat:</span> {info.habitat}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Microscope className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0871E7]" />
              <p>
                <span className="font-medium">Ciri Khas:</span>{" "}
                {info.ciri_khas}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F4ED] px-6 py-3 font-sans text-[14px] text-[#1a1a1a] transition-colors hover:bg-[#e8e9e2]"
        >
          <RotateCcw className="h-4 w-4" />
          Coba Foto Lain
        </button>
      </div>
    </div>
  );
}