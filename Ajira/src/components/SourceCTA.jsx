import { ArrowRight } from "lucide-react";
import BG from "../assets/image/bg/img-5.jpg"

export default function SourceCTA() {
    return (
        <section
            className="
        relative
        flex
        min-h-[455px]
        items-center
        justify-center
        overflow-hidden
        bg-cover
        bg-center
        px-6
        py-20
      "
            style={{
                backgroundImage: `url(${BG})`,
            }}
        >
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-[#063c2b]/75" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[800px] text-center">

                <h2
                    className="
            text-[38px]
            font-semibold
            leading-[1.15]
            tracking-[-0.025em]
            text-white
            sm:text-[44px]
            md:text-[46px]
          "
                >
                    Ready to Source the World's
                    <br />
                    Finest Indian Spices?
                </h2>

                <p
                    className="
            mx-auto
            mt-6
            max-w-[650px]
            text-[14px]
            leading-[1.65]
            text-[#a8d9c2]
            sm:text-[15px]
          "
                >
                    Partner with Ajira Naturals for reliable, high-quality, and ethical
                    spice exports.
                    <br className="hidden sm:block" />
                    Let's discuss your industrial requirements.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    {/* Primary */}
                    <a
                        href="/contact"
                        className="
              flex
              h-[55px]
              min-w-[195px]
              items-center
              justify-center
              rounded-[10px]
              bg-[#91ef8d]
              px-7
              text-[13px]
              font-medium
              text-[#082f21]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#a4f59f]
              hover:shadow-[0_10px_30px_rgba(145,239,141,0.18)]
            "
                    >
                        Request a Bulk Quote
                    </a>

                    {/* Secondary */}
                    <a
                        href="/contact"
                        className="
              group
              flex
              h-[55px]
              min-w-[195px]
              items-center
              justify-center
              gap-2
              rounded-[10px]
              border
              border-white
              bg-transparent
              px-7
              text-[13px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#174c39]
            "
                    >
                        Speak with an Expert

                        <ArrowRight
                            size={16}
                            strokeWidth={1.7}
                            className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
                        />
                    </a>

                </div>
            </div>
        </section>
    );
}