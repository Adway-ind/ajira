import logo from "../assets/image/logo-05.png";

function BrandLogo({ inverse = false, compact = false }) {
  return (
    <div
      className="inline-flex items-center"
      aria-label="Ajira Naturals Private Limited"
    >
      <img
        src={logo}
        alt="Ajira Naturals Private Limited"
        className={`object-contain ${
          compact ? "h-10 w-auto" : "h-14 w-auto"
        }`}
      />
    </div>
  );
}

export default BrandLogo;