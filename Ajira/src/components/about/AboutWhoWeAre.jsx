import { Quote } from "lucide-react";
import Farmer from "../../assets/image/about/W-1.png";

const highlights = [
  {
    number: "01",
    title: "Direct farm gate",
    description: "Direct farmer agreements with no intermediary dilution.",
  },
  {
    number: "02",
    title: "Ethical remuneration",
    description: "Premium returns designed to reward growers fairly.",
  },
  {
    number: "03",
    title: "Analytical rigour",
    description: "Volatile oil, piperine, and curcumin profiling.",
  },
];

export default function AboutWhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#e9f2e4]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[530px] lg:mx-0">
          <div className="absolute -inset-4 rounded-[32px] border border-[#e1ebdd] bg-[#f7faf5]" />

          <div className="relative overflow-hidden rounded-[24px] shadow-[0_22px_50px_rgba(20,61,36,0.16)]">
            <img
              src={Farmer}
              alt="Cardamom farmers working in the Western Ghats"
              className="h-[350px] w-full object-cover sm:h-[430px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/75 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 text-white sm:bottom-6 sm:left-6">
              <span className="inline-flex rounded-full bg-[#ecb92f] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em] text-[#25402b]">
                Generational cultivators
              </span>
              <p className="mt-2 text-[12px] font-medium">Idukki Cardamom Grower Cooperative</p>
            </div>
          </div>

          <div className="absolute -bottom-7 -right-3 max-w-[265px] rounded-2xl border border-[#dbe5d8] bg-white p-4 shadow-[0_16px_35px_rgba(20,61,36,0.14)] sm:right-5 sm:p-5">
            <Quote size={18} className="text-[#e56e31]" fill="currentColor" />
            <p className="mt-2 text-[10px] font-medium leading-[1.6] text-[#3d5947] sm:text-[11px]">
              We export the fragrant heritage of the Western Ghats with every lot.
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c8c49]">
            <span className="h-px w-7 bg-[#6b9b45]" />
            Our legacy & ethos
          </div>

          <h2 className="mt-5 max-w-[650px] text-[31px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#173b2b] sm:text-[40px]">
            Integrity grown close to the soil.
            <span className="block text-[#61904f]">Trusted at every table.</span>
          </h2>

          <div className="mt-6 max-w-[650px] space-y-4 text-[13px] leading-[1.75] text-[#52665b] sm:text-[14px]">
            <p>
              Ajira Naturals was born from a simple belief: the Western Ghats’ exceptional spices deserve a supply chain that protects both grower value and product integrity.
            </p>
            <p>
              From direct farm-gate procurement through careful cleaning, curing, sorting, and export documentation, we keep every step transparent and accountable.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[#dfe8dc] border-y border-[#dfe8dc]">
            {highlights.map((item) => (
              <div key={item.number} className="grid grid-cols-[32px_1fr] gap-3 py-4 sm:grid-cols-[42px_150px_1fr] sm:items-center sm:gap-4">
                <span className="text-[11px] font-bold text-[#e57837]">{item.number}</span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.09em] text-[#244735]">{item.title}</h3>
                <p className="col-start-2 text-[11px] leading-[1.5] text-[#718178] sm:col-start-auto">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-[11px] font-medium leading-[1.6] text-[#64766b]">
            Non-GMO, pesticide-monitored spices with uninterrupted chain-of-custody—from cultivation to global delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
