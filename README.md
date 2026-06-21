# 🐟 fin. — Klasifikasi Ikan Air Tawar dengan AI
 
> Unggah foto ikan air tawarmu, dan biarkan AI mengenali jenisnya secara instan — lengkap dengan nama latin, habitat, dan ciri khasnya.
 
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?logo=tensorflow)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python)
 
---
 
## 📖 Tentang Project
 
**fin.** adalah aplikasi web klasifikasi ikan air tawar berbasis AI yang dikembangkan sebagai Tugas Besar mata kuliah **Pengolahan Citra**. Pengguna cukup mengupload foto ikan, lalu sistem akan mengenali jenisnya secara otomatis menggunakan model deep learning.
 
### 🐠 Kelas Ikan yang Didukung
 
| No | Kelas | Nama Latin | Ciri Khas |
|----|-------|-----------|-----------|
| 1 | Lele | *Clarias batrachus* | Tidak bersisik, ada kumis/sungut |
| 2 | Gurame | *Osphronemus goramy* | Badan lebar gepeng, sisik besar |
| 3 | Ikan Mas | *Cyprinus carpio* | Sisik besar keemasan, mulut monyong |
| 4 | Nila | *Oreochromis niloticus* | Garis vertikal di tubuh & ekor |
| 5 | Patin | *Pangasius hypophthalmus* | Putih keabu-abuan, kepala pipih |
 
---
 
## 🖥️ Frontend
 
### Tech Stack
 
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animasi**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Font**: Inter, Instrument Serif, Nokia Cellphone FC

### Struktur Folder
 
```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + metadata
│   │   ├── page.tsx           # Landing page
│   │   ├── globals.css        # Global styles + animasi
│   │   └── classify/          # Halaman deteksi
│   ├── features/
│   │   └── landing/
│   │       ├── components/    
│   │       └── constants/     
│   │   └── classify/
│   │        └── components/ 
│   └── shared/
│       ├── components/        # Shared UI components
│       └── lib/               # Utilities
├── public/
│   └── icon.svg               # Favicon
├── package.json
├── tailwind.config.ts
└── next.config.ts
```
 
### Cara Menjalankan
 
```bash
# Install dependencies
pnpm install
 
# Jalankan development server
pnpm dev
```
 
Buka [http://localhost:3000](http://localhost:3000) di browser.
