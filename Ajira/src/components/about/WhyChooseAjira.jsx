import { BadgeCheck, FlaskConical, Leaf, PackageCheck, Truck, UsersRound } from "lucide-react";

const advantages = [
  { icon: UsersRound, number: "01", title: "Farmer network", description: "Direct partnerships with 500+ micro-farmers across South India.", color: "text-[#4f8a4b]", surface: "bg-[#e8f2e6]" },
  { icon: FlaskConical, number: "02", title: "Quality assurance", description: "Multi-stage testing from soil analysis through final packaging.", color: "text-[#e46d32]", surface: "bg-[#fceddf]" },
  { icon: BadgeCheck, number: "03", title: "Export standards", description: "Compliance with FDA, EU, and APEDA international norms.", color: "text-[#c99a10]", surface: "bg-[#fff5d8]" },
  { icon: PackageCheck, number: "04", title: "Premium packing", description: "Custom bulk and retail packaging solutions for B2B needs.", color: "text-[#d85a67]", surface: "bg-[#fde7ea]" },
  { icon: Truck, number: "05", title: "Global logistics", description: "Efficient delivery management with real-time shipment tracking.", color: "text-[#805555]", surface: "bg-[#f1e8e7]" },
  { icon: Leaf, number: "06", title: "Sustainable path", description: "Responsible processing goals and biodegradable packaging.", color: "text-[#4b8c60]", surface: "bg-[#e6f1e9]" },
];

export default function WhyChooseAjira() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-6 border-b border-[#dce5d8] pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c8c49]">
              <span className="h-px w-7 bg-[#6b9b45]" />
              Why choose Ajira
            </div>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#173b2b] sm:text-[42px]">
              Built for reliable global trade.
            </h2>
          </div>
          <p className="max-w-[510px] text-[14px] leading-[1.75] text-[#5b7062] lg:justify-self-end sm:text-[15px]">
            Direct sourcing and disciplined processing come together to give global partners dependable quality at every stage.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ icon: Icon, number, title, description, color, surface }) => (
            <article key={number} className="group rounded-[18px] border border-[#dce5d8] bg-[#fbfcf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfd2bb] hover:bg-white hover:shadow-[0_16px_30px_rgba(28,62,40,0.08)]">
              <div className="flex items-center justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${surface} ${color}`}>
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-[10px] font-semibold text-[#a6b2a7]">{number}</span>
              </div>
              <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.02em] text-[#274837]">{title}</h3>
              <p className="mt-2 text-[12px] leading-[1.65] text-[#687a6e]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
