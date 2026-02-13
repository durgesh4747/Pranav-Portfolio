import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B1220] text-slate-100 mt-5"
    >
      {/* Layered background effects */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-[#0B1220] via-[#0d1528] to-[#0B1220]" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-size-[24px_24px]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#F5C16C]/10 rounded-full blur-[80px] animate-pulse" />

      <div
        className="pointer-events-none absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-500/8 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 justify-center w-full max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-[1.01px] w-8 md:w-12 bg-linear-to-r from-transparent to-[#F5C16C]/50" />

          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
            Video Editor <br /> Visual Storyteller
          </p>

          <div className="h-[1.01px] w-8 md:w-12 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
        </div>

        {/* Name */}
        <div className="relative mb-10 px-4">
          <div className="absolute -top-3 -left-2 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-[#F5C16C]/30" />
          <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-[#F5C16C]/30" />
          <div className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-[#F5C16C]/30" />
          <div className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-[#F5C16C]/30" />

          <TextHoverEffect text="PRANAV"/>
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-slate-200 leading-relaxed mb-4 max-w-2xl">
          Transforming Ideas Into
          <span className="block mt-1 bg-linear-to-r from-[#F5C16C] via-amber-300 to-[#F5C16C] bg-clip-text text-transparent font-normal">
            Cinematic Experiences
          </span>
        </h2>

        <p className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed font-light mb-10">
          Crafting compelling visual narratives, dynamic short-form content, and
          brand stories that captivate and resonate.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full 
              bg-linear-to-r from-[#F5C16C] to-amber-400 px-7 py-3 text-sm font-medium 
              text-[#0B1220] transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,193,108,0.3)]
              hover:scale-105 active:scale-95 "
          >
            <span className="relative z-10 tracking-wide">
              Explore Portfolio
            </span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0B1220] to-transparent" />
    </section>
  );
}
