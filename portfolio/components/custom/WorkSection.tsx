"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/app/page";
import Image from "next/image";
import { Play, X } from "lucide-react";

const getYoutubeId = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.searchParams.get("v")) return parsedUrl.searchParams.get("v");
    if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
    if (parsedUrl.pathname.includes("/shorts/"))
      return parsedUrl.pathname.split("/shorts/")[1];
    return null;
  } catch {
    return null;
  }
};

interface WorkProps {
  projects: Project[];
}

export default function WorkSection({ projects }: WorkProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      let videoId = "";
      if (parsed.searchParams.get("v")) videoId = parsed.searchParams.get("v")!;
      if (parsed.hostname === "youtu.be") videoId = parsed.pathname.slice(1);
      if (parsed.pathname.includes("/shorts/"))
        videoId = parsed.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
    } catch {
      return url;
    }
  };

  useEffect(() => {
    if (activeVideo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  if (!projects?.length) return null;

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#1D1937] text-slate-100 py-24 md:py-32"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#151238_0%,#0B1220_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-[#1D1937]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.1px] w-12 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#F5C16C]/80 font-bold font-mono">
              PROJECTS
            </p>
            <div className="h-[1.1px] w-12 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 tracking-tighter">
            Featured{" "}
            <span className="text-[#F5C16C] not-italic font-sans font-black uppercase tracking-tight">
              Work
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            A selection of cinematic narratives and high-energy edits crafted
            with precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {projects.map((data) => (
            <div
              key={data._id}
              onClick={() => setActiveVideo(data.videoUrl)}
              className="group relative aspect-9/16 rounded-2xl overflow-hidden cursor-pointer bg-[#1D1937] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Thumbnail */}
              {(() => {
                const videoId = getYoutubeId(data.videoUrl);
                if (!videoId) return null;
                return (
                  <Image
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                );
              })()}

              {/* Viewport UI Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[black/90] via-black/20 to-transparent opacity-100 transition-opacity" />

              {/* Corner bracket */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5C16C] opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5C16C] opacity-0 group-hover:opacity-100" />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-[#F5C16C] flex items-center justify-center shadow-[0_0_30px_rgba(245,193,108,0.4)]">
                  <Play size={28} className="text-black ml-1 fill-black" />
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C16C] animate-pulse" />
                  <p className="text-white font-bold text-xs md:text-sm tracking-tight truncate">
                    {data.title}
                  </p>
                </div>
                <div className="flex items-center justify-between opacity-70">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                    {data.category}
                  </span>
                  {data.duration && (
                    <span className="text-[10px] font-mono text-slate-300 bg-white/5 px-1.5 py-0.5 rounded">
                      {data.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full relative top-7 md:top-10">
          <a
            href="https://drive.google.com/drive/folders/1v5YH-cxbTfwen5dqEWZ6c-aDIeDjyWG7?usp=sharing"
            target="_blank"
            className="bg-[#F5C16C] p-4 rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-white transition-colors"
          >
            <span className="text-black font-bold uppercase text-xs tracking-tighter flex">
              View More Projects - Google Drive
            </span>
          </a>
        </div>
      </div>

      {/* Video Modal  */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-100 bg-transparent/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            {/* Close btn */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-110">
              <button
                onClick={() => setActiveVideo(null)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-colors group"
              >
                <X className="text-white group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={getEmbedUrl(activeVideo)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
