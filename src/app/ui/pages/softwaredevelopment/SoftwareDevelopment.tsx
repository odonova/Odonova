import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuCodepen,
  LuArrowRight,
  LuShield,
  LuCheckCheck,
  //   LuStar,
  LuHeadphones,
  LuZap,
  LuLayers,
  LuRefreshCw,
  LuMonitor,
} from "react-icons/lu";
import {
  TbWorldWww,
  TbDeviceMobile,
  TbBuildingSkyscraper,
  TbPalette,
  TbDatabase,
  TbCloudUpload,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandFlutter,
  TbBrandDocker,
  TbBrandFigma,
} from "react-icons/tb";
import Assets from "../../../utils/constant/Assets";
import Navbar from "../../components/navbar/Navbar";

// ─── useInView ────────────────────────────────────────────────────────────────

function useInView(
  threshold = 0.12,
): [React.RefCallback<HTMLElement>, boolean] {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold },
      );
      observerRef.current.observe(node);
    },
    [threshold],
  );
  return [ref, inView];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <TbWorldWww size={24} />,
    title: "Web Development",
    desc: "High-performance web applications built with modern frameworks. From landing pages to complex SaaS platforms.",
    tags: ["React", "Next.js", "Vue", "TypeScript"],
  },
  {
    icon: <TbDeviceMobile size={24} />,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps for iOS and Android that deliver smooth, engaging user experiences.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: <TbBuildingSkyscraper size={24} />,
    title: "Enterprise Software",
    desc: "Scalable backend systems, APIs, and enterprise platforms built to handle thousands of users reliably.",
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    icon: <TbPalette size={24} />,
    title: "UI/UX Design",
    desc: "Beautiful, user-centred interfaces designed in Figma and brought to life with pixel-perfect precision.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: <TbDatabase size={24} />,
    title: "Database Architecture",
    desc: "Robust database design, optimisation and migration services for SQL and NoSQL environments.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    icon: <TbCloudUpload size={24} />,
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, containerisation and cloud infrastructure that keep your product fast and always on.",
    tags: ["Docker", "AWS", "GitHub Actions", "Vercel"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We start with a deep dive into your requirements, goals, and constraints. Clear scope means no surprises.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "UI/UX wireframes and technical architecture are agreed before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "We build in short, reviewable sprints. You see progress weekly and can give feedback at every stage.",
  },
  {
    step: "04",
    title: "QA & Testing",
    desc: "Every feature is tested — unit, integration, and user acceptance — before it moves to production.",
  },
  {
    step: "05",
    title: "Launch & Deploy",
    desc: "Smooth deployment to your preferred infrastructure with zero downtime and full monitoring in place.",
  },
  {
    step: "06",
    title: "Support & Growth",
    desc: "We don't disappear at launch. Ongoing support, performance monitoring, and feature roadmap planning.",
  },
];

const TECH_STACK = [
  { icon: <TbBrandReact size={22} />, name: "React" },
  { icon: <TbBrandNodejs size={22} />, name: "Node.js" },
  { icon: <TbBrandPython size={22} />, name: "Python" },
  { icon: <TbBrandFlutter size={22} />, name: "Flutter" },
  { icon: <TbBrandDocker size={22} />, name: "Docker" },
  { icon: <TbBrandFigma size={22} />, name: "Figma" },
  { icon: <TbDatabase size={22} />, name: "PostgreSQL" },
  { icon: <TbCloudUpload size={22} />, name: "AWS" },
];

const WHY = [
  {
    icon: <LuZap size={20} />,
    title: "Fast Delivery",
    desc: "We work in structured sprints and ship on schedule — without cutting corners on quality.",
  },
  {
    icon: <LuShield size={20} />,
    title: "Secure by Default",
    desc: "Security is built into every layer — from database access to API authentication.",
  },
  {
    icon: <LuLayers size={20} />,
    title: "Scalable Architecture",
    desc: "Every system is designed to grow with your business, not be rebuilt when you do.",
  },
  {
    icon: <LuRefreshCw size={20} />,
    title: "Ongoing Support",
    desc: "Post-launch maintenance, updates, and feature development — we stay in your corner.",
  },
  {
    icon: <LuMonitor size={20} />,
    title: "Clean Code",
    desc: "Documented, maintainable code you can hand to any developer without a headache.",
  },
  {
    icon: <LuHeadphones size={20} />,
    title: "Dedicated Team",
    desc: "A consistent point of contact throughout the project — not a revolving door of freelancers.",
  },
];

const STATS = [
  { value: "40+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "On-Time Delivery" },
];

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className={`w-6 h-px ${light ? "bg-white/40" : "bg-[#1B3A5C]"}`} />
      <span
        className={`text-xs font-semibold uppercase ${light ? "text-white/50" : "text-[#1B3A5C]"}`}
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.16em" }}
      >
        {text}
      </span>
    </div>
  );
}

// ─── Software Development Page ────────────────────────────────────────────────

