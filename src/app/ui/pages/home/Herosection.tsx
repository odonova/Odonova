import { useEffect, useRef, useState } from "react";
import {
  LuArrowRight,
  LuCodepen,
  LuChevronDown,
  LuTag,
  LuMegaphone,
} from "react-icons/lu";
import Assets from "../../../utils/constant/Assets";
import { Link } from "react-router-dom";

// ─── Stats Data ───────────────────────────────────────────────────────────────

const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Software Projects" },
  { value: "10M+", label: "Data Points Annotated" },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">
      {/* ── Background Image with Parallax ───────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 transition-transform duration-700 ease-out scale-105"
          style={{ willChange: "transform" }}
        >
          <img
            src={Assets.images.heroBg}
            alt="Odonova hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-60" />
      </div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="max-w-3xl">
            {/* ── Eyebrow badge ── */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm mb-7 transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: "0ms",
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.07)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9] animate-pulse" />
              <span
                className="text-xs font-medium tracking-widest uppercase text-white/70"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.12em",
                }}
              >
                Calabar, Nigeria
              </span>
            </div>

            {/* ── Main Headline ── */}
            <h1
              className={`text-white leading-[1.08] tracking-tight mb-6 transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                fontWeight: 700,
                transitionDelay: "100ms",
              }}
            >
              Build Smarter.
              <br />
              <span className="relative inline-block">
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #7EB8F7 0%, #C5DFF8 100%)",
                  }}
                >
                  Grow Further.
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#4A90D9] to-transparent transition-all duration-1000 ease-out
                    ${mounted ? "w-full" : "w-0"}`}
                  style={{ transitionDelay: "800ms" }}
                />
              </span>
            </h1>

            {/* ── Sub headline ── */}
            <p
              className={`text-white/65 mb-10 max-w-xl leading-relaxed transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                fontWeight: 400,
                transitionDelay: "200ms",
              }}
            >
              From custom software and precise data annotation to powerful
              social media management — Odonova delivers the digital solutions
              your business needs to thrive.
            </p>

            {/* ── Service Cards ── */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "280ms" }}
            >
              {[
                {
                  icon: <LuCodepen size={18} />,
                  title: "Software Development",
                  desc: "Web, mobile & enterprise platforms",
                  href: "#software",
                },
                {
                  icon: <LuTag size={18} />,
                  title: "Data Annotation",
                  desc: "Precise labelling for AI & ML pipelines",
                  href: "#data-annotation",
                },
                {
                  icon: <LuMegaphone size={18} />,
                  title: "Social Media",
                  desc: "Brand growth & community management",
                  href: "#social-media",
                },
              ].map((service, i) => (
                <a
                  key={service.title}
                  href={service.href}
                  className={`group flex flex-col gap-2.5 p-4 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/8 transition-all duration-200 cursor-pointer
                    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{
                    transitionDelay: `${320 + i * 80}ms`,
                    backdropFilter: "blur(8px)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1B3A5C]/60 border border-white/10 flex items-center justify-center text-[#7EB8F7]">
                    {service.icon}
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-semibold leading-snug mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {service.title}
                    </p>
                    <p className="text-white/45 text-xs leading-snug">
                      {service.desc}
                    </p>
                  </div>
                  <LuArrowRight
                    size={13}
                    className="text-white/25 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200 mt-auto"
                  />
                </a>
              ))}
            </div>

            {/* ── CTA Buttons ── */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-16 transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="#software"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:gap-3.5 hover:shadow-[0_8px_32px_rgba(27,58,92,0.5)]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background:
                    "linear-gradient(135deg, #1B3A5C 0%, #2A5280 100%)",
                }}
              >
                <LuCodepen size={17} />
                Explore Our Services
                <LuArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/contact"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/85 border border-white/20 transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Get in Touch
              </Link>
            </div>

            {/* ── Stats Row ── */}
            <div
              className={`flex flex-wrap gap-x-8 gap-y-5 transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "450ms" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-white font-bold leading-none mb-1"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-white/45 text-xs tracking-wide uppercase"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom strip — service pills ─────────────────────────────────── */}
      <div
        className={`relative z-10 border-t border-white/10 transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transitionDelay: "600ms",
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-5">
            <p
              className="text-white/40 text-xs tracking-widest uppercase flex-shrink-0"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.12em",
              }}
            >
              What we offer
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <LuCodepen size={14} />, label: "Web Development" },
                { icon: <LuCodepen size={14} />, label: "Mobile Apps" },
                { icon: <LuCodepen size={14} />, label: "Enterprise Software" },
                { icon: <LuTag size={14} />, label: "Data Annotation" },
                { icon: <LuTag size={14} />, label: "AI Training Data" },
                {
                  icon: <LuMegaphone size={14} />,
                  label: "Social Media Management",
                },
                { icon: <LuMegaphone size={14} />, label: "Brand Strategy" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/60 border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {pill.icon}
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className={`absolute bottom-28 right-8 lg:right-12 z-10 flex-col items-center gap-2 hidden lg:flex transition-all duration-700
          ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "900ms" }}
      >
        <span
          className="text-white/30 text-[10px] tracking-[0.2em] uppercase"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <LuChevronDown size={14} className="text-white/30 animate-bounce" />
      </div>
    </section>
  );
}

// import { useEffect, useRef, useState } from "react";
// import { LuArrowRight, LuCar, LuCodepen, LuChevronDown } from "react-icons/lu";
// import Assets from "../../../utils/constant/Assets";

// // ─── Stats Data ───────────────────────────────────────────────────────────────

// const STATS = [
//   { value: "500+", label: "Vehicles Sold" },
//   { value: "12+", label: "Years Experience" },
//   { value: "98%", label: "Client Satisfaction" },
//   { value: "40+", label: "Software Projects" },
// ];

// // ─── Hero Section ─────────────────────────────────────────────────────────────

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   const parallaxRef = useRef<HTMLDivElement>(null);

//   // Trigger entrance animations after mount
//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   // Subtle parallax on mouse move
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!parallaxRef.current) return;
//       const x = (e.clientX / window.innerWidth - 0.5) * 18;
//       const y = (e.clientY / window.innerHeight - 0.5) * 10;
//       parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">
//       {/* ── Background Image with Parallax ───────────────────────────────── */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           ref={parallaxRef}
//           className="absolute inset-0 transition-transform duration-700 ease-out scale-105"
//           style={{ willChange: "transform" }}
//         >
//           <img
//             src={Assets.images.heroBg}
//             alt="Odonova hero"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* Multi-layer gradient overlay for depth and text legibility */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

//         {/* Subtle grain texture for premium feel */}
//         <div
//           className="absolute inset-0 opacity-[0.03] pointer-events-none"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "128px",
//           }}
//         />

//         {/* Vertical accent line — left edge detail */}
//         <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-60" />
//       </div>

//       {/* ── Main Content ─────────────────────────────────────────────────── */}
//       <div className="relative z-10 flex-1 flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
//           <div className="max-w-3xl">
//             {/* ── Eyebrow badge ── */}
//             <div
//               className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm mb-7 transition-all duration-700 ease-out
//                 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//               style={{
//                 transitionDelay: "0ms",
//                 backdropFilter: "blur(8px)",
//                 background: "rgba(255,255,255,0.07)",
//               }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9] animate-pulse" />
//               <span
//                 className="text-xs font-medium tracking-widest uppercase text-white/70"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   letterSpacing: "0.12em",
//                 }}
//               >
//                 Calabar, Nigeria
//               </span>
//             </div>

//             {/* ── Main Headline ── */}
//             <h1
//               className={`text-white leading-[1.08] tracking-tight mb-6 transition-all duration-700 ease-out
//                 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(2.6rem, 6vw, 5rem)",
//                 fontWeight: 700,
//                 transitionDelay: "100ms",
//               }}
//             >
//               Drive Forward.
//               <br />
//               <span className="relative inline-block">
//                 <span
//                   className="text-transparent bg-clip-text"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(90deg, #7EB8F7 0%, #C5DFF8 100%)",
//                   }}
//                 >
//                   Build Smarter.
//                 </span>
//                 {/* Underline accent */}
//                 <span
//                   className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#4A90D9] to-transparent transition-all duration-1000 ease-out
//                     ${mounted ? "w-full" : "w-0"}`}
//                   style={{ transitionDelay: "800ms" }}
//                 />
//               </span>
//             </h1>

//             {/* ── Sub headline ── */}
//             <p
//               className={`text-white/65 mb-10 max-w-xl leading-relaxed transition-all duration-700 ease-out
//                 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
//                 fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
//                 fontWeight: 400,
//                 transitionDelay: "200ms",
//               }}
//             >
//               {Assets.text.taglineSub} We help you find the perfect vehicle and
//               build the digital products your business needs to grow.
//             </p>

//             {/* ── CTA Buttons ── */}
//             <div
//               className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-16 transition-all duration-700 ease-out
//                 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{ transitionDelay: "300ms" }}
//             >
//               {/* Primary CTA */}
//               <a
//                 href="#inventory"
//                 className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:gap-3.5 hover:shadow-[0_8px_32px_rgba(27,58,92,0.5)]"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   background:
//                     "linear-gradient(135deg, #1B3A5C 0%, #2A5280 100%)",
//                 }}
//               >
//                 <LuCar size={17} />
//                 Browse Inventory
//                 <LuArrowRight
//                   size={15}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>

//               {/* Secondary CTA */}
//               <a
//                 href="#software"
//                 className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/85 border border-white/20 transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/8"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   backdropFilter: "blur(8px)",
//                   background: "rgba(255,255,255,0.05)",
//                 }}
//               >
//                 <LuCodepen size={17} />
//                 Our Software Services
//               </a>
//             </div>

//             {/* ── Stats Row ── */}
//             <div
//               className={`flex flex-wrap gap-x-8 gap-y-5 transition-all duration-700 ease-out
//                 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{ transitionDelay: "450ms" }}
//             >
//               {STATS.map((stat, i) => (
//                 <div key={stat.label} className="flex flex-col">
//                   <span
//                     className="text-white font-bold leading-none mb-1"
//                     style={{
//                       fontFamily: "'Playfair Display', Georgia, serif",
//                       fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
//                     }}
//                   >
//                     {stat.value}
//                   </span>
//                   <span
//                     className="text-white/45 text-xs tracking-wide uppercase"
//                     style={{
//                       fontFamily: "'DM Sans', sans-serif",
//                       letterSpacing: "0.08em",
//                     }}
//                   >
//                     {stat.label}
//                   </span>
//                   {/* Divider between stats (not after last) */}
//                   {i < STATS.length - 1 && (
//                     <span className="hidden sm:block absolute" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom strip — service pills ─────────────────────────────────── */}
//       <div
//         className={`relative z-10 border-t border-white/10 transition-all duration-700 ease-out
//           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//         style={{
//           transitionDelay: "600ms",
//           backdropFilter: "blur(12px)",
//           background: "rgba(0,0,0,0.35)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-5">
//             <p
//               className="text-white/40 text-xs tracking-widest uppercase flex-shrink-0"
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 letterSpacing: "0.12em",
//               }}
//             >
//               What we offer
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {[
//                 { icon: <LuCar size={14} />, label: "Premium Car Sales" },
//                 { icon: <LuCar size={14} />, label: "Certified Pre-Owned" },
//                 { icon: <LuCodepen size={14} />, label: "Web Development" },
//                 { icon: <LuCodepen size={14} />, label: "Mobile Apps" },
//                 { icon: <LuCodepen size={14} />, label: "Enterprise Software" },
//               ].map((pill) => (
//                 <span
//                   key={pill.label}
//                   className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/60 border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-200 cursor-default"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 >
//                   {pill.icon}
//                   {pill.label}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Scroll indicator ─────────────────────────────────────────────── */}
//       <div
//         className={`absolute bottom-28 right-8 lg:right-12 z-10 flex-col items-center gap-2 hidden lg:flex transition-all duration-700
//           ${mounted ? "opacity-100" : "opacity-0"}`}
//         style={{ transitionDelay: "900ms" }}
//       >
//         <span
//           className="text-white/30 text-[10px] tracking-[0.2em] uppercase"
//           style={{
//             writingMode: "vertical-rl",
//             fontFamily: "'DM Sans', sans-serif",
//           }}
//         >
//           Scroll
//         </span>
//         <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
//         <LuChevronDown size={14} className="text-white/30 animate-bounce" />
//       </div>
//     </section>
//   );
// }
