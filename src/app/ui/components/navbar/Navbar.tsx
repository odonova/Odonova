import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  LuCodepen,
  LuChevronDown,
  LuMenu,
  LuX,
  LuArrowRight,
  LuTag,
  LuMegaphone,
} from "react-icons/lu";
import Assets from "../../../utils/constant/Assets";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DropdownChild {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  children?: DropdownChild[];
}

// ─── Nav Data ─────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Software Development",
        href: "#software",
        description: "Tailored digital products & platforms",
        icon: <LuCodepen size={18} />,
      },
      {
        label: "Data Annotation",
        href: "#data-annotation",
        description:
          "Experienced annotators. Strict QA. Data privacy guaranteed.",
        icon: <LuTag size={18} />,
      },
      {
        label: "Social Media Management",
        href: "#social-media",
        description: "Brand growth, content strategy & community management.",
        icon: <LuMegaphone size={18} />,
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isScrolled = scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm"
              : "bg-transparent border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── Logo ─────────────────────────────────────────────────────── */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={Assets.images.companyLogo}
                alt="Odonova Logo"
                className="h-60 w-auto object-contain sm:h-12 lg:h-60"
              />
            </Link>

            {/* ── Desktop Nav ──────────────────────────────────────────────── */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    /* Dropdown trigger */
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        )
                      }
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer
                        ${
                          isScrolled
                            ? "text-[#2E2E30] hover:text-[#1B3A5C] hover:bg-[#F2F2F7]"
                            : "text-white/85 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                      <LuChevronDown
                        size={15}
                        className={`opacity-70 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    /* Regular page link — uses React Router Link */
                    <Link
                      to={item.href}
                      className={`flex items-center px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200
                        ${
                          isScrolled
                            ? "text-[#2E2E30] hover:text-[#1B3A5C] hover:bg-[#F2F2F7]"
                            : "text-white/85 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Panel */}
                  {item.children && (
                    <div
                      className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72
                        bg-white border border-[#E5E5EA] rounded-xl shadow-xl p-2
                        transition-all duration-200 origin-top
                        ${
                          activeDropdown === item.label
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {/* Arrow pointer */}
                      <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-[#E5E5EA] rotate-45 rounded-tl-sm" />

                      {item.children.map((child) => (
                        /* Dropdown items are anchor hash links — stay as <a> */
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F2F2F7] transition-colors duration-150 group/item"
                        >
                          <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0 transition-colors duration-150 group-hover/item:bg-[#D0DBE8]">
                            {child.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0A0A0A] mb-0.5">
                              {child.label}
                            </p>
                            <p className="text-xs text-[#8E8E93] leading-snug">
                              {child.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Desktop CTA ──────────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className={`flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200
                  ${
                    isScrolled
                      ? "bg-[#1B3A5C] text-white hover:bg-[#2A5280] shadow-sm"
                      : "bg-white/15 text-white border border-white/30 hover:bg-white/25 hover:border-white/50"
                  }`}
              >
                Get in Touch
                <LuArrowRight size={15} />
              </Link>
            </div>

            {/* ── Mobile Hamburger ─────────────────────────────────────────── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                ${
                  isScrolled
                    ? "text-[#1C1C1E] hover:bg-[#F2F2F7]"
                    : "text-white hover:bg-white/10"
                }`}
            >
              {mobileOpen ? <LuX size={22} /> : <LuMenu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white border-t border-[#E5E5EA] px-4 pt-3 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label,
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-[#1C1C1E] hover:bg-[#F2F2F7] transition-colors duration-150"
                    >
                      {item.label}
                      <LuChevronDown
                        size={16}
                        className={`text-[#8E8E93] transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileExpanded === item.label
                          ? "max-h-72 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#D0DBE8] ml-4">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F2F2F7] transition-colors duration-150 group/mob"
                          >
                            <div className="w-8 h-8 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0 group-hover/mob:bg-[#D0DBE8] transition-colors">
                              {child.icon}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#0A0A0A]">
                                {child.label}
                              </p>
                              <p className="text-xs text-[#8E8E93]">
                                {child.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Mobile page links — React Router Link */
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg text-sm font-semibold text-[#1C1C1E] hover:bg-[#F2F2F7] hover:text-[#1B3A5C] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-[#E5E5EA] mt-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#1B3A5C] text-white text-sm font-semibold rounded-xl hover:bg-[#2A5280] transition-colors duration-200"
              >
                Get in Touch
                <LuArrowRight size={16} />
              </Link>
            </div>

            <p className="text-center text-xs text-[#8E8E93] pt-2">
              {Assets.text.companyNameFull} · {Assets.text.address}
            </p>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay backdrop ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