export default function SoftwareDevelopment() {
  const [heroRef, heroInView] = useInView(0.05);
  const [servicesRef, servicesInView] = useInView();
  const [processRef, processInView] = useInView();
  const [techRef, techInView] = useInView();
  const [whyRef, whyInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      <Navbar />
      <div
        className="bg-white"
        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      >
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-[#0D1117] overflow-hidden">
          {/* Background radial glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 60%, rgba(27,58,92,0.5) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(42,82,128,0.3) 0%, transparent 50%)",
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 60px)",
            }}
          />
          <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-60" />

          <div
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24"
          >
            <div className="max-w-3xl">
              <div
                className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <SectionLabel text="Software Development" light />
              </div>
              <h1
                className={`text-white font-bold leading-[1.08] mb-6 transition-all duration-700 delay-100
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                }}
              >
                Digital products
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
                  }}
                >
                  built to last.
                </span>
              </h1>
              <p
                className={`text-white/55 text-base leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200
              ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                From startups to established enterprises, we engineer software
                that solves real problems. Technical depth, design sensibility,
                and a commitment to shipping on time — every time.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300
              ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.5)]"
                  style={{
                    background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
                  }}
                >
                  <LuCodepen size={16} />
                  Start a Project
                  <LuArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/70 border border-white/20 hover:text-white hover:border-white/35 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  View Services
                </a>
              </div>

              {/* Stats strip */}
              <div
                className={`flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/8 transition-all duration-700 delay-400
              ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-white font-bold leading-none mb-1"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────────────── */}
        <section
          id="services"
          className="bg-[#F7F7F8] border-b border-[#E5E5EA]"
        >
          <div
            ref={servicesRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="text-center mb-14">
              <SectionLabel text="What We Build" />
              <h2
                className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
                ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Every type of digital product,
                <br className="hidden sm:block" /> built with precision.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className={`bg-white rounded-2xl border border-[#E5E5EA] p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-5 group-hover:bg-[#D0DBE8] transition-colors duration-200">
                    {s.icon}
                  </div>
                  <div className="w-8 h-0.5 bg-[#1B3A5C] rounded-full mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3
                    className="text-[#0A0A0A] font-bold text-base mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-[#1B3A5C] bg-[#D0DBE8] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process ──────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div
            ref={processRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">
              {/* Sticky left heading */}
              <div
                className={`lg:sticky lg:top-28 transition-all duration-700
              ${processInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <SectionLabel text="How We Work" />
                <h2
                  className="text-[#0A0A0A] font-bold leading-tight mb-5"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  A process built for clarity and speed.
                </h2>
                <p className="text-[#4A4A4F] text-sm leading-relaxed mb-8">
                  Every project follows the same disciplined approach — no
                  surprises, no scope creep, no disappearing developers.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#2A5280]"
                  style={{ background: "#1B3A5C" }}
                >
                  Let's talk about your project
                  <LuArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>

              {/* Steps */}
              <div
                className={`space-y-5 transition-all duration-700 delay-150
              ${processInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                {PROCESS.map((p, i) => (
                  <div
                    key={p.step}
                    className={`flex gap-5 p-6 rounded-2xl border border-[#E5E5EA] bg-[#F7F7F8] hover:border-[#1B3A5C]/25 hover:bg-white hover:shadow-sm transition-all duration-200 group
                    ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center group-hover:bg-[#1B3A5C] group-hover:border-[#1B3A5C] transition-all duration-200">
                      <span className="text-xs font-bold text-[#1B3A5C] group-hover:text-white transition-colors duration-200">
                        {p.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[#0A0A0A] font-semibold text-sm mb-1.5">
                        {p.title}
                      </h4>
                      <p className="text-[#8E8E93] text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ─────  */}
        <section className="bg-[#F7F7F8] border-t border-[#E5E5EA]">
          <div
            ref={techRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <div>
                <SectionLabel text="Tech Stack" />
                <h2
                  className={`text-[#0A0A0A] font-bold transition-all duration-700
                  ${techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  }}
                >
                  Tools we master.
                </h2>
              </div>
              <p className="text-[#8E8E93] text-sm max-w-xs">
                We work with the best modern technologies — chosen for the right
                job, not just what's trendy.
              </p>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {TECH_STACK.map((tech, i) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-[#E5E5EA] hover:border-[#1B3A5C]/30 hover:shadow-md transition-all duration-200 group
                  ${techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-[#1B3A5C] group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-medium text-[#8E8E93] text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ─── */}
        <section className="bg-white border-t border-[#E5E5EA]">
          <div
            ref={whyRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="text-center mb-14">
              <SectionLabel text="Why Odonova" />
              <h2
                className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
                ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Why clients choose us — and stay.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY.map((w, i) => (
                <div
                  key={w.title}
                  className={`flex gap-4 p-6 rounded-2xl border border-[#E5E5EA] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group
                  ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] flex-shrink-0 group-hover:bg-[#D0DBE8] transition-colors duration-200">
                    {w.icon}
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold text-sm mb-1.5">
                      {w.title}
                    </h4>
                    <p className="text-[#8E8E93] text-xs leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section
          ref={ctaRef}
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #1B3A5C 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 75% 50%, #2A5280 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 60px)",
            }}
          />

          <div
            className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 transition-all duration-700
            ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-xl">
                <SectionLabel text="Get Started" light />
                <h2
                  className="text-white font-bold leading-tight mb-4"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Have a project in mind?
                </h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  Tell us what you're building. We'll review your requirements
                  and get back to you within 24 hours with a clear plan and
                  honest timeline.
                </p>

                {/* Checklist */}
                <ul className="mt-6 space-y-2">
                  {[
                    "Free initial consultation",
                    "Detailed project scoping",
                    "Fixed-price or retainer options",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-white/60 text-sm"
                    >
                      <LuCheckCheck
                        size={15}
                        className="text-[#7EB8F7] flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold bg-white text-[#1B3A5C] hover:bg-[#F2F2F7] transition-all duration-200"
                >
                  <LuCodepen size={16} />
                  Start a Project
                  <LuArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <a
                  href={`mailto:${Assets.text.email}`}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white/60 border border-white/20 hover:text-white hover:border-white/35 transition-all duration-200"
                >
                  {Assets.text.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
