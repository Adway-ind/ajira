import {
  CalendarDays,
  UsersRound,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    value: "15+",
    label: "YEARS EXPERIENCE",
    icon: CalendarDays,
  },
  {
    value: "2,500+",
    label: "FARMERS CONNECTED",
    icon: UsersRound,
  },
  {
    value: "45+",
    label: "COUNTRIES REACHED",
    icon: Globe2,
  },
  {
    value: "100%",
    label: "QUALITY ASSURANCE",
    icon: BadgeCheck,
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#f3f6ed] py-14 mt-0 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <Icon
                size={24}
                strokeWidth={2}
                className="mb-5 text-[#006b2d]"
              />

              {/* Number */}
              <div className="font-light tracking-[-0.02em] text-[32px] leading-none text-[#006b2d] md:text-[34px]">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-4 text-[12px] font-medium tracking-[0.16em] text-[#333333]">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}