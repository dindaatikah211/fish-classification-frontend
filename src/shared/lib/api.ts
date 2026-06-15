const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface FishInfo {
  nama: string;
  nama_latin: string;
  kelas: string;
  ordo: string;
  habitat: string;
  ciri_khas: string;
  persebaran: string;
  emoji: string;
}

export interface PredictResponse {
  prediksi: string;
  confidence: number;
  info: FishInfo;
}

export async function classifyFish(file: File): Promise<PredictResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Gagal melakukan klasifikasi");
  }

  return res.json();
}