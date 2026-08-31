import {
  Leaf,
  Sprout,
  Factory,
  CircleCheck,
} from "lucide-react";

const standards = [
  {
    title: "Organic Sourcing",
    description:
      "Certified NOP, NPOP, and EU Organic spices. Cultivated without synthetic pesticides or fertilizers in dedicated organic-clusters.",
    icon: Leaf,
    points: [
      "Zero chemical residue",
      "Sustainable crop rotation",
    ],
  },
  {
    title: "IPM Sourcing",
    description:
      "Integrated Pest Management for controlled residue levels, meeting the stringent MRL standards of the European Union.",
    icon: Sprout,
    points: [
      "EU Compliant MRL levels",
      "Strictly monitored farming",
    ],
    featured: true,
  },
  {
    title: "Conventional",
    description:
      "High-grade spices for general commercial use, processed with the same industrial rigor and hygienic excellence.",
    icon: Factory,
    points: [
      "Standard ASTA specs",
      "Steam sterilized options",
    ],
  },
];

export default function QualityStandards() {
  return (
    <section className="w-full bg-[#043d28] px-6 py-12 sm:px-8 md:py-14 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-[1120px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[27px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
            World-Class Quality Standards
          </h2>

          <p className="mx-auto mt-4 max-w-[550px] text-[14px] leading-[1.55] text-[#8dd7b5] sm:text-[15px]">
            Our multi-tier sourcing strategy ensures we meet the specific
            regulatory requirements of every global region.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  flex min-h-[314px]
                  flex-col
                  rounded-[18px]
                  border
                  px-8 py-8
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    item.featured
                      ? "border-[#67b873] bg-[#41695a]"
                      : "border-[#66877a] bg-[#41695a]"
                  }
                `}
              >
                {/* Icon */}
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#52796b]">
                  <Icon
                    className="h-[25px] w-[25px] text-[#8be88d]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[14px] font-medium text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[13px] leading-[1.45] text-[#a7c9ba]">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mt-auto space-y-3 pt-6">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5"
                    >
                      <CircleCheck
                        className="h-[13px] w-[13px] shrink-0 text-[#8be88d]"
                        strokeWidth={2}
                      />

                      <span className="text-[11px] font-medium text-white">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}