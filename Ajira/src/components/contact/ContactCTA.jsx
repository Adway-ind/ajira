import { ArrowRight, Leaf } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08752a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">

      {/* Decorative shapes */}
      <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />

      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[250px] w-[250px] rounded-full bg-[#15913d]" />

      <div className="relative mx-auto max-w-[850px] text-center">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
          <Leaf
            size={25}
            strokeWidth={1.4}
          />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9dcae]">
          Let's Work Together
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Let's Build a Reliable
          <span className="block text-[#c7e7bd]">
            Sourcing Partnership.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#d0e8cb] sm:text-base">
          From the farms of the Western Ghats to global markets, let's build
          a supply chain around quality, transparency and consistency.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#08752a] transition hover:bg-[#edf6ea]"
          >
            Start an Enquiry
            <ArrowRight size={16} />
          </a>

          <a
            href="mailto:exports@ajiranaturals.com"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Export Team
          </a>

        </div>

      </div>
    </section>
  );
}