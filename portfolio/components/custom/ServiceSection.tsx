export const servicesData = [
  {
    number: "01",
    title: "Social Media Content",
    description:
      "Engaging reels, shorts, and viral-ready content optimized for Instagram and YouTube. Fast-paced edits that hook viewers in the first 3 seconds.",
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
      className="relative w-full overflow-hidden bg-[#1D1937] text-slate-100 py-24"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#151238_0%,#0B1220_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[45px_45px]" />
        <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.1px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#F5C16C]/80 font-bold font-mono">
              The Workflow
            </p>
            <div className="h-[1.1px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 tracking-tighter">
            Creative{" "}
            <span className="text-[#F5C16C] not-italic font-sans font-black uppercase tracking-tight">
              Services
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Crafting visual stories with precision using professional-grade
            tools like
            <span className="text-white"> Premiere Pro </span> &
            <span className="text-white"> After Effects</span>.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-6">
          {servicesData.map((items, index) => (
            <div className="group relative" key={index}>
              <div className="absolute inset-0 bg-[#F5C16C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl" />

              {/* Card */}
              <div className="relative bg-[#0d1528]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-[#F5C16C]/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-4 h-4 border-t border-r border-[#F5C16C]/50" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F5C16C] transition-all duration-500 ">
                      <span className="text-white group-hover:text-[#0B1220] font-mono font-bold text-xl">
                        {items.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-[#F5C16C] transition-colors duration-300 tracking-tight">
                      {items.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5 font-light max-w-2xl">
                      {items.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] uppercase tracking-widest rounded-md bg-white/5 text-slate-400 border border-white/10 group-hover:border-[#F5C16C]/20 group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon signal on the right */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-20 transition-opacity">
                    <div className="w-12 h-12 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0B1220] to-transparent" />
    </section>
  );
}
