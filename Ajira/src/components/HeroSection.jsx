import React, { useEffect, useState } from "react";
import Slide_1 from "../assets/image/bg/img-1.png";
import Slide_2 from "../assets/image/bg/img-2.png";
import Slide_3 from "../assets/image/bg/img-3.png";
import Slide_4 from "../assets/image/bg/img-4.png";

import {
  ArrowLeft,
  ArrowRight,
  Leaf,
} from "lucide-react";

const slides = [
  {
    image: Slide_1,
    eyebrow: "PURE • AUTHENTIC • NATURALLY SOURCED",
    title: "Nature's",
    highlight: "Finest Spices.",
    description:
      "Discover the rich aroma, vibrant flavour and authentic taste of carefully selected spices, sourced directly from India's finest growing regions.",
  },
  {
    image: Slide_2,
    eyebrow: "RICH • AROMATIC • HANDPICKED",
    title: "Flavours",
    highlight: "From Nature.",
    description:
      "Experience the bold aroma and distinctive character of premium spices carefully selected for exceptional taste and quality.",
  },
  {
    image: Slide_3,
    eyebrow: "FRESH • PURE • PREMIUM",
    title: "The Essence",
    highlight: "Of India.",
    description:
      "From the lush hills of Kerala to India's finest spice-growing regions, every spice carries a story of tradition and craftsmanship.",
  },
  {
    image: Slide_4,
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
      className="
  relative
  h-[680px]
  overflow-hidden
  bg-[#17120c]
  text-white

  sm:h-[800px]
  lg:h-[860px]
"
    >
      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`
              absolute inset-0
              bg-cover
              bg-center
              transition-opacity
              duration-1000
              ease-in-out
              ${index === currentSlide ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/90
          via-black/65
          to-black/20
        "
      />

      {/* =====================================================
          MOBILE EXTRA DARK OVERLAY
      ===================================================== */}
      <div
        className="
          absolute inset-0
          bg-black/10
          sm:hidden
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          sm:h-48
          bg-gradient-to-t
          from-[#17120c]
          to-transparent
        "
      />

      {/* =====================================================
          DECORATIVE GLOW
      ===================================================== */}
      <div
        className="
          absolute
          left-[-20%]
          top-[20%]
          h-[350px]
          w-[350px]
          sm:h-[500px]
          sm:w-[500px]
          rounded-full
          bg-orange-500/10
          blur-[100px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
          
          IMPORTANT:
          Mobile  = items-start
          Desktop = items-center

          This prevents content from being pushed above the
          viewport on small screens.
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-7xl
          items-start
          px-5
          pt-28
          pb-32
          sm:px-6
          sm:pt-32
          sm:pb-36
          lg:items-center
          lg:px-10
          lg:py-24
        "
      >
        <div
          className="
            w-full
            max-w-3xl
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}
          <div
            key={`eyebrow-${currentSlide}`}
            className="
              mb-5
              inline-flex
              max-w-full
              animate-[fadeIn_0.8s_ease-out]
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3.5
              py-2
              backdrop-blur-md

              sm:mb-7
              sm:px-4
            "
          >
            <Leaf
              size={14}
              className="shrink-0 text-emerald-400 sm:h-[15px] sm:w-[15px]"
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/80

                sm:text-xs
                sm:tracking-[0.2em]

                md:tracking-[0.25em]
              "
            >
              {slides[currentSlide].eyebrow}
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}
          <h1
            key={`title-${currentSlide}`}
            className="
              animate-[fadeInUp_0.9s_ease-out]
              text-[46px]
              font-black
              leading-[0.95]
              tracking-tight

              xs:text-[50px]
              sm:text-6xl
              md:text-7xl
              lg:text-[92px]
          "
          >
            {slides[currentSlide].title}
            <br />

            <span className="text-amber-400">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
          <p
            key={`description-${currentSlide}`}
            className="
              mt-5
              max-w-xl
              animate-[fadeInUp_1s_ease-out]
              text-sm
              leading-6
              text-white/70

              sm:mt-7
              sm:text-base
              sm:leading-7

              md:text-lg
            "
          >
            {slides[currentSlide].description}
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3

              sm:mt-9
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
            "
          >
            {/* Explore */}
            <a
              href="#products"
              className="
                group
                inline-flex
                w-fit
                items-center
                justify-center
                gap-3
                rounded-full
                bg-amber-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-black
                transition-all
                duration-300

                hover:bg-amber-400
                hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]

                sm:px-7
                sm:py-4
              "
            >
              Explore Our Spices

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Our Story */}
            <a
              href="#about"
              className="
                inline-flex
                w-fit
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/5
                px-6
                py-3.5
                text-sm
                font-semibold
                backdrop-blur-md
                transition-all

                hover:bg-white/10

                sm:px-7
                sm:py-4
              "
            >
              Our Story
            </a>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

        </div>
      </div>

      {/* =====================================================
          SLIDER CONTROLS
      ===================================================== */}
      <div
        className="
          absolute
          bottom-20
          right-5
          z-20
          flex
          items-center
          gap-2

          sm:bottom-10
          sm:right-10
          sm:gap-3
        "
      >
        {/* Previous */}
        {/* <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/30
            text-white
            backdrop-blur-md
            transition

            hover:bg-white/10

            sm:h-11
            sm:w-11
          "
        >
          <ArrowLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
        </button> */}

        {/* Next */}
        {/* <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-amber-500
            text-black
            transition

            hover:bg-amber-400

            sm:h-11
            sm:w-11
          "
        >
          <ArrowRight size={16} className="sm:h-[18px] sm:w-[18px]" />
        </button> */}
      </div>

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-2

          sm:bottom-12
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500
              ${index === currentSlide
                ? "w-8 bg-amber-400 sm:w-10"
                : "w-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;