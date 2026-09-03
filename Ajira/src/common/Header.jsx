import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Products", href: "/Products" },
  { label: "Contact", href: "/Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">

      <nav
        className="
          relative
          flex
          min-h-[72px]
          w-full
          items-center
          justify-between
          border-b
          border-black/10
          bg-white
          px-5
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          sm:px-7
        "
        aria-label="Main navigation"
      >

        {/* Logo */}
        <a
          className="group flex items-center no-underline"
          href="#home"
          aria-label="Ajira home"
        >
          <BrandLogo compact />
        </a>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center">

          {/* Centered Links */}
          <ul
            className="
      absolute
      left-1/2
      top-1/2
      m-0
      flex
      -translate-x-1/2
      -translate-y-1/2
      list-none
      items-center
      gap-10
      p-0
    "
          >
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
            group/link
            relative
            block
            px-7
            py-2.5
            text-sm
            font-semibold
            text-black
            no-underline
            transition-colors
            duration-300
            hover:text-[#18c583]
          "
                >
                  <span className="relative z-10">
                    {link.label}
                  </span>

                  {/* Underline */}
                  <span
                    aria-hidden="true"
                    className="
              absolute
              bottom-1
              left-1/2
              h-[2px]
              w-0
              -translate-x-1/2
              rounded-full
              bg-[#18c583]
              transition-all
              duration-500
              ease-out
              group-hover/link:w-[70%]
            "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <a
            href="/contact"
            className="
      group
      ml-auto
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-xl
      bg-[#18c560]
      px-5
      py-3
      text-sm
      font-bold
      text-white
      no-underline
      shadow-lg
      shadow-[#C58A18]/25
      transition
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#20d97c]
    "
          >
            Get a Quote

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          className="
            grid
            size-10
            place-items-center
            rounded-xl
            border
            border-green-900/10
            bg-green-50
            text-green-800
            transition-all
            duration-300
            hover:border-[#C58A18]/30
            hover:bg-[#C58A18]/10
            hover:text-[#C58A18]
            md:hidden
          "
        >
          <span className="flex flex-col gap-[5px]">
            <span className="h-[2px] w-5 rounded-full bg-current" />
            <span className="h-[2px] w-5 rounded-full bg-current" />
            <span className="h-[2px] w-5 rounded-full bg-current" />
          </span>
        </button>

      </nav>


      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/40
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          md:hidden
          ${menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-screen
          w-[310px]
          max-w-[85vw]
          flex-col
          bg-white
          shadow-[-15px_0_50px_rgba(0,0,0,0.15)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${menuOpen
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
      >

        {/* Sidebar Header */}
        <div className="
          flex
          min-h-[78px]
          items-center
          justify-between
          border-b
          border-slate-100
          px-6
        ">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="inline-flex items-center no-underline"
          >
            <BrandLogo compact />
          </a>

          {/* Close */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              grid
              size-10
              place-items-center
              rounded-xl
              border
              border-slate-200
              text-slate-700
              transition-all
              duration-300
              hover:border-[#C58A18]
              hover:bg-[#C58A18]/10
              hover:text-[#C58A18]
            "
          >
            <X size={20} strokeWidth={1.7} />
          </button>

        </div>


        {/* Navigation */}
        <div className="flex flex-1 flex-col px-6 py-8">

          <p className="
            mb-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#08783d]
          ">
            Navigation
          </p>

          <ul className="m-0 flex list-none flex-col gap-1 p-0">

            {links.map((link, index) => (
              <li key={link.label}>

                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-4
                    text-[15px]
                    font-semibold
                    text-slate-800
                    no-underline
                    transition-all
                    duration-300
                    hover:bg-[#f3f7f1]
                    hover:text-[#08783d]
                  "
                >

                  <span className="flex items-center gap-3">

                    <span className="
                      text-[10px]
                      font-medium
                      text-slate-400
                    ">
                      0{index + 1}
                    </span>

                    {link.label}

                  </span>

                  <ArrowRight
                    size={16}
                    className="
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#C58A18]
                    "
                  />

                </a>

              </li>
            ))}

          </ul>


          {/* Quote */}
          <div className="mt-auto">

            <div className="mb-6 h-px w-full bg-slate-100" />

            <p className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-400
            ">
              Let's work together
            </p>

            <a
              href="/contact"
              onClick={closeMenu}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                bg-[#C58A18]
                px-5
                py-4
                text-sm
                font-bold
                text-white
                no-underline
                shadow-lg
                shadow-[#C58A18]/20
                transition-all
                duration-300
                hover:bg-[#D99B20]
              "
            >
              Get a Quote

              <span className="
                grid
                size-8
                place-items-center
                rounded-lg
                bg-white/15
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                <ArrowRight size={16} />
              </span>

            </a>

          </div>

        </div>

      </aside>

    </header>
  );
}

export default Header;