import {
  ShieldCheck,
  FlaskConical,
  Package,
  Handshake,
  Gauge,
  Lightbulb,
} from "lucide-react";
import LetterRed from "../assets/image/pattern/01_I_red.svg";
import LetterGreen from "../assets/image/pattern/02_J_green.svg";
import LetterYellow from "../assets/image/pattern/03_i_yellow.svg";
import LetterPink from "../assets/image/pattern/04_R_pink.svg";
import LetterBrown from "../assets/image/pattern/05_I_brown.svg";
import LetterOrange from "../assets/image/pattern/06_I_orange.svg";

const features = [
  {
    title: "Direct Sourcing",
    description:
      "Eliminating middlemen to ensure fair pricing for farmers and cost-effectiveness for our clients.",
    icon: ShieldCheck,
  },
  {
    title: "Lab Tested",
    description:
      "Every batch undergoes multi-parameter testing for moisture, curcumin, and volatile oil content.",
    icon: FlaskConical,
  },
  {
    title: "Custom Packaging",
    description:
      "Industrial scale vacuum packing and private labeling options available for international retail brands.",
    icon: Package,
  },
  {
    title: "Ethical Trade",
    description:
      "Long-term partnerships built on transparency and commitment to sustainable agricultural practices.",
    icon: Handshake,
  },
  {
    title: "Swift Logistics",
    description:
      "Optimized supply chain reaching major ports in Europe, US, and Middle East within industry-leading lead times.",
    icon: Gauge,
  },
  {
    title: "Product Expertise",
    description:
      "Consultation on spice grades and varietals specific to regional culinary and industrial requirements.",
    icon: Lightbulb,
  },
];

const letterPattern = [
  { src: LetterGreen, className: "-left-3 top-10 w-5 sm:left-7", rotation: "-16deg", delay: "0s", duration: "6s" },
  { src: LetterYellow, className: "right-5 top-16 w-3 sm:right-10", rotation: "12deg", delay: "1.4s", duration: "5.5s" },
  { src: LetterRed, className: "left-[5%] bottom-2 w-3", rotation: "20deg", delay: "0.7s", duration: "6.5s" },
  { src: LetterPink, className: "-right-8 bottom-4 w-5 sm:right-5", rotation: "-12deg", delay: "2s", duration: "7s" },
  { src: LetterBrown, className: "left-[13%] bottom-[40%] hidden w-2 lg:block", rotation: "100deg", delay: "1s", duration: "5.8s" },
  { src: LetterOrange, className: "right-[13%] top-[55%] hidden w-2 lg:block", rotation: "-100deg", delay: "2.5s", duration: "6.2s" },
];

export default function AjiraEdge() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
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

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-[28px] font-medium leading-tight tracking-[-0.02em] text-[#111111] sm:text-[30px]">
            The Ajira Edge
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-[77px] bg-[#f5b91b]" />

          <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-[1.55] text-[#18334a] sm:text-[15px]">
            We combine heritage agricultural wisdom with rigorous international
            compliance protocols.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="min-h-[197px] rounded-[14px] border border-[#d1d9cf] bg-white px-[26px] py-[26px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,70,35,0.07)]"
              >
                {/* Icon */}
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-[#eaf2ed]">
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#00833e]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[14px] font-medium text-[#111111]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[270px] text-[13px] leading-[1.48] text-[#253b4d]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
