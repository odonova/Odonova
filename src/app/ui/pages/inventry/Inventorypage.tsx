import { useState, useMemo } from "react";
import {
  LuCar,
  LuSearch,
  LuSlidersHorizontal,
  LuX,
  LuArrowRight,
  LuFuel,
  LuGauge,
  LuCalendar,
  LuChevronDown,
  LuArrowUpDown,
  LuPhone,
} from "react-icons/lu";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import Assets from "../../../utils/constant/Assets";
import Navbar from "../../components/navbar/Navbar";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "All" | "Sedan" | "SUV" | "Truck" | "Van";
type Condition = "New" | "Used";
type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "year-desc"
  | "mileage-asc";

interface Car {
  id: number;
  name: string;
  brand: string;
  category: Exclude<Category, "All">;
  condition: Condition;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: "Automatic" | "Manual";
  color: string;
  image: string;
  featured?: boolean;
  description: string;
  specs: { label: string; value: string }[];
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const CARS: Car[] = [
  {
    id: 1,
    name: "Camry XSE V6",
    brand: "Toyota",
    category: "Sedan",
    condition: "New",
    year: 2024,
    price: 18500000,
    mileage: 0,
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Pearl White",
    image: Assets.images.cars.sedan,
    featured: true,
    description:
      "The Toyota Camry XSE V6 delivers an exhilarating drive with its powerful V6 engine, sport-tuned suspension, and premium interior. A perfect blend of performance and comfort.",
    specs: [
      { label: "Engine", value: "3.5L V6" },
      { label: "Horsepower", value: "301 hp" },
      { label: "Drive", value: "FWD" },
      { label: "Seats", value: "5" },
    ],
  },
  {
    id: 2,
    name: "Accord Sport",
    brand: "Honda",
    category: "Sedan",
    condition: "Used",
    year: 2022,
    price: 12800000,
    mileage: 32000,
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Sonic Gray",
    image: Assets.images.cars.sedan,
    description:
      "A certified pre-owned Honda Accord Sport with low mileage and full service history. Sporty design meets everyday practicality.",
    specs: [
      { label: "Engine", value: "1.5L Turbo" },
      { label: "Horsepower", value: "192 hp" },
      { label: "Drive", value: "FWD" },
      { label: "Seats", value: "5" },
    ],
  },
  {
    id: 3,
    name: "Land Cruiser 300",
    brand: "Toyota",
    category: "SUV",
    condition: "New",
    year: 2024,
    price: 54000000,
    mileage: 0,
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Midnight Black",
    image: Assets.images.cars.suv,
    featured: true,
    description:
      "The legendary Toyota Land Cruiser 300 — built for any terrain, refined for every road. Commanding presence with unmatched off-road capability and luxury interior.",
    specs: [
      { label: "Engine", value: "3.3L Twin-Turbo V6" },
      { label: "Horsepower", value: "305 hp" },
      { label: "Drive", value: "4WD" },
      { label: "Seats", value: "7" },
    ],
  },
  {
    id: 4,
    name: "Prado TX-L",
    brand: "Toyota",
    category: "SUV",
    condition: "Used",
    year: 2021,
    price: 29500000,
    mileage: 48000,
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Silver Metallic",
    image: Assets.images.cars.suv,
    description:
      "A well-maintained Toyota Prado TX-L with full service history. Spacious, capable, and reliable — ideal for city and off-road use.",
    specs: [
      { label: "Engine", value: "2.8L Diesel" },
      { label: "Horsepower", value: "204 hp" },
      { label: "Drive", value: "4WD" },
      { label: "Seats", value: "7" },
    ],
  },
  {
    id: 5,
    name: "Hilux GR-S",
    brand: "Toyota",
    category: "Truck",
    condition: "New",
    year: 2024,
    price: 32000000,
    mileage: 0,
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Reddish Brown",
    image: Assets.images.cars.truck,
    featured: true,
    description:
      "The Toyota Hilux GR-S is the sport variant of Africa's most trusted pickup. Aggressive styling, enhanced suspension, and unbeatable durability.",
    specs: [
      { label: "Engine", value: "2.8L Diesel" },
      { label: "Horsepower", value: "201 hp" },
      { label: "Drive", value: "4WD" },
      { label: "Payload", value: "1,000 kg" },
    ],
  },
  {
    id: 6,
    name: "Ranger Wildtrak",
    brand: "Ford",
    category: "Truck",
    condition: "Used",
    year: 2022,
    price: 21000000,
    mileage: 41000,
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Chrome Blue",
    image: Assets.images.cars.truck,
    description:
      "The Ford Ranger Wildtrak combines rugged capability with premium features. Well-serviced with low mileage — a work and adventure partner.",
    specs: [
      { label: "Engine", value: "2.0L Bi-Turbo" },
      { label: "Horsepower", value: "213 hp" },
      { label: "Drive", value: "4WD" },
      { label: "Payload", value: "900 kg" },
    ],
  },
  {
    id: 7,
    name: "Sienna XSE",
    brand: "Toyota",
    category: "Van",
    condition: "New",
    year: 2024,
    price: 28000000,
    mileage: 0,
    fuel: "Hybrid",
    transmission: "Automatic",
    color: "Blueprint",
    image: Assets.images.cars.sedan,
    description:
      "The Toyota Sienna XSE Hybrid offers segment-best fuel efficiency combined with a premium, spacious cabin. The ultimate family van.",
    specs: [
      { label: "Engine", value: "2.5L Hybrid" },
      { label: "Horsepower", value: "245 hp" },
      { label: "Drive", value: "AWD" },
      { label: "Seats", value: "8" },
    ],
  },
  {
    id: 8,
    name: "Staria Premium",
    brand: "Hyundai",
    category: "Van",
    condition: "Used",
    year: 2022,
    price: 19500000,
    mileage: 27000,
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Abyss Black",
    image: Assets.images.cars.sedan,
    description:
      "The Hyundai Staria Premium is a futuristic, lounge-like van that redefines passenger transport. Low mileage, immaculate condition.",
    specs: [
      { label: "Engine", value: "2.2L CRDi" },
      { label: "Horsepower", value: "177 hp" },
      { label: "Drive", value: "2WD" },
      { label: "Seats", value: "9" },
    ],
  },
];

const CATEGORIES: Category[] = ["All", "Sedan", "SUV", "Truck", "Van"];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "year-desc", label: "Newest First" },
  { value: "mileage-asc", label: "Lowest Mileage" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatPrice = (n: number) => "₦" + n.toLocaleString("en-NG");

const formatMileage = (n: number) =>
  n === 0 ? "0 km" : n.toLocaleString("en-NG") + " km";

// ─── Car Card ─────────────────────────────────────────────────────────────────

function CarCard({ car, onClick }: { car: Car; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl border border-[#E5E5EA] overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F2F7]">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Condition badge */}
        <div
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold
          ${
            car.condition === "New"
              ? "bg-[#1B3A5C] text-white"
              : "bg-white text-[#1B3A5C] border border-[#1B3A5C]"
          }`}
        >
          {car.condition}
        </div>

        {/* Featured badge */}
        {car.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white">
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1B3A5C]/0 group-hover:bg-[#1B3A5C]/10 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white text-[#1B3A5C] text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
            View Details <LuArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <p className="text-[#8E8E93] text-xs font-medium mb-0.5">
              {car.brand}
            </p>
            <h3
              className="text-[#0A0A0A] font-bold text-base leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {car.name}
            </h3>
          </div>
          <span className="flex-shrink-0 text-xs font-medium text-[#4A4A4F] bg-[#F2F2F7] px-2.5 py-1 rounded-full">
            {car.category}
          </span>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
            <LuCalendar size={12} /> {car.year}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
            <LuGauge size={12} /> {formatMileage(car.mileage)}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
            <LuFuel size={12} /> {car.fuel}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
            {car.transmission === "Automatic" ? (
              <TbAutomaticGearbox size={13} />
            ) : (
              <TbManualGearbox size={13} />
            )}
            {car.transmission}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F2F2F7]">
          <div>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider mb-0.5">
              Price
            </p>
            <p
              className="text-[#1B3A5C] font-bold text-lg leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {formatPrice(car.price)}
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1B3A5C] hover:bg-[#2A5280] px-4 py-2 rounded-lg transition-colors duration-200">
            Details <LuArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────

function CarModal({ car, onClose }: { car: Car; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-[#F2F2F7] rounded-full flex items-center justify-center text-[#4A4A4F] transition-colors duration-150 shadow-sm border border-[#E5E5EA]"
        >
          <LuX size={17} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] bg-[#F2F2F7] overflow-hidden rounded-t-2xl">
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold
              ${car.condition === "New" ? "bg-[#1B3A5C] text-white" : "bg-white text-[#1B3A5C]"}`}
            >
              {car.condition}
            </span>
            {car.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[#8E8E93] text-sm font-medium mb-1">
                {car.brand} · {car.category}
              </p>
              <h2
                className="text-[#0A0A0A] font-bold leading-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                {car.name}
              </h2>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider mb-1">
                Asking Price
              </p>
              <p
                className="text-[#1B3A5C] font-bold"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                }}
              >
                {formatPrice(car.price)}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#4A4A4F] text-sm leading-relaxed mb-6 pb-6 border-b border-[#F2F2F7]">
            {car.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 pb-6 border-b border-[#F2F2F7]">
            {[
              {
                icon: <LuCalendar size={15} />,
                label: "Year",
                value: car.year.toString(),
              },
              {
                icon: <LuGauge size={15} />,
                label: "Mileage",
                value: formatMileage(car.mileage),
              },
              { icon: <LuFuel size={15} />, label: "Fuel", value: car.fuel },
              {
                icon:
                  car.transmission === "Automatic" ? (
                    <TbAutomaticGearbox size={16} />
                  ) : (
                    <TbManualGearbox size={16} />
                  ),
                label: "Gearbox",
                value: car.transmission,
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#F7F7F8] rounded-xl p-4">
                <div className="text-[#1B3A5C] mb-2">{item.icon}</div>
                <p className="text-[#8E8E93] text-[10px] uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="text-[#0A0A0A] text-sm font-semibold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Specs */}
          <div className="mb-8">
            <h4 className="text-[#0A0A0A] font-semibold text-sm mb-3">
              Specifications
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {car.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between px-4 py-2.5 bg-[#F7F7F8] rounded-lg"
                >
                  <span className="text-xs text-[#8E8E93]">{s.label}</span>
                  <span className="text-xs font-semibold text-[#0A0A0A]">
                    {s.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F7F8] rounded-lg">
                <span className="text-xs text-[#8E8E93]">Color</span>
                <span className="text-xs font-semibold text-[#0A0A0A]">
                  {car.color}
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${Assets.text.phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1B3A5C, #2A5280)",
              }}
            >
              <LuPhone size={15} />
              Call to Enquire
            </a>
            <a
              href={`mailto:${Assets.text.email}?subject=Enquiry: ${car.year} ${car.brand} ${car.name}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#1B3A5C] border-2 border-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-all duration-200"
            >
              <MdOutlineEmail size={16} />
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Inventory Page ───────────────────────────────────────────────────────────

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeCondition, setActiveCondition] = useState<Condition | "All">(
    "All",
  );
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  // Filtered + sorted cars
  const filtered = useMemo(() => {
    let result = [...CARS];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.fuel.toLowerCase().includes(q),
      );
    }

    if (activeCategory !== "All") {
      result = result.filter((c) => c.category === activeCategory);
    }

    if (activeCondition !== "All") {
      result = result.filter((c) => c.condition === activeCondition);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [search, activeCategory, activeCondition, sortBy]);

  const activeSort = SORT_OPTIONS.find((s) => s.value === sortBy)!;

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen bg-[#F7F7F8]"
        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      >
        {/* ── Page Header ──────────────────────────────────────────────────── */}
        <div className="bg-[#0D1117] pt-32 pb-14 relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #1B3A5C 0%, transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p
              className="text-white/40 text-xs tracking-[0.18em] uppercase mb-3"
              style={{ letterSpacing: "0.18em" }}
            >
              Odonova · Car Sales
            </p>
            <h1
              className="text-white font-bold leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
              }}
            >
              Vehicle Inventory
            </h1>
            <p className="text-white/50 text-sm max-w-lg">
              Browse our curated selection of premium new and certified
              pre-owned vehicles. Every car is inspected and ready to drive.
            </p>
          </div>
        </div>

        {/* ── Controls Bar ─────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-[#E5E5EA] sticky top-[72px] z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <LuSearch
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E8E93]"
                />
                <input
                  type="text"
                  placeholder="Search by brand, model, fuel type…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E5EA] bg-[#F7F7F8] text-sm text-[#0A0A0A] placeholder-[#C7C7CC] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8E8E93] hover:text-[#0A0A0A]"
                  >
                    <LuX size={14} />
                  </button>
                )}
              </div>

              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors
                ${
                  filterOpen
                    ? "bg-[#1B3A5C] text-white border-[#1B3A5C]"
                    : "bg-[#F7F7F8] text-[#2E2E30] border-[#E5E5EA]"
                }`}
              >
                <LuSlidersHorizontal size={15} />
                Filters
              </button>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5E5EA] bg-[#F7F7F8] text-sm font-medium text-[#2E2E30] hover:border-[#1B3A5C] transition-colors whitespace-nowrap"
                >
                  <LuArrowUpDown size={14} className="text-[#8E8E93]" />
                  {activeSort.label}
                  <LuChevronDown
                    size={13}
                    className={`text-[#8E8E93] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-[calc(100%+6px)] w-52 bg-white border border-[#E5E5EA] rounded-xl shadow-xl py-1.5 z-50">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                        ${
                          sortBy === opt.value
                            ? "text-[#1B3A5C] font-semibold bg-[#F2F2F7]"
                            : "text-[#2E2E30] hover:bg-[#F7F7F8]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Filter pills — always visible on desktop, toggleable on mobile */}
            <div
              className={`${filterOpen ? "flex" : "hidden"} sm:flex flex-wrap gap-2 mt-3`}
            >
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                    ${
                      activeCategory === cat
                        ? "bg-[#1B3A5C] text-white"
                        : "bg-[#F2F2F7] text-[#4A4A4F] hover:bg-[#D0DBE8] hover:text-[#1B3A5C]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px bg-[#E5E5EA] mx-1 self-stretch" />

              {/* Condition filters */}
              {(["All", "New", "Used"] as const).map((cond) => (
                <button
                  key={cond}
                  onClick={() => setActiveCondition(cond)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                  ${
                    activeCondition === cond
                      ? "bg-[#1B3A5C] text-white"
                      : "bg-[#F2F2F7] text-[#4A4A4F] hover:bg-[#D0DBE8] hover:text-[#1B3A5C]"
                  }`}
                >
                  {cond === "All" ? "All Conditions" : cond}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Results ───────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#8E8E93]">
              <span className="font-semibold text-[#0A0A0A]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "vehicle" : "vehicles"} found
            </p>
            {(activeCategory !== "All" ||
              activeCondition !== "All" ||
              search) && (
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveCondition("All");
                  setSortBy("default");
                }}
                className="text-xs text-[#1B3A5C] font-semibold hover:underline flex items-center gap-1"
              >
                <LuX size={12} /> Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onClick={() => setSelectedCar(car)}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-2xl flex items-center justify-center text-[#C7C7CC] mb-4">
                <LuCar size={28} />
              </div>
              <h3
                className="text-[#0A0A0A] font-bold text-lg mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                No vehicles found
              </h3>
              <p className="text-[#8E8E93] text-sm max-w-xs">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveCondition("All");
                }}
                className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1B3A5C] hover:bg-[#2A5280] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* ── Detail Modal ─────────────────────────────────────────────────── */}
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}

        {/* Close sort dropdown on outside click */}
        {sortOpen && (
          <div
            className="fixed inset-0 z-30"
            onClick={() => setSortOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
