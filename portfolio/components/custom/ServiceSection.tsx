export const servicesData = [
  {
    number: "01",
    title: "Social Media Content",
    description:
      "Engaging reels, shorts, and viral-ready content optimized for Instagram and YouTube Fast-paced edits that hook viewers in the first 3 seconds.",
    tags: ["Reels", "Shorts", ""],
  },
  {
    number: "02",
    title: "Cinematic Edits & Promos",
    description:
      "High-impact promotional videos and cinematic storytelling for brands, products, and events. Color grading, motion graphics, and seamless transitions.",
    tags: ["Promos", "Brand Films", "YouTube Videos"],
  },
  {
    number: "03",
    title: "Wedding & Event Videography",
    description:
      "Beautifully crafted wedding films and event highlights that capture emotions and moments. From ceremony to reception, every frame tells your story.",
    tags: ["Weddings", "Events", "Highlights"],
  },
  {
    number: "04",
    title: "Real Estate & Property Videos",
    description:
      "Professional property showcases and virtual tours that sell. Smooth camera work, aerial shots integration, and compelling narratives for listings.",
    tags: ["Property Tours", "Real Estate", "Commercials"],
  },
  {
    number: "05",
    title: "Custom Video Projects",
    description:
      "From corporate videos to creative experiments, I handle diverse editing needs. Documentary-style edits, testimonials, tutorials, and more.",
    tags: ["Corporate", "Tutorials", "Custom"],
  },
];
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0B1220] text-slate-100 py-20 md:py-18"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Floating accent */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#F5C16C]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              What I Offer
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            Creative{" "}
            <span className="bg-gradient-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Services
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            2+ years of experience crafting visual stories with Adobe Premiere
            Pro & After Effects
          </p>
        </div>

        {/* Services List - Vertical */}
        <div className="space-y-6 ">
          {servicesData.map((items, index) => {
            return (
              <div className="group relative" key={index}>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5C16C]/0 via-[#F5C16C]/5 to-[#F5C16C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 md:p-8 hover:border-[#F5C16C]/30 transition-all duration-500 group-hover:transform group-hover:translate-x-2">
                  {/* Left accent line */}
                  <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#F5C16C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
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

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-[#F5C16C]/30 group-hover:text-[#F5C16C] transition-all duration-300">
                          {items.tags[0]}
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-[#F5C16C]/30 group-hover:text-[#F5C16C] transition-all duration-300">
                          {items.tags[1]}
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-[#F5C16C]/30 group-hover:text-[#F5C16C] transition-all duration-300">
                          {items.tags[2]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6 text-sm md:text-base">
            Ready to bring your vision to life?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#F5C16C]/40 
              px-8 py-3 text-sm font-medium text-[#F5C16C] 
              hover:bg-[#F5C16C] hover:text-[#0B1220] hover:border-[#F5C16C] 
              transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,193,108,0.3)]"
          >
            <span className="tracking-wide">Let&apos;s Collaborate</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
