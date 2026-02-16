import { Play, Scissors, Layers, Monitor, Cpu } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050810] text-slate-100 selection:bg-[#F5C16C] selection:text-black py-20 md:py-0"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e1b4b_0%,#050810_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="absolute top-[-10%] left-[-5%] w-75 h-75 md:w-150 md:h-150 bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-62.5 h-62.5 md:w-125 md:h-125 bg-[#F5C16C]/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* --- FLOATING ICONS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premiere Pro */}
        <div className="absolute top-[15%] right-[10%] md:top-[25%] md:right-[20%] animate-bounce duration-[3s]">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#00005b] border-2 border-[#31a8ff] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(49,168,255,0.4)] rotate-12">
            <span className="text-[#31a8ff] font-bold text-lg md:text-2xl">
              Pr
            </span>
          </div>
        </div>

        {/* After Effects */}
        <div className="absolute bottom-[68%] left-[5%] md:bottom-[47%] md:left-[18%] animate-bounce duration-[4s]">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#00002e] border-2 border-[#cf96fd] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(207,150,253,0.4)] -rotate-12">
            <span className="text-[#cf96fd] font-bold text-lg md:text-2xl">
              Ae
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-7xl">
        {/* TITLE */}
        <div className="relative mb-16 md:mb-12 w-full">
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-serif italic font-light leading-none tracking-tighter text-white">
            Pranav
            <span className="text-[#F5C16C] not-italic drop-shadow-[0_0_15px_#F5C16C]">
              .
            </span>
          </h1>
          <div className="absolute -bottom-6 md:-bottom-4 left-1/2 -translate-x-1/2 w-full">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-sans font-black uppercase tracking-widesh md:tracking-[0.2em] bg-linear-to-b from-white to-slate-500 bg-clip-text text-transparent">
              Video Editor
            </h2>
          </div>
        </div>

        {/* THE WORKSPACE CARD */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-4xl mt-10 md:mt-16">
          {/* Left Side */}
          <div className="md:col-span-6 relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-purple-500 to-[#F5C16C] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-48 sm:h-64 bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/5 flex items-center px-4 justify-between">
              </div>
              <Image src={"/hero_section_img.png"} alt="heroimage" width={500} height={400}/>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl text-left">
              <p className="text-[#F5C16C] font-mono text-xs uppercase mb-3 tracking-widest flex items-center gap-2">
                <Cpu size={14} /> Profile
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Transforming raw footage into{" "}
                <span className="text-white font-bold">Masterpieces</span>. I
                create high-energy cinematic and eye catching visuals.
              </p>
            </div>
            <a
              href="#work"
              className="bg-[#F5C16C] p-4 rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-white transition-colors"
            >
              <span className="text-black font-bold uppercase text-xs tracking-tighter flex">
                View My Works
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER UI --- */}
      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/5 py-3 px-4 md:px-6 flex items-center justify-between text-slate-200 cursor-default">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 opacity-40">
            <Layers size={14} className="md:w-4 md:h-4" />
            <span className="text-[8px] md:text-[10px] font-mono uppercase">
              Active Layers
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-40">
            <Monitor size={14} className="md:w-4 md:h-4" />
            <span className="text-[8px] md:text-[10px] font-mono uppercase">
              4K Render Ready
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F5C16C] transition-colors cursor-pointer">
            <Scissors
              size={12}
              className="text-slate-200 hover:text-black md:w-3.5 md:h-3.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
