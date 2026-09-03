import ArjunNair from "../../assets/image/about/leadership/arjun-nair.png";
import MeeraIyer from "../../assets/image/about/leadership/meera-iyer.png";
import Raghavan from "../../assets/image/about/leadership/raghavan.png";
import KiranDev from "../../assets/image/about/leadership/kiran-dev.png";

const leaders = [
  { name: "Arjun Nair", role: "Chief Executive Officer", image: ArjunNair, color: "border-[#0b6b3e]", accent: "bg-[#0b6b3e]" },
  { name: "Meera Iyer", role: "Operations Director", image: MeeraIyer, color: "border-[#eb702c]", accent: "bg-[#eb702c]" },
  { name: "S. Raghavan", role: "Quality Assurance Lead", image: Raghavan, color: "border-[#d9aa13]", accent: "bg-[#d9aa13]" },
  { name: "Kiran Dev", role: "Global Logistics Head", image: KiranDev, color: "border-[#ec4764]", accent: "bg-[#ec4764]" },
];

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafbf8] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(#dce7d8_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[650px] text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c8c49]">
            <span className="h-px w-6 bg-[#6b9b45]" />
            Leadership & expertise
            <span className="h-px w-6 bg-[#6b9b45]" />
          </div>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#173b2b] sm:text-[42px]">
            Expertise behind every export.
          </h2>
          <p className="mx-auto mt-4 max-w-[530px] text-[14px] leading-[1.7] text-[#617369] sm:text-[15px]">
            Guided by industry specialists with a shared commitment to quality, integrity, and dependable global trade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-x-8 lg:mt-14 lg:gap-x-12">
          {leaders.map((leader) => (
            <article key={leader.name} className="group text-center">
              <div className={`relative mx-auto aspect-square w-full max-w-[190px] overflow-hidden rounded-full border-[3px] bg-white p-1 transition-transform duration-300 group-hover:-translate-y-1 ${leader.color}`}>
                <img src={leader.image} alt={leader.name} className="h-full w-full rounded-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
                <span className={`absolute bottom-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-[#fafbf8] ${leader.accent}`} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.02em] text-[#234334]">{leader.name}</h3>
              <p className="mt-1 text-[11px] font-medium leading-[1.4] text-[#6b7d71]">{leader.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
