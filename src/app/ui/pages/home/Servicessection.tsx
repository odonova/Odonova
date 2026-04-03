import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuCodepen,
  LuArrowRight,
  LuShield,
  LuHeadphones,
  LuStar,
  LuCheckCheck,
  LuTag,
  LuMegaphone,
  LuBrainCircuit,
  LuUsers,
} from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import {
  TbDeviceMobile,
  TbWorldWww,
  TbBuildingSkyscraper,
  TbDatabaseSearch,
  TbTargetArrow,
} from "react-icons/tb";
import Assets from "../../../utils/constant/Assets";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SOFTWARE_FEATURES = [
  { icon: <TbWorldWww size={16} />, text: "Custom web apps & platforms" },
  {
    icon: <TbDeviceMobile size={16} />,
    text: "iOS & Android mobile applications",
  },
  {
    icon: <TbBuildingSkyscraper size={16} />,
    text: "Enterprise & business software",
  },
  {
    icon: <LuCodepen size={16} />,
    text: "UI/UX design & technical consulting",
  },
];

const ANNOTATION_FEATURES = [
  {
    icon: <TbDatabaseSearch size={16} />,
    text: "Image, video & audio labelling",
  },
  {
    icon: <LuBrainCircuit size={16} />,
    text: "AI & machine learning training data",
  },
  { icon: <LuShield size={16} />, text: "Strict QA process & data privacy" },
  {
    icon: <LuHeadphones size={16} />,
    text: "Experienced & well-trained annotators",
  },
];

const SOCIAL_FEATURES = [
  {
    icon: <LuMegaphone size={16} />,
    text: "Content strategy & brand storytelling",
  },
  { icon: <LuUsers size={16} />, text: "Community growth & engagement" },
  { icon: <TbTargetArrow size={16} />, text: "Targeted campaigns & paid ads" },
  {
    icon: <SiSimpleanalytics size={16} />,
    text: "Analytics, reporting & optimisation",
  },
];

const WHY_US = [
  {
    icon: <LuStar size={20} />,
    title: "Proven Track Record",
    desc: "40+ software projects delivered and millions of data points annotated with excellence.",
  },
  {
    icon: <LuShield size={20} />,
    title: "Trusted & Transparent",
    desc: "No hidden fees, no surprises. We operate with full clarity at every step.",
  },
  {
    icon: <LuHeadphones size={20} />,
    title: "End-to-End Support",
    desc: "From first inquiry to project delivery, our team is always within reach.",
  },
  {
    icon: <LuCheckCheck size={20} />,
    title: "Quality Guaranteed",
    desc: "Every line of code is tested. Every annotation is verified. No compromises.",
  },
];

// ─── useInView ────────────────────────────────────────────────────────────────

function useInView(
  threshold = 0.15,
): [React.RefCallback<HTMLDivElement>, boolean] {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
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

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-[#1B3A5C]" />
      <span
        className="text-[#1B3A5C] text-xs font-semibold tracking-[0.16em] uppercase"
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.16em" }}
      >
        {text}
      </span>
    </div>
  );
}

// ─── Feature List ─────────────────────────────────────────────────────────────

