import {
    Sprout,
    Factory,
    ArrowRight,
    MapPin,
} from "lucide-react";
import WB from "../assets/image/bg/img-6.png"
import LetterRed from "../assets/image/pattern/01_I_red.svg";
import LetterGreen from "../assets/image/pattern/02_J_green.svg";
import LetterYellow from "../assets/image/pattern/03_i_yellow.svg";
import LetterPink from "../assets/image/pattern/04_R_pink.svg";
import LetterOrange from "../assets/image/pattern/06_I_orange.svg";

const letterPattern = [
    { src: LetterGreen, className: "-left-3 top-10 w-5 sm:left-3", rotation: "-14deg", delay: "0s", duration: "6s" },
    { src: LetterYellow, className: "right-5 top-10 w-3 sm:right-10", rotation: "14deg", delay: "1.3s", duration: "5.5s" },
    { src: LetterRed, className: "left-[7%] bottom-6 w-3", rotation: "18deg", delay: "0.8s", duration: "6.5s" },
    { src: LetterPink, className: "-right-8 bottom-7 w-6 sm:right-4", rotation: "-10deg", delay: "2.1s", duration: "7s" },
    { src: LetterOrange, className: "left-[48%] top-5 hidden w-2 lg:block", rotation: "-8deg", delay: "2.6s", duration: "6.2s" },
];

export default function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                {letterPattern.map((letter, index) => (
                    <img
                        key={index}
                        src={letter.src}
                        alt=""
                        className={`ajira-letter-float absolute ${letter.className}`}
                        style={{
                            "--letter-rotation": letter.rotation,
                            animationDelay: letter.delay,
                            animationDuration: letter.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-[1120px]">

                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <div>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#08783d]">
                            Who We Are
                        </span>

                        <h2 className="mt-4 max-w-[520px] text-[34px] font-medium leading-[1.15] tracking-[-0.03em] text-[#10251c] sm:text-[40px]">
                            Connecting Farmers.
                            <br />
                            <span className="text-[#08783d]">
                                Supplying the World.
                            </span>
                        </h2>


                        <div className="mt-5 h-[2px] w-12 bg-[#d8a719]" />

                        <p className="mt-6 max-w-[560px] text-[14px] leading-[1.75] text-[#41576a] sm:text-[15px]">
                            We are a young team of professionals working to bridge the gap
                            between farmers and the global spice industry.
                        </p>

                        <p className="mt-4 max-w-[560px] text-[14px] leading-[1.75] text-[#41576a] sm:text-[15px]">
                            We connect farmers across{" "}
                            <strong className="font-medium text-[#173f2e]">
                                Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh
                            </strong>{" "}
                            with exporters and food-processing companies, creating a
                            reliable supply chain built around quality, transparency, and
                            long-term partnerships.
                        </p>

                        <p className="mt-4 max-w-[560px] text-[14px] leading-[1.75] text-[#41576a] sm:text-[15px]">
                            We produce and source spices according to{" "}
                            <strong className="font-medium text-[#173f2e]">
                                specific customer requirements
                            </strong>
                            , ensuring the right grades, specifications, processing, and
                            quality standards for every order.
                        </p>
                        {/* CTA */}
                        <a
                            href="/about"
                            className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#08783d]"
                        >
                            Discover Our Story

                            <ArrowRight
                                size={16}
                                strokeWidth={1.7}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    {/* Right Visual */}
                    {/* Right Visual */}
                    <div className="relative">

                        {/* Floating Cardamom - Top Right */}
                        

                        {/* Floating Cardamom - Left */}
                        

                        

                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-[18px]">
                            <img
                                src={WB}
                                alt="Farmers growing Indian spices"
                                className="h-[420px] w-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#063c2b]/70 via-transparent to-transparent" />

                            {/* Location */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 shadow-lg">
                                <MapPin
                                    size={15}
                                    className="text-[#08783d]"
                                    strokeWidth={1.8}
                                />

                                <span className="text-[11px] font-medium text-[#173f2e]">
                                    South India
                                </span>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -bottom-7 -left-5 z-30 hidden w-[180px] rounded-[14px] border border-[#dce5dc] bg-white p-5 shadow-[0_15px_40px_rgba(20,60,35,0.12)] sm:block">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f2e9]">
                                <Sprout
                                    size={19}
                                    className="text-[#08783d]"
                                    strokeWidth={1.7}
                                />
                            </div>

                            <p className="mt-3 text-[11px] font-semibold text-[#173f2e]">
                                Farmer Connected
                            </p>

                            <p className="mt-1 text-[10px] leading-relaxed text-[#68766e]">
                                From farm communities to global markets.
                            </p>
                        </div>

                        <div className="absolute -right-5 -top-6 z-30 hidden w-[180px] rounded-[14px] border border-[#dce5dc] bg-white p-5 shadow-[0_15px_40px_rgba(20,60,35,0.12)] sm:block">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f2e9]">
                                <Factory
                                    size={19}
                                    className="text-[#08783d]"
                                    strokeWidth={1.7}
                                />
                            </div>

                            <p className="mt-3 text-[11px] font-semibold text-[#173f2e]">
                                Industry Ready
                            </p>

                            <p className="mt-1 text-[10px] leading-relaxed text-[#68766e]">
                                Specifications tailored to customer needs.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
