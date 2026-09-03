import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Logo from "./assets/image/logo/Logo-05.png";

function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setVisible(false), 750);
    const removeTimer = window.setTimeout(() => setMounted(false), 1100);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#f7f8f3] transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      role="status"
      aria-label="Loading Ajira Naturals"
    >
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Ajira Naturals" className="h-20 w-auto object-contain animate-loader-logo" />
        <span className="mt-5 h-1 w-16 overflow-hidden rounded-full bg-[#dcebd5]">
          <span className="block h-full w-1/2 rounded-full bg-[#0b6b3e] animate-loader-progress" />
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div className="flex min-h-[60vh] items-center justify-center">
              <h1 className="text-3xl font-bold text-[#142b46]">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;