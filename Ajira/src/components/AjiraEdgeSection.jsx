import {
  ShieldCheck,
  FlaskConical,
  Package,
  Handshake,
  Gauge,
  Lightbulb,
} from "lucide-react";

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

export default function AjiraEdge() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1120px]">

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