const milestones = [
  {
    no: "01", year: "1998", label: "The beginning", title: "Highland collective",
    description: "Ajira's journey began in the highlands of Idukki, bringing together generations of cardamom and pepper farmers.",
    location: "Vandiperiyar, Kerala", color: "#6B9B45",
  },
  {
    no: "02", year: "2005", label: "First global step", title: "First export shipments",
    description: "Our first international consignments connected premium Kerala spices with buyers across the GCC market.",
    location: "Cochin Port to GCC", color: "#F26B38",
  },
  {
    no: "03", year: "2012", label: "Technology", title: "Traceability introduced",
    description: "Digital lot identification and farm-level data gave every shipment a clearer, more transparent origin.",
    location: "Digital lot auditing", color: "#D9A900",
  },
  {
    no: "04", year: "2018", label: "European expansion", title: "European distribution",
    description: "Strategic logistics partnerships in Rotterdam and Hamburg strengthened our presence across European markets.",
    location: "Rotterdam & Hamburg", color: "#E94758",
  },
  {
    no: "05", year: "2024", label: "The next chapter", title: "A global footprint",
    description: "With 32+ export destinations, Ajira moves toward cleaner energy, responsible packaging, and sustainable growth.",
    location: "32+ global markets", color: "#7B4938",
  },
];

export default function StrategicEvolution() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f3] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#e5efdd] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid gap-7 border-b border-[#dce5d8] pb-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c8c49]">
              <span className="h-px w-7 bg-[#6b9b45]" />
              Since 1998
            </div>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#173b2b] sm:text-[42px]">
              A supply chain built over time.
            </h2>
          </div>
          <p className="max-w-[470px] text-[14px] leading-[1.75] text-[#5b7062] lg:justify-self-end sm:text-[15px]">
            From a small collective in the Western Ghats to a global spice network, every chapter has deepened our connection to growers and markets.
          </p>
        </div>

        <div className="relative mt-10 space-y-4 before:absolute before:bottom-5 before:left-[11px] before:top-5 before:w-px before:bg-[#ccd9c8] sm:before:left-[15px]">
          {milestones.map((item) => (
            <article key={item.year} className="relative pl-8 sm:pl-11">
              <span
                className="absolute left-[5px] top-7 h-[13px] w-[13px] rounded-full border-[3px] border-[#f7f8f3] sm:left-[9px]"
                style={{ backgroundColor: item.color }}
              />

              <div className="grid gap-4 rounded-[18px] border border-[#dce5d8] bg-white p-5 shadow-[0_8px_25px_rgba(28,62,40,0.045)] transition-transform duration-300 hover:-translate-y-0.5 sm:grid-cols-[110px_1fr] sm:items-start sm:p-6 lg:grid-cols-[130px_1fr_auto]">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#84958a]">Chapter {item.no}</p>
                  <p className="mt-1 text-[28px] font-semibold leading-none tracking-[-0.04em]" style={{ color: item.color }}>{item.year}</p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em]" style={{ color: item.color }}>{item.label}</p>
                  <h3 className="mt-2 text-[20px] font-semibold leading-tight tracking-[-0.025em] text-[#234334]">{item.title}</h3>
                  <p className="mt-3 max-w-[520px] text-[12px] leading-[1.7] text-[#617369] sm:text-[13px]">{item.description}</p>
                </div>

                <div className="self-center rounded-full border px-3 py-1.5 text-[10px] font-semibold" style={{ borderColor: `${item.color}55`, color: item.color }}>
                  {item.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#dce5d8] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-semibold text-[#284836]">Local roots. Global responsibility.</p>
          <p className="text-[11px] font-medium text-[#6a7d70]">Growing with purpose, one trusted shipment at a time.</p>
        </div>
      </div>
    </section>
  );
}
