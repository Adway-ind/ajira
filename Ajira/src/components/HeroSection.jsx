import React, { useEffect, useState } from "react";
import Slide_1 from "../assets/image/bg/img-1.png"
import Slide_2 from "../assets/image/bg/img-2.png"
import Slide_3 from "../assets/image/bg/img-3.png"
import Slide_4 from "../assets/image/bg/img-4.png"
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    image:Slide_1,
    eyebrow: "PURE • AUTHENTIC • NATURALLY SOURCED",
    title: "Nature's",
    highlight: "Finest Spices.",
    description:
      "Discover the rich aroma, vibrant flavour and authentic taste of carefully selected spices, sourced directly from India's finest growing regions.",
  },
  {
    image:Slide_2,
    eyebrow: "RICH • AROMATIC • HANDPICKED",
    title: "Flavours",
    highlight: "From Nature.",
    description:
      "Experience the bold aroma and distinctive character of premium spices carefully selected for exceptional taste and quality.",
  },
  {
    image:Slide_3,
    eyebrow: "FRESH • PURE • PREMIUM",
    title: "The Essence",
    highlight: "Of India.",
    description:
      "From the lush hills of Kerala to India's finest spice-growing regions, every spice carries a story of tradition and craftsmanship.",
  },
  {
    image:Slide_4,
    eyebrow: "TRADITION • QUALITY • TRUST",
    title: "Spices That",
    highlight: "Tell A Story.",
    description:
      "Bringing authentic Indian spices to your kitchen with uncompromising quality, freshness and flavour.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#17120c] text-white"
    >
      {/* ================= BACKGROUND SLIDES ================= */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

      {/* ================= BOTTOM GRADIENT ================= */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#17120c] to-transparent" />

      {/* ================= DECORATIVE GLOW ================= */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            key={`eyebrow-${currentSlide}`}
            className="mb-7 inline-flex animate-[fadeIn_0.8s_ease-out] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <Leaf
              size={15}
              className="text-emerald-400"
            />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              {slides[currentSlide].eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1
            key={`title-${currentSlide}`}
            className="animate-[fadeInUp_0.9s_ease-out] text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]"
          >
            {slides[currentSlide].title}
            <br />

            <span className="text-amber-400">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Description */}
          <p
            key={`description-${currentSlide}`}
            className="mt-7 max-w-xl animate-[fadeInUp_1s_ease-out] text-base leading-7 text-white/70 sm:text-lg"
          >
            {slides[currentSlide].description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              Explore Our Spices

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-md transition-all hover:bg-white/10"
            >
              Our Story
            </a>

          </div>

          {/* Trust Points */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-7">

            <div>
              <p className="text-2xl font-bold">
                100%
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Natural
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                25+
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Premium Spices
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                Since 1998
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Trusted Quality
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= FLOATING BADGE ================= */}
      {/* <div className="absolute bottom-24 right-10 hidden lg:block">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/20 bg-black/30 text-center backdrop-blur-xl">

          <Sparkles
            size={20}
            className="mb-2 text-amber-400"
          />

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Handpicked
          </span>

          <span className="mt-1 text-sm font-bold">
            Premium Quality
          </span>

        </div>
      </div> */}

      {/* ================= SLIDER CONTROLS ================= */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-black transition hover:bg-amber-400"
        >
          <ArrowRight size={18} />
        </button>

      </div>

      {/* ================= SLIDE INDICATORS ================= */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-amber-400"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}

      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      {/* <div className="absolute bottom-8 left-10 hidden flex-col items-center gap-3 md:flex">

        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          Scroll to explore
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />

      </div> */}

    </section>
  );
};

export default HeroSection;