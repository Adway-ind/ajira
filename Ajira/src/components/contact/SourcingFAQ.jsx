import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are your typical lead times?",
    answer:
      "Lead times depend on product, specification, quantity and destination. Our team will provide a timeline based on your exact requirement.",
  },
  {
    question: "Do you offer private labeling?",
    answer:
      "Yes. Packaging and private-label requirements can be discussed based on product, market and order quantity.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "MOQ varies by spice, grade, packaging format and destination. Contact our sourcing team for a requirement-specific quotation.",
  },
  {
    question: "Can you provide product specifications and test reports?",
    answer:
      "Yes. Product specifications, quality documentation and relevant analytical information can be provided according to the requirement.",
  },
  {
    question: "Which markets do you currently serve?",
    answer:
      "Ajira is positioned for international markets across Europe, GCC, Asia and the Americas.",
  },
];

export default function SourcingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f7f2] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[850px]">

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#659545]">
            B2B Sourcing FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#172d46]">
            Questions, answered clearly.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#748193]">
            Everything you need to know before starting a sourcing
            conversation with Ajira Naturals.
          </p>
        </div>

        <div className="mt-10 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#dfe6da] bg-white"
              >

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-medium text-[#263c54] sm:text-base">
                    {faq.question}
                  </span>

                  <span className="ml-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4e9] text-[#639447]">
                    {isOpen ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="max-w-3xl border-t border-[#edf0eb] pt-4 text-sm leading-6 text-[#748193]">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}