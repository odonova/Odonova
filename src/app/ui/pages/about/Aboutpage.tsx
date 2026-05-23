import { useCallback, useRef, useState } from "react";
import {
  LuCodepen,
  LuArrowRight,
  LuShield,
  LuStar,
  LuUsers,
  LuTrendingUp,
  LuCheckCheck,
  LuMapPin,
  LuPhone,
  LuTag,
  LuMegaphone,
} from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Assets from "../../../utils/constant/Assets";
import Navbar from "../../components/navbar/Navbar";

// ─── useInView

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

const STATS = [
  {
    value: "12+",
    label: "Years in Business",
    icon: <LuTrendingUp size={20} />,
  },
  { value: "40+", label: "Software Projects", icon: <LuCodepen size={20} /> },
  { value: "10M+", label: "Data Points Annotated", icon: <LuTag size={20} /> },
  { value: "98%", label: "Client Satisfaction", icon: <LuStar size={20} /> },
];

const VALUES = [
  {
    icon: <LuShield size={22} />,
    title: "Integrity",
    desc: "We operate with full transparency. No hidden costs, no misleading information — ever.",
  },
  {
    icon: <LuStar size={22} />,
    title: "Excellence",
    desc: "Every line of code is tested. Every annotation is verified. We don't settle for good enough.",
  },
  {
    icon: <LuUsers size={22} />,
    title: "People First",
    desc: "Our clients are partners, not transactions. We invest in long-term relationships.",
  },
  {
    icon: <LuTrendingUp size={22} />,
    title: "Innovation",
    desc: "We continuously improve our processes and adopt new technologies to serve you better.",
  },
];

const TEAM = [
  {
    name: "Odo",
    role: "Founder & CEO",
    bio: "15 years in tech and business operations with a passion for building companies people can trust.",
    initials: "OD",
  },
  {
    name: "Stella Eneh",
    role: "Lead Software Engineer",
    bio: "Full-stack engineer who has shipped products used by thousands across West Africa.",
    initials: "SE",
  },
  {
    name: "Adaeze Nwosu",
    role: "Head of Data Annotation",
    bio: "AI data specialist with deep expertise in annotation pipelines, QA processes and team management.",
    initials: "AN",
  },
  {
    name: "Blessing Obi",
    role: "Social Media Manager",
    bio: "Brand strategist dedicated to growing audiences and building meaningful online communities.",
    initials: "BO",
  },
];

