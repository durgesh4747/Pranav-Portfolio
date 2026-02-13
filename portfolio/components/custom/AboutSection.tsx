import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0B1220] text-slate-100 py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-linear(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-size-[24px_24px]" />

      {/* Floating accents */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F5C16C]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.01px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              Get To Know Me
            </p>
            <div className="h-[1.01px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            About{" "}
            <span className="bg-linear-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="pointer-events-none absolute -inset-4 bg-linear-to-br from-[#F5C16C]/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 group-hover:border-[#F5C16C]/30 transition-all duration-500">
              {/* Corners */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#F5C16C]/40" />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#F5C16C]/40" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#F5C16C]/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#F5C16C]/40" />

              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/Pranav_Final.jpeg"
                  alt="Pranav"
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-slate-100 mb-4">
                Turning Vision Into{" "}
                <span className="text-[#F5C16C] font-normal">Reality</span>
              </h3>

              <p className="text-slate-400 leading-relaxed font-light mb-4">
                Hello! I&apos;m Pranav pargi, an enthusiastic video editor by
                profession. I have been working for more than two years in the
                field of transforming raw footage into stunning visual
                narratives...
              </p>

              <p className="text-slate-400 leading-relaxed font-light">
                I specialize in creating meaningful messages that have a great
                impact rather than simply looking attractive...
              </p>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h4 className="text-lg font-normal text-slate-200 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-b from-[#F5C16C] to-amber-400 rounded-full" />
                Expertise
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Adobe Premiere Pro",
                  "After Effects",
                  "Color Grading",
                  "Motion Graphics",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="group bg-slate-900/40 border border-slate-700/30 rounded-lg p-4 hover:border-[#F5C16C]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F5C16C]" />
                      <span className="text-slate-300 text-sm group-hover:text-[#F5C16C] transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <MyStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MyStats = () => {
  return (
    <div className="flex flex-wrap gap-8 pt-4 cursor-default">
      <div className="group">
        <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">
          2+
        </p>
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          Years Experience
        </p>
      </div>

      <div className="h-16 w-[1.01px] bg-linear-to-b from-transparent via-slate-700 to-transparent" />

      <div className="group">
        <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">
          300+
        </p>
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          Projects Completed
        </p>
      </div>

      <div className="h-16 w-[1.01px] bg-linear-to-b from-transparent via-slate-700 to-transparent" />

      <div className="group">
        <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">
          200+
        </p>
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          Happy Clients
        </p>
      </div>
    </div>
  );
};
