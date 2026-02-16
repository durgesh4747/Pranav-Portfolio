import Image from "next/image";
import { Zap, Laptop } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0B1220] text-slate-100 py-24 md:py-32"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#151238_0%,#0B1220_100%)] opacity-70" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />

        <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-[#F5C16C]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.1px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#F5C16C]/80 font-bold font-mono">
              my_identity
            </p>
            <div className="h-[1.1px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 tracking-tighter">
            About{" "}
            <span className="text-[#F5C16C] not-italic font-sans font-black uppercase tracking-tight">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-linear-to-br from-[#F5C16C]/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-[#0d1528]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:border-[#F5C16C]/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* GUI Corners */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-[#F5C16C]/20 group-hover:border-[#F5C16C]/50 transition-colors" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-[#F5C16C]/20 group-hover:border-[#F5C16C]/50 transition-colors" />

              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/Pranav_final.jpeg"
                  alt="Pranav Pargi"
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-serif italic text-white leading-tight">
                Turning Vision Into{" "}
                <span className="text-[#F5C16C] font-sans font-black uppercase not-italic">
                  Reality
                </span>
              </h3>

              <div className="space-y-4 text-slate-400 font-light leading-relaxed text-sm md:text-base">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="text-white font-medium">Pranav Pargi</span>,
                  a creative video editor and visual storyteller. For over two
                  years, I have specialized in transforming raw, unstructured
                  footage into high-impact visual narratives that resonate.
                </p>

                <p>
                  My thinking centers on the{" "}
                  <span className="text-white italic">{"why"}</span> behind
                  every frame. I don&apos;t just edit for aesthetics; I build
                  masterpieces that captivate audiences and leave a lasting
                  brand impression.
                </p>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Laptop size={18} className="text-[#F5C16C]" />
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-200">
                  I have mastery in
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Premiere Pro", icon: <Zap size={14} /> },
                  { name: "After Effects", icon: <Zap size={14} /> },
                  { name: "Color Grading", icon: <Zap size={14} /> },
                  { name: "Motion Design", icon: <Zap size={14} /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-[#F5C16C] transition-all duration-300"
                  >
                    <div className="text-[#F5C16C] group-hover:text-black transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-slate-300 text-xs font-mono group-hover:text-black transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Block */}
            <div className="pt-6 border-t border-white/5">
              <MyStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MyStats = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Done", value: "300+" },
    { label: "Happy Clients", value: "200+" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 cursor-default">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex items-center gap-6">
          <div className="group">
            <p className="text-3xl font-sans font-black text-[#F5C16C] mb-1 group-hover:scale-110 group-hover:translate-x-1 transition-transform">
              {stat.value}
            </p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              {stat.label}
            </p>
          </div>
          {idx !== stats.length - 1 && (
            <div className="h-10 w-[1.1px] bg-linear-to-b from-transparent via-white/10 to-transparent hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
};