const MILESTONES = [
  {
    year: "2012",
    event:
      "Odonova founded in Calabar with a vision to build a company people can genuinely trust.",
  },
  {
    year: "2015",
    event:
      "Launched software development division, serving local businesses across Cross River State.",
  },
  {
    year: "2018",
    event:
      "Delivered 20+ software projects. Expanded client base to Lagos and Abuja.",
  },
  {
    year: "2020",
    event:
      "Launched data annotation services. Secured first international AI/ML client.",
  },
  {
    year: "2022",
    event:
      "Added social media management division. Grew to a team of 15 specialists.",
  },
  {
    year: "2024",
    event:
      "Rebranded and launched new digital platform. 40+ software projects, 10M+ annotations delivered.",
  },
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

// ─── About Page

export default function AboutPage() {
  const [heroRef, heroInView] = useInView(0.05);
  const [storyRef, storyInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [timelineRef, timelineInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      <Navbar />
      <div
        className="bg-white"
        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      >
        {/* ── Hero */}
        <section className="relative bg-[#0D1117] min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={Assets.images.aboutBanner}
              alt="About Odonova"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/80 to-transparent" />
          </div>
          <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-50" />

          <div
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 w-full"
          >
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <SectionLabel text="Our Story" light />
              </div>
              <h1
                className={`text-white font-bold leading-[1.08] mb-5 transition-all duration-700 delay-100
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                }}
              >
                Built on trust.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
                  }}
                >
                  Driven by purpose.
                </span>
              </h1>
              <p
                className={`text-white/55 text-base leading-relaxed max-w-lg transition-all duration-700 delay-200
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Odonova was founded with a single mission: to deliver
                exceptional value in every engagement — whether you need
                software built, data labelled, or a brand grown online.
              </p>

              {/* Service pills */}
              <div
                className={`flex flex-wrap gap-2 mt-7 transition-all duration-700 delay-300
              ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {[
                  {
                    icon: <LuCodepen size={13} />,
                    label: "Software Development",
                  },
                  { icon: <LuTag size={13} />, label: "Data Annotation" },
                  { icon: <LuMegaphone size={13} />, label: "Social Media" },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/55 border border-white/15 bg-white/5"
                  >
                    {s.icon}
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ────────────────────────────────────────────────────── */}
        <section ref={statsRef} className="bg-[#1B3A5C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center transition-all duration-700
                  ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-white/30 mb-3">{stat.icon}</div>
                  <p
                    className="text-white font-bold leading-none mb-1.5"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/45 text-xs tracking-wider uppercase"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ────────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#E5E5EA]">
          <div
            ref={storyRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div
                className={`transition-all duration-700 ${storyInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <SectionLabel text="Who We Are" />
                <h2
                  className="text-[#0A0A0A] font-bold leading-tight mb-6"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Three services. <br />
                  One unified standard.
                </h2>
                <div className="space-y-4 text-[#4A4A4F] text-[0.95rem] leading-relaxed">
                  <p>
                    Odonova Ltd. was established in Calabar, Nigeria with a
                    clear vision: to create a company that people can genuinely
                    trust. From day one, we've held ourselves to a higher
                    standard across everything we do.
                  </p>
                  <p>
                    Our{" "}
                    <strong className="text-[#0A0A0A]">
                      Software Development
                    </strong>{" "}
                    team engineers custom digital products — from consumer
                    mobile apps to enterprise-grade platforms — with a focus on
                    reliability, design, and long-term maintainability.
                  </p>
                  <p>
                    Our{" "}
                    <strong className="text-[#0A0A0A]">Data Annotation</strong>{" "}
                    division delivers high-quality, human-verified labelling for
                    AI and ML pipelines — at scale, with strict QA and full data
                    privacy compliance.
                  </p>
                  <p>
                    Our{" "}
                    <strong className="text-[#0A0A0A]">
                      Social Media Management
                    </strong>{" "}
                    team grows your brand presence end-to-end — strategy,
                    content, community, and performance reporting.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Calabar Based",
                    "Nigeria-Wide Reach",
                    "Trusted Since 2012",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#1B3A5C] bg-[#D0DBE8] px-3 py-1.5 rounded-full"
                    >
                      <LuCheckCheck size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`transition-all duration-700 delay-150 ${storyInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={Assets.images.aboutBanner}
                      alt="Odonova team"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/20 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-[#E5E5EA] p-5 max-w-[220px]">
                    <p
                      className="text-[#0A0A0A] font-bold text-2xl leading-none mb-1"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      2012
                    </p>
                    <p className="text-[#8E8E93] text-xs leading-snug">
                      Founded in Calabar with a vision to redefine trust in
                      business.
                    </p>
                  </div>
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-35" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ──────────────────────────────────────────────────── */}
        <section className="bg-[#F7F7F8]">
          <div
            ref={valuesRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="text-center mb-14">
              <SectionLabel text="What We Stand For" />
              <h2
                className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
                ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Our core values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map((val, i) => (
                <div
                  key={val.title}
                  className={`bg-white rounded-2xl border border-[#E5E5EA] p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-5 group-hover:bg-[#D0DBE8] transition-colors duration-200">
                    {val.icon}
                  </div>
                  <div className="w-8 h-0.5 bg-[#1B3A5C] rounded-full mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3
                    className="text-[#0A0A0A] font-bold text-base mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-[#E5E5EA]">
          <div
            ref={timelineRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="text-center mb-14">
              <SectionLabel text="Our Journey" />
              <h2
                className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
                ${timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Over a decade of growth
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-[#E5E5EA] sm:-translate-x-px" />
              <div className="space-y-8">
                {MILESTONES.map((m, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={m.year}
                      className={`relative flex items-start gap-6 sm:gap-0 transition-all duration-700
                      ${timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      <div
                        className={`hidden sm:flex w-1/2 ${isLeft ? "pr-10 justify-end" : "pl-10 order-3"}`}
                      >
                        <div className="bg-white border border-[#E5E5EA] rounded-xl p-5 max-w-xs shadow-sm hover:shadow-md transition-shadow">
                          <p
                            className="text-[#1B3A5C] font-bold text-xl mb-2"
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                          >
                            {m.year}
                          </p>
                          <p className="text-[#4A4A4F] text-sm leading-relaxed">
                            {m.event}
                          </p>
                        </div>
                      </div>

                      <div className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-5 z-10 flex-shrink-0">
                        <div className="w-9 h-9 bg-[#1B3A5C] rounded-full flex items-center justify-center shadow-md">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>

                      <div className="sm:hidden flex-1">
                        <div className="bg-white border border-[#E5E5EA] rounded-xl p-5 shadow-sm">
                          <p
                            className="text-[#1B3A5C] font-bold text-xl mb-2"
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                          >
                            {m.year}
                          </p>
                          <p className="text-[#4A4A4F] text-sm leading-relaxed">
                            {m.event}
                          </p>
                        </div>
                      </div>

                      {isLeft && (
                        <div className="hidden sm:block w-1/2 order-3" />
                      )}
                      {!isLeft && <div className="hidden sm:block w-1/2" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────────────────── */}
        <section className="bg-[#F7F7F8] border-t border-[#E5E5EA]">
          <div
            ref={teamRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <div className="text-center mb-14">
              <SectionLabel text="The Team" />
              <h2
                className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
                ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                The people behind Odonova
              </h2>
              <p
                className={`text-[#8E8E93] text-sm mt-3 max-w-md mx-auto transition-all duration-700 delay-100
              ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                A small, dedicated team committed to delivering excellence
                across every service we offer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  className={`bg-white rounded-2xl border border-[#E5E5EA] p-6 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative mx-auto w-20 h-20 mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B3A5C] to-[#2A5280] flex items-center justify-center">
                      <span
                        className="text-white font-bold text-xl"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {member.initials}
                      </span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
                  </div>

                  <h3
                    className="text-[#0A0A0A] font-bold text-base mb-0.5"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[#1B3A5C] text-xs font-semibold mb-3 uppercase"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {member.role}
                  </p>
                  <div className="w-8 h-0.5 bg-[#D0DBE8] rounded-full mx-auto mb-3 group-hover:bg-[#1B3A5C] group-hover:w-12 transition-all duration-300" />
                  <p className="text-[#8E8E93] text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          ref={ctaRef}
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #1B3A5C 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 50%, #2A5280 0%, transparent 60%)",
            }}
          />

          <div
            className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 transition-all duration-700
            ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-xl">
                <SectionLabel text="Get In Touch" light />
                <h2
                  className="text-white font-bold leading-tight mb-4"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Let's start a conversation.
                </h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  Whether you need software built, data annotated, or a brand
                  grown online — we'd love to hear from you. Our team is always
                  ready to help.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-shrink-0 min-w-[260px]">
                <a
                  href={`tel:${Assets.text.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/40 group-hover:border-white/30 group-hover:text-white/70 transition-all">
                    <LuPhone size={15} />
                  </div>
                  {Assets.text.phone}
                </a>
                <a
                  href={`mailto:${Assets.text.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/40 group-hover:border-white/30 group-hover:text-white/70 transition-all">
                    <MdOutlineEmail size={16} />
                  </div>
                  {Assets.text.email}
                </a>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/30">
                    <LuMapPin size={15} />
                  </div>
                  {Assets.text.address}
                </div>

                <a
                  href="/contact"
                  className="group mt-2 flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#1B3A5C] hover:bg-[#F2F2F7] transition-all duration-200"
                >
                  Send Us a Message
                  <LuArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// import { useCallback, useRef, useState } from "react";
// import {
//   LuCar,
//   LuCodepen,
//   LuArrowRight,
//   LuShield,
//   LuStar,
//   LuUsers,
//   LuTrendingUp,
//   LuCheckCheck,
//   LuMapPin,
//   LuPhone,
// } from "react-icons/lu";
// import { MdOutlineEmail } from "react-icons/md";
// import Assets from "../../../utils/constant/Assets";

// // ─── useInView (callback ref — no .current during render) ────────────────────

// function useInView(
//   threshold = 0.12,
// ): [React.RefCallback<HTMLElement>, boolean] {
//   const [inView, setInView] = useState(false);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const ref = useCallback(
//     (node: HTMLElement | null) => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//         observerRef.current = null;
//       }
//       if (!node) return;
//       observerRef.current = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setInView(true);
//             observerRef.current?.disconnect();
//           }
//         },
//         { threshold },
//       );
//       observerRef.current.observe(node);
//     },
//     [threshold],
//   );

//   return [ref, inView];
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const STATS = [
//   {
//     value: "12+",
//     label: "Years in Business",
//     icon: <LuTrendingUp size={20} />,
//   },
//   { value: "500+", label: "Vehicles Sold", icon: <LuCar size={20} /> },
//   { value: "40+", label: "Software Projects", icon: <LuCodepen size={20} /> },
//   { value: "98%", label: "Client Satisfaction", icon: <LuStar size={20} /> },
// ];

// const VALUES = [
//   {
//     icon: <LuShield size={22} />,
//     title: "Integrity",
//     desc: "We operate with full transparency. No hidden costs, no misleading information — ever.",
//   },
//   {
//     icon: <LuStar size={22} />,
//     title: "Excellence",
//     desc: "Every vehicle is inspected. Every line of code is tested. We don't settle for good enough.",
//   },
//   {
//     icon: <LuUsers size={22} />,
//     title: "People First",
//     desc: "Our clients are partners, not transactions. We invest in long-term relationships.",
//   },
//   {
//     icon: <LuTrendingUp size={22} />,
//     title: "Innovation",
//     desc: "We continuously improve our processes and adopt new technologies to serve you better.",
//   },
// ];

// const TEAM = [
//   {
//     name: "Odo",
//     role: "Founder & CEO",
//     bio: "15 years in the automotive industry with a passion for technology-driven business.",
//     initials: "EO",
//   },
//   {
//     name: "Adaeze Nwosu",
//     role: "Head of Car Sales",
//     bio: "Automotive specialist with deep knowledge of the Nigerian vehicle market.",
//     initials: "AN",
//   },
//   {
//     name: "Chukwuemeka Eze",
//     role: "Lead Software Engineer",
//     bio: "Full-stack engineer who has shipped products used by thousands across West Africa.",
//     initials: "CE",
//   },
//   {
//     name: "Blessing Obi",
//     role: "Client Relations",
//     bio: "Dedicated to ensuring every client leaves with a smile — before and after the sale.",
//     initials: "BO",
//   },
// ];

// const MILESTONES = [
//   {
//     year: "2012",
//     event: "Odonova founded in Calabar with a small fleet of 5 vehicles.",
//   },
//   {
//     year: "2015",
//     event: "Expanded into software development, serving local businesses.",
//   },
//   {
//     year: "2018",
//     event: "Crossed 200 vehicles sold. Opened second showroom location.",
//   },
//   {
//     year: "2020",
//     event: "Launched enterprise software division. First international client.",
//   },
//   {
//     year: "2023",
//     event: "500+ vehicles sold milestone. 40+ software projects delivered.",
//   },
//   {
//     year: "2024",
//     event: "Rebranded and launched new digital platform. Stronger than ever.",
//   },
// ];

// // ─── Section Label ────────────────────────────────────────────────────────────

// function SectionLabel({
//   text,
//   light = false,
// }: {
//   text: string;
//   light?: boolean;
// }) {
//   return (
//     <div className="inline-flex items-center gap-2 mb-4">
//       <span className={`w-6 h-px ${light ? "bg-white/40" : "bg-[#1B3A5C]"}`} />
//       <span
//         className={`text-xs font-semibold uppercase ${light ? "text-white/50" : "text-[#1B3A5C]"}`}
//         style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.16em" }}
//       >
//         {text}
//       </span>
//     </div>
//   );
// }

// // ─── About Page ───────────────────────────────────────────────────────────────

// export default function AboutPage() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [storyRef, storyInView] = useInView();
//   const [statsRef, statsInView] = useInView();
//   const [valuesRef, valuesInView] = useInView();
//   const [timelineRef, timelineInView] = useInView();
//   const [teamRef, teamInView] = useInView();
//   const [ctaRef, ctaInView] = useInView();

//   return (
//     <div
//       className="bg-white"
//       style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
//     >
//       {/* ── Hero ─────────────────────────────────────────────────────────── */}
//       <section className="relative bg-[#0D1117] min-h-[70vh] flex items-end overflow-hidden">
//         {/* Background image */}
//         <div className="absolute inset-0">
//           <img
//             src={Assets.images.aboutBanner}
//             alt="About Odonova"
//             className="w-full h-full object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/80 to-transparent" />
//         </div>

//         {/* Decorative vertical line */}
//         <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-50" />

//         <div
//           ref={heroRef}
//           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 w-full"
//         >
//           <div className="max-w-2xl">
//             <div
//               className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               <SectionLabel text="Our Story" light />
//             </div>
//             <h1
//               className={`text-white font-bold leading-[1.08] mb-5 transition-all duration-700 delay-100
//                 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//               }}
//             >
//               Built on trust.
//               <br />
//               <span
//                 className="text-transparent bg-clip-text"
//                 style={{
//                   backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
//                 }}
//               >
//                 Driven by purpose.
//               </span>
//             </h1>
//             <p
//               className={`text-white/55 text-base leading-relaxed max-w-lg transition-all duration-700 delay-200
//                 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               Odonova was founded with a single mission: to deliver exceptional
//               value in every transaction — whether you're buying a vehicle or
//               building your next digital product.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Stats Bar ────────────────────────────────────────────────────── */}
//       <section ref={statsRef} className="bg-[#1B3A5C]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {STATS.map((stat, i) => (
//               <div
//                 key={stat.label}
//                 className={`flex flex-col items-center text-center transition-all duration-600
//                   ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="text-white/30 mb-3">{stat.icon}</div>
//                 <p
//                   className="text-white font-bold leading-none mb-1.5"
//                   style={{
//                     fontFamily: "'Playfair Display', Georgia, serif",
//                     fontSize: "clamp(2rem, 4vw, 2.75rem)",
//                   }}
//                 >
//                   {stat.value}
//                 </p>
//                 <p
//                   className="text-white/45 text-xs tracking-wider uppercase"
//                   style={{ letterSpacing: "0.1em" }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Our Story ────────────────────────────────────────────────────── */}
//       <section className="bg-white border-b border-[#E5E5EA]">
//         <div
//           ref={storyRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Text */}
//             <div
//               className={`transition-all duration-700
//                 ${storyInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//             >
//               <SectionLabel text="Who We Are" />
//               <h2
//                 className="text-[#0A0A0A] font-bold leading-tight mb-6"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//                 }}
//               >
//                 Two divisions. <br />
//                 One unified standard.
//               </h2>
//               <div className="space-y-4 text-[#4A4A4F] text-[0.95rem] leading-relaxed">
//                 <p>
//                   Odonova Ltd. was established in Calabar, Nigeria with a clear
//                   vision: to create a company that people can genuinely trust.
//                   From day one, we've held ourselves to a higher standard — in
//                   the vehicles we sell and the software we build.
//                 </p>
//                 <p>
//                   Our{" "}
//                   <strong className="text-[#0A0A0A]">Car Sales division</strong>{" "}
//                   offers a curated inventory of premium new and certified
//                   pre-owned vehicles, backed by thorough inspection, transparent
//                   pricing, and flexible financing options.
//                 </p>
//                 <p>
//                   Our{" "}
//                   <strong className="text-[#0A0A0A]">
//                     Software Development division
//                   </strong>{" "}
//                   engineers custom digital products — from consumer mobile apps
//                   to enterprise-grade platforms — with a focus on reliability,
//                   design, and long-term maintainability.
//                 </p>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 {[
//                   "Calabar Based",
//                   "Nigeria-Wide Reach",
//                   "Trusted Since 2012",
//                 ].map((tag) => (
//                   <span
//                     key={tag}
//                     className="flex items-center gap-1.5 text-xs font-medium text-[#1B3A5C] bg-[#D0DBE8] px-3 py-1.5 rounded-full"
//                   >
//                     <LuCheckCheck size={12} />
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Image */}
//             <div
//               className={`transition-all duration-700 delay-150
//                 ${storyInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//             >
//               <div className="relative">
//                 <div className="rounded-2xl overflow-hidden aspect-[4/3]">
//                   <img
//                     src={Assets.images.aboutBanner}
//                     alt="Odonova team"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/20 to-transparent" />
//                 </div>

//                 {/* Floating card */}
//                 <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-[#E5E5EA] p-5 max-w-[220px]">
//                   <p
//                     className="text-[#0A0A0A] font-bold text-2xl leading-none mb-1"
//                     style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                   >
//                     2012
//                   </p>
//                   <p className="text-[#8E8E93] text-xs leading-snug">
//                     Founded in Calabar with a vision to redefine trust in
//                     business.
//                   </p>
//                 </div>

//                 {/* Accent box */}
//                 <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-35" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Core Values ──────────────────────────────────────────────────── */}
//       <section className="bg-[#F7F7F8]">
//         <div
//           ref={valuesRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="text-center mb-14">
//             <SectionLabel text="What We Stand For" />
//             <h2
//               className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
//                 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//               }}
//             >
//               Our core values
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {VALUES.map((val, i) => (
//               <div
//                 key={val.title}
//                 className={`bg-white rounded-2xl border border-[#E5E5EA] p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300
//                   ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="w-12 h-12 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-5 group-hover:bg-[#D0DBE8] transition-colors duration-200">
//                   {val.icon}
//                 </div>
//                 <div className="w-8 h-0.5 bg-[#1B3A5C] rounded-full mb-4 group-hover:w-14 transition-all duration-300" />
//                 <h3
//                   className="text-[#0A0A0A] font-bold text-base mb-2"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 >
//                   {val.title}
//                 </h3>
//                 <p className="text-[#8E8E93] text-sm leading-relaxed">
//                   {val.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Timeline ─────────────────────────────────────────────────────── */}
//       <section className="bg-white border-t border-[#E5E5EA]">
//         <div
//           ref={timelineRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="text-center mb-14">
//             <SectionLabel text="Our Journey" />
//             <h2
//               className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
//                 ${timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//               }}
//             >
//               Over a decade of growth
//             </h2>
//           </div>

//           {/* Timeline */}
//           <div className="relative max-w-3xl mx-auto">
//             {/* Vertical line */}
//             <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-[#E5E5EA] sm:-translate-x-px" />

//             <div className="space-y-8">
//               {MILESTONES.map((m, i) => {
//                 const isLeft = i % 2 === 0;
//                 return (
//                   <div
//                     key={m.year}
//                     className={`relative flex items-start gap-6 sm:gap-0
//                       ${timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//                       transition-all duration-600`}
//                     style={{ transitionDelay: `${i * 120}ms` }}
//                   >
//                     {/* Desktop: alternate sides */}
//                     <div
//                       className={`hidden sm:flex w-1/2 ${isLeft ? "pr-10 justify-end" : "pl-10 order-3"}`}
//                     >
//                       <div
//                         className={`bg-white border border-[#E5E5EA] rounded-xl p-5 max-w-xs shadow-sm hover:shadow-md transition-shadow`}
//                       >
//                         <p
//                           className="text-[#1B3A5C] font-bold text-xl mb-2"
//                           style={{
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                           }}
//                         >
//                           {m.year}
//                         </p>
//                         <p className="text-[#4A4A4F] text-sm leading-relaxed">
//                           {m.event}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Dot */}
//                     <div className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-5 z-10 flex-shrink-0">
//                       <div className="w-9 h-9 bg-[#1B3A5C] rounded-full flex items-center justify-center shadow-md">
//                         <div className="w-3 h-3 bg-white rounded-full" />
//                       </div>
//                     </div>

//                     {/* Mobile card */}
//                     <div className="sm:hidden flex-1">
//                       <div className="bg-white border border-[#E5E5EA] rounded-xl p-5 shadow-sm">
//                         <p
//                           className="text-[#1B3A5C] font-bold text-xl mb-2"
//                           style={{
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                           }}
//                         >
//                           {m.year}
//                         </p>
//                         <p className="text-[#4A4A4F] text-sm leading-relaxed">
//                           {m.event}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Desktop: right side placeholder for even items */}
//                     {isLeft && (
//                       <div className="hidden sm:block w-1/2 order-3" />
//                     )}
//                     {!isLeft && <div className="hidden sm:block w-1/2" />}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Team ─────────────────────────────────────────────────────────── */}
//       <section className="bg-[#F7F7F8] border-t border-[#E5E5EA]">
//         <div
//           ref={teamRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="text-center mb-14">
//             <SectionLabel text="The Team" />
//             <h2
//               className={`text-[#0A0A0A] font-bold leading-tight transition-all duration-700
//                 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//               }}
//             >
//               The people behind Odonova
//             </h2>
//             <p
//               className={`text-[#8E8E93] text-sm mt-3 max-w-md mx-auto transition-all duration-700 delay-100
//                 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//             >
//               A small, dedicated team committed to delivering excellence across
//               every service we offer.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {TEAM.map((member, i) => (
//               <div
//                 key={member.name}
//                 className={`bg-white rounded-2xl border border-[#E5E5EA] p-6 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300
//                   ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 {/* Avatar */}
//                 <div className="relative mx-auto w-20 h-20 mb-4">
//                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B3A5C] to-[#2A5280] flex items-center justify-center">
//                     <span
//                       className="text-white font-bold text-xl"
//                       style={{
//                         fontFamily: "'Playfair Display', Georgia, serif",
//                       }}
//                     >
//                       {member.initials}
//                     </span>
//                   </div>
//                   {/* Online dot */}
//                   <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
//                 </div>

//                 <h3
//                   className="text-[#0A0A0A] font-bold text-base mb-0.5"
//                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                 >
//                   {member.name}
//                 </h3>
//                 <p
//                   className="text-[#1B3A5C] text-xs font-semibold mb-3 tracking-wide uppercase"
//                   style={{ letterSpacing: "0.08em" }}
//                 >
//                   {member.role}
//                 </p>
//                 <div className="w-8 h-0.5 bg-[#D0DBE8] rounded-full mx-auto mb-3 group-hover:bg-[#1B3A5C] group-hover:w-12 transition-all duration-300" />
//                 <p className="text-[#8E8E93] text-xs leading-relaxed">
//                   {member.bio}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ──────────────────────────────────────────────────────────── */}
//       <section
//         ref={ctaRef}
//         className="relative overflow-hidden"
//         style={{
//           background: "linear-gradient(135deg, #0D1117 0%, #1B3A5C 100%)",
//         }}
//       >
//         {/* Subtle radial glow */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-30"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 70% 50%, #2A5280 0%, transparent 60%)",
//           }}
//         />

//         <div
//           className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 transition-all duration-700
//             ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//             <div className="max-w-xl">
//               <SectionLabel text="Get In Touch" light />
//               <h2
//                 className="text-white font-bold leading-tight mb-4"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//                 }}
//               >
//                 Let's start a conversation.
//               </h2>
//               <p className="text-white/50 text-sm leading-relaxed max-w-md">
//                 Whether you're looking for a vehicle or need a technology
//                 partner, we'd love to hear from you. Our team is always ready to
//                 help.
//               </p>
//             </div>

//             <div className="flex flex-col gap-4 flex-shrink-0 min-w-[260px]">
//               {/* Contact details */}
//               <a
//                 href={`tel:${Assets.text.phone}`}
//                 className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors group"
//               >
//                 <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/40 group-hover:border-white/30 group-hover:text-white/70 transition-all">
//                   <LuPhone size={15} />
//                 </div>
//                 {Assets.text.phone}
//               </a>
//               <a
//                 href={`mailto:${Assets.text.email}`}
//                 className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors group"
//               >
//                 <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/40 group-hover:border-white/30 group-hover:text-white/70 transition-all">
//                   <MdOutlineEmail size={16} />
//                 </div>
//                 {Assets.text.email}
//               </a>
//               <div className="flex items-center gap-3 text-white/50 text-sm">
//                 <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/30">
//                   <LuMapPin size={15} />
//                 </div>
//                 {Assets.text.address}
//               </div>

//               <a
//                 href="#contact"
//                 className="group mt-2 flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#1B3A5C] hover:bg-[#F2F2F7] transition-all duration-200"
//               >
//                 Send Us a Message
//                 <LuArrowRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
