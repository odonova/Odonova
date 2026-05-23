import { useCallback, useRef, useState } from "react";
import {
  LuPhone,
  LuMapPin,
  LuArrowRight,
  LuCheckCheck,
  LuCodepen,
  LuSend,
  LuClock,
  LuLoader,
  LuTag,
  LuMegaphone,
} from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
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

// ─── Types ────────────────────────────────────────────────────────────────────

type Subject =
  | "software-project"
  | "data-annotation"
  | "social-media"
  | "general"
  | "support";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: Subject | "";
  message: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SUBJECT_OPTIONS: {
  value: Subject;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "software-project",
    label: "Software Project",
    icon: <LuCodepen size={15} />,
  },
  {
    value: "data-annotation",
    label: "Data Annotation",
    icon: <LuTag size={15} />,
  },
  {
    value: "social-media",
    label: "Social Media",
    icon: <LuMegaphone size={15} />,
  },
  {
    value: "general",
    label: "General Enquiry",
    icon: <MdOutlineEmail size={15} />,
  },
  { value: "support", label: "Support", icon: <LuPhone size={15} /> },
];

const CONTACT_CARDS = [
  {
    icon: <LuPhone size={20} />,
    label: "Phone",
    value: Assets.text.phone,
    sub: "Mon – Sat, 8am – 6pm",
    href: `tel:${Assets.text.phone}`,
    action: "Call Now",
  },
  {
    icon: <MdOutlineEmail size={20} />,
    label: "Email",
    value: Assets.text.email,
    sub: "We reply within 24 hours",
    href: `mailto:${Assets.text.email}`,
    action: "Send Email",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+234 000 000 0000",
    sub: "Quick responses via chat",
    href: "https://wa.me/234000000000",
    action: "Message Us",
  },
  {
    icon: <LuMapPin size={20} />,
    label: "Location",
    value: Assets.text.address,
    sub: "Visit our office",
    href: "https://maps.google.com",
    action: "Get Directions",
  },
];

const HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const SOCIALS = [
  {
    icon: <FaInstagram size={17} />,
    href: Assets.text.socials.instagram,
    label: "Instagram",
  },
  {
    icon: <FaLinkedinIn size={17} />,
    href: Assets.text.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={17} />,
    href: Assets.text.socials.twitter,
    label: "X / Twitter",
  },
  {
    icon: <FaWhatsapp size={17} />,
    href: "https://wa.me/234000000000",
    label: "WhatsApp",
  },
];

// ─── Section Label

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

// ─── Input Component

