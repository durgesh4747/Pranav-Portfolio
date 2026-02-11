import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative  w-full bg-[#0B1220] text-slate-100 py-20 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:24px_24px]" />
      
      {/* Floating accents */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F5C16C]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              Get To Know Me
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#F5C16C]/50" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Pranav
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image/Visual Element */}
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F5C16C]/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 group-hover:border-[#F5C16C]/30 transition-all duration-500">
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#F5C16C]/40" />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#F5C16C]/40" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#F5C16C]/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#F5C16C]/40" />
              
              {/* Profile placeholder - replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center ">
                {/* Replace this div with: <img src="/pranav.jpg" alt="Pranav" className="w-full h-full object-cover" /> */}
                <Image 
                src={'/Pranav_Final.jpeg'}
                alt="pranav"
                width={460}
                height={100}
                className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div className="space-y-6">
            
            {/* Bio */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-slate-100 mb-4">
                Turning Vision Into{" "}
                <span className="text-[#F5C16C] font-normal">Reality</span>
              </h3>
              
              <p className="text-slate-400 leading-relaxed font-light mb-4">
                Hey! I&apos;m Pranav, a passionate video editor with over 2 years of experience transforming raw footage into compelling visual narratives. My journey started with a simple curiosity about storytelling, and it evolved into a professional craft that blends creativity with technical precision.
              </p>
              
              <p className="text-slate-400 leading-relaxed font-light">
                I specialize in creating content that doesn&apos;t just look good—it resonates. Whether it&apos;s a 15-second reel that goes viral or a cinematic wedding film that brings tears, I approach every project with the same dedication and artistic vision.
              </p>
            </div>

            {/* Skills/Expertise */}
            <div className="space-y-4">
              <h4 className="text-lg font-normal text-slate-200 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#F5C16C] to-amber-400 rounded-full" />
                Expertise
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="group bg-slate-900/40 border border-slate-700/30 rounded-lg p-4 hover:border-[#F5C16C]/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5C16C]" />
                    <span className="text-slate-300 text-sm group-hover:text-[#F5C16C] transition-colors">Adobe Premiere Pro</span>
                  </div>
                </div>
                
                <div className="group bg-slate-900/40 border border-slate-700/30 rounded-lg p-4 hover:border-[#F5C16C]/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5C16C]" />
                    <span className="text-slate-300 text-sm group-hover:text-[#F5C16C] transition-colors">After Effects</span>
                  </div>
                </div>
                
                <div className="group bg-slate-900/40 border border-slate-700/30 rounded-lg p-4 hover:border-[#F5C16C]/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5C16C]" />
                    <span className="text-slate-300 text-sm group-hover:text-[#F5C16C] transition-colors">Color Grading</span>
                  </div>
                </div>
                
                <div className="group bg-slate-900/40 border border-slate-700/30 rounded-lg p-4 hover:border-[#F5C16C]/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5C16C]" />
                    <span className="text-slate-300 text-sm group-hover:text-[#F5C16C] transition-colors">Motion Graphics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="group">
                <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">2+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</p>
              </div>
              
              <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              
              <div className="group">
                <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">50+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Projects Completed</p>
              </div>
              
              <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              
              <div className="group">
                <p className="text-3xl font-light text-[#F5C16C] mb-1 group-hover:scale-110 transition-transform">30+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[#F5C16C] hover:gap-3 transition-all duration-300"
              >
                <span className="text-sm tracking-wide">Let&apos;s create something amazing</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}