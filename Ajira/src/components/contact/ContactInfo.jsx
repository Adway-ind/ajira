import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const channels = [
  {
    icon: MapPin,
    eyebrow: "VISIT",
    title: "Our Headquarters",
    text: "Idukki, Kerala, India",
  },
  {
    icon: Phone,
    eyebrow: "CALL",
    title: "Direct Line",
    text: "+91 00000 00000",
  },
  {
    icon: Mail,
    eyebrow: "EMAIL",
    title: "Export Enquiries",
    text: "exports@ajiranaturals.com",
  },
  {
    icon: MessageCircle,
    eyebrow: "CHAT",
    title: "WhatsApp",
    text: "Talk to our sourcing team",
  },
];

export default function ContactChannels() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#659545]">
            Talk To Our Team
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#172d46] sm:text-3xl">
            Choose how you'd like to connect.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {channels.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[#e2e7df] bg-[#fbfcfa] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(35,55,35,0.07)]"
              >

                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2e6] text-[#639447]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-[#aab4ad] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#7a8792]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#1a3049]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-[#718092]">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}