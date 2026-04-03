// import companyLogo from "../../../assets/hero.png";

// export const Assets = {
//   images: {
//     companyLogo,
//   },
//   icons: {},
//   colors: {},
//   text: {},
// };

// ─────────────────────────────────────────────
//  Odonova — Centralized Asset Registry
//  All static assets, design tokens, and brand
//  constants are imported and exported here.
// ─────────────────────────────────────────────

// ── Images
import companyLogo from "../../../assets/image/odonova. -logo-transparent.png";
import companyLogoWhite from "../../../assets/hero.png";
import companyLogoMark from "../../../assets/hero.png";
import heroBg from "../../../assets/image/hero-new-bg.jpg";
import aboutBanner from "../../../assets/image/luxery-car-road.jpg";

// Car category thumbnails
// import carSedanThumb from "../assets/images/cars/sedan.jpg";
// import carSuvThumb from "../assets/images/cars/suv.jpg";
// import carTruckThumb from "../assets/images/cars/truck.jpg";
import carSedanThumb from "../../../assets/hero.png";
import carSuvThumb from "../../../assets/image/suv-car.jpg";
import carTruckThumb from "../../../assets/hero.png";

// ── Icons (react-icons)
// Usage: <Assets.icons.Car size={20} color={Assets.colors.brand.slate} />
import {
  LuCar,
  //   LuCodepen,
  LuShield,
  LuHeadphones,
  LuChevronRight,
  LuMenu,
  LuX,
} from "react-icons/lu";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhoneFlip,
} from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
  //   TbBrandCarRental,
  TbLayoutDashboard,
  TbArrowRight,
  TbStar,
} from "react-icons/tb";

//  Design Tokens

export const Colors = {
  // ── Brand Neutrals
  brand: {
    black: "#0A0A0A",
    charcoal: "#1C1C1E",
    graphite: "#2E2E30",
    slate: "#4A4A4F",
    midGray: "#8E8E93",
    silver: "#C7C7CC",
    offWhite: "#F2F2F7",
    white: "#FFFFFF",
  },

  // ── Brand Accent
  // A single refined accent — deep steel blue.
  // Used sparingly for CTAs and highlights.
  accent: {
    DEFAULT: "#1B3A5C", // primary accent
    light: "#2A5280", // hover / active
    muted: "#D0DBE8", // tinted backgrounds
    contrast: "#FFFFFF", // text on accent bg
  },

  // ── Semantic / Status
  status: {
    success: "#2E7D52",
    warning: "#B45309",
    error: "#B91C1C",
    info: "#1B3A5C",
  },

  // ── Surface Layers
  surface: {
    base: "#FFFFFF",
    raised: "#F7F7F8",
    overlay: "#EFEFEF",
    dark: "#1C1C1E",
    darkRaised: "#2C2C2E",
  },

  // ── Text
  text: {
    primary: "#0A0A0A",
    secondary: "#4A4A4F",
    tertiary: "#8E8E93",
    inverted: "#FFFFFF",
    invertedMuted: "rgba(255,255,255,0.65)",
    link: "#1B3A5C",
    linkHover: "#2A5280",
  },

  // ── Borders
  border: {
    light: "#E5E5EA",
    DEFAULT: "#C7C7CC",
    dark: "#8E8E93",
  },
} as const;

export const Typography = {
  // ── Font Families
  fonts: {
    heading: "'Playfair Display', Georgia, serif", // authoritative / premium
    body: "'DM Sans', 'Helvetica Neue', sans-serif", // clean, readable
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },

  // ── Font Sizes (rem)
  sizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", // 18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "1.875rem", // 30px
    "3xl": "2.25rem", // 36px
    "4xl": "3rem", // 48px
    "5xl": "3.75rem", // 60px
  },

  // ── Font Weights
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // ── Line Heights
  leading: {
    tight: "1.2",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

export const Spacing = {
  px: "1px",
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

export const Radii = {
  none: "0px",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const Shadows = {
  sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
  DEFAULT: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
  md: "0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)",
  lg: "0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)",
  inner: "inset 0 2px 4px rgba(0,0,0,0.06)",
} as const;

//  Brand Text / Copy Constants

export const BrandText = {
  companyName: "Odonova",
  companyNameFull: "Odonova Ltd.",
  tagline: "Drive Forward. Build Smarter.",
  taglineSub: "Premium vehicles and bespoke software solutions.",
  address: "Calabar, Cross Rivers State, Nigeria",
  email: "hello@odonova.com",
  phone: "+234 000 000 0000",
  socials: {
    instagram: "https://instagram.com/odonova",
    linkedin: "https://linkedin.com/company/odonova",
    twitter: "https://twitter.com/odonova",
  },
  copyright: `© ${new Date().getFullYear()} Odonova Ltd. All rights reserved.`,

  // ── Services
  services: {
    cars: {
      title: "Car Sales",
      description:
        "Curated selection of premium and certified pre-owned vehicles, backed by expert guidance.",
    },
    software: {
      title: "Software Development",
      description:
        "Tailored digital products — from enterprise platforms to customer-facing applications.",
    },
  },
} as const;

//  Master Assets Export

export const Assets = {
  // ── Images
  images: {
    companyLogo,
    companyLogoWhite,
    companyLogoMark,
    heroBg,
    aboutBanner,
    cars: {
      sedan: carSedanThumb,
      suv: carSuvThumb,
      truck: carTruckThumb,
    },
  },

  // ── Icons
  // All icons are react-icons components.
  // Pass size, color, className props directly.
  // e.g. <Assets.icons.Car size={24} />
  icons: {
    // ── Navigation
    Menu: LuMenu,
    Close: LuX,
    ChevronRight: LuChevronRight,
    ArrowRight: TbArrowRight,
    Dashboard: TbLayoutDashboard,

    // ── Services / Features
    Car: LuCar,
    // CarRental: TbBrandCarRental,
    // Code: LuCodepen,
    Shield: LuShield,
    Support: LuHeadphones,
    Star: TbStar,

    // ── Contact
    Email: MdOutlineEmail,
    Phone: FaPhoneFlip,
    Location: MdOutlineLocationOn,

    // ── Socials
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    Twitter: FaXTwitter,
  },

  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  radii: Radii,
  shadows: Shadows,
  text: BrandText,
} as const;

export default Assets;
