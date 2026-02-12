export const servicesData = [
  {
    number: "01",
    title: "Social Media Content",
    description:
      "Engaging reels, shorts, and viral-ready content optimized for Instagram and YouTube Fast-paced edits that hook viewers in the first 3 seconds.",
    tags: ["Reels", "Shorts"],
  },
  {
    number: "02",
    title: "Cinematic Edits & Promos",
    description:
      "High-impact promotional videos and cinematic storytelling for brands, products, and events. Color grading, motion graphics, and seamless transitions.",
    tags: ["Promos", "Brand Films"],
  },
  {
    number: "03",
    title: "Wedding & Event Videography",
    description:
      "Beautifully crafted wedding films and event highlights that capture emotions and moments. From ceremony to reception, every frame tells your story.",
    tags: ["Weddings", "Events"],
  },
  {
    number: "04",
    title: "Real Estate & Property Videos",
    description:
      "Professional property showcases and virtual tours that sell. Smooth camera work, aerial shots integration, and compelling narratives for listings.",
    tags: ["Property Tours", "Real Estate"],
  },
];
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#0B1220] text-slate-100 py-20 md:py-18"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-size-[24px_24px]" />

      {/* Floating accent */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-72 h-72 bg-[#F5C16C]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.01px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              What I Offer
            </p>
            <div className="h-[1.01px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            Creative{" "}
            <span className="bg-linear-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Services
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            2+ years of experience crafting visual stories with Adobe Premiere
            Pro & After Effects
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {servicesData.map((items, index) => (
            <div className="group relative" key={index}>
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#F5C16C]/0 via-[#F5C16C]/5 to-[#F5C16C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

              {/* Card */}
              <div className="relative bg-linear-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 md:p-8 hover:border-[#F5C16C]/30 transition-all duration-500 group-hover:translate-x-2">
                {/* Left accent line */}
                <div className="absolute left-0 top-8 bottom-8 w-[2.01px] bg-linear-to-b from-transparent via-[#F5C16C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full border-2 border-[#F5C16C]/30 flex items-center justify-center group-hover:border-[#F5C16C] group-hover:shadow-[0_0_20px_rgba(245,193,108,0.2)] transition-all duration-500">
                      <span className="text-[#F5C16C] font-light text-lg">
                        {items.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-normal text-slate-100 mb-3 group-hover:text-[#F5C16C] transition-colors duration-300">
                      {items.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 font-light">
                      {items.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-[#F5C16C]/30 group-hover:text-[#F5C16C] transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
