import {
  Sprout,
  ShieldCheck,
  Globe2,
  FlaskConical,
} from "lucide-react";

const items = [
  {
    icon: Sprout,
    number: "500+",
    title: "Partner Farmers",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Traceable Supply",
  },
  {
    icon: Globe2,
    number: "32+",
    title: "Export Markets",
  },
  {
    icon: FlaskConical,
    number: "ISO",
    title: "Quality Systems",
  },
];

export default function SourcingPromise() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#659545]">
            Built For B2B
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#172d46] sm:text-3xl">
            Built for serious global sourcing.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#738192]">
            A sourcing partnership designed around consistency,
            transparency and dependable execution.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 border-y border-[#e5e9e2] lg:grid-cols-4">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  flex flex-col items-center px-5 py-8 text-center
                  ${index < 2 ? "border-b lg:border-b-0" : ""}
                  ${index % 2 === 0 ? "border-r lg:border-r" : ""}
                  ${index === 1 ? "lg:border-r" : ""}
                  border-[#e5e9e2]
                `}
              >

                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#659545]"
                />

                <div className="mt-4 text-2xl font-bold text-[#17304a]">
                  {item.number}
                </div>

                <p className="mt-1 text-xs text-[#7b8793]">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}