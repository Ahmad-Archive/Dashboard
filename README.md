# Dashboard

Dashboard ini merupakan proyek pribadi yang dirancang untuk efisiensi dan kemudahan navigasi harian.
Dibuat dengan menggunakan arsitektur React dan Vite dengan alur kerja modern dan berbasis fitur-fitur terbaru.

## Prasyarat

Pastikan sebelum anda menginstal dan menjalankan aplikasi, anda telah menginstal:

| Tools | Versi Minimum | Cara Cek |
|-------|---------------|----------|
| [Node.js](https://nodejs.org) | v20+ (disarankan LTS) | `node -v` |
| npm | v10+ (bawaan Node.js) | `npm -v` |
| Git | v2.30+ | `git --version` |


## Tech Stack

* **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/v5)
* **Form & Validation:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
* **Data Visualization:** [Recharts](https://recharts.org/)


## Proses Instalasi & Menjalankan Project

### 1. Clone Repository
```bash
git clone <repository-url>
cd Dashboard
```

### 2. Install Dependencies
```bash
# Instalasi dependensi
npm install
```

### 3. Install Komponen Tambahan Shadcn (UI)
```bash
# Instalasi komponen shadcn/ui
npx shadcn@latest add <komponen>
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Run Build
```bash
npm run build
```


## 📂 Struktur Folder

Proyek ini mengadopsi struktur *feature-based* dan menggunakan *path alias* (`@/` merujuk ke folder `src/`):

```text
src/
├── assets/          # Berkas statis (gambar, font, ikon svg)
├── components/      # Komponen global
│   ├── common/      # Komponen umum (PageHeader, DataTable)
│   ├── layout/      # Layout utama (Sidebar, Header, Navbar)
│   └── ui/          # Komponen UI atomic dari shadcn/ui
├── features/        # Modul independen berbasis fitur (projects, analytics, settings)
│   └── projects/
│       ├── api/     # Custom hooks untuk data fetching
│       ├── components/ # UI khusus fitur proyek
│       └── types/   # Type definition khusus proyek
├── hooks/           # Custom React hooks global
├── lib/             # Konfigurasi library (utils.ts, axios.ts, query-client.ts)
├── store/           # State global (Zustand)
├── types/           # Type definition global
├── App.tsx          # Router / Kerangka utama
└── main.tsx         # Entry point aplikasi
```