function FeatureList({
  features,
  inView,
  direction = "left",
}: {
  features: { icon: React.ReactNode; text: string }[];
  inView: boolean;
  direction?: "left" | "right";
}) {
  return (
    <ul className="space-y-3 mb-10">
      {features.map((f, i) => (
        <li
          key={f.text}
          className={`flex items-start gap-3 transition-all duration-500
            ${
              inView
                ? "opacity-100 translate-x-0"
                : direction === "left"
                  ? "opacity-0 -translate-x-4"
                  : "opacity-0 translate-x-4"
            }`}
          style={{ transitionDelay: `${200 + i * 80}ms` }}
        >
          <span className="w-8 h-8 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0 mt-0.5">
            {f.icon}
          </span>
          <span className="text-[#2E2E30] text-sm leading-relaxed pt-1.5">
            {f.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ─── Code Snippet Visual ──────────────────────────────────────────────────────

function CodeSnippet() {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="space-y-1.5">
          {[
            "const odonova = new Solution();",
            "odonova.build({ quality: 'premium' });",
            "// Delivered on time. Every time.",
          ].map((line, i) => (
            <p
              key={i}
              className="text-[11px] font-mono"
              style={{
                color:
                  i === 2 ? "rgba(74,144,217,0.8)" : "rgba(255,255,255,0.6)",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [introRef, introInView] = useInView();
  const [softwareRef, softwareInView] = useInView();
  const [annotationRef, annotationInView] = useInView();
  const [socialRef, socialInView] = useInView();
  const [whyRef, whyInView] = useInView();

  return (
    <main
      className="bg-[#F7F7F8]"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* ── Section Intro ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E5E5EA]">
        <div
          ref={introRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel text="What We Do" />
            <h2
              className={`text-[#0A0A0A] leading-tight mb-5 transition-all duration-700
                ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Three services.{" "}
              <span className="text-[#1B3A5C]">One commitment</span> to
              excellence.
            </h2>
            <p
              className={`text-[#4A4A4F] leading-relaxed text-base transition-all duration-700 delay-100
                ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Whether you need a reliable technology partner, precise data
              annotation, or a brand that dominates social media — Odonova
              delivers with professionalism, precision, and care.
            </p>
          </div>
        </div>
      </section>

      {/* ── Software Development ─────────────────────────────────────────── */}
      <section id="software" className="bg-white">
        <div
          ref={softwareRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div
              className={`order-2 lg:order-1 transition-all duration-700
                ${softwareInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#1C1C1E]">
                  <img
                    src={Assets.images.aboutBanner}
                    alt="Software development"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/60 via-transparent to-[#1B3A5C]/30" />
                  <CodeSnippet />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
                    <LuCodepen size={18} />
                  </div>
                  <div>
                    <p
                      className="text-[#0A0A0A] font-bold text-lg leading-none"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      40+
                    </p>
                    <p className="text-[#8E8E93] text-xs mt-0.5">
                      Projects Shipped
                    </p>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
              </div>
            </div>

            {/* Text side */}
            <div
              className={`order-1 lg:order-2 transition-all duration-700 delay-100
                ${softwareInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <SectionLabel text="Software Development" />
              <h3
                className="text-[#0A0A0A] leading-tight mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Digital products built to last.
              </h3>
              <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
                From startups to established enterprises, we engineer software
                that solves real problems. Our team brings technical depth and
                design sensibility to every project — web apps, mobile
                platforms, and everything in between.
              </p>
              <FeatureList
                features={SOFTWARE_FEATURES}
                inView={softwareInView}
                direction="right"
              />
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#1B3A5C] border-2 border-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 hover:gap-3"
              >
                <LuCodepen size={16} />
                Start a Project
                <LuArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5EA]" />
      </div>

      {/* ── Data Annotation ──────────────────────────────────────────────── */}
      <section id="data-annotation" className="bg-white">
        <div
          ref={annotationRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <div
              className={`transition-all duration-700
                ${annotationInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <SectionLabel text="Data Annotation" />
              <h3
                className="text-[#0A0A0A] leading-tight mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Precision-labelled data for smarter AI.
              </h3>
              <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
                We provide high-quality, human-verified annotation services for
                machine learning and AI pipelines. Our trained annotators
                deliver accurate, consistent data — at scale — with strict
                quality assurance and full data privacy compliance.
              </p>
              <FeatureList
                features={ANNOTATION_FEATURES}
                inView={annotationInView}
                direction="left"
              />
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.3)] hover:gap-3"
                style={{
                  background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
                }}
              >
                <LuTag size={16} />
                Get a Quote
                <LuArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Image side */}
            <div
              className={`transition-all duration-700 delay-200
                ${annotationInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D1117] flex items-center justify-center">
                  <img
                    src={Assets.images.heroBg}
                    alt="Data annotation"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C]/60 to-transparent" />
                  <div className="absolute inset-6 flex flex-col gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#4A90D9]" />
                        <p className="text-white/60 text-[10px] font-mono uppercase tracking-widest">
                          Annotation Task #4821
                        </p>
                      </div>
                      <div className="space-y-2">
                        {[
                          {
                            label: "Object Detection",
                            status: "✓ Complete",
                            color: "text-green-400",
                          },
                          {
                            label: "Sentiment Analysis",
                            status: "✓ Complete",
                            color: "text-green-400",
                          },
                          {
                            label: "Text Classification",
                            status: "⏳ In Review",
                            color: "text-yellow-400",
                          },
                          {
                            label: "Named Entity",
                            status: "⏳ In Review",
                            color: "text-yellow-400",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between"
                          >
                            <span className="text-white/55 text-[11px]">
                              {item.label}
                            </span>
                            <span
                              className={`text-[11px] font-medium ${item.color}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                        <p
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          99.2%
                        </p>
                        <p className="text-white/40 text-[10px]">Accuracy</p>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                        <p
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          10M+
                        </p>
                        <p className="text-white/40 text-[10px]">Labels Done</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
                    <LuTag size={18} />
                  </div>
                  <div>
                    <p
                      className="text-[#0A0A0A] font-bold text-lg leading-none"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      99.2%
                    </p>
                    <p className="text-[#8E8E93] text-xs mt-0.5">
                      Annotation Accuracy
                    </p>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5EA]" />
      </div>

      {/* ── Social Media Management ───────────────────────────────────────── */}
      <section id="social-media" className="bg-white">
        <div
          ref={socialRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div
              className={`order-2 lg:order-1 transition-all duration-700
                ${socialInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D1117]">
                  <img
                    src={Assets.images.aboutBanner}
                    alt="Social media management"
                    className="w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C]/50 to-[#0D1117]/60" />
                  <div className="absolute inset-6 flex flex-col gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
                      <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mb-3">
                        Monthly Performance
                      </p>
                      <div className="space-y-2.5">
                        {[
                          {
                            platform: "Instagram",
                            growth: "+38%",
                            bar: "w-[75%]",
                          },
                          {
                            platform: "LinkedIn",
                            growth: "+52%",
                            bar: "w-[90%]",
                          },
                          {
                            platform: "Twitter / X",
                            growth: "+24%",
                            bar: "w-[55%]",
                          },
                        ].map((item) => (
                          <div key={item.platform}>
                            <div className="flex justify-between mb-1">
                              <span className="text-white/60 text-[11px]">
                                {item.platform}
                              </span>
                              <span className="text-green-400 text-[11px] font-semibold">
                                {item.growth}
                              </span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${item.bar} bg-gradient-to-r from-[#4A90D9] to-[#7EB8F7] rounded-full`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                        <p
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          3.2x
                        </p>
                        <p className="text-white/40 text-[10px]">Avg. Reach</p>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                        <p
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          +41%
                        </p>
                        <p className="text-white/40 text-[10px]">Engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
                    <LuMegaphone size={18} />
                  </div>
                  <div>
                    <p
                      className="text-[#0A0A0A] font-bold text-lg leading-none"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      3.2x
                    </p>
                    <p className="text-[#8E8E93] text-xs mt-0.5">
                      Average Reach Growth
                    </p>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
              </div>
            </div>

            {/* Text side */}
            <div
              className={`order-1 lg:order-2 transition-all duration-700 delay-100
                ${socialInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <SectionLabel text="Social Media Management" />
              <h3
                className="text-[#0A0A0A] leading-tight mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Your brand, amplified.
              </h3>
              <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
                We manage your social media presence end-to-end — from strategy
                and content creation to community management and performance
                reporting. Let us grow your audience while you focus on running
                your business.
              </p>
              <FeatureList
                features={SOCIAL_FEATURES}
                inView={socialInView}
                direction="right"
              />
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#1B3A5C] border-2 border-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 hover:gap-3"
              >
                <LuMegaphone size={16} />
                Grow My Brand
                <LuArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section id="why" className="bg-[#F7F7F8] border-t border-[#E5E5EA]">
        <div
          ref={whyRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="text-center mb-14">
            <SectionLabel text="Why Odonova" />
            <h2
              className={`text-[#0A0A0A] leading-tight transition-all duration-700
                ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
              }}
            >
              Built on trust. Driven by results.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl border border-[#E5E5EA] p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group
                  ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-5 transition-colors duration-200 group-hover:bg-[#D0DBE8]">
                  {item.icon}
                </div>
                <div className="w-8 h-0.5 bg-[#1B3A5C] rounded-full mb-4 transition-all duration-300 group-hover:w-12" />
                <h4
                  className="text-[#0A0A0A] font-semibold text-base mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-[#8E8E93] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className={`mt-14 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 delay-500
              ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              background: "linear-gradient(135deg, #1B3A5C 0%, #0D2440 100%)",
            }}
          >
            <div>
              <p
                className="text-white/50 text-xs uppercase mb-2"
                style={{ letterSpacing: "0.14em" }}
              >
                12+ Years of Excellence
              </p>
              <h4
                className="text-white font-bold"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                }}
              >
                Ready to work with Odonova?
              </h4>
            </div>
            <Link
              to="/contact"
              className="group flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#1B3A5C] hover:bg-[#F2F2F7] transition-all duration-200 hover:gap-3"
            >
              Get in Touch
              <LuArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// import { useCallback, useRef, useState } from "react";
// import {
//   LuCodepen,
//   LuArrowRight,
//   LuShield,
//   LuHeadphones,
//   LuStar,
//   LuCheckCheck,
//   LuTag,
//   LuMegaphone,
//   LuBrainCircuit,
//   LuUsers,
//   // LuBar,
// } from "react-icons/lu";
// import { SiSimpleanalytics } from "react-icons/si";
// import {
//   TbDeviceMobile,
//   TbWorldWww,
//   TbBuildingSkyscraper,
//   TbDatabaseSearch,
//   TbTargetArrow,
// } from "react-icons/tb";
// import Assets from "../../../utils/constant/Assets";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const SOFTWARE_FEATURES = [
//   { icon: <TbWorldWww size={16} />, text: "Custom web apps & platforms" },
//   {
//     icon: <TbDeviceMobile size={16} />,
//     text: "iOS & Android mobile applications",
//   },
//   {
//     icon: <TbBuildingSkyscraper size={16} />,
//     text: "Enterprise & business software",
//   },
//   {
//     icon: <LuCodepen size={16} />,
//     text: "UI/UX design & technical consulting",
//   },
// ];

// const ANNOTATION_FEATURES = [
//   {
//     icon: <TbDatabaseSearch size={16} />,
//     text: "Image, video & audio labelling",
//   },
//   {
//     icon: <LuBrainCircuit size={16} />,
//     text: "AI & machine learning training data",
//   },
//   { icon: <LuShield size={16} />, text: "Strict QA process & data privacy" },
//   {
//     icon: <LuHeadphones size={16} />,
//     text: "Experienced & well-trained annotators",
//   },
// ];

// const SOCIAL_FEATURES = [
//   {
//     icon: <LuMegaphone size={16} />,
//     text: "Content strategy & brand storytelling",
//   },
//   { icon: <LuUsers size={16} />, text: "Community growth & engagement" },
//   { icon: <TbTargetArrow size={16} />, text: "Targeted campaigns & paid ads" },
//   {
//     icon: <SiSimpleanalytics size={16} />,
//     text: "Analytics, reporting & optimisation",
//   },
// ];

// const WHY_US = [
//   {
//     icon: <LuStar size={20} />,
//     title: "Proven Track Record",
//     desc: "40+ software projects delivered and millions of data points annotated with excellence.",
//   },
//   {
//     icon: <LuShield size={20} />,
//     title: "Trusted & Transparent",
//     desc: "No hidden fees, no surprises. We operate with full clarity at every step.",
//   },
//   {
//     icon: <LuHeadphones size={20} />,
//     title: "End-to-End Support",
//     desc: "From first inquiry to project delivery, our team is always within reach.",
//   },
//   {
//     icon: <LuCheckCheck size={20} />,
//     title: "Quality Guaranteed",
//     desc: "Every line of code is tested. Every annotation is verified. No compromises.",
//   },
// ];

// // ─── useInView ────────────────────────────────────────────────────────────────

// function useInView(
//   threshold = 0.15,
// ): [React.RefCallback<HTMLDivElement>, boolean] {
//   const [inView, setInView] = useState(false);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const ref = useCallback(
//     (node: HTMLDivElement | null) => {
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

// // ─── Section Label ────────────────────────────────────────────────────────────

// function SectionLabel({ text }: { text: string }) {
//   return (
//     <div className="inline-flex items-center gap-2 mb-4">
//       <span className="w-6 h-px bg-[#1B3A5C]" />
//       <span
//         className="text-[#1B3A5C] text-xs font-semibold tracking-[0.16em] uppercase"
//         style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.16em" }}
//       >
//         {text}
//       </span>
//     </div>
//   );
// }

// // ─── Feature List ─────────────────────────────────────────────────────────────

// function FeatureList({
//   features,
//   inView,
//   direction = "left",
// }: {
//   features: { icon: React.ReactNode; text: string }[];
//   inView: boolean;
//   direction?: "left" | "right";
// }) {
//   return (
//     <ul className="space-y-3 mb-10">
//       {features.map((f, i) => (
//         <li
//           key={f.text}
//           className={`flex items-start gap-3 transition-all duration-500
//             ${
//               inView
//                 ? "opacity-100 translate-x-0"
//                 : direction === "left"
//                   ? "opacity-0 -translate-x-4"
//                   : "opacity-0 translate-x-4"
//             }`}
//           style={{ transitionDelay: `${200 + i * 80}ms` }}
//         >
//           <span className="w-8 h-8 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0 mt-0.5">
//             {f.icon}
//           </span>
//           <span className="text-[#2E2E30] text-sm leading-relaxed pt-1.5">
//             {f.text}
//           </span>
//         </li>
//       ))}
//     </ul>
//   );
// }

// // ─── Code Snippet Visual ──────────────────────────────────────────────────────

// function CodeSnippet() {
//   return (
//     <div className="absolute bottom-6 left-6 right-6">
//       <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//         <div className="flex items-center gap-2 mb-3">
//           <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
//           <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
//           <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
//         </div>
//         <div className="space-y-1.5">
//           {[
//             "const odonova = new Solution();",
//             "odonova.build({ quality: 'premium' });",
//             "// Delivered on time. Every time.",
//           ].map((line, i) => (
//             <p
//               key={i}
//               className="text-[11px] font-mono"
//               style={{
//                 color:
//                   i === 2 ? "rgba(74,144,217,0.8)" : "rgba(255,255,255,0.6)",
//               }}
//             >
//               {line}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Services Section ─────────────────────────────────────────────────────────

// export default function ServicesSection() {
//   const [introRef, introInView] = useInView();
//   const [softwareRef, softwareInView] = useInView();
//   const [annotationRef, annotationInView] = useInView();
//   const [socialRef, socialInView] = useInView();
//   const [whyRef, whyInView] = useInView();

//   return (
//     <main
//       className="bg-[#F7F7F8]"
//       style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
//     >
//       {/* ── Section Intro ───────────────────────────────────────────────── */}
//       <section className="bg-white border-b border-[#E5E5EA]">
//         <div
//           ref={introRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="max-w-2xl mx-auto text-center">
//             <SectionLabel text="What We Do" />
//             <h2
//               className={`text-[#0A0A0A] leading-tight mb-5 transition-all duration-700
//                 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 fontWeight: 700,
//               }}
//             >
//               Three services.{" "}
//               <span className="text-[#1B3A5C]">One commitment</span> to
//               excellence.
//             </h2>
//             <p
//               className={`text-[#4A4A4F] leading-relaxed text-base transition-all duration-700 delay-100
//                 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               Whether you need a reliable technology partner, precise data
//               annotation, or a brand that dominates social media — Odonova
//               delivers with professionalism, precision, and care.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Software Development ─────────────────────────────────────────── */}
//       <section id="software" className="bg-white">
//         <div
//           ref={softwareRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Image side */}
//             <div
//               className={`order-2 lg:order-1 transition-all duration-700
//                 ${softwareInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//             >
//               <div className="relative">
//                 <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#1C1C1E]">
//                   <img
//                     src={Assets.images.aboutBanner}
//                     alt="Software development"
//                     className="w-full h-full object-cover opacity-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/60 via-transparent to-[#1B3A5C]/30" />
//                   <CodeSnippet />
//                 </div>
//                 <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
//                     <LuCodepen size={18} />
//                   </div>
//                   <div>
//                     <p
//                       className="text-[#0A0A0A] font-bold text-lg leading-none"
//                       style={{
//                         fontFamily: "'Playfair Display', Georgia, serif",
//                       }}
//                     >
//                       40+
//                     </p>
//                     <p className="text-[#8E8E93] text-xs mt-0.5">
//                       Projects Shipped
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
//               </div>
//             </div>

//             {/* Text side */}
//             <div
//               className={`order-1 lg:order-2 transition-all duration-700 delay-100
//                 ${softwareInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//             >
//               <SectionLabel text="Software Development" />
//               <h3
//                 className="text-[#0A0A0A] leading-tight mb-4"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                   fontWeight: 700,
//                 }}
//               >
//                 Digital products built to last.
//               </h3>
//               <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
//                 From startups to established enterprises, we engineer software
//                 that solves real problems. Our team brings technical depth and
//                 design sensibility to every project — web apps, mobile
//                 platforms, and everything in between.
//               </p>
//               <FeatureList
//                 features={SOFTWARE_FEATURES}
//                 inView={softwareInView}
//                 direction="right"
//               />
//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#1B3A5C] border-2 border-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 hover:gap-3"
//               >
//                 <LuCodepen size={16} />
//                 Start a Project
//                 <LuArrowRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="border-t border-[#E5E5EA]" />
//       </div>

//       {/* ── Data Annotation ──────────────────────────────────────────────── */}
//       <section id="data-annotation" className="bg-white">
//         <div
//           ref={annotationRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Text side */}
//             <div
//               className={`transition-all duration-700
//                 ${annotationInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//             >
//               <SectionLabel text="Data Annotation" />
//               <h3
//                 className="text-[#0A0A0A] leading-tight mb-4"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                   fontWeight: 700,
//                 }}
//               >
//                 Precision-labelled data for smarter AI.
//               </h3>
//               <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
//                 We provide high-quality, human-verified annotation services for
//                 machine learning and AI pipelines. Our trained annotators
//                 deliver accurate, consistent data — at scale — with strict
//                 quality assurance and full data privacy compliance.
//               </p>
//               <FeatureList
//                 features={ANNOTATION_FEATURES}
//                 inView={annotationInView}
//                 direction="left"
//               />
//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.3)] hover:gap-3"
//                 style={{
//                   background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
//                 }}
//               >
//                 <LuTag size={16} />
//                 Get a Quote
//                 <LuArrowRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>

//             {/* Image side */}
//             <div
//               className={`transition-all duration-700 delay-200
//                 ${annotationInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//             >
//               <div className="relative">
//                 <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D1117] flex items-center justify-center">
//                   <img
//                     src={Assets.images.heroBg}
//                     alt="Data annotation"
//                     className="w-full h-full object-cover opacity-40"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C]/60 to-transparent" />

//                   {/* Annotation UI mockup */}
//                   <div className="absolute inset-6 flex flex-col gap-3">
//                     <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
//                       <div className="flex items-center gap-2 mb-3">
//                         <div className="w-2 h-2 rounded-full bg-[#4A90D9]" />
//                         <p className="text-white/60 text-[10px] font-mono uppercase tracking-widest">
//                           Annotation Task #4821
//                         </p>
//                       </div>
//                       <div className="space-y-2">
//                         {[
//                           {
//                             label: "Object Detection",
//                             status: "✓ Complete",
//                             color: "text-green-400",
//                           },
//                           {
//                             label: "Sentiment Analysis",
//                             status: "✓ Complete",
//                             color: "text-green-400",
//                           },
//                           {
//                             label: "Text Classification",
//                             status: "⏳ In Review",
//                             color: "text-yellow-400",
//                           },
//                           {
//                             label: "Named Entity",
//                             status: "⏳ In Review",
//                             color: "text-yellow-400",
//                           },
//                         ].map((item) => (
//                           <div
//                             key={item.label}
//                             className="flex items-center justify-between"
//                           >
//                             <span className="text-white/55 text-[11px]">
//                               {item.label}
//                             </span>
//                             <span
//                               className={`text-[11px] font-medium ${item.color}`}
//                             >
//                               {item.status}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
//                         <p
//                           className="text-white font-bold text-lg"
//                           style={{ fontFamily: "'Playfair Display', serif" }}
//                         >
//                           99.2%
//                         </p>
//                         <p className="text-white/40 text-[10px]">Accuracy</p>
//                       </div>
//                       <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
//                         <p
//                           className="text-white font-bold text-lg"
//                           style={{ fontFamily: "'Playfair Display', serif" }}
//                         >
//                           10M+
//                         </p>
//                         <p className="text-white/40 text-[10px]">Labels Done</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
//                     <LuTag size={18} />
//                   </div>
//                   <div>
//                     <p
//                       className="text-[#0A0A0A] font-bold text-lg leading-none"
//                       style={{
//                         fontFamily: "'Playfair Display', Georgia, serif",
//                       }}
//                     >
//                       99.2%
//                     </p>
//                     <p className="text-[#8E8E93] text-xs mt-0.5">
//                       Annotation Accuracy
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="border-t border-[#E5E5EA]" />
//       </div>

//       {/* ── Social Media Management ───────────────────────────────────────── */}
//       <section id="social-media" className="bg-white">
//         <div
//           ref={socialRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Image side */}
//             <div
//               className={`order-2 lg:order-1 transition-all duration-700
//                 ${socialInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//             >
//               <div className="relative">
//                 <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D1117]">
//                   <img
//                     src={Assets.images.aboutBanner}
//                     alt="Social media management"
//                     className="w-full h-full object-cover opacity-35"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C]/50 to-[#0D1117]/60" />

//                   {/* Social stats mockup */}
//                   <div className="absolute inset-6 flex flex-col gap-3">
//                     <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
//                       <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mb-3">
//                         Monthly Performance
//                       </p>
//                       <div className="space-y-2.5">
//                         {[
//                           {
//                             platform: "Instagram",
//                             growth: "+38%",
//                             bar: "w-[75%]",
//                           },
//                           {
//                             platform: "LinkedIn",
//                             growth: "+52%",
//                             bar: "w-[90%]",
//                           },
//                           {
//                             platform: "Twitter / X",
//                             growth: "+24%",
//                             bar: "w-[55%]",
//                           },
//                         ].map((item) => (
//                           <div key={item.platform}>
//                             <div className="flex justify-between mb-1">
//                               <span className="text-white/60 text-[11px]">
//                                 {item.platform}
//                               </span>
//                               <span className="text-green-400 text-[11px] font-semibold">
//                                 {item.growth}
//                               </span>
//                             </div>
//                             <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
//                               <div
//                                 className={`h-full ${item.bar} bg-gradient-to-r from-[#4A90D9] to-[#7EB8F7] rounded-full`}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
//                         <p
//                           className="text-white font-bold text-lg"
//                           style={{ fontFamily: "'Playfair Display', serif" }}
//                         >
//                           3.2x
//                         </p>
//                         <p className="text-white/40 text-[10px]">Avg. Reach</p>
//                       </div>
//                       <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
//                         <p
//                           className="text-white font-bold text-lg"
//                           style={{ fontFamily: "'Playfair Display', serif" }}
//                         >
//                           +41%
//                         </p>
//                         <p className="text-white/40 text-[10px]">Engagement</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-[#E5E5EA] px-5 py-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C]">
//                     <LuMegaphone size={18} />
//                   </div>
//                   <div>
//                     <p
//                       className="text-[#0A0A0A] font-bold text-lg leading-none"
//                       style={{
//                         fontFamily: "'Playfair Display', Georgia, serif",
//                       }}
//                     >
//                       3.2x
//                     </p>
//                     <p className="text-[#8E8E93] text-xs mt-0.5">
//                       Average Reach Growth
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#D0DBE8] opacity-40" />
//               </div>
//             </div>

//             {/* Text side */}
//             <div
//               className={`order-1 lg:order-2 transition-all duration-700 delay-100
//                 ${socialInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//             >
//               <SectionLabel text="Social Media Management" />
//               <h3
//                 className="text-[#0A0A0A] leading-tight mb-4"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                   fontWeight: 700,
//                 }}
//               >
//                 Your brand, amplified.
//               </h3>
//               <p className="text-[#4A4A4F] leading-relaxed mb-8 text-[0.95rem]">
//                 We manage your social media presence end-to-end — from strategy
//                 and content creation to community management and performance
//                 reporting. Let us grow your audience while you focus on running
//                 your business.
//               </p>
//               <FeatureList
//                 features={SOCIAL_FEATURES}
//                 inView={socialInView}
//                 direction="right"
//               />
//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#1B3A5C] border-2 border-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 hover:gap-3"
//               >
//                 <LuMegaphone size={16} />
//                 Grow My Brand
//                 <LuArrowRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Why Choose Us ────────────────────────────────────────────────── */}
//       <section id="why" className="bg-[#F7F7F8] border-t border-[#E5E5EA]">
//         <div
//           ref={whyRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
//         >
//           <div className="text-center mb-14">
//             <SectionLabel text="Why Odonova" />
//             <h2
//               className={`text-[#0A0A0A] leading-tight transition-all duration-700
//                 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
//                 fontWeight: 700,
//               }}
//             >
//               Built on trust. Driven by results.
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {WHY_US.map((item, i) => (
//               <div
//                 key={item.title}
//                 className={`bg-white rounded-2xl border border-[#E5E5EA] p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group
//                   ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="w-11 h-11 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-5 transition-colors duration-200 group-hover:bg-[#D0DBE8]">
//                   {item.icon}
//                 </div>
//                 <div className="w-8 h-0.5 bg-[#1B3A5C] rounded-full mb-4 transition-all duration-300 group-hover:w-12" />
//                 <h4
//                   className="text-[#0A0A0A] font-semibold text-base mb-2"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 >
//                   {item.title}
//                 </h4>
//                 <p className="text-[#8E8E93] text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Bottom CTA strip */}
//           <div
//             className={`mt-14 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 delay-500
//               ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             style={{
//               background: "linear-gradient(135deg, #1B3A5C 0%, #0D2440 100%)",
//             }}
//           >
//             <div>
//               <p
//                 className="text-white/50 text-xs uppercase mb-2"
//                 style={{ letterSpacing: "0.14em" }}
//               >
//                 12+ Years of Excellence
//               </p>
//               <h4
//                 className="text-white font-bold"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
//                 }}
//               >
//                 Ready to work with Odonova?
//               </h4>
//             </div>
//             <a
//               href="/contact"
//               className="group flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#1B3A5C] hover:bg-[#F2F2F7] transition-all duration-200 hover:gap-3"
//             >
//               Get in Touch
//               <LuArrowRight
//                 size={14}
//                 className="transition-transform duration-200 group-hover:translate-x-1"
//               />
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