function InputField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#2E2E30]">
        {label}
        {required && <span className="text-[#1B3A5C] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">{error}</p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E5E5EA] bg-[#F7F7F8] text-sm text-[#0A0A0A] placeholder-[#C7C7CC] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] transition-all duration-200";

// ─── Contact Page ─────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [heroRef, heroInView] = useInView(0.05);
  const [cardsRef, cardsInView] = useInView();
  const [formRef, formInView] = useInView();
  const [infoRef, infoInView] = useInView();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.subject) newErrors.subject = "Please select a subject" as Subject;
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-white"
        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      >
        {/* ── Hero */}
        <section className="relative bg-[#0D1117] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 60%, #1B3A5C 0%, transparent 55%), radial-gradient(circle at 80% 30%, #2A5280 0%, transparent 50%)",
            }}
          />
          <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-50" />

          <div
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20"
          >
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <SectionLabel text="Contact Us" light />
              </div>
              <h1
                className={`text-white font-bold leading-[1.08] mb-5 transition-all duration-700 delay-100
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                Let's start a{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
                  }}
                >
                  conversation.
                </span>
              </h1>
              <p
                className={`text-white/50 text-base leading-relaxed max-w-lg transition-all duration-700 delay-200
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                Whether you need a software solution, data annotation services,
                or a social media strategy — our team is ready to help you grow.
              </p>

              {/* Service quick-links */}
              <div
                className={`flex flex-wrap gap-2 mt-7 transition-all duration-700 delay-300
                ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {[
                  { icon: <LuCodepen size={13} />, label: "Software Dev" },
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

        {/* ── Contact Cards ─────────────────────────────────────────────────── */}
        <section className="bg-[#F7F7F8] border-b border-[#E5E5EA]">
          <div
            ref={cardsRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CONTACT_CARDS.map((card, i) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group bg-white rounded-2xl border border-[#E5E5EA] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="w-11 h-11 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-4 group-hover:bg-[#D0DBE8] transition-colors duration-200">
                    {card.icon}
                  </div>
                  <p
                    className="text-[#8E8E93] text-xs font-medium uppercase tracking-wider mb-1"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {card.label}
                  </p>
                  <p className="text-[#0A0A0A] font-semibold text-sm leading-snug mb-1">
                    {card.value}
                  </p>
                  <p className="text-[#8E8E93] text-xs mb-4">{card.sub}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B3A5C] group-hover:gap-2.5 transition-all duration-200">
                    {card.action}
                    <LuArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + Info ───────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
              {/* ── Contact Form ──────────────────────────────────────────── */}
              <div
                ref={formRef}
                className={`transition-all duration-700 ${formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <SectionLabel text="Send a Message" />
                <h2
                  className="text-[#0A0A0A] font-bold leading-tight mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  }}
                >
                  We'd love to hear from you.
                </h2>
                <p className="text-[#8E8E93] text-sm mb-8">
                  Fill in the form below and we'll get back to you within 24
                  hours.
                </p>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA]">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-5">
                      <LuCheckCheck size={32} />
                    </div>
                    <h3
                      className="text-[#0A0A0A] font-bold text-xl mb-2"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-[#8E8E93] text-sm max-w-xs mb-6">
                      Thank you for reaching out. A member of our team will be
                      in touch with you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          fullName: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1B3A5C] hover:bg-[#2A5280] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Full Name"
                        required
                        error={errors.fullName}
                      >
                        <input
                          type="text"
                          placeholder="e.g. Emeka Johnson"
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                          className={`${inputClass} ${errors.fullName ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                        />
                      </InputField>
                      <InputField
                        label="Email Address"
                        required
                        error={errors.email}
                      >
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={`${inputClass} ${errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                        />
                      </InputField>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField label="Phone Number">
                        <input
                          type="tel"
                          placeholder="+234 000 000 0000"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className={inputClass}
                        />
                      </InputField>
                      <InputField
                        label="Subject"
                        required
                        error={errors.subject}
                      >
                        <select
                          value={form.subject}
                          onChange={(e) => update("subject", e.target.value)}
                          className={`${inputClass} ${errors.subject ? "border-red-300" : ""} ${!form.subject ? "text-[#C7C7CC]" : "text-[#0A0A0A]"}`}
                        >
                          <option value="" disabled>
                            Select a subject…
                          </option>
                          {SUBJECT_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </InputField>
                    </div>

                    {/* Subject pills */}
                    <div className="flex flex-wrap gap-2">
                      {SUBJECT_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => update("subject", opt.value)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150
                          ${
                            form.subject === opt.value
                              ? "bg-[#1B3A5C] text-white"
                              : "bg-[#F2F2F7] text-[#4A4A4F] hover:bg-[#D0DBE8] hover:text-[#1B3A5C]"
                          }`}
                        >
                          {opt.icon}
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    {/* Message */}
                    <InputField
                      label="Your Message"
                      required
                      error={errors.message}
                    >
                      <textarea
                        rows={5}
                        placeholder="Tell us how we can help you…"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputClass} resize-none ${errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                      />
                      <p
                        className={`text-xs mt-1 text-right ${form.message.length < 20 && form.message.length > 0 ? "text-red-400" : "text-[#C7C7CC]"}`}
                      >
                        {form.message.length} / 20 min characters
                      </p>
                    </InputField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <LuLoader size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <LuSend size={16} />
                          Send Message
                          <LuArrowRight size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#C7C7CC] text-center">
                      By submitting, you agree to our{" "}
                      <a
                        href="#privacy"
                        className="text-[#1B3A5C] hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . We never share your information.
                    </p>
                  </form>
                )}
              </div>

              {/* ── Side Info ─────────────────────────────────────────────── */}
              <div
                ref={infoRef}
                className={`space-y-6 transition-all duration-700 delay-150 ${infoInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                {/* Services we handle */}
                <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
                  <h3 className="text-[#0A0A0A] font-semibold text-sm mb-4">
                    What can we help with?
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: <LuCodepen size={15} />,
                        title: "Software Development",
                        desc: "Web, mobile & enterprise apps",
                      },
                      {
                        icon: <LuTag size={15} />,
                        title: "Data Annotation",
                        desc: "AI/ML labelling & training data",
                      },
                      {
                        icon: <LuMegaphone size={15} />,
                        title: "Social Media",
                        desc: "Brand growth & content strategy",
                      },
                    ].map((s) => (
                      <div
                        key={s.title}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E5EA]"
                      >
                        <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0">
                          {s.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0A0A0A]">
                            {s.title}
                          </p>
                          <p className="text-xs text-[#8E8E93]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office hours */}
                <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-9 h-9 bg-white rounded-lg border border-[#E5E5EA] flex items-center justify-center text-[#1B3A5C]">
                      <LuClock size={16} />
                    </div>
                    <h3 className="text-[#0A0A0A] font-semibold text-sm">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[#4A4A4F] text-sm">{h.day}</span>
                        <span
                          className={`text-sm font-semibold ${h.hours === "Closed" ? "text-[#B91C1C]" : "text-[#0A0A0A]"}`}
                        >
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick contact */}
                <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
                  <h3 className="text-[#0A0A0A] font-semibold text-sm mb-5">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${Assets.text.phone}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E5EA] hover:border-[#1B3A5C]/30 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] group-hover:bg-[#D0DBE8] transition-colors">
                        <LuPhone size={15} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">
                          Call
                        </p>
                        <p className="text-sm font-semibold text-[#0A0A0A]">
                          {Assets.text.phone}
                        </p>
                      </div>
                      <LuArrowRight
                        size={13}
                        className="ml-auto text-[#C7C7CC] group-hover:text-[#1B3A5C] transition-colors"
                      />
                    </a>
                    <a
                      href={`mailto:${Assets.text.email}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E5EA] hover:border-[#1B3A5C]/30 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] group-hover:bg-[#D0DBE8] transition-colors">
                        <MdOutlineEmail size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">
                          Email
                        </p>
                        <p className="text-sm font-semibold text-[#0A0A0A]">
                          {Assets.text.email}
                        </p>
                      </div>
                      <LuArrowRight
                        size={13}
                        className="ml-auto text-[#C7C7CC] group-hover:text-[#1B3A5C] transition-colors"
                      />
                    </a>
                  </div>
                </div>

                {/* Location map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-[#E5E5EA] relative">
                  <div className="w-full h-48 bg-[#E5E5EA] flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, #1B3A5C 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1B3A5C 0px, transparent 1px, transparent 40px)",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-[#1B3A5C] rounded-full flex items-center justify-center text-white shadow-lg">
                        <LuMapPin size={18} />
                      </div>
                      <p className="text-xs font-semibold text-[#1B3A5C]">
                        {Assets.text.address}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#1B3A5C] bg-white hover:bg-[#F2F2F7] transition-colors border-t border-[#E5E5EA]"
                  >
                    <LuMapPin size={14} />
                    Open in Google Maps
                    <LuArrowRight size={13} />
                  </a>
                </div>

                {/* Social links */}
                <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
                  <h3 className="text-[#0A0A0A] font-semibold text-sm mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center text-[#4A4A4F] hover:text-[#1B3A5C] hover:border-[#1B3A5C]/30 hover:bg-[#F2F2F7] transition-all duration-200"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
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
//   LuPhone,
//   LuMapPin,
//   LuArrowRight,
//   LuCheckCheck,
//   LuCar,
//   LuCodepen,
//   LuSend,
//   LuClock,
//   LuLoader,
// } from "react-icons/lu";
// import { MdOutlineEmail } from "react-icons/md";
// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import Assets from "../../../utils/constant/Assets";

// // ─── useInView ────────────────────────────────────────────────────────────────

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

// // ─── Types ────────────────────────────────────────────────────────────────────

// type Subject = "car-enquiry" | "software-project" | "general" | "support";

// interface FormState {
//   fullName: string;
//   email: string;
//   phone: string;
//   subject: Subject | "";
//   message: string;
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const SUBJECT_OPTIONS: {
//   value: Subject;
//   label: string;
//   icon: React.ReactNode;
// }[] = [
//   { value: "car-enquiry", label: "Car Enquiry", icon: <LuCar size={15} /> },
//   {
//     value: "software-project",
//     label: "Software Project",
//     icon: <LuCodepen size={15} />,
//   },
//   {
//     value: "general",
//     label: "General Enquiry",
//     icon: <MdOutlineEmail size={15} />,
//   },
//   {
//     value: "support",
//     label: "After-Sales Support",
//     icon: <LuPhone size={15} />,
//   },
// ];

// const CONTACT_CARDS = [
//   {
//     icon: <LuPhone size={20} />,
//     label: "Phone",
//     value: Assets.text.phone,
//     sub: "Mon – Sat, 8am – 6pm",
//     href: `tel:${Assets.text.phone}`,
//     action: "Call Now",
//   },
//   {
//     icon: <MdOutlineEmail size={20} />,
//     label: "Email",
//     value: Assets.text.email,
//     sub: "We reply within 24 hours",
//     href: `mailto:${Assets.text.email}`,
//     action: "Send Email",
//   },
//   {
//     icon: <FaWhatsapp size={20} />,
//     label: "WhatsApp",
//     value: "+234 000 000 0000",
//     sub: "Quick responses via chat",
//     href: "https://wa.me/234000000000",
//     action: "Message Us",
//   },
//   {
//     icon: <LuMapPin size={20} />,
//     label: "Location",
//     value: Assets.text.address,
//     sub: "Visit our showroom",
//     href: "https://maps.google.com",
//     action: "Get Directions",
//   },
// ];

// const HOURS = [
//   { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
//   { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
//   { day: "Sunday", hours: "Closed" },
// ];

// const SOCIALS = [
//   {
//     icon: <FaInstagram size={17} />,
//     href: Assets.text.socials.instagram,
//     label: "Instagram",
//   },
//   {
//     icon: <FaLinkedinIn size={17} />,
//     href: Assets.text.socials.linkedin,
//     label: "LinkedIn",
//   },
//   {
//     icon: <FaXTwitter size={17} />,
//     href: Assets.text.socials.twitter,
//     label: "X / Twitter",
//   },
//   {
//     icon: <FaWhatsapp size={17} />,
//     href: "https://wa.me/234000000000",
//     label: "WhatsApp",
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

// // ─── Input Component ──────────────────────────────────────────────────────────

// function InputField({
//   label,
//   required,
//   error,
//   children,
// }: {
//   label: string;
//   required?: boolean;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label className="text-sm font-medium text-[#2E2E30]">
//         {label}
//         {required && <span className="text-[#1B3A5C] ml-0.5">*</span>}
//       </label>
//       {children}
//       {error && (
//         <p className="text-xs text-red-500 flex items-center gap-1">{error}</p>
//       )}
//     </div>
//   );
// }

// const inputClass =
//   "w-full px-4 py-3 rounded-xl border border-[#E5E5EA] bg-[#F7F7F8] text-sm text-[#0A0A0A] placeholder-[#C7C7CC] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] transition-all duration-200";

// // ─── Contact Page ─────────────────────────────────────────────────────────────

// export default function ContactPage() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [cardsRef, cardsInView] = useInView();
//   const [formRef, formInView] = useInView();
//   const [infoRef, infoInView] = useInView();

//   const [form, setForm] = useState<FormState>({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [status, setStatus] = useState<"idle" | "submitting" | "success">(
//     "idle",
//   );

//   const update = (field: keyof FormState, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   const validate = (): boolean => {
//     const newErrors: Partial<FormState> = {};
//     if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
//     if (!form.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       newErrors.email = "Please enter a valid email";
//     if (!form.subject) newErrors.subject = "Please select a subject" as Subject;
//     if (!form.message.trim()) newErrors.message = "Message is required";
//     else if (form.message.trim().length < 20)
//       newErrors.message = "Message must be at least 20 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setStatus("submitting");
//     // Simulate API call
//     setTimeout(() => setStatus("success"), 2000);
//   };

//   return (
//     <div
//       className="bg-white"
//       style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
//     >
//       {/* ── Hero ─────────────────────────────────────────────────────────── */}
//       <section className="relative bg-[#0D1117] overflow-hidden">
//         <div
//           className="absolute inset-0 pointer-events-none opacity-25"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 25% 60%, #1B3A5C 0%, transparent 55%), radial-gradient(circle at 80% 30%, #2A5280 0%, transparent 50%)",
//           }}
//         />
//         {/* Decorative left line */}
//         <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#1B3A5C] to-transparent opacity-50" />

//         <div
//           ref={heroRef}
//           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20"
//         >
//           <div className="max-w-2xl">
//             <div
//               className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//             >
//               <SectionLabel text="Contact Us" light />
//             </div>
//             <h1
//               className={`text-white font-bold leading-[1.08] mb-5 transition-all duration-700 delay-100
//                 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//               style={{
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontSize: "clamp(2.5rem, 6vw, 4rem)",
//               }}
//             >
//               Let's start a{" "}
//               <span
//                 className="text-transparent bg-clip-text"
//                 style={{
//                   backgroundImage: "linear-gradient(90deg, #7EB8F7, #C5DFF8)",
//                 }}
//               >
//                 conversation.
//               </span>
//             </h1>
//             <p
//               className={`text-white/50 text-base leading-relaxed max-w-lg transition-all duration-700 delay-200
//                 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//             >
//               Whether you're interested in a vehicle, need a software solution,
//               or just want to say hello — our team is ready to help.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Contact Cards ─────────────────────────────────────────────────── */}
//       <section className="bg-[#F7F7F8] border-b border-[#E5E5EA]">
//         <div
//           ref={cardsRef}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {CONTACT_CARDS.map((card, i) => (
//               <a
//                 key={card.label}
//                 href={card.href}
//                 target={card.label === "Location" ? "_blank" : undefined}
//                 rel="noopener noreferrer"
//                 className={`group bg-white rounded-2xl border border-[#E5E5EA] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
//                   ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//                 style={{ transitionDelay: `${i * 90}ms` }}
//               >
//                 <div className="w-11 h-11 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#1B3A5C] mb-4 group-hover:bg-[#D0DBE8] transition-colors duration-200">
//                   {card.icon}
//                 </div>
//                 <p
//                   className="text-[#8E8E93] text-xs font-medium uppercase tracking-wider mb-1"
//                   style={{ letterSpacing: "0.1em" }}
//                 >
//                   {card.label}
//                 </p>
//                 <p className="text-[#0A0A0A] font-semibold text-sm leading-snug mb-1">
//                   {card.value}
//                 </p>
//                 <p className="text-[#8E8E93] text-xs mb-4">{card.sub}</p>
//                 <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B3A5C] group-hover:gap-2.5 transition-all duration-200">
//                   {card.action}
//                   <LuArrowRight
//                     size={12}
//                     className="transition-transform duration-200 group-hover:translate-x-0.5"
//                   />
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Form + Info ───────────────────────────────────────────────────── */}
//       <section className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
//             {/* ── Contact Form ──────────────────────────────────────────── */}
//             <div
//               ref={formRef}
//               className={`transition-all duration-700 ${formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//             >
//               <SectionLabel text="Send a Message" />
//               <h2
//                 className="text-[#0A0A0A] font-bold leading-tight mb-2"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
//                 }}
//               >
//                 We'd love to hear from you.
//               </h2>
//               <p className="text-[#8E8E93] text-sm mb-8">
//                 Fill in the form below and we'll get back to you within 24
//                 hours.
//               </p>

//               {status === "success" ? (
//                 /* Success state */
//                 <div className="flex flex-col items-center justify-center py-16 text-center bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA]">
//                   <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-5">
//                     <LuCheckCheck size={32} />
//                   </div>
//                   <h3
//                     className="text-[#0A0A0A] font-bold text-xl mb-2"
//                     style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                   >
//                     Message Sent!
//                   </h3>
//                   <p className="text-[#8E8E93] text-sm max-w-xs mb-6">
//                     Thank you for reaching out. A member of our team will be in
//                     touch with you shortly.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setStatus("idle");
//                       setForm({
//                         fullName: "",
//                         email: "",
//                         phone: "",
//                         subject: "",
//                         message: "",
//                       });
//                     }}
//                     className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1B3A5C] hover:bg-[#2A5280] transition-colors"
//                   >
//                     Send Another Message
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//                   {/* Name + Email */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <InputField
//                       label="Full Name"
//                       required
//                       error={errors.fullName}
//                     >
//                       <input
//                         type="text"
//                         placeholder="e.g. Emeka Johnson"
//                         value={form.fullName}
//                         onChange={(e) => update("fullName", e.target.value)}
//                         className={`${inputClass} ${errors.fullName ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
//                       />
//                     </InputField>

//                     <InputField
//                       label="Email Address"
//                       required
//                       error={errors.email}
//                     >
//                       <input
//                         type="email"
//                         placeholder="you@example.com"
//                         value={form.email}
//                         onChange={(e) => update("email", e.target.value)}
//                         className={`${inputClass} ${errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
//                       />
//                     </InputField>
//                   </div>

//                   {/* Phone + Subject */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <InputField label="Phone Number">
//                       <input
//                         type="tel"
//                         placeholder="+234 000 000 0000"
//                         value={form.phone}
//                         onChange={(e) => update("phone", e.target.value)}
//                         className={inputClass}
//                       />
//                     </InputField>

//                     <InputField label="Subject" required error={errors.subject}>
//                       <select
//                         value={form.subject}
//                         onChange={(e) => update("subject", e.target.value)}
//                         className={`${inputClass} ${errors.subject ? "border-red-300" : ""} ${!form.subject ? "text-[#C7C7CC]" : "text-[#0A0A0A]"}`}
//                       >
//                         <option value="" disabled>
//                           Select a subject…
//                         </option>
//                         {SUBJECT_OPTIONS.map((opt) => (
//                           <option key={opt.value} value={opt.value}>
//                             {opt.label}
//                           </option>
//                         ))}
//                       </select>
//                     </InputField>
//                   </div>

//                   {/* Subject pills */}
//                   <div className="flex flex-wrap gap-2">
//                     {SUBJECT_OPTIONS.map((opt) => (
//                       <button
//                         key={opt.value}
//                         type="button"
//                         onClick={() => update("subject", opt.value)}
//                         className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150
//                           ${
//                             form.subject === opt.value
//                               ? "bg-[#1B3A5C] text-white"
//                               : "bg-[#F2F2F7] text-[#4A4A4F] hover:bg-[#D0DBE8] hover:text-[#1B3A5C]"
//                           }`}
//                       >
//                         {opt.icon}
//                         {opt.label}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Message */}
//                   <InputField
//                     label="Your Message"
//                     required
//                     error={errors.message}
//                   >
//                     <textarea
//                       rows={5}
//                       placeholder="Tell us how we can help you…"
//                       value={form.message}
//                       onChange={(e) => update("message", e.target.value)}
//                       className={`${inputClass} resize-none ${errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
//                     />
//                     <p
//                       className={`text-xs mt-1 text-right ${form.message.length < 20 && form.message.length > 0 ? "text-red-400" : "text-[#C7C7CC]"}`}
//                     >
//                       {form.message.length} / 20 min characters
//                     </p>
//                   </InputField>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     disabled={status === "submitting"}
//                     className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,58,92,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
//                     style={{
//                       background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
//                     }}
//                   >
//                     {status === "submitting" ? (
//                       <>
//                         <LuLoader size={16} className="animate-spin" />
//                         Sending…
//                       </>
//                     ) : (
//                       <>
//                         <LuSend size={16} />
//                         Send Message
//                         <LuArrowRight size={14} />
//                       </>
//                     )}
//                   </button>

//                   <p className="text-xs text-[#C7C7CC] text-center">
//                     By submitting, you agree to our{" "}
//                     <a
//                       href="#privacy"
//                       className="text-[#1B3A5C] hover:underline"
//                     >
//                       Privacy Policy
//                     </a>
//                     . We never share your information.
//                   </p>
//                 </form>
//               )}
//             </div>

//             {/* ── Side Info ─────────────────────────────────────────────── */}
//             <div
//               ref={infoRef}
//               className={`space-y-6 transition-all duration-700 delay-150 ${infoInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//             >
//               {/* Office hours */}
//               <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
//                 <div className="flex items-center gap-2.5 mb-5">
//                   <div className="w-9 h-9 bg-white rounded-lg border border-[#E5E5EA] flex items-center justify-center text-[#1B3A5C]">
//                     <LuClock size={16} />
//                   </div>
//                   <h3 className="text-[#0A0A0A] font-semibold text-sm">
//                     Office Hours
//                   </h3>
//                 </div>
//                 <div className="space-y-3">
//                   {HOURS.map((h) => (
//                     <div
//                       key={h.day}
//                       className="flex items-center justify-between"
//                     >
//                       <span className="text-[#4A4A4F] text-sm">{h.day}</span>
//                       <span
//                         className={`text-sm font-semibold ${h.hours === "Closed" ? "text-[#B91C1C]" : "text-[#0A0A0A]"}`}
//                       >
//                         {h.hours}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick contact */}
//               <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
//                 <h3 className="text-[#0A0A0A] font-semibold text-sm mb-5">
//                   Quick Contact
//                 </h3>
//                 <div className="space-y-3">
//                   <a
//                     href={`tel:${Assets.text.phone}`}
//                     className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E5EA] hover:border-[#1B3A5C]/30 hover:shadow-sm transition-all duration-200 group"
//                   >
//                     <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] group-hover:bg-[#D0DBE8] transition-colors">
//                       <LuPhone size={15} />
//                     </div>
//                     <div>
//                       <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">
//                         Call
//                       </p>
//                       <p className="text-sm font-semibold text-[#0A0A0A]">
//                         {Assets.text.phone}
//                       </p>
//                     </div>
//                     <LuArrowRight
//                       size={13}
//                       className="ml-auto text-[#C7C7CC] group-hover:text-[#1B3A5C] transition-colors"
//                     />
//                   </a>
//                   <a
//                     href={`mailto:${Assets.text.email}`}
//                     className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E5EA] hover:border-[#1B3A5C]/30 hover:shadow-sm transition-all duration-200 group"
//                   >
//                     <div className="w-9 h-9 bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[#1B3A5C] group-hover:bg-[#D0DBE8] transition-colors">
//                       <MdOutlineEmail size={16} />
//                     </div>
//                     <div>
//                       <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">
//                         Email
//                       </p>
//                       <p className="text-sm font-semibold text-[#0A0A0A]">
//                         {Assets.text.email}
//                       </p>
//                     </div>
//                     <LuArrowRight
//                       size={13}
//                       className="ml-auto text-[#C7C7CC] group-hover:text-[#1B3A5C] transition-colors"
//                     />
//                   </a>
//                 </div>
//               </div>

//               {/* Location map placeholder */}
//               <div className="rounded-2xl overflow-hidden border border-[#E5E5EA] relative">
//                 <div className="w-full h-48 bg-[#E5E5EA] flex items-center justify-center relative overflow-hidden">
//                   {/* Stylised map placeholder */}
//                   <div
//                     className="absolute inset-0 opacity-20"
//                     style={{
//                       backgroundImage:
//                         "repeating-linear-gradient(0deg, #1B3A5C 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1B3A5C 0px, transparent 1px, transparent 40px)",
//                     }}
//                   />
//                   <div className="relative z-10 flex flex-col items-center gap-2 text-[#1B3A5C]">
//                     <div className="w-10 h-10 bg-[#1B3A5C] rounded-full flex items-center justify-center text-white shadow-lg">
//                       <LuMapPin size={18} />
//                     </div>
//                     <p className="text-xs font-semibold text-[#1B3A5C]">
//                       {Assets.text.address}
//                     </p>
//                   </div>
//                 </div>
//                 <a
//                   href="https://maps.google.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#1B3A5C] bg-white hover:bg-[#F2F2F7] transition-colors border-t border-[#E5E5EA]"
//                 >
//                   <LuMapPin size={14} />
//                   Open in Google Maps
//                   <LuArrowRight size={13} />
//                 </a>
//               </div>

//               {/* Social links */}
//               <div className="bg-[#F7F7F8] rounded-2xl border border-[#E5E5EA] p-6">
//                 <h3 className="text-[#0A0A0A] font-semibold text-sm mb-4">
//                   Follow Us
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   {SOCIALS.map((s) => (
//                     <a
//                       key={s.label}
//                       href={s.href}
//                       aria-label={s.label}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center text-[#4A4A4F] hover:text-[#1B3A5C] hover:border-[#1B3A5C]/30 hover:bg-[#F2F2F7] transition-all duration-200"
//                     >
//                       {s.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
