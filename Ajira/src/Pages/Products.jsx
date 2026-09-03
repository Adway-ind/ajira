import { useEffect, useState } from "react";
import { ArrowRight, Check, Leaf, ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import {
    Bike,
    FlaskConical,
    PackageCheck,
    ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import cardamomImage from "../assets/image/products/img-2.png";
import pepperImage from "../assets/image/products/img-3.png";
import turmericImage from "../assets/image/products/img-4.png";
import gingerImage from "../assets/image/products/img-1.png";
import productsBackground from "../assets/image/bg/img-6.png";
import SourceCTA from "../components/SourceCTA";


const products = [
    {
        name: "Green Cardamom",
        category: "Whole spices",
        description: "Bold, aromatic pods sourced from the cardamom hills of Idukki.",
        image: cardamomImage,
        formats: ["Whole", "Powder"],
        grade: "Grade A1",
        origin: "Idukki, Kerala",
        idealFor: "Retail, beverage, and extract applications",
    },
    {
        name: "Malabar Black Pepper",
        category: "Whole spices",
        description: "High-piperine pepper with the characteristic warmth of the Malabar coast.",
        image: pepperImage,
        formats: ["550 GL", "600 GL"],
        grade: "TGSEB",
        origin: "Malabar coast, Kerala",
        idealFor: "Seasoning, sauces, and food processing",
    },
    {
        name: "Polished Turmeric",
        category: "Whole spices",
        description: "Carefully processed roots with a rich colour and curcumin above 3.5%.",
        image: turmericImage,
        formats: ["Finger", "Bulb"],
        grade: "Export grade",
        origin: "South India",
        idealFor: "Colour, seasoning, and oleoresin extraction",
    },
    {
        name: "Dried Ginger",
        category: "Whole spices",
        description: "Unbleached and sun-dried to retain natural oleoresins and flavour.",
        image: gingerImage,
        formats: ["Sliced", "Kochi"],
        grade: "Natural",
        origin: "Kochi, Kerala",
        idealFor: "Tea, bakery, and foodservice blends",
    },
];
const benefits = [
    {
        number: "01",
        icon: Bike,
        title: "Direct Sourcing",
        description:
            "Sourced directly from our trusted farmer clusters across South India.",
    },
    {
        number: "02",
        icon: FlaskConical,
        title: "Quality Tested",
        description:
            "Rigorous quality and laboratory testing for purity and safety.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Export Ready",
        description:
            "Prepared to meet international food safety and export standards.",
    },
    {
        number: "04",
        icon: PackageCheck,
        title: "Custom Packaging",
        description:
            "Flexible bulk and customized packaging solutions for global brands.",
    },
];

const filters = ["All products", "Whole spices"];

export default function Products() {
    const [activeFilter, setActiveFilter] = useState("All products");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const visibleProducts = activeFilter === "All products"
        ? products
        : products.filter((product) => product.category === activeFilter);

    useEffect(() => {
        if (!selectedProduct) return undefined;
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setSelectedProduct(null);
        };
        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [selectedProduct]);

    return (
        <main className="bg-[#f7f8f3] text-[#173b2b]">
            <section
                className="relative overflow-hidden border-b border-[#dce5d8] bg-[#193b29] bg-cover bg-center"
                style={{ backgroundImage: `url(${productsBackground})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#102e20]/95 via-[#173b2b]/75 to-[#173b2b]/25" />
                <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 text-white sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-12 lg:py-24">
                    <div>
                        <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3c36c]">
                            <Leaf size={14} /> The Ajira catalogue
                        </p>
                        <h1 className="mt-5 max-w-[680px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[58px]">
                            Spices with a clear point of origin.
                        </h1>
                        <p className="mt-6 max-w-[570px] text-[14px] leading-[1.8] text-white/80 sm:text-[15px]">
                            Explore export-ready Indian spices, sourced directly and prepared for food processors, extractors, and retail brands around the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:max-w-[430px] lg:ml-auto">
                        {[
                            ["01", "Direct source"],
                            ["02", "Verified lots"],
                            ["03", "Flexible formats"],
                            ["04", "Global delivery"],
                        ].map(([number, label]) => (
                            <div key={number} className="border-t border-white/35 pt-3">
                                <span className="text-[10px] font-bold tracking-[0.15em] text-[#f3c36c]">{number}</span>
                                <p className="mt-2 text-[12px] font-semibold text-white/90">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
                <div className="flex flex-col gap-6 border-b border-[#dce5d8] pb-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c2771a]">Browse the range</p>
                        <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px]">Built for serious supply.</h2>
                    </div>
                    <div className="flex items-center gap-2" aria-label="Product filters">
                        <SlidersHorizontal size={15} className="mr-1 text-[#6a8170]" />
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-3.5 py-2 text-[10px] font-semibold transition-colors ${activeFilter === filter ? "border-[#0b6b3e] bg-[#0b6b3e] text-white" : "border-[#cbd9ca] bg-white text-[#496253] hover:border-[#0b6b3e]"}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleProducts.map((product) => (
                        <article
                            key={product.name}
                            role="button"
                            tabIndex="0"
                            onClick={() => setSelectedProduct(product)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") setSelectedProduct(product);
                            }}
                            aria-label={`View details for ${product.name}`}
                            className="group cursor-pointer overflow-hidden rounded-[16px] bg-white text-left shadow-[0_8px_25px_rgba(24,60,39,0.06)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0b6b3e] focus:ring-offset-2"
                        >
                            <div className="relative h-[240px] overflow-hidden bg-[#e6ece2]">
                                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#0b6b3e] shadow-sm">{product.grade}</span>
                            </div>
                            <div className="p-5">
                                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#c2771a]">{product.category}</p>
                                <h3 className="mt-2 text-[17px] font-semibold text-[#173b2b]">{product.name}</h3>
                                <p className="mt-3 min-h-[62px] text-[12px] leading-[1.6] text-[#5b6d62]">{product.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {product.formats.map((format) => <span key={format} className="rounded-[4px] bg-[#edf3ea] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#486451]">{format}</span>)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="relative overflow-hidden bg-[#f7f9f4] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                {/* Decorative elements */}
                <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#659545]/[0.05]" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#d9a900]/[0.05]" />

                <div className="relative mx-auto max-w-[1180px]">

                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center">

                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#659545]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#659545]">
                                Why Choose Us
                            </span>

                            <span className="h-px w-8 bg-[#659545]" />
                        </div>

                        <h2 className="text-3xl font-semibold tracking-tight text-[#142b46] sm:text-4xl lg:text-[42px]">
                            Why Our{" "}
                            <span className="text-[#08752a]">
                                Products?
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#708092]">
                            We redefine the spice supply chain by combining responsible
                            sourcing, rigorous quality control and export-ready solutions.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className="group relative overflow-hidden rounded-[22px] border border-[#dfe6da] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cfaf] hover:shadow-[0_18px_45px_rgba(20,43,70,0.08)]"
                                >

                                    {/* Number */}
                                    <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-[#142b46]/10">
                                        {item.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf6e7] text-[#08752a] transition-all duration-300 group-hover:bg-[#08752a] group-hover:text-white">
                                        <Icon size={21} strokeWidth={1.8} />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-6">
                                        <h3 className="text-[17px] font-semibold text-[#142b46]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#718092]">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="h-px w-8 bg-[#dfe6da] transition-all duration-300 group-hover:w-14 group-hover:bg-[#659545]" />

                                        <ArrowUpRight
                                            size={16}
                                            className="text-[#b2beb0] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#08752a]"
                                        />
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                    {/* Bottom statement */}
                    <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center">
                        <span className="hidden h-px w-10 bg-[#dfe6da] sm:block" />

                        <p className="text-sm font-medium text-[#526476]">
                            From{" "}
                            <span className="text-[#08752a]">
                                farm to global market
                            </span>
                            , quality remains at the heart of everything we do.
                        </p>

                        <span className="hidden h-px w-10 bg-[#dfe6da] sm:block" />
                    </div>

                </div>
            </section>

            <section className="border-y border-[#dce5d8] bg-white">
                <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12 lg:py-16">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c2771a]">Made to specification</p>
                        <h2 className="mt-3 max-w-[430px] text-[29px] font-semibold leading-tight tracking-[-0.03em]">Your requirements belong in the conversation.</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {["Custom pack sizes and formats", "Pre-shipment quality checks", "Lot-level documentation", "Reliable export coordination"].map((point) => (
                            <div key={point} className="flex items-center gap-3 border-t border-[#e3eae1] pt-4 text-[12px] font-medium text-[#4f635a]"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f0e3] text-[#0b6b3e]"><Check size={13} /></span>{point}</div>
                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <SourceCTA />
                </div>
            </section>

            {selectedProduct && (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-[#102e20]/65 p-4 backdrop-blur-sm sm:p-8"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setSelectedProduct(null);
                    }}
                    role="presentation"
                >
                    <div className="relative grid w-full max-w-[850px] overflow-hidden rounded-[20px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:grid-cols-2" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
                        <button type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#173b2b] shadow-sm transition-colors hover:bg-[#f3c36c]"><X size={18} /></button>
                        <div className="h-[280px] sm:h-full sm:min-h-[480px]"><img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" /></div>
                        <div className="flex flex-col p-7 sm:p-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c2771a]">{selectedProduct.category} / {selectedProduct.grade}</p>
                            <h2 id="product-detail-title" className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#173b2b]">{selectedProduct.name}</h2>
                            <p className="mt-5 text-[13px] leading-[1.75] text-[#5b6d62]">{selectedProduct.description} Ajira Naturals handles sourcing, quality checks, and export coordination from origin to destination.</p>
                            <div className="mt-7 grid gap-5 border-y border-[#e3eae1] py-5">
                                <div><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#84988a]">Origin</p><p className="mt-1 text-[12px] font-semibold text-[#31523d]">{selectedProduct.origin}</p></div>
                                <div><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#84988a]">Best suited for</p><p className="mt-1 text-[12px] font-semibold text-[#31523d]">{selectedProduct.idealFor}</p></div>
                                <div><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#84988a]">Available formats</p><div className="mt-2 flex flex-wrap gap-2">{selectedProduct.formats.map((format) => <span key={format} className="rounded-[4px] bg-[#edf3ea] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#486451]">{format}</span>)}</div></div>
                            </div>
                            <Link to="/contact" onClick={() => setSelectedProduct(null)} className="group mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0b6b3e] px-5 text-[11px] font-bold text-white transition-transform hover:-translate-y-0.5">Enquire about this product <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>
                        </div>
                    </div>


                </div>
            )}
        </main>
    );
}
