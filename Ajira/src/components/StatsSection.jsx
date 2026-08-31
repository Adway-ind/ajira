import {
  CalendarDays,
  UsersRound,
  Award,
} from 'lucide-react'

const stats = [
  {
    value: '15+',
    label: 'YEARS EXPERIENCE',
    icon: CalendarDays,
  },
  {
    value: '2,500+',
    label: 'FARMERS CONNECTED',
    icon: UsersRound,
  },
  {
    value: '45+',
    label: 'COUNTRIES REACHED',
    customIcon: true,
  },
  {
    value: '100%',
    label: 'QUALITY ASSURANCE',
    icon: Award,
  },
]

function StatsSection() {
  return (
    <section className="w-full bg-[#F3F7EC] px-6 py-10 sm:py-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">

        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <div className="mb-3 flex h-7 items-center justify-center text-[#197A3A] transition-transform duration-300 group-hover:-translate-y-1">
                {stat.customIcon ? (
                  <span className="font-light text-[24px] tracking-[-1px]">
                    GLASS
                  </span>
                ) : (
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                  />
                )}
              </div>

              {/* Number */}
              <div className="text-[22px] font-light leading-none tracking-tight text-[#197A3A] sm:text-[24px]">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-3 text-[8px] font-medium tracking-[0.18em] text-[#31483A] sm:text-[9px]">
                {stat.label}
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default StatsSection