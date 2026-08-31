import BrandLogo from "./BrandLogo";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = ["About Us", "Products", "Contact"];

const supportLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Quality Lab",
  "Global Logistics",
];

function Footer() {
  return (
    <footer className="mt-auto">
      <div className="relative overflow-hidden bg-slate-950 text-slate-300">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-72 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Main Footer */}
        <div className="relative px-6 pb-10 pt-14 sm:px-8 lg:px-12">
          <div
            className="
      mx-auto
      grid
      max-w-[1520px]
      gap-10
      text-left
      md:grid-cols-2
      lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.25fr]
    "
          >
            {/* Brand */}
            <div>
              <a
                className="inline-flex no-underline"
                href="#home"
              >
                <BrandLogo inverse />
              </a>

              <p className="mt-5 max-w-[290px] text-sm leading-6 text-slate-400">
                Sustainable excellence in spice export, delivering the purity
                of South Indian spices to kitchens worldwide.
              </p>

              <div className="mt-6 flex gap-2.5">
                <SocialLink
                  href="https://www.instagram.com/ajiranaturals/"
                  label="Instagram"
                >
                  <FaInstagram size={16} />
                </SocialLink>

                <SocialLink
                  href="https://www.facebook.com/ajiranaturals/"
                  label="Facebook"
                >
                  <FaFacebookF size={15} />
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/company/ajira-naturals/"
                  label="LinkedIn"
                >
                  <FaLinkedinIn size={15} />
                </SocialLink>

                <SocialLink
                  href="https://wa.me/919876543210"
                  label="WhatsApp"
                >
                  <FaWhatsapp size={17} />
                </SocialLink>

                <SocialLink
                  href="mailto:export@ajiranaturals.com"
                  label="Email"
                >
                  <MailIcon />
                </SocialLink>
              </div>
            </div>

            {/* Explore */}
            <FooterLinks
              title="Explore"
              links={quickLinks}
            />

            {/* Company */}
            <FooterLinks
              title="Company"
              links={supportLinks}
            />

            {/* Contact */}
            <div>
              <FooterHeading>
                Contact
              </FooterHeading>

              <address className="mt-6 space-y-5 not-italic">
                <ContactItem
                  href="https://maps.google.com/?q=Kochi+Infopark+Road+Kerala+India"
                  icon={<LocationIcon />}
                  external
                >
                  Ajira Export House, Kochi
                  <br />
                  Infopark Road, Kerala 682030
                </ContactItem>

                <ContactItem
                  href="tel:+914842900000"
                  icon={<PhoneIcon />}
                >
                  +91 484 290 0000
                </ContactItem>

                <ContactItem
                  href="mailto:export@ajiranaturals.com"
                  icon={<MailIcon />}
                >
                  export@ajiranaturals.com
                </ContactItem>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative mx-7 flex flex-col gap-3 border-t border-white/10 py-6 text-left text-xs text-slate-500 sm:mx-10 sm:flex-row sm:items-center sm:justify-between lg:mx-12">

          <p>
            © {new Date().getFullYear()} Ajira Naturals. All rights reserved.
          </p>

          <p>
            Powered by{" "}
            <a
              href="https://www.witsow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 transition hover:text-emerald-300"
            >
              WITSOW
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <h3 className="m-0 text-xs font-black uppercase tracking-[0.18em] text-white">
      {children}
    </h3>
  );
}


/* =========================================================
   FOOTER LINKS
========================================================= */

function FooterLinks({ title, links }) {
  return (
    <div>
      <FooterHeading>
        {title}
      </FooterHeading>

      <ul className="mt-6 space-y-3.5 p-0">
        {links.map((link) => (
          <li
            key={link}
            className="list-none"
          >
            <a
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-slate-400
                no-underline
                transition
                hover:text-emerald-400
              "
              href={`#${link
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <span
                className="
                  h-px
                  w-0
                  bg-emerald-400
                  transition-all
                  duration-300
                  group-hover:w-3
                "
              />

              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  href,
  icon,
  children,
  external = false,
}) {
  return (
    <a
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        text-sm
        leading-6
        text-slate-400
        no-underline
        transition
        hover:text-white
      "
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span
        className="
          grid
          size-8
          shrink-0
          place-items-center
          rounded-lg
          bg-emerald-400/10
          text-emerald-400
          transition
          group-hover:bg-emerald-400
          group-hover:text-slate-950
        "
      >
        {icon}
      </span>

      <span>
        {children}
      </span>
    </a>
  );
}


/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  children,
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        grid
        size-10
        place-items-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-slate-300
        no-underline
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-400
        hover:bg-emerald-400
        hover:text-slate-950
        hover:shadow-[0_8px_20px_rgba(52,211,153,0.15)]
      "
    >
      {children}
    </a>
  );
}


/* =========================================================
   ICONS
========================================================= */

function LocationIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}


function PhoneIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}


function MailIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1"
      />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}


export default Footer;