import { Link } from "react-router-dom";
import {
  LuCodepen,
  LuArrowRight,
  LuArrowUpRight,
  LuTag,
  LuMegaphone,
} from "react-icons/lu";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
  FaPhoneFlip,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Assets from "../../../utils/constant/Assets";

// ─── Footer Link Data ─────────────────────────────────────────────────────────
// "page" links use React Router <Link to>, hash/external links use <a href>

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about", isPage: true },
    { label: "Our Team", href: "/about#team", isPage: true },
    { label: "Careers", href: "#careers", isPage: false },
    { label: "News & Updates", href: "#news", isPage: false },
  ],
  software: [
    { label: "Web Development", href: "#web", isPage: false },
    { label: "Mobile Applications", href: "#mobile", isPage: false },
    { label: "Enterprise Solutions", href: "#enterprise", isPage: false },
    { label: "UI/UX Design", href: "#design", isPage: false },
    { label: "Technical Consulting", href: "#consulting", isPage: false },
  ],
  dataAndSocial: [
    { label: "Data Annotation", href: "#data-annotation", isPage: false },
    { label: "AI Training Data", href: "#ai-data", isPage: false },
    { label: "Quality Assurance", href: "#qa", isPage: false },
    { label: "Social Media Management", href: "#social-media", isPage: false },
    { label: "Brand Strategy", href: "#brand", isPage: false },
    { label: "Content Creation", href: "#content", isPage: false },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy", isPage: false },
    { label: "Terms of Service", href: "#terms", isPage: false },
    { label: "Cookie Policy", href: "#cookies", isPage: false },
  ],
};

const SOCIALS = [
  {
    icon: <FaInstagram size={16} />,
    href: Assets.text.socials.instagram,
    label: "Instagram",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: Assets.text.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={16} />,
    href: Assets.text.socials.twitter,
    label: "Twitter / X",
  },
  {
    icon: <FaWhatsapp size={16} />,
    href: "https://wa.me/234000000000",
    label: "WhatsApp",
  },
];

// ─── Footer Component ─────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0D1117] overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* ── Decorative top gradient border ───────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B3A5C] to-transparent" />

      {/* ── Background texture ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1B3A5C 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, #2A5280 0%, transparent 50%)`,
        }}
      />

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p
                className="text-white/40 text-xs tracking-[0.18em] uppercase mb-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Ready to get started?
              </p>
              <h2
                className="text-white leading-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Let's build something{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
                  }}
                >
                  exceptional
                </span>{" "}
                together.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.6)]"
                style={{
                  background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
                }}
              >
                <LuCodepen size={15} />
                Start a Project
                <LuArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 border border-white/15 hover:text-white hover:border-white/30 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <MdOutlineEmail size={15} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ─────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 bg-[#1B3A5C] rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2A5280]">
                <LuCodepen size={17} className="text-white" />
              </div>
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {Assets.text.companyName}
              </span>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Software development, data annotation and social media management
              — delivered with precision and care. Trusted across Nigeria.
            </p>

            {/* Contact info — external links stay as <a> */}
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href={`mailto:${Assets.text.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-150 group"
                >
                  <MdOutlineEmail
                    size={15}
                    className="text-[#4A90D9] flex-shrink-0"
                  />
                  {Assets.text.email}
                  <LuArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${Assets.text.phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-150"
                >
                  <FaPhoneFlip
                    size={13}
                    className="text-[#4A90D9] flex-shrink-0"
                  />
                  {Assets.text.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MdOutlineLocationOn
                  size={15}
                  className="text-[#4A90D9] flex-shrink-0 mt-0.5"
                />
                {Assets.text.address}
              </li>
            </ul>

            {/* Socials — external links stay as <a> */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/45 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Company Links ── */}
          <div className="lg:col-span-2">
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          </div>

          {/* ── Software Links ── */}
          <div className="lg:col-span-3">
            <FooterColumn
              title="Software Dev"
              icon={<LuCodepen size={13} className="text-[#4A90D9]" />}
              links={FOOTER_LINKS.software}
            />
          </div>

          {/* ── Data & Social Links ── */}
          <div className="lg:col-span-3">
            <FooterColumn
              title="Data & Social"
              icon={<LuTag size={13} className="text-[#4A90D9]" />}
              links={FOOTER_LINKS.dataAndSocial}
            />
          </div>
        </div>
      </div>

      {/* ── Service Pills Strip ───────────────────────────────────────────── */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-white/25 text-[10px] uppercase tracking-widest flex-shrink-0 mr-2"
              style={{ letterSpacing: "0.14em" }}
            >
              Services
            </span>
            {[
              { icon: <LuCodepen size={11} />, label: "Web Development" },
              { icon: <LuCodepen size={11} />, label: "Mobile Apps" },
              { icon: <LuCodepen size={11} />, label: "Enterprise Software" },
              { icon: <LuTag size={11} />, label: "Data Annotation" },
              { icon: <LuTag size={11} />, label: "AI Training Data" },
              { icon: <LuMegaphone size={11} />, label: "Social Media" },
              { icon: <LuMegaphone size={11} />, label: "Brand Strategy" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/30 border border-white/8 hover:text-white/55 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                {pill.icon}
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────────── */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">{Assets.text.copyright}</p>
            <div className="flex items-center gap-5">
              {FOOTER_LINKS.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/25 text-xs hover:text-white/50 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Footer Column Sub-component ─────────────────────────────────────────────

interface FooterColumnProps {
  title: string;
  icon?: React.ReactNode;
  links: { label: string; href: string; isPage: boolean }[];
}

function FooterColumn({ title, icon, links }: FooterColumnProps) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-5">
        {icon}
        <h4
          className="text-white/80 text-xs font-semibold uppercase"
          style={{ letterSpacing: "0.12em" }}
        >
          {title}
        </h4>
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.isPage ? (
              <Link
                to={link.href}
                className="text-sm text-white/40 hover:text-white/75 transition-all duration-150 hover:translate-x-0.5 inline-block"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="text-sm text-white/40 hover:text-white/75 transition-all duration-150 hover:translate-x-0.5 inline-block"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// import {
//   LuCodepen,
//   LuArrowRight,
//   LuArrowUpRight,
//   LuTag,
//   LuMegaphone,
// } from "react-icons/lu";
// import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
// import {
//   FaPhoneFlip,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import Assets from "../../../utils/constant/Assets";

// // ─── Footer Link Data ─────────────────────────────────────────────────────────

// const FOOTER_LINKS = {
//   company: [
//     { label: "About Us", href: "/about" },
//     { label: "Our Team", href: "/about#team" },
//     { label: "Careers", href: "#careers" },
//     { label: "News & Updates", href: "#news" },
//   ],
//   software: [
//     { label: "Web Development", href: "#web" },
//     { label: "Mobile Applications", href: "#mobile" },
//     { label: "Enterprise Solutions", href: "#enterprise" },
//     { label: "UI/UX Design", href: "#design" },
//     { label: "Technical Consulting", href: "#consulting" },
//   ],
//   dataAndSocial: [
//     { label: "Data Annotation", href: "#data-annotation" },
//     { label: "AI Training Data", href: "#ai-data" },
//     { label: "Quality Assurance", href: "#qa" },
//     { label: "Social Media Management", href: "#social-media" },
//     { label: "Brand Strategy", href: "#brand" },
//     { label: "Content Creation", href: "#content" },
//   ],
//   legal: [
//     { label: "Privacy Policy", href: "#privacy" },
//     { label: "Terms of Service", href: "#terms" },
//     { label: "Cookie Policy", href: "#cookies" },
//   ],
// };

// const SOCIALS = [
//   {
//     icon: <FaInstagram size={16} />,
//     href: Assets.text.socials.instagram,
//     label: "Instagram",
//   },
//   {
//     icon: <FaLinkedinIn size={16} />,
//     href: Assets.text.socials.linkedin,
//     label: "LinkedIn",
//   },
//   {
//     icon: <FaXTwitter size={16} />,
//     href: Assets.text.socials.twitter,
//     label: "Twitter / X",
//   },
//   {
//     icon: <FaWhatsapp size={16} />,
//     href: "https://wa.me/234000000000",
//     label: "WhatsApp",
//   },
// ];

// // ─── Footer Component ─────────────────────────────────────────────────────────

// export default function Footer() {
//   return (
//     <footer
//       className="relative bg-[#0D1117] overflow-hidden"
//       style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
//     >
//       {/* ── Decorative top gradient border ───────────────────────────────── */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B3A5C] to-transparent" />

//       {/* ── Background texture ───────────────────────────────────────────── */}
//       <div
//         className="absolute inset-0 opacity-[0.025] pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at 20% 50%, #1B3A5C 0%, transparent 60%),
//                             radial-gradient(circle at 80% 20%, #2A5280 0%, transparent 50%)`,
//         }}
//       />

//       {/* ── CTA Banner ───────────────────────────────────────────────────── */}
//       <div className="relative border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
//             <div className="max-w-xl">
//               <p
//                 className="text-white/40 text-xs tracking-[0.18em] uppercase mb-3"
//                 style={{ letterSpacing: "0.18em" }}
//               >
//                 Ready to get started?
//               </p>
//               <h2
//                 className="text-white leading-tight"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
//                   fontWeight: 700,
//                 }}
//               >
//                 Let's build something{" "}
//                 <span
//                   className="text-transparent bg-clip-text"
//                   style={{
//                     backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
//                   }}
//                 >
//                   exceptional
//                 </span>{" "}
//                 together.
//               </h2>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
//               <a
//                 href="/contact"
//                 className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.6)]"
//                 style={{
//                   background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
//                 }}
//               >
//                 <LuCodepen size={15} />
//                 Start a Project
//                 <LuArrowRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//               <a
//                 href="/contact"
//                 className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 border border-white/15 hover:text-white hover:border-white/30 transition-all duration-200"
//                 style={{ background: "rgba(255,255,255,0.04)" }}
//               >
//                 <MdOutlineEmail size={15} />
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Main Footer Grid ─────────────────────────────────────────────── */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
//           {/* ── Brand Column ── */}
//           <div className="sm:col-span-2 lg:col-span-4">
//             {/* Logo */}
//             <a href="/" className="inline-flex items-center gap-2.5 mb-5 group">
//               <div className="w-9 h-9 bg-[#1B3A5C] rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2A5280]">
//                 <LuCodepen size={17} className="text-white" />
//               </div>
//               <span
//                 className="text-white font-bold text-xl tracking-tight"
//                 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//               >
//                 {Assets.text.companyName}
//               </span>
//             </a>

//             <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
//               Software development, data annotation and social media management
//               — delivered with precision and care. Trusted across Nigeria.
//             </p>

//             {/* Contact info */}
//             <ul className="space-y-3 mb-8">
//               <li>
//                 <a
//                   href={`mailto:${Assets.text.email}`}
//                   className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-150 group"
//                 >
//                   <MdOutlineEmail
//                     size={15}
//                     className="text-[#4A90D9] flex-shrink-0"
//                   />
//                   {Assets.text.email}
//                   <LuArrowUpRight
//                     size={11}
//                     className="opacity-0 group-hover:opacity-100 transition-opacity"
//                   />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={`tel:${Assets.text.phone}`}
//                   className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-150"
//                 >
//                   <FaPhoneFlip
//                     size={13}
//                     className="text-[#4A90D9] flex-shrink-0"
//                   />
//                   {Assets.text.phone}
//                 </a>
//               </li>
//               <li className="flex items-start gap-2.5 text-sm text-white/50">
//                 <MdOutlineLocationOn
//                   size={15}
//                   className="text-[#4A90D9] flex-shrink-0 mt-0.5"
//                 />
//                 {Assets.text.address}
//               </li>
//             </ul>

//             {/* Socials */}
//             <div className="flex items-center gap-2">
//               {SOCIALS.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   aria-label={s.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/45 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all duration-200"
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ── Company Links ── */}
//           <div className="lg:col-span-2">
//             <FooterColumn title="Company" links={FOOTER_LINKS.company} />
//           </div>

//           {/* ── Software Links ── */}
//           <div className="lg:col-span-3">
//             <FooterColumn
//               title="Software Dev"
//               icon={<LuCodepen size={13} className="text-[#4A90D9]" />}
//               links={FOOTER_LINKS.software}
//             />
//           </div>

//           {/* ── Data & Social Links ── */}
//           <div className="lg:col-span-3">
//             <FooterColumn
//               title="Data & Social"
//               icon={<LuTag size={13} className="text-[#4A90D9]" />}
//               links={FOOTER_LINKS.dataAndSocial}
//             />
//           </div>
//         </div>
//       </div>

//       {/* ── Service Pills Strip ───────────────────────────────────────────── */}
//       <div className="relative border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
//           <div className="flex flex-wrap items-center gap-3">
//             <span
//               className="text-white/25 text-[10px] uppercase tracking-widest flex-shrink-0 mr-2"
//               style={{ letterSpacing: "0.14em" }}
//             >
//               Services
//             </span>
//             {[
//               { icon: <LuCodepen size={11} />, label: "Web Development" },
//               { icon: <LuCodepen size={11} />, label: "Mobile Apps" },
//               { icon: <LuCodepen size={11} />, label: "Enterprise Software" },
//               { icon: <LuTag size={11} />, label: "Data Annotation" },
//               { icon: <LuTag size={11} />, label: "AI Training Data" },
//               { icon: <LuMegaphone size={11} />, label: "Social Media" },
//               { icon: <LuMegaphone size={11} />, label: "Brand Strategy" },
//             ].map((pill) => (
//               <span
//                 key={pill.label}
//                 className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/30 border border-white/8 hover:text-white/55 hover:border-white/20 transition-all duration-200 cursor-default"
//               >
//                 {pill.icon}
//                 {pill.label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom Bar ───────────────────────────────────────────────────── */}
//       <div className="relative border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-white/25 text-xs">{Assets.text.copyright}</p>
//             <div className="flex items-center gap-5">
//               {FOOTER_LINKS.legal.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="text-white/25 text-xs hover:text-white/50 transition-colors duration-150"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Footer Column Sub-component ─────────────────────────────────────────────

// interface FooterColumnProps {
//   title: string;
//   icon?: React.ReactNode;
//   links: { label: string; href: string }[];
// }

// function FooterColumn({ title, icon, links }: FooterColumnProps) {
//   return (
//     <div>
//       <div className="flex items-center gap-1.5 mb-5">
//         {icon}
//         <h4
//           className="text-white/80 text-xs font-semibold uppercase"
//           style={{ letterSpacing: "0.12em" }}
//         >
//           {title}
//         </h4>
//       </div>
//       <ul className="space-y-3">
//         {links.map((link) => (
//           <li key={link.label}>
//             <a
//               href={link.href}
//               className="text-sm text-white/40 hover:text-white/75 transition-all duration-150 hover:translate-x-0.5 inline-block"
//             >
//               {link.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
