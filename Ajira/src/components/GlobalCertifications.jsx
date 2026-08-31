import { ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import LOGO_1 from "../assets/image/slider/logo-1.png"
import LOGO_2 from "../assets/image/slider/logo-2.png"
import LOGO_3 from "../assets/image/slider/logo-3.jpg"

import "swiper/css";

const certifications = [
    {
        name: "JAIVIK BHARAT",
        image: LOGO_1,
    },
    {
        name: "USDA ORGANIC",
        image: LOGO_2,
    },
    {
        name: "EU Organic",
        image: LOGO_3,
    },
    {
        name: "JAIVIK BHARAT",
        image: LOGO_1,
    },
    {
        name: "USDA ORGANIC",
        image: LOGO_2,
    },
    {
        name: "EU Organic",
        image: LOGO_3,
    },
];

export default function GlobalCertifications() {
    return (
        <section className="relative overflow-hidden bg-[#f5f7f0] px-6 py-20 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1120px]">

                {/* Heading */}
                <div className="mx-auto max-w-[650px] text-center">

                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#cbd9ca] bg-white shadow-sm">
                        <ShieldCheck
                            className="h-5 w-5 text-[#08783d]"
                            strokeWidth={1.7}
                        />
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#08783d]">
                        Trusted Worldwide
                    </p>

                    <h2 className="mt-2 text-[27px] font-medium tracking-[-0.025em] text-[#111827] sm:text-[30px]">
                        Global Quality Certifications
                    </h2>

                    <div className="mx-auto mt-4 h-[2px] w-12 bg-[#d8a719]" />

                    <p className="mx-auto mt-4 max-w-[570px] text-[13px] leading-[1.7] text-[#41576a] sm:text-[14px]">
                        Adhering to rigorous international standards ensures our spices
                        meet the strict regulatory frameworks globally.
                    </p>
                </div>

                {/* Slider */}
                {/* Certification Slider */}
                <div className="mt-12">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                        }}
                        className="certification-swiper"
                    >
                        {[...certifications, ...certifications].map(
                            (certification, index) => (
                                <SwiperSlide key={`${certification.name}-${index}`}>
                                    <div
                                        className="
              group relative flex h-[115px]
              flex-col items-center justify-center
              overflow-hidden rounded-xl
              border border-[#dce3da]
              bg-white
              px-4
              shadow-[0_5px_20px_rgba(20,60,35,0.05)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#a9c7ad]
              hover:shadow-[0_12px_30px_rgba(20,60,35,0.10)]
            "
                                    >
                                        {/* Top accent */}
                                        <div className="
              absolute left-0 top-0
              h-[2px] w-full
              bg-[#08783d]
              opacity-0
              transition-opacity
              group-hover:opacity-100
            " />

                                        {/* Logo */}
                                        <div className="flex h-[55px] w-full items-center justify-center">
                                            <img
                                                src={certification.image}
                                                alt={certification.name}
                                                className="
                  max-h-[48px]
                  max-w-[100px]
                  object-contain
                  grayscale
                  opacity-70
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
                                            />
                                        </div>

                                        {/* Name */}
                                        <span className="
              mt-2
              text-[8px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-[#68766e]
            ">
                                            {certification.name}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-[#d7ded5]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#738077]">
                        Quality • Compliance • Trust
                    </span>

                    <div className="h-px w-12 bg-[#d7ded5]" />
                </div>

            </div>
        </section>
    );
}