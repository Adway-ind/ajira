export default function OfficeSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1680px]">
        <div className="h-[520px] overflow-hidden rounded-[28px] border border-[#dfe6da] bg-[#edf0eb] shadow-[0_15px_45px_rgba(20,43,70,0.06)]">
          <iframe
            title="Ajira Naturals Location"
            src="https://www.google.com/maps?q=Idukki,Kerala,India&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}