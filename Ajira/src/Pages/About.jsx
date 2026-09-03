import { ArrowRight, Download, Globe2, Leaf, QrCode, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/image/about/H-1.jpg";
import farmerImage from "../assets/image/about/F-1.png";
import StatsSection from "../components/TrustStats";
import AboutWhoWeAre from "../components/about/AboutWhoWeAre";
import PurposeSection from "../components/about/PurposeSection";
import StrategicEvolution from "../components/about/StrategicEvolution";
import WhyChooseAjira from "../components/about/WhyChooseAjira";
import LeadershipSection from "../components/about/LeadershipSection";
import AboutCTA from "../components/about/AboutCTA";
import SourceCTA from "../components/SourceCTA";


const trustPoints = [
  { icon: ShieldCheck, text: "APEDA & FSSAI registered" },
  { icon: Globe2, text: "FDA & EU spec compliant" },
  { icon: QrCode, text: "Lot-level traceability" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="pointer-events-none absolute -left-32 -top-36 h-[440px] w-[440px] rounded-full bg-[#dcebd5]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-36 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f5ddbb]/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4e1cb] bg-white/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#497550] sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ee7623]" />
              Direct exporter from South India
            </div>

            <h1 className="mt-6 max-w-[610px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#173b2b] sm:text-[54px] lg:text-[56px]">
              From the Western Ghats,
              <span className="block text-[#61904f]">to the world’s tables.</span>
            </h1>

            <p className="mt-6 max-w-[535px] text-[14px] leading-[1.75] text-[#4f635a] sm:text-[15px]">
              Ajira Naturals connects carefully grown Indian spices with food
              processors, extractors, and retail brands worldwide—through direct
              sourcing, verified quality, and dependable export expertise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#0b6b3e] px-5 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(11,107,62,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#095c35]">
                Start a conversation
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a href="/brochure.pdf" download className="inline-flex h-11 items-center gap-2 rounded-full border border-[#ccd8cd] bg-white/80 px-5 text-[11px] font-semibold text-[#29483a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9fb9a2]">
                <Download size={13} />
                Corporate brochure
              </a>
            </div>

            <div className="mt-9 grid max-w-[590px] gap-3 border-t border-[#dce5d8] pt-5 sm:grid-cols-3">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[11px] font-medium text-[#52665b]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6f0e3] text-[#3e8250]">
                    <Icon size={14} strokeWidth={1.8} />
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[610px] pb-10 lg:pb-0">
            <div className="absolute -inset-4 rounded-[34px] border border-[#d8e3d5] bg-white/35" />

            <div className="relative h-[360px] overflow-hidden rounded-[26px] shadow-[0_22px_55px_rgba(24,60,39,0.18)] sm:h-[430px]">
              <img src={heroImage} alt="Western Ghats spice plantations" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 text-white sm:bottom-6 sm:left-6">
                <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">Origin: Kerala, India</span>
                <p className="mt-2 text-[12px] font-medium sm:text-[13px]">Cultivated close to the source.</p>
              </div>
            </div>

            <div className="absolute -bottom-1 -right-2 hidden w-[185px] overflow-hidden rounded-[18px] border-4 border-[#f7f8f3] bg-white shadow-[0_16px_35px_rgba(24,60,39,0.2)] sm:block lg:-right-7">
              <img src={farmerImage} alt="Cardamom farmer in the Western Ghats" className="h-[148px] w-full object-cover" />
              <p className="px-3 py-2.5 text-[10px] font-semibold text-[#234334]">Farmer-first sourcing</p>
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-2.5 rounded-2xl border border-[#dce6d9] bg-white px-3 py-2.5 shadow-[0_12px_28px_rgba(24,60,39,0.15)] sm:left-6 sm:px-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f2e6] text-[#4f8a4b]">
                <Leaf size={16} />
              </span>
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#78877d]">Traceable by design</p>
                <p className="mt-0.5 text-[10px] font-semibold text-[#254533]">From plantation to port</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <AboutWhoWeAre />
      <PurposeSection />
      <StrategicEvolution />
      <WhyChooseAjira />
      <LeadershipSection />
      <SourceCTA />
    </>
  );
}
