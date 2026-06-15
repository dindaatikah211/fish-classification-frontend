"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { UploadZone } from "./UploadZone";
import { ResultCard } from "./ResultCard";
import { classifyFish, type PredictResponse } from "@/shared/lib/api";

export function ClassifyClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (selected: File) => {
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const data = await classifyFish(file);
      setResult(data);
    } catch {
      setError("Gagal menghubungi server. Pastikan backend sudah berjalan.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {result && preview ? (
        <ResultCard result={result} preview={preview} onReset={handleReset} />
      ) : (
        <UploadZone
          preview={preview}
          loading={loading}
          onFileSelect={handleFileSelect}
          onSubmit={handleSubmit}
        />
      )}

      {error && (
        <p className="mt-4 text-center font-sans text-[14px] text-red-500">
          {error}
        </p>
      )}
    </motion.div>
  );
}