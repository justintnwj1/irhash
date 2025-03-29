import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import HomePage from "./home-page/home-page";

// Komponen utama
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// Komponen ini menangani konten dan scrolling
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Ambil path tanpa '/' awal
    const path = location.pathname.substring(1);

    // Jika path ada dan tersedia sebagai id di halaman
    if (path && document.getElementById(path)) {
      // Scroll ke section tersebut
      document.getElementById(path).scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/') {
      // Jika di halaman utama, scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="app">
      <Routes>
        {/* Semua route menampilkan halaman yang sama */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/skills-certificate" element={<HomePage />} />
        <Route path="/experience" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
