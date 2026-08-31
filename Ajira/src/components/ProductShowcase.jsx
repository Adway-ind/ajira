import { ArrowUpRight } from "lucide-react";
import P_1 from "../assets/image/products/img-2.png"

const products = [
  {
    name: "Green Cardamom",
    description:
      "Sourced from the hills of Idukki, known for intense aroma and bold size.",
    image: P_1,
    badge: "Grade A1",
    tags: ["WHOLE", "POWDER"],
  },
  {
    name: "Malabar Black Pepper",
    description:
      "TGSEB grade, high piperine content, ideal for food processing and retail.",
    image: "/images/products/black-pepper.jpg",
    tags: ["550 GL", "600 GL"],
  },
  {
    name: "Polished Turmeric",
    description:
      "Curcumin content > 3.5%, processed under strictly hygienic conditions.",
    image: "/images/products/turmeric.jpg",
    tags: ["FINGER", "BULB"],
  },
  {
    name: "Dried Ginger",
    description:
      "Unbleached and sun-dried to preserve natural oleoresins and flavors.",
    image: "/images/products/dried-ginger.jpg",
    tags: ["SLICED", "KUCHI"],
  },
];

export default function ProductCatalog() {
  return (
    <section className="w-full bg-[#f1f4e9] px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1120px]">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[27px] font-medium leading-tight tracking-[-0.02em] text-[#111] sm:text-[29px]">
              Premium Product Catalog
            </h2>

            <p className="mt-2 text-[14px] leading-relaxed text-[#18334a] sm:text-[15px]">
              Export-grade spices available in multiple grades and forms.
            </p>
          </div>

          <a
            href="/catalog"
            className="group flex w-fit items-center gap-2 text-[13px] font-medium text-[#00783a] transition-colors hover:text-[#005d2c]"
          >
            View Full Catalog
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[14px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,70,35,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[205px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#168044] shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="min-h-[150px] px-5 py-5">
                <h3 className="text-[15px] font-semibold text-[#111]">
                  {product.name}
                </h3>

                <p className="mt-2.5 text-[12.5px] leading-[1.45] text-[#294052]">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[3px] bg-[#e8eee5] px-2 py-1 text-[8px] font-medium tracking-wide text-[#33443a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}