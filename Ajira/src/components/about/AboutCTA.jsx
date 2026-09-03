import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Background from "../../assets/image/bg/img-5.jpg";

export default function AboutCTA() {
  return (
    <section className="bg-white px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
      <div
        className="relative mx-auto overflow-hidden rounded-[26px] bg-cover bg-center px-6 py-16 sm:px-10 sm:py-20 lg:max-w-[1240px] lg:px-16"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-[#08713b]/90" />
        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-[#8dcb69]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-[#f2a157]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[680px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c4e6b9]">Let’s grow together</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[39px]">
            Your next reliable spice partnership starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-[570px] text-[13px] leading-[1.7] text-[#d4ead6] sm:text-[14px]">
            Whether you are a retailer, wholesaler, or food manufacturer, our team can build the right spice solution for your requirements.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex h-11 min-w-[160px] items-center justify-center gap-2 rounded-full bg-[#f47721] px-6 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(54,26,8,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e66b1b]">
              Enquire now
              <ArrowRight size={14} />
            </Link>
            <a href="mailto:exports@ajiranaturals.com" className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full border border-white/45 px-6 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
