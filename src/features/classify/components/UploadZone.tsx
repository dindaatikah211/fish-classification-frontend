"use client";

import { useRef, useState } from "react";
import { Upload, ImageIcon, Loader2 } from "lucide-react";

interface UploadZoneProps {
  preview: string | null;
  loading: boolean;
  onFileSelect: (file: File) => void;
  onSubmit: () => void;
}

export function UploadZone({
  preview,
  loading,
  onFileSelect,
  onSubmit,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-[#0871E7] bg-[#0871E7]/5"
            : "border-black/15 bg-white"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onFileSelect(file);
          }}
        />

        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-h-64 rounded-2xl object-contain"
          />
        ) : (
          <>
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0871E7]/10">
              <ImageIcon className="h-7 w-7 text-[#0871E7]" />
            </div>
            <p className="font-sans text-[15px] font-medium text-[#1a1a1a] mb-1">
              Klik atau seret foto ikan ke sini
            </p>
            <p className="font-sans text-[13px] text-[#1a1a1a]/50">
              Format JPG, PNG — satu ikan, latar sederhana
            </p>
          </>
        )}
      </div>

      {preview && (
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            disabled={loading}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0871E7] px-7 py-3 font-sans text-[14px] text-white shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline outline-1 outline-[#0871E7] -outline-offset-1 disabled:opacity-70"
          >
            <span className="absolute left-[10%] top-[1px] h-4 w-[80%] rounded-[12px] bg-gradient-to-b from-[#DEF0FC] to-transparent transition-transform duration-300 group-hover:scale-x-105" />
            {loading ? (
              <>
                <Loader2 className="relative h-4 w-4 animate-spin" />
                <span className="relative">Menganalisis...</span>
              </>
            ) : (
              <>
                <Upload className="relative h-4 w-4" />
                <span className="relative">Klasifikasi Sekarang</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}