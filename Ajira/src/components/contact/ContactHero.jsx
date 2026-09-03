import { ArrowDown, ArrowRight, Check, Mail, MessageCircle, Phone } from "lucide-react";
import Background from "../../assets/image/bg/img-5.jpg";

const points = ["Farm direct", "Export ready", "Quality assured"];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f3] px-6 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-36">
      <img src={Background} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.28]" />
      <div className="pointer-events-none absolute inset-0 bg-[#f7f8f3]/55" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#dcebd5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#f4dfc1]/45 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4e1cb] bg-white/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#497550] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ee7623]" />
            Speak with our sourcing team
          </div>

          <h1 className="mt-6 max-w-[650px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#173b2b] sm:text-[54px] lg:text-[58px]">
            Let’s discuss your
            <span className="block text-[#61904f]">spice requirements.</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[14px] leading-[1.75] text-[#4f635a] sm:text-[15px]">
            Share what you need and our team will help shape the right product, specification, quantity, and delivery solution for your market.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {points.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-[#d6e2d1] bg-white/70 px-3 py-2 text-[10px] font-semibold text-[#52665b]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e5f0e2] text-[#4d874c]"><Check size={10} strokeWidth={2.2} /></span>
                {point}
              </span>
            ))}
          </div>

          <a href="#enquiry" className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-[#0b6b3e] px-5 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(11,107,62,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#095c35]">
            Start an enquiry
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <aside className="relative mx-auto w-full max-w-[420px] rounded-[24px] border border-[#d8e4d4] bg-white/80 p-6 shadow-[0_20px_45px_rgba(22,63,39,0.12)] backdrop-blur-sm sm:p-7">
          <div className="flex items-center justify-between border-b border-[#e1e9de] pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5c8c49]">Export desk</p>
              <h2 className="mt-1 text-[19px] font-semibold tracking-[-0.025em] text-[#254533]">How can we help?</h2>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f2e6] text-[#4e894b]"><MessageCircle size={19} /></span>
          </div>

          <div className="divide-y divide-[#e4ebe1]">
            <a href="mailto:exports@ajiranaturals.com" className="flex items-center gap-3 py-5 transition-colors hover:text-[#0b6b3e]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f5ed] text-[#5c8c49]"><Mail size={16} /></span>
              <span><span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#839387]">Email us</span><span className="mt-1 block text-[12px] font-semibold text-[#355141]">exports@ajiranaturals.com</span></span>
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-3 py-5 transition-colors hover:text-[#0b6b3e]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdf0e7] text-[#df6d31]"><Phone size={16} /></span>
              <span><span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#839387]">Call our team</span><span className="mt-1 block text-[12px] font-semibold text-[#355141]">Monday–Saturday, 9 AM–6 PM</span></span>
            </a>
          </div>

          <p className="mt-5 rounded-xl bg-[#eef5eb] px-3 py-2.5 text-[10px] font-medium leading-[1.5] text-[#547152]">We respond to qualified export enquiries with clear next steps.</p>
        </aside>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-[1240px] items-center gap-2 text-[10px] font-medium text-[#84958a]">
        <ArrowDown size={14} />
        Start your sourcing conversation
      </div>
    </section>
  );
}
