import { CircleCheck, Eye, Gem, Rocket } from "lucide-react";

const principles = [
  {
    icon: Rocket,
    number: "01",
    label: "Our mission",
    title: "Empowering agro-communities",
    description:
      "Champion ethical trade partnerships that enrich smallholder farmers while delivering pure, unadulterated spices to global food, culinary, and wellness brands.",
    footer: "Direct farmer equity & fair margins",
    accent: "text-[#a8d781]",
    iconStyle: "bg-[#244f37] text-[#a8d781]",
  },
  {
    icon: Eye,
    number: "02",
    label: "Our vision",
    title: "The benchmark exporter",
    description:
      "Build the world’s most transparent and reliable Indian-spice export business, known for batch consistency, clean chemistry, and verifiable sustainability.",
    footer: "Targeting carbon-neutral shipments",
    accent: "text-[#f3ae76]",
    iconStyle: "bg-[#5b4632] text-[#f3ae76]",
  },
  {
    icon: Gem,
    number: "03",
    label: "Our values",
    title: "Integrity without compromise",
    description:
      "Hold absolute transparency across analysis certificates, steward micro-biodiversity, and respect every cultivator who nurtures our heritage crops.",
    footer: "Transparent certificates of analysis",
    accent: "text-[#e4b9a7]",
    iconStyle: "bg-[#57413b] text-[#e4b9a7]",
  },
];

export default function PurposeSection() {
  return (
    <section className="relative overflow-hidden bg-[#123a2a] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#2e6342]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#8d5537]/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a8d781]">
              <span className="h-px w-7 bg-[#a8d781]" />
              Guiding principles
            </div>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[42px]">
              Purpose in every partnership.
            </h2>
          </div>

          <p className="max-w-[570px] text-[14px] leading-[1.75] text-[#bdd0c2] sm:text-[15px] lg:justify-self-end">
            We pair the standards global procurement teams expect with a long-term responsibility to the people and ecosystems at our origin.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.number} className="group flex min-h-[315px] flex-col rounded-[20px] border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.1] sm:p-7">
                <div className="flex items-start justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconStyle}`}>
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="text-[12px] font-semibold text-white/30">{item.number}</span>
                </div>

                <p className={`mt-7 text-[10px] font-bold uppercase tracking-[0.14em] ${item.accent}`}>
                  {item.label}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[12px] leading-[1.7] text-[#c3d3c7]">
                  {item.description}
                </p>

                <div className="mt-auto border-t border-white/15 pt-5">
                  <div className={`flex items-start gap-2 text-[10px] font-semibold leading-[1.45] ${item.accent}`}>
                    <CircleCheck size={14} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                    {item.footer}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
