import logo from "../assets/image/logo/Ajira_Logo.png";

function BrandLogo({ inverse = false, compact = false }) {
  return (
    <div
      className="inline-flex items-center"
      aria-label="Ajira Naturals Private Limited"
    >
      <a href="/">
        <img
          src={logo}
          alt="Ajira Naturals Private Limited"
          className={`object-contain ${
            compact ? "h-14 w-auto" : "h-14 w-auto"
          }`}
        />
      </a>
    </div>
  );
}

export default BrandLogo;